import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="font_theme_section">
        <ul className="dropdown_menu">
          <li className="san_serif">Sans Serif</li>
          <li className="serif">Serif</li>
          <li className="mono">Mono</li>
        </ul>
      </div>
    </header>
  );
}
