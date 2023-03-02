import searchIcon from "../assets/images/icon-search.svg";

export default function Form({
  setInputValue,
  value,
  setSubmitted,
  empty,
  setIsEmpty,
  darkMode,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted((prev) => !prev);
    value === "" ? setIsEmpty(true) : setIsEmpty(false);
  }

  const errorStyle = {
    display: empty ? "block" : "none",
  };

  const inputLightStyle = {
    color: darkMode ? "#FFFFFF" : "#2D2D2D",
    backgroundColor: darkMode ? "#1F1F1F" : "#F4F4F4",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={inputLightStyle}
          className={empty ? "error" : ""}
          type="text"
          placeholder="Search for any word..."
          onChange={(e) => setInputValue(e.target.value)}
          value={value}
          maxLength="30"
        />
        <img src={searchIcon} alt="icon" />
        <p style={errorStyle} className="error_message">
          Whoops, can’t be empty…
        </p>
      </form>
    </>
  );
}
