// Auto-generated. Do not edit!

// (in-package openpose_ros_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let BodypartDetection_3d = require('./BodypartDetection_3d.js');

//-----------------------------------------------------------

class PersonDetection_3d {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.num_people_detected = null;
      this.person_ID = null;
      this.nose = null;
      this.neck = null;
      this.right_shoulder = null;
      this.right_elbow = null;
      this.right_wrist = null;
      this.left_shoulder = null;
      this.left_elbow = null;
      this.left_wrist = null;
      this.right_hip = null;
      this.right_knee = null;
      this.right_ankle = null;
      this.left_hip = null;
      this.left_knee = null;
      this.left_ankle = null;
      this.right_eye = null;
      this.left_eye = null;
      this.right_ear = null;
      this.left_ear = null;
      this.chest = null;
    }
    else {
      if (initObj.hasOwnProperty('num_people_detected')) {
        this.num_people_detected = initObj.num_people_detected
      }
      else {
        this.num_people_detected = 0;
      }
      if (initObj.hasOwnProperty('person_ID')) {
        this.person_ID = initObj.person_ID
      }
      else {
        this.person_ID = 0;
      }
      if (initObj.hasOwnProperty('nose')) {
        this.nose = initObj.nose
      }
      else {
        this.nose = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('neck')) {
        this.neck = initObj.neck
      }
      else {
        this.neck = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_shoulder')) {
        this.right_shoulder = initObj.right_shoulder
      }
      else {
        this.right_shoulder = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_elbow')) {
        this.right_elbow = initObj.right_elbow
      }
      else {
        this.right_elbow = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_wrist')) {
        this.right_wrist = initObj.right_wrist
      }
      else {
        this.right_wrist = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_shoulder')) {
        this.left_shoulder = initObj.left_shoulder
      }
      else {
        this.left_shoulder = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_elbow')) {
        this.left_elbow = initObj.left_elbow
      }
      else {
        this.left_elbow = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_wrist')) {
        this.left_wrist = initObj.left_wrist
      }
      else {
        this.left_wrist = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_hip')) {
        this.right_hip = initObj.right_hip
      }
      else {
        this.right_hip = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_knee')) {
        this.right_knee = initObj.right_knee
      }
      else {
        this.right_knee = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_ankle')) {
        this.right_ankle = initObj.right_ankle
      }
      else {
        this.right_ankle = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_hip')) {
        this.left_hip = initObj.left_hip
      }
      else {
        this.left_hip = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_knee')) {
        this.left_knee = initObj.left_knee
      }
      else {
        this.left_knee = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_ankle')) {
        this.left_ankle = initObj.left_ankle
      }
      else {
        this.left_ankle = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_eye')) {
        this.right_eye = initObj.right_eye
      }
      else {
        this.right_eye = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_eye')) {
        this.left_eye = initObj.left_eye
      }
      else {
        this.left_eye = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('right_ear')) {
        this.right_ear = initObj.right_ear
      }
      else {
        this.right_ear = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('left_ear')) {
        this.left_ear = initObj.left_ear
      }
      else {
        this.left_ear = new BodypartDetection_3d();
      }
      if (initObj.hasOwnProperty('chest')) {
        this.chest = initObj.chest
      }
      else {
        this.chest = new BodypartDetection_3d();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PersonDetection_3d
    // Serialize message field [num_people_detected]
    bufferOffset = _serializer.uint32(obj.num_people_detected, buffer, bufferOffset);
    // Serialize message field [person_ID]
    bufferOffset = _serializer.uint32(obj.person_ID, buffer, bufferOffset);
    // Serialize message field [nose]
    bufferOffset = BodypartDetection_3d.serialize(obj.nose, buffer, bufferOffset);
    // Serialize message field [neck]
    bufferOffset = BodypartDetection_3d.serialize(obj.neck, buffer, bufferOffset);
    // Serialize message field [right_shoulder]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_shoulder, buffer, bufferOffset);
    // Serialize message field [right_elbow]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_elbow, buffer, bufferOffset);
    // Serialize message field [right_wrist]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_wrist, buffer, bufferOffset);
    // Serialize message field [left_shoulder]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_shoulder, buffer, bufferOffset);
    // Serialize message field [left_elbow]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_elbow, buffer, bufferOffset);
    // Serialize message field [left_wrist]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_wrist, buffer, bufferOffset);
    // Serialize message field [right_hip]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_hip, buffer, bufferOffset);
    // Serialize message field [right_knee]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_knee, buffer, bufferOffset);
    // Serialize message field [right_ankle]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_ankle, buffer, bufferOffset);
    // Serialize message field [left_hip]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_hip, buffer, bufferOffset);
    // Serialize message field [left_knee]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_knee, buffer, bufferOffset);
    // Serialize message field [left_ankle]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_ankle, buffer, bufferOffset);
    // Serialize message field [right_eye]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_eye, buffer, bufferOffset);
    // Serialize message field [left_eye]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_eye, buffer, bufferOffset);
    // Serialize message field [right_ear]
    bufferOffset = BodypartDetection_3d.serialize(obj.right_ear, buffer, bufferOffset);
    // Serialize message field [left_ear]
    bufferOffset = BodypartDetection_3d.serialize(obj.left_ear, buffer, bufferOffset);
    // Serialize message field [chest]
    bufferOffset = BodypartDetection_3d.serialize(obj.chest, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PersonDetection_3d
    let len;
    let data = new PersonDetection_3d(null);
    // Deserialize message field [num_people_detected]
    data.num_people_detected = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [person_ID]
    data.person_ID = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [nose]
    data.nose = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [neck]
    data.neck = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_shoulder]
    data.right_shoulder = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_elbow]
    data.right_elbow = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_wrist]
    data.right_wrist = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_shoulder]
    data.left_shoulder = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_elbow]
    data.left_elbow = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_wrist]
    data.left_wrist = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_hip]
    data.right_hip = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_knee]
    data.right_knee = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_ankle]
    data.right_ankle = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_hip]
    data.left_hip = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_knee]
    data.left_knee = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_ankle]
    data.left_ankle = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_eye]
    data.right_eye = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_eye]
    data.left_eye = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [right_ear]
    data.right_ear = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [left_ear]
    data.left_ear = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    // Deserialize message field [chest]
    data.chest = BodypartDetection_3d.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 312;
  }

  static datatype() {
    // Returns string type for a message object
    return 'openpose_ros_msgs/PersonDetection_3d';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd0a8af45cfc195d0d86994e1fdd9377d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 num_people_detected
    uint32 person_ID
    BodypartDetection_3d nose
    BodypartDetection_3d neck
    BodypartDetection_3d right_shoulder
    BodypartDetection_3d right_elbow
    BodypartDetection_3d right_wrist
    BodypartDetection_3d left_shoulder
    BodypartDetection_3d left_elbow
    BodypartDetection_3d left_wrist
    BodypartDetection_3d right_hip
    BodypartDetection_3d right_knee
    BodypartDetection_3d right_ankle
    BodypartDetection_3d left_hip
    BodypartDetection_3d left_knee
    BodypartDetection_3d left_ankle
    BodypartDetection_3d right_eye
    BodypartDetection_3d left_eye
    BodypartDetection_3d right_ear
    BodypartDetection_3d left_ear
    BodypartDetection_3d chest
    
    ================================================================================
    MSG: openpose_ros_msgs/BodypartDetection_3d
    float32 x
    float32 y
    float32 z
    float32 confidence
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PersonDetection_3d(null);
    if (msg.num_people_detected !== undefined) {
      resolved.num_people_detected = msg.num_people_detected;
    }
    else {
      resolved.num_people_detected = 0
    }

    if (msg.person_ID !== undefined) {
      resolved.person_ID = msg.person_ID;
    }
    else {
      resolved.person_ID = 0
    }

    if (msg.nose !== undefined) {
      resolved.nose = BodypartDetection_3d.Resolve(msg.nose)
    }
    else {
      resolved.nose = new BodypartDetection_3d()
    }

    if (msg.neck !== undefined) {
      resolved.neck = BodypartDetection_3d.Resolve(msg.neck)
    }
    else {
      resolved.neck = new BodypartDetection_3d()
    }

    if (msg.right_shoulder !== undefined) {
      resolved.right_shoulder = BodypartDetection_3d.Resolve(msg.right_shoulder)
    }
    else {
      resolved.right_shoulder = new BodypartDetection_3d()
    }

    if (msg.right_elbow !== undefined) {
      resolved.right_elbow = BodypartDetection_3d.Resolve(msg.right_elbow)
    }
    else {
      resolved.right_elbow = new BodypartDetection_3d()
    }

    if (msg.right_wrist !== undefined) {
      resolved.right_wrist = BodypartDetection_3d.Resolve(msg.right_wrist)
    }
    else {
      resolved.right_wrist = new BodypartDetection_3d()
    }

    if (msg.left_shoulder !== undefined) {
      resolved.left_shoulder = BodypartDetection_3d.Resolve(msg.left_shoulder)
    }
    else {
      resolved.left_shoulder = new BodypartDetection_3d()
    }

    if (msg.left_elbow !== undefined) {
      resolved.left_elbow = BodypartDetection_3d.Resolve(msg.left_elbow)
    }
    else {
      resolved.left_elbow = new BodypartDetection_3d()
    }

    if (msg.left_wrist !== undefined) {
      resolved.left_wrist = BodypartDetection_3d.Resolve(msg.left_wrist)
    }
    else {
      resolved.left_wrist = new BodypartDetection_3d()
    }

    if (msg.right_hip !== undefined) {
      resolved.right_hip = BodypartDetection_3d.Resolve(msg.right_hip)
    }
    else {
      resolved.right_hip = new BodypartDetection_3d()
    }

    if (msg.right_knee !== undefined) {
      resolved.right_knee = BodypartDetection_3d.Resolve(msg.right_knee)
    }
    else {
      resolved.right_knee = new BodypartDetection_3d()
    }

    if (msg.right_ankle !== undefined) {
      resolved.right_ankle = BodypartDetection_3d.Resolve(msg.right_ankle)
    }
    else {
      resolved.right_ankle = new BodypartDetection_3d()
    }

    if (msg.left_hip !== undefined) {
      resolved.left_hip = BodypartDetection_3d.Resolve(msg.left_hip)
    }
    else {
      resolved.left_hip = new BodypartDetection_3d()
    }

    if (msg.left_knee !== undefined) {
      resolved.left_knee = BodypartDetection_3d.Resolve(msg.left_knee)
    }
    else {
      resolved.left_knee = new BodypartDetection_3d()
    }

    if (msg.left_ankle !== undefined) {
      resolved.left_ankle = BodypartDetection_3d.Resolve(msg.left_ankle)
    }
    else {
      resolved.left_ankle = new BodypartDetection_3d()
    }

    if (msg.right_eye !== undefined) {
      resolved.right_eye = BodypartDetection_3d.Resolve(msg.right_eye)
    }
    else {
      resolved.right_eye = new BodypartDetection_3d()
    }

    if (msg.left_eye !== undefined) {
      resolved.left_eye = BodypartDetection_3d.Resolve(msg.left_eye)
    }
    else {
      resolved.left_eye = new BodypartDetection_3d()
    }

    if (msg.right_ear !== undefined) {
      resolved.right_ear = BodypartDetection_3d.Resolve(msg.right_ear)
    }
    else {
      resolved.right_ear = new BodypartDetection_3d()
    }

    if (msg.left_ear !== undefined) {
      resolved.left_ear = BodypartDetection_3d.Resolve(msg.left_ear)
    }
    else {
      resolved.left_ear = new BodypartDetection_3d()
    }

    if (msg.chest !== undefined) {
      resolved.chest = BodypartDetection_3d.Resolve(msg.chest)
    }
    else {
      resolved.chest = new BodypartDetection_3d()
    }

    return resolved;
    }
};

module.exports = PersonDetection_3d;
