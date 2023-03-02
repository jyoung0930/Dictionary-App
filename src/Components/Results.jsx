import { nanoid } from "nanoid";
import playIcon from "../assets/images/icon-play.svg";

export default function Results({ data, audio }) {
  const handleAudio = () => {
    const sound = new Audio(audio());
    sound.play();
  };

  const nounMeanings = data.meanings[0]
    ? data.meanings[0].definitions.slice(0, 3).map((item) => {
        return <li key={nanoid()}>{item.definition}</li>;
      })
    : "Not Found";

  const verbMeanings = data.meanings[1]
    ? data.meanings[1].definitions.slice(0, 3).map((item) => {
        return <li key={nanoid()}>{item.definition}</li>;
      })
    : "Not Found";

  const example = data.meanings[1].definitions[0].example
    ? data.meanings[1].definitions[0].example
    : "No Example Found";

  const synonyms = data.meanings[0].synonyms[0]
    ? data.meanings[0].synonyms[0]
    : "No synonyms found";
  return (
    <div className="search_results">
      <div className="results_heading">
        <div className="results_word_phonetic">
          <span className="results_word">{data.word}</span>
          <span className="results_phonetic">{data.phonetic}</span>
        </div>
        <img
          className="play_icon"
          onClick={handleAudio}
          src={playIcon}
          alt="play icon"
        />
      </div>
      {/* Noun Section */}
      <div className="noun_section">
        <div className="word_type">
          <p>Noun</p>
          <div className="word_type_line"></div>
        </div>
        <h2 className="word_type_heading">Meaning</h2>
        <ul className="noun_meaning_list">{nounMeanings}</ul>
        <div className="synonym_section">
          <h2 className="word_type_heading">Synonyms</h2>{" "}
          <span className="synonym_text">{synonyms}</span>
        </div>
      </div>
      {/* Verb Section */}
      <div className="verb_section">
        <div className="word_type">
          <p>Verb</p>
          <div className="word_type_line"></div>
        </div>
        <h2 className="word_type_heading">Meaning</h2>
        <ul className="noun_meaning_list">{verbMeanings}</ul>
        <div className="word_meaning">"{example}"</div>
      </div>
      <div className="footer_line"></div>
      {/* Source Section */}
      <div className="source_section">
        <h2 className="word_type_heading">Source</h2>
        <a href={data.sourceUrls} className="source_url">
          {data.sourceUrls}
        </a>
      </div>
    </div>
  );
}
