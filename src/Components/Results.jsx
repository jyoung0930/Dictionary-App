import playIcon from "../assets/images/icon-play.svg";

export default function Results({ data }) {
  return (
    <div className="search_results">
      <div className="results_heading">
        <div className="results_word_phonetic">
          <span className="results_word">Keyboard</span>
          <span className="results_phonetic">/ˈdɪkʃəˌnɛɹi/</span>
        </div>
        <img src={playIcon} alt="play icon" />
      </div>
    </div>
  );
}
