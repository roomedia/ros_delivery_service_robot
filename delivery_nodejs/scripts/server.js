#!/usr/bin/env nodemon
// prepare for ROS and get custom message
const rosnodejs = require('rosnodejs');
const { Header } = rosnodejs.require('std_msgs').msg;
const { PoseStamped } = rosnodejs.require('geometry_msgs').msg;
const { MenuSelector } = rosnodejs.require('delivery_topics').srv;

// init node and get node handle
rosnodejs.initNode('/menu_selector_server');
const nh = rosnodejs.nh;

// define callback
const cbMenuSelector = ({ menu }, res) => {
  // print return message
  printMenuByMenuType(menu, res);
  // move robot
  moveRobotByMenuType(menu);
  return true;
}

// predefined name for menu type
const menu_name = ['salad', 'fried potatoes', 'drinks'];
// print and return menu name of selected type
const printMenuByMenuType = (menu, res) => {
  // set message
  res.message = 'You just selected ' + menu_name[menu] + '!';
  // logging
  rosnodejs.log.info('menu type: ', menu);
  rosnodejs.log.info(res.message);
}

// move robot by menu type
// pose message
const poseStamped = new PoseStamped();
// predefined position
const posAndRotate = [
  // pose for salad
  {
    position: {
      x: 0.1,
      y: 0.1,
      z: 0.0,
    }, 
    orientation: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      w: 1.0,
    }
  },
  // pose for fried potatoes
  {
    position: {
      x: 0.4,
      y: 0.0,
      z: 0.0,
    }, 
    orientation: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      w: 1.0,
    }
  },
  // pose for drinks
  {
    position: {
      x: 0.0,
      y: 0.2,
      z: 0.0,
    }, 
    orientation: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      w: 1.0,
    }
  },
  // pose for origin
  {
    position: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
    }, 
    orientation: {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      w: 1.0,
    }
  },
]
// publisher
const robot_service = nh.advertise('/move_base_simple/goal', PoseStamped);
const moveRobotByMenuType = (menu) => {
  // set message
  poseStamped.header.stamp = rosnodejs.Time.now();
  poseStamped.pose = posAndRotate[menu];
  // logging
  rosnodejs.log.info('\n', poseStamped.header.stamp);
  rosnodejs.log.info('\n', poseStamped.pose);
  // publish
  robot_service.publish(poseStamped);
}

// create the service
const menu_service = nh.advertiseService('/menu_selector', MenuSelector, cbMenuSelector);