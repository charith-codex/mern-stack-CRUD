import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.log('error while fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" m-10 shadow-lg">
        <div className="flex flex-wrap gap-2 mb-5">
          <Link
            to="/add"
            className="bg-sky-400 py-3 px-5 rounded-lg font-semibold text-gray-700"
          >
            Add User
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full text-left text-sm text-gray-600 border-collapse">
            <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase text-xs">
              <tr>
                <th className="px-6 py-4">S. No</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {users.map((user, index) => {
                return (
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.address}</td>
                    <td className="flex gap-3 px-6 py-4 ">
                      <Link to={`/update/` + user._id} className="text-green-500 hover:underline font-medium">
                        Update
                      </Link>
                      <button className="text-red-500 hover:underline font-medium">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
