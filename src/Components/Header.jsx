import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import moonLight from "../assets/images/icon-moon-light.svg";
import moonDark from "../assets/images/icon-moon-dark.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="font_theme_section">
        <span className="font_selection">Sans Serif</span>
        <div className="arrow">
          <img src={arrow} />
        </div>
        <div className="rectangle_shape"></div>
        <div className="toggle">
          <div className="notch"></div>
        </div>
        <div className="moon">
          <img src={moonDark} />
        </div>
        <ul className="dropdown_menu">
          <li className="san_serif">Sans Serif</li>
          <li className="serif">Serif</li>
          <li className="mono">Mono</li>
        </ul>
      </div>
    </header>
  );
}
