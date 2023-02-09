import playIcon from "../assets/images/icon-play.svg";

export default function Results({ data, audio }) {
  const handleAudio = () => {
    const sound = new Audio(audio());
    sound.play();
  };

  return (
    <div className="search_results">
      <div className="results_heading">
        <div className="results_word_phonetic">
          <span className="results_word">Keyboard</span>
          <span className="results_phonetic">/ˈdɪkʃəˌnɛɹi/</span>
        </div>
        <img onClick={handleAudio} src={playIcon} alt="play icon" />
      </div>
      <div className="noun_section">
        <div className="word_type">
          <p>Noun</p>
          <div className="word_type_line"></div>
        </div>
      </div>
    </div>
  );
}
