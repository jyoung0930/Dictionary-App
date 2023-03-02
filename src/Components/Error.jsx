import sadFace from "../assets/images/sadface.png";

export default function Error({ darkMode }) {
  const lightStyle = {
    color: darkMode ? "#FFFFFF" : "#2D2D2D",
  };

  return (
    <div className="error_section">
      <img src={sadFace} alt="emoji" />
      <p style={lightStyle} className="error_section_heading">
        No Definitions found Sorry
      </p>
      <p className="error_section_sub_heading">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
