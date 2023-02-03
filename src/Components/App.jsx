import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("dictionary");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [empty, setIsEmpty] = useState(false);

  useEffect(() => {
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    //   .then((res) => (res.ok ? res.json() : console.log("error")))
    //   .then((data) =>
    //     data === undefined ? setError((prev) => !prev) : setData(data[0])
    //   );
  }, [submitted]);

  console.log(data);
  console.log(error);

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
    </div>
  );
}
