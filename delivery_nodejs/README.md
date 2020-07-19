## Running Nodejs Service Server/Client
To run the programs, open three terminal windows (for illustration purposes).
### Window 1: typical ROS Master
Source environment varables (only needed once per terminal window)
```
source ~/rosnodejs_ws/devel/setup.bash
```
Start ROS Master
```
roscore
```
### Window 2: server.js script
Source environment varables (only needed once per terminal window)
```
source ~/rosnodejs_ws/devel/setup.bash
```
Start the Server Script
```
rosrun delivery_nodejs server.js
```
You should see output like the following:
```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node /root/catkin_ws/src/delivery_service_robot/delivery_nodejs/scripts/server.js __name:=menu_service_server __log:=/root/.ros/log/db5c6f24-c965-11ea-bcc7-0242ac110002/ns1-menu_service_server-2.log`
[INFO] [1595142112.117] (ros): Connected to master at http://localhost:11311!
```
### Window 3: app.js script
Source environment varables (only needed once per terminal window)
```
source ~/rosnodejs_ws/devel/setup.bash
```
Start the Listener Script
```
rosrun delivery_nodejs app.js
```
You should see echoed output like the following:
```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node /root/catkin_ws/src/delivery_service_robot/delivery_nodejs/scripts/server.js __name:=menu_service_server __log:=/root/.ros/log/db5c6f24-c965-11ea-bcc7-0242ac110002/ns1-menu_service_server-2.log`
now runnig!
[INFO] [1595142112.117] (ros): Connected to master at http://localhost:11311!
```
## Access Web plate
After open all windows, move to [127.0.0.1:8080](http://127.0.0.1:8080) in the browser. You should see website like the following:
![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQmrqm%2FbtqFNExcKhW%2F1y7XBt2QYQHrlgKB5ePkC1%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQmrqm%2FbtqFNExcKhW%2F1y7XBt2QYQHrlgKB5ePkC1%2Fimg.png)
click the button and you will see response message:
![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGCOZk%2FbtqFNhWLZq7%2FK0kqCaA17cG9TkbeVvIVUK%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGCOZk%2FbtqFNhWLZq7%2FK0kqCaA17cG9TkbeVvIVUK%2Fimg.png)
also in **Window 2**:
```
[INFO] [1595143417.537] (ros): menu type:  1
[INFO] [1595143417.541] (ros): You just selected fried potatoes!
```
## Running by roslaunch
use the line below, you can run service server/client easily!
```
roslaunch delivery_nodejs union.launch --screen
```