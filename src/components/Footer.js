import twitter from "../assets/twitter-icon.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-icon.png";
import github from "../assets/github-icon.png";

export default function footer() {
  return (
    <footer>
      <a href="#">
        <img src={twitter} className="twitter-img" alt="twitter img" />
      </a>
      <a href="#">
        <img src={facebook} className="facebook-img" alt="facebook img" />
      </a>
      <a href="#">
        <img src={instagram} className="instagram-img" alt="instagram img" />
      </a>
      <a href="#">
        <img src={github} className="github-img" alt="github img" />
      </a>
    </footer>
  );
}
