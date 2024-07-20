import React from "react";
import "./Join.css";

function Join() {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="">
          <input type="email" name="email" placeholder="Enter your email address" />
          <button className="button">Join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
