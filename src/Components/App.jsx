import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";
export default function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("dictionary");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [empty, setIsEmpty] = useState(false);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
      .then((res) => (res.ok ? res.json() : console.log("error")))
      .then((data) =>
        data === undefined ? setError((prev) => !prev) : setData(data[0])
      );
  }, [submitted]);

  console.log(data);
  console.log(error);
  console.log(data);
  console.log(inputValue);

  function audioData() {
    const files = data.phonetics;
    const sound = [];
    for (let i = 0; i < files.length; i++) {
      files[i].audio !== "" && sound.push(files[i].audio);
    }
    return sound[0];
  }

  return (
    <div id="main_container">
      <Header />
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
