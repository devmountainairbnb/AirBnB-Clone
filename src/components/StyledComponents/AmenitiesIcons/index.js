import React from "react";

import AirConditioning from './AirConditioning'
import Breakfast from './Breakfast'
import CODetector from './CODetector'
import Crib from './Crib'
import Dryer from './Dryer'
import HairDryer from './HairDryer'
import Heating from './Heating'
import IndoorFireplace from './IndoorFireplace'
import Iron from './Iron'
import Kitchen from './Kitchen'
import LaptopFriendlyWorkspace from './LaptopFriendlyWorkspace'
import PrivateBathroom from './PrivateBathroom'
import Shampoo from './Shampoo'
import SmokeDetector from './SmokeDetector'
import TV from './TV'
import Washer from './Washer'
import WiFi from './WiFi'

import Home from './Home'
import Location from './Location'
import SprayBottle from './SprayBottle'


const Icon = props => {
  switch (props.name) {
    case 'air_conditioning':
      return <AirConditioning {...props} />;
    case 'breakfast':
      return <Breakfast {...props} />;
    case 'carbon_monoxide_detector':
      return <CODetector {...props} />;
    case 'crib':
      return <Crib {...props} />;
    case 'dryer':
      return <Dryer {...props} />;
    case 'hair_dryer':
      return <HairDryer {...props} />;
    case 'heating':
      return <Heating {...props} />;
    case 'indoor_fireplace':
      return <IndoorFireplace {...props} />;
    case 'iron':
      return <Iron {...props} />;
    case 'kitchen':
      return <Kitchen {...props} />;
    case 'laptop_friendly_workspace':
      return <LaptopFriendlyWorkspace {...props} />;
    case 'private_bathroom':
      return <PrivateBathroom {...props} />;
    case 'shampoo':
      return <Shampoo {...props} />;
    case 'smoke_detector':
      return <SmokeDetector {...props} />;
    case 'tv':
      return <TV {...props} />;
    case 'washer':
      return <Washer {...props} />;
    case 'wifi':
      return <WiFi {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'location':
      return <Location {...props} />;
    case 'spray_bottle':
      return <SprayBottle {...props} />;
    default:
      return;
  }
};

export default Icon;
