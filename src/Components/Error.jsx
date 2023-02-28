import sadFace from "../assets/images/sadface.png";

export default function Error() {
  return (
    <div className="error_section">
      <img src={sadFace} alt="emoji" />
      <p className="error_section_heading">No Definitions found Sorry</p>
      <p className="error_section_sub_heading">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
