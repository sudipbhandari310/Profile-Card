import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
      </div>
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pp.jpg" alt="sdf"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Sudip Bhandari</h1>
      <p>
        I am currently a student at Texas International College. I am a computer
        science student.And right now i am learning React js and plant to
        develop my skill on MERN stack.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😠" />
      <Skill skill="JavaScript" emoji="🙋" />
      <Skill skill="MERN" emoji="4️⃣" />
      <Skill skill="HTML+CSS" emoji="©️" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill">
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
