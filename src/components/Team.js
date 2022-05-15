import React from "react";
import ericImage from "../images/ericImage.jpeg";
import sarahImage from "../images/sarahImage.jpeg";

function Team() {
  return (
    <div>
      <section className="section">
        <h2 className="text__title">Meet the Team</h2>
      </section>
      <section className="section_row">
        <section className="bio">
          <img src={ericImage} className="image__team" alt="eric" />
          <p className="text__subtitle">
            Eric Lapin{" "}
            <a href="mailto:eric@leadcollegeconsulting.com">
              <i class="las la-envelope"></i>
            </a>
          </p>
          <p className="text">PhD, MM, BM, MBA candidate</p>
        </section>
        <section className="bio">
          <img src={sarahImage} className="image__team" alt="sarah" />
          <p className="text__subtitle">
            Sarah Edison{" "}
            <a href="mailto:sarah@leadcollegeconsulting.com">
              <i class="las la-envelope"></i>
            </a>
          </p>
          <p className="text">MS, BA</p>
        </section>
      </section>
    </div>
  );
}

export default Team;
