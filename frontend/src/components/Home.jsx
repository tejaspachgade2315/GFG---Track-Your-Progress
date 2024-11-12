import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleClick = async () => {
    const trimmedUsername = username.trim();
    const response = await axios
      .get(
        `https://geeks-for-geeks-statistics.vercel.app/?userName=${trimmedUsername}`
      )
      .then((response) => {
        const data = response.data;
        setData(data);
        setError(null);
        saveToDB();
      })
      .catch((error) => {
        setError(
          "Failed to fetch data. Please check the username and try again."
        );
        setData(null);
        setUsername("");
      });
  };
  const saveToDB = async () => {
    await axios.post(
      "http://localhost:8111/submit",
      { username: username.trim() },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Data submitted successfully");
    setUsername("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#308d46] h-screen">
        <h1 className="text-center text-4xl font-bold p-4">
          GeeksForGeeks Statistics
        </h1>

        <div className="max-h-screen w-full flex items-center justify-center p-4 flex-col md:flex-row">
          <label className="mr-4 text-2xl">
            Enter your GeeksForGeeks username:
          </label>
          <input
            type="text"
            placeholder="Enter your gfg username..."
            className="border-2 border-black p-2 m-2"
            value={username}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="border-2 border-black bg-black text-white p-2 hover:bg-[#6d6d6d] m-2"
            onClick={handleClick}
          >
            Get Data
          </button>
        </div>
        {error && (
          <div className="error text-center text-red-900 text-3xl">{error}</div>
        )}
        {data && (
          <div className="text-center">
            <h3 className="font-bold">{username} GeeksForGeeks Statistics :</h3>
            <div className="overflow-x-auto">
              <div className="block md:hidden">
                {/* Vertical table for small devices */}
                <div className="flex flex-col items-center">
                  {Object.keys(data).map((key, index) => (
                    <div
                      key={index}
                      className="flex justify-between w-full border-b border-black px-4 py-2"
                    >
                      <span className="font-bold">{key}:</span>
                      <span>{data[key]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                {/* Horizontal table for medium and larger devices */}
                <table className="table-auto border-collapse border border-black mx-auto w-full sm:w-auto">
                  <thead>
                    <tr>
                      {Object.keys(data).map((key) => (
                        <th key={key} className="border border-black px-4 py-2">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.values(data).map((value, index) => (
                        <td
                          key={index}
                          className="border border-black px-4 py-2"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
