import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import SearchFunction from "./components/SearchFunction";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <SearchFunction />
      <h1>{"local host test"}</h1>
    </>
  );
}

export default App;
