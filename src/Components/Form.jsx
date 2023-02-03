import searchIcon from "../assets/images/icon-search.svg";

export default function Form({
  setInputValue,
  value,
  setSubmitted,
  empty,
  setIsEmpty,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted((prev) => !prev);
    value === "" ? setIsEmpty(true) : setIsEmpty(false);
  }

  console.log(empty);
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={empty ? "error" : ""}
        type="text"
        placeholder="Search for any word..."
        onChange={(e) => setInputValue(e.target.value)}
        value={value}
        maxLength="30"
      />
      <img src={searchIcon} alt="icon" />
    </form>
  );
}
