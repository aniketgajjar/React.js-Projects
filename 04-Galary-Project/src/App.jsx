import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30",
    );

    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, []); // --- Dependancy!

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-blue-950 rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-blue-950 overflow-auto h-screen p-4 text-gray-300">
      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
// https://picsum.photos/v2/list?page=2&limit=100
