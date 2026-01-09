"""
Ballistics Calculator for Counter-Battery Fire
Calculates shell trajectory and hit detection
"""
import math
from dataclasses import dataclass
from typing import Optional, Tuple


@dataclass
class FireSolution:
    """Calculated fire solution"""
    deflection: float      # Mils
    elevation: float       # Mils
    charge: int           # 1-6
    flight_time: float    # Seconds
    impact_x: float       # Grid X
    impact_y: float       # Grid Y
    dispersion: float     # Circular error probable (meters)


@dataclass
class ImpactResult:
    """Result of a round impact"""
    impact_x: float
    impact_y: float
    distance_to_target: float
    is_hit: bool
    damage: float  # 0-100


class BallisticsCalculator:
    """
    Simplified ballistics for mortar combat.
    Uses mil-based deflection/elevation like real mortar systems.
    
    Reference: 6400 mils = 360 degrees
    """
    
    # Constants
    MILS_PER_DEGREE = 6400 / 360  # ~17.78 mils per degree
    
    # Charge tables (simplified): charge -> (min_range, max_range, base_velocity)
    CHARGE_TABLE = {
        1: (100, 400, 70),      # Very short range
        2: (200, 700, 100),     
        3: (300, 1200, 140),    # Default
        4: (500, 1800, 180),    
        5: (800, 2500, 220),    
        6: (1000, 3500, 260),   # Maximum range
    }
    
    # Dispersion increases with range and charge
    BASE_DISPERSION = 5  # meters at minimum range
    DISPERSION_FACTOR = 0.02  # meters per meter of range
    
    # Hit detection
    DIRECT_HIT_RADIUS = 10   # meters - mortar destroyed
    NEAR_MISS_RADIUS = 25    # meters - partial damage
    SPLASH_RADIUS = 50       # meters - minor effects
    
    def __init__(self):
        pass
    
    def calculate_bearing(self, from_x: float, from_y: float, 
                         to_x: float, to_y: float) -> float:
        """
        Calculate bearing in mils from one point to another.
        0 mils = North, increasing clockwise
        """
        dx = to_x - from_x
        dy = to_y - from_y
        
        # atan2 gives angle from positive X axis, counter-clockwise
        # We need angle from positive Y axis (North), clockwise
        angle_rad = math.atan2(dx, dy)
        angle_mils = angle_rad * (3200 / math.pi)  # Convert to mils
        
        # Normalize to 0-6400
        if angle_mils < 0:
            angle_mils += 6400
            
        return angle_mils
    
    def calculate_range(self, from_x: float, from_y: float,
                       to_x: float, to_y: float) -> float:
        """Calculate distance between two points in meters"""
        return math.sqrt((to_x - from_x)**2 + (to_y - from_y)**2)
    
    def range_to_elevation(self, range_m: float, charge: int) -> Optional[float]:
        """
        Convert range to elevation setting (simplified).
        Returns elevation in mils, or None if out of range.
        """
        if charge not in self.CHARGE_TABLE:
            return None
            
        min_range, max_range, velocity = self.CHARGE_TABLE[charge]
        
        if range_m < min_range or range_m > max_range:
            return None
        
        # Simplified: linear interpolation from 800 mils (45°) at min to 1400 mils at max
        # Real mortars use complex tables
        range_ratio = (range_m - min_range) / (max_range - min_range)
        elevation = 800 + (range_ratio * 600)  # 800-1400 mils
        
        return elevation
    
    def calculate_impact_point(self, fire_x: float, fire_y: float,
                               deflection: float, elevation: float,
                               charge: int) -> Tuple[float, float, float]:
        """
        Calculate where a round will land given fire position and settings.
        Returns (impact_x, impact_y, dispersion_radius)
        """
        if charge not in self.CHARGE_TABLE:
            charge = 3
            
        min_range, max_range, velocity = self.CHARGE_TABLE[charge]
        
        # Convert elevation to range (inverse of range_to_elevation)
        if elevation < 800:
            elevation = 800
        if elevation > 1400:
            elevation = 1400
            
        range_ratio = (elevation - 800) / 600
        range_m = min_range + (range_ratio * (max_range - min_range))
        
        # Convert deflection (mils) to direction
        # Deflection 0 = current orientation, positive = right
        direction_rad = deflection * (math.pi / 3200)
        
        # Calculate impact point
        impact_x = fire_x + (range_m * math.sin(direction_rad))
        impact_y = fire_y + (range_m * math.cos(direction_rad))
        
        # Calculate dispersion
        dispersion = self.BASE_DISPERSION + (range_m * self.DISPERSION_FACTOR)
        
        return (impact_x, impact_y, dispersion)
    
    def apply_dispersion(self, impact_x: float, impact_y: float,
                        dispersion: float) -> Tuple[float, float]:
        """
        Apply random dispersion to impact point.
        Uses normal distribution for realistic spread.
        """
        import random
        
        # Random angle and distance within dispersion circle
        angle = random.uniform(0, 2 * math.pi)
        # Use Rayleigh distribution for realistic circular error
        distance = random.gauss(0, dispersion / 2)
        distance = abs(distance)  # Take absolute value
        
        actual_x = impact_x + (distance * math.cos(angle))
        actual_y = impact_y + (distance * math.sin(angle))
        
        return (actual_x, actual_y)
    
    def check_hit(self, impact_x: float, impact_y: float,
                  target_x: float, target_y: float) -> ImpactResult:
        """
        Check if impact hits a target mortar position.
        Returns impact result with damage assessment.
        """
        distance = self.calculate_range(impact_x, impact_y, target_x, target_y)
        
        if distance <= self.DIRECT_HIT_RADIUS:
            return ImpactResult(
                impact_x=impact_x,
                impact_y=impact_y,
                distance_to_target=distance,
                is_hit=True,
                damage=100.0  # Destroyed
            )
        elif distance <= self.NEAR_MISS_RADIUS:
            # Damage falls off with distance
            damage = 100 * (1 - (distance / self.NEAR_MISS_RADIUS))
            return ImpactResult(
                impact_x=impact_x,
                impact_y=impact_y,
                distance_to_target=distance,
                is_hit=False,
                damage=damage
            )
        elif distance <= self.SPLASH_RADIUS:
            damage = 20 * (1 - (distance / self.SPLASH_RADIUS))
            return ImpactResult(
                impact_x=impact_x,
                impact_y=impact_y,
                distance_to_target=distance,
                is_hit=False,
                damage=damage
            )
        else:
            return ImpactResult(
                impact_x=impact_x,
                impact_y=impact_y,
                distance_to_target=distance,
                is_hit=False,
                damage=0.0
            )
    
    def get_fire_solution(self, from_x: float, from_y: float,
                          to_x: float, to_y: float,
                          charge: int = 3) -> Optional[FireSolution]:
        """
        Calculate complete fire solution to hit a target.
        This is what the player needs to figure out in-game!
        Returns None if target is out of range.
        """
        range_m = self.calculate_range(from_x, from_y, to_x, to_y)
        deflection = self.calculate_bearing(from_x, from_y, to_x, to_y)
        elevation = self.range_to_elevation(range_m, charge)
        
        if elevation is None:
            return None
        
        # Estimate flight time (simplified)
        _, _, velocity = self.CHARGE_TABLE[charge]
        flight_time = range_m / velocity * 1.5  # Rough approximation
        
        dispersion = self.BASE_DISPERSION + (range_m * self.DISPERSION_FACTOR)
        
        return FireSolution(
            deflection=deflection,
            elevation=elevation,
            charge=charge,
            flight_time=flight_time,
            impact_x=to_x,
            impact_y=to_y,
            dispersion=dispersion
        )


# Global calculator instance
ballistics = BallisticsCalculator()
