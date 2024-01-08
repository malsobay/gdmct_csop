import React from "react";

import {Centered} from "meteor/empirica:core";
import { RectHeight } from "@blueprintjs/icons/lib/esm/generated-icons/16px/paths";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  
  render() {
    const { player, game } = this.props;
    return (
      <Centered>
        <div className="game finished">
          <h1>Thank you for participating!</h1>
          <h2>Please submit the following code to continue: {game.treatment.experimentPhase == "preTest" ? "PRE0NXYU1" : "PSTQY3RE7"}</h2>
        </div>
      </Centered>
    );
  }
}
