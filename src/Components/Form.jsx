import searchIcon from "../assets/images/icon-search.svg";

export default function Form() {
  return (
    <form>
      <input type="text" />
      <img src={searchIcon} alt="icon" />
    </form>
  );
}
