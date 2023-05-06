import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SignupComp = ({ backgroundColor }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="signup--container"
    >
      <p>
        Ready to Watch? Enter your email to create or restart your membership.
      </p>
      <form>
        <div className="input--container">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            pattern="\S+@\S+.\S+"
          />
          <small>Email is not Valid</small>
        </div>
        <button onClick={(e) => e.preventDefault()} type="submit">
          Get Started <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
    </div>
  );
};

export default SignupComp;
