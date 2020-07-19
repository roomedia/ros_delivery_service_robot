# rosnodejs web menu plate
## Install and Build
Prerequisites:
- [Install ROS](http://wiki.ros.org/ROS/Installation) (tested in ROS Noetic)
- [Install nodejs and the npm package manager](https://github.com/nodesource/distributions/blob/master/README.md) (tested in Nodejs LTS v12.18.2)
- [Install nodemon](https://www.npmjs.com/package/nodemon) (tested in nodemon 2.0.4)

To get started the "catkin" way:
```
source /opt/ros/noetic/setup.bash
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
git clone https://github.com/EngHyu/delivery_service_robot.git
cd delivery_service_robot/delivery_nodejs
npm install
cd ~/catkin_ws
catkin_make
```
## Running Web Menu
see [this](./delivery_nodejs/readme.md) to know how to run nodejs service server/client