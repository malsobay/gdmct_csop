import React from "react";

import { Centered } from "meteor/empirica:core";
import { Button } from "@blueprintjs/core";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const social = treatment.playerCount > 1;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Game Overview </h1>
          <p>
            In this game, you will be{" "}
            <strong>
              asked to solve a sequence of {treatment.nRounds} resource
              allocation tasks
            </strong>
            . In each task, you are going to{" "}
            <strong>assign a group of students into dorm rooms</strong>. You are
            asked to find the room assignment plan that maximizes overall
            satisfaction for the group while respecting certain constraints
            (e.g., some students can not live together in one room).
          </p>

          <p>
            You have at most{" "}
            <strong>{Math.ceil(treatment.stageDuration / 60.0)} minutes</strong>{" "}
            to complete the task. 
          </p>

          {social ? (
            <div>
              <p>
                <strong>
                  You will play this game simultaneously with{" "}
                  {treatment.playerCount - 1} other participants in real-time
                </strong>
                . As we will explain in more detail later, in each task, you and
                your teammates will submit a single room assignment plan.
                {/*We will evaluate the quality of your*/}
                {/*plan through score and thus all team members will receive the*/}
                {/*same score in each task.*/}
              </p>
              <p>
                At the end of the game, you will have the opportunity to earn a
                bonus payment and the amount is dependent on your accumulated
                score in all {treatment.nRounds} tasks.{" "}
                <strong> Note that "free riding" is not permitted</strong>.{" "}
                <em style={{ color: "red" }}>
                  If we detect that you are inactive during a task, you will not
                  receive a bonus for that task.
                </em>
              </p>
            </div>
          ) : (
            <p>
              In each task, you will submit a single room assignment plan. We
              will evaluate the quality of your plan by scoring it in each task.
              At the end of the game, you will have the opportunity to earn a
              bonus payment and the amount is dependent on your accumulated
              score in all {treatment.nRounds} tasks.{" "}
              <em style={{ color: "red" }}>
                If we detect that you are inactive during a task, you will not
                receive a bonus for that task.
              </em>
            </p>
          )}

          {/* <p>
            The game <strong>must be played on a desktop or laptop</strong>.
            There is NO mobile support
          </p> */}

          {/* <p>
            <strong>
              For the best experience, please maximize the window containing
              this task or make it as large as possible.
            </strong>
          </p> */}
          <button
            type="button"
            className="bp3-button bp3-intent-nope"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            ‹‹ Previous 
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next ››
          </button>
        </div>
      </Centered>
    );
  }
}
