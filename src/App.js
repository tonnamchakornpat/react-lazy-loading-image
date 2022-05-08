import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ImgCard from "./components/imgCard";

const getData = async (url) => {
  const res = await axios.get(url);
  const data = await res.data;
  return data;
};

function App() {
  const apiKey = "";
  const api = `https://api.unsplash.com/photos/?client_id=${apiKey}`;
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    getData(api).then(async (res) => {
      await setImgData(res);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <h1 style={{ marginTop: "1rem" }}>LAZY LOADING IMAGE</h1>
      <div
        style={{
          width: "980px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexFlow: "wrap",
        }}
      >
        {imgData.map((item) => (
          <ImgCard imgUrl={item.urls?.raw} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
