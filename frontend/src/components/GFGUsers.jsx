import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const GFGUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://gfg-track-your-progress.onrender.com/")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="h-full flex flex-col items-center">
        <h1 className="text-4xl font-bold p-4">GeeksForGeeks Users</h1>
        <table className="table-auto w-1/2 text-left border bg-[#308d46]">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Visit Profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`https://www.geeksforgeeks.org/user/${user.username}/`}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    Visit Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GFGUsers;
