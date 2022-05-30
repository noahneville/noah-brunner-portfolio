import React from "react";
import resume from "../../assets/docs/resume.PDF";

export default function Resume() {
  return (
    <div class="container-fluid page-container Resume">
      <h2>Resume</h2>
      <p>Here are some of the technologies and skills I've picked up in my Bootcamp:</p>
      <ul>
        <li>React</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Express</li>
        <li>Node</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>Bootstrap</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <p>You can download my resume  <a class="resume-link" href={resume} download="NoahBrunnerResume">here.</a>
      </p>
    </div>
  );
}
