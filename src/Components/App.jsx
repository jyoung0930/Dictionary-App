import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";
import deFaultdata from "../data/data";
export default function App() {
  const [data, setData] = useState(deFaultdata);
  const [inputValue, setInputValue] = useState("keyboard");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [empty, setIsEmpty] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [fontSelectionText, setFontSelectionText] = useState("Sans Serif");
  const [fontSelection, setFontSelection] = useState("sans-serif");

  useEffect(() => {
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    //   .then((res) => (res.ok ? res.json() : console.log("error")))
    //   .then((data) =>
    //     data === undefined ? setError((prev) => !prev) : setData(data[0])
    //   );
  }, [submitted]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDropDown(false);
    });
  });

  function audioData() {
    const files = data.phonetics;
    const sound = [];
    for (let i = 0; i < files.length; i++) {
      files[i].audio !== "" && sound.push(files[i].audio);
    }
    return sound[0];
  }

  const styles = {
    fontFamily: fontSelection,
  };

  function closeDropDown() {
    setDropDown(false);
  }

  return (
    <div onScroll={closeDropDown} id="main_container" style={styles}>
      <Header
        dropDown={dropDown}
        setDropDown={setDropDown}
        fontSelection={fontSelection}
        setFontSelection={setFontSelection}
        fontSelectionText={fontSelectionText}
        setFontSelectionText={setFontSelectionText}
      />
      <Form
        setInputValue={setInputValue}
        value={inputValue}
        setSubmitted={setSubmitted}
        empty={empty}
        setIsEmpty={setIsEmpty}
      />
      <Results audio={audioData} data={data} />
    </div>
  );
}
