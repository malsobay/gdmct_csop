import React from "react";

import { Centered } from "meteor/empirica:core";
export default class UIOverview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const imagePath =
      treatment.playerCount > 1
        ? "experiment/groupUIExample.svg"
        : "experiment/indUIExample.svg";

    // console.log("imagePath", imagePath);

    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}>Scoring</h1>
          <ul style={{fontSize:"1.8rem"}}>
            <li>Scores are only calculated for complete assignments (every student is assigned to a room). Incomplete assignments don't count!</li>
            <br/>
            <li><strong>Your score is calculated as the sum of the students' preferences for the rooms you put them in, minus 100 points for each constraint violated.</strong></li>
          </ul>


          <h1 className={"bp3-heading"}>Game Interface</h1>
          <p>
            Before proceeding to the puzzle, take one last moment to familiarize yourself with the interface. Good luck!
          </p>

          <div className="image">
            <img src={imagePath} style={{ border: "2px solid" }} />
          </div>

          {/* <p>
            If the "Satisfied" button for in is unclickable (i.e., inactive) for
            more than 10 seconds, try to refresh the page. Otherwise, you will
            have wait for the time run out. This will not effect your bonus.
          </p>

          <p>
            Now you know where everything goes and ready to take the quiz! Good
            luck.
          </p> */}

          <br/><br/>
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
            onClick={this.props.onNext}
            disabled={false}
          >
            Next ››
          </button>
        </div>
      </Centered>
    );
  }
}
