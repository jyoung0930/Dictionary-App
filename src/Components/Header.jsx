import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import moon from "../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="font_theme_section">
        <span className="font_selection">Sans Serif</span>
        <img src={arrow} />
        <div className="rectangle_shape"></div>
        <div className="toggle">
          <div className="notch"></div>
        </div>
        <div className="moon">
          <img src={moon} />
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
