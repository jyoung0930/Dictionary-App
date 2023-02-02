import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/pen")
      .then((res) => (res.ok ? res.json() : console.log("error")))
      .then((data) => setData(data[0]));
  }, []);

  console.log(data);

  return (
    <div id="main_container">
      <Header />
      <Form />
    </div>
  );
}
