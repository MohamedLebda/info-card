import personalImg from "../assets/personal-img.png";
import email from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img src={personalImg} className="personal-img" alt="personal img" />
      <div className="info-text">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <a href="#">laurasmith.website</a>
      </div>
      <div className="btns">
        <button className="email">
          <img src={email} className="email-img" alt="email" />
          <span>Email</span>
        </button>
        <button className="linkedin">
          <img src={linkedin} className="linkedin-img" alt="linkedin" />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
