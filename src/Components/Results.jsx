import { nanoid } from "nanoid";
import playIcon from "../assets/images/icon-play.svg";

export default function Results({ data, audio }) {
  const handleAudio = () => {
    const sound = new Audio(audio());
    sound.play();
  };

  // const meanings =
  //   data.meanings[0].definitions.slice(0, 3).map((item) => {
  //         return <li key={nanoid()}>{item.definition}</li>;
  //       });

  return (
    <div className="search_results">
      <div className="results_heading">
        <div className="results_word_phonetic">
          <span className="results_word">{data.word}</span>
          <span className="results_phonetic">{data.phonetic}</span>
        </div>
        <img onClick={handleAudio} src={playIcon} alt="play icon" />
      </div>
      <div className="noun_section">
        <div className="word_type">
          <p>Noun</p>
          <div className="word_type_line"></div>
        </div>
        <h2 className="word_type_heading">Meaning</h2>
        <ul className="noun_meaning_list">
          {/* <li>
            
            hello my name is jaron and im so cool because im a coder! Sometimes
            i also like to read books to my son

          </li> */}
          {/* {meanings} */}
        </ul>
      </div>
    </div>
  );
}
