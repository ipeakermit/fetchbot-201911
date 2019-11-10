# OpenPTrack UDP listener, calls relevant functions defined in
# the mir_controller node interface. 
#
# Starting code provided by jburke@ucla.edu more info below
# https://github.com/OpenPTrack/open_ptrack/blob/master/docs/assets/optreceiver.py

import subprocess
import socket, json
import time
import os
import sys

# Bind to UDP port
port = 21234
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(("", port))
print "waiting on port:", port

# Get directory of script/mir interface
script_dir = os.path.realpath(os.path.dirname(sys.argv[0]))

# Listener loop
while 1:
    data, addr = s.recvfrom(8192)
    data = data.rstrip("\0")
    
    tracking_update = json.loads(data)
    if 'pose_tracks' in data:
        person_pose = tracking_update['pose_tracks'][0]
        print( "id:"+str(person_pose['id'])+", x:"+str(person_pose['joints']['HEAD']['x'])+", y:"+str(person_pose['joints']['HEAD']['y'])+", pose: "+person_pose['predicted_pose_name'])
        if person_pose['predicted_pose_name'] == "right_arm_up":
            print("DETECTED")
            subprocess.call(["node",os.path.join(script_dir, "mir_controller.js"),"-i","summon"])
            time.sleep(5)
            # Close socket and start again
            s.close()
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.bind(("", port))

            
        if person_pose['predicted_pose_name'] == "left_arm_pointing":
            print("DETECTED")
            subprocess.call(["node",os.path.join(script_dir, "mir_controller.js"),"-i","charger"])
            time.sleep(5)
            # Close socket and start again
            s.close()
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.bind(("", port))
