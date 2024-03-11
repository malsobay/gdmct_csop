import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

export default class Student extends React.Component {
  handleDragStart = (e) => {
    // console.log('timeSync',moment(TimeSync.serverTime(null, 1000)))
    const { student, stage, player } = this.props;
    const dragger = stage.get(`student-${student}-dragger`); //check if there is already a dragger
    //if so, you can't move it, already someone is moving it!
    if (dragger) {
      // Can't drag
      // console.log("dragger");
      e.preventDefault();
      return;
    }
    stage.set(`student-${student}-dragger`, player._id);
    stage.append("log", {
      verb: "draggingStudent",
      subjectId: player._id,
      object: student,
      // at: new Date()
      at: moment(TimeSync.serverTime(null, 1000)),
      
    });
    e.dataTransfer.setData("text/plain", student);
    // console.log('student moment', moment(TimeSync.serverTime(null, 1000)))
  };

  handleDragOver = (e) => {
    e.preventDefault();
  };

  handleDragLeave = (e) => {
    e.preventDefault();
    // console.log("released!");
    const { student, stage } = this.props;
    stage.set(`student-${student}-dragger`, null);
  };

  handleDragEnd = (e) => {
    e.preventDefault();
    const { student, stage, player } = this.props;
    stage.set(`student-${student}-dragger`, null);

    //if dropped into non-allowed area
    if (e.dataTransfer.dropEffect === "none") {
      stage.append("log", {
        verb: "releasedStudent",
        subjectId: player._id,
        object: student,
      });
    }
  };

  render() {
    const { student, stage, game, player } = this.props;
    const studentPersona = stage.get("task")["studentPersonas"][student]
    this.isDragabble = true; // usually everyone can drag, except if it is colored (i.e., being dragged by someone else)
    const dragger = stage.get(`student-${student}-dragger`);
    const style = {};
    const cursorStyle = { cursor: null };
    if (dragger) {
      const playerDragging = game.players.find((p) => p._id === dragger);
      if (playerDragging) {
        style.fill = playerDragging.get("nameColor");
        this.isDragabble = playerDragging === player._id; //only one can drag at a time
      }
    } else {
      //if the student is NOT being dragged by anyone, then the cursor will be changed
      cursorStyle.cursor = "move";
    }

    return (
      <div
        draggable={this.isDragabble}
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        onDragEnd={this.handleDragEnd}
        //onDragExit={this.handleDragLeave}
        className="student"
        style={cursorStyle}
      >
        <img
          src={studentPersona["avatar"]} // Replace with the actual path to the image file
          alt={student}
          style={{width: "60px", padding: "10px"}}
        />
        {/* <span className="letter">{student}</span> */}
      </div>
    );
  }
}
