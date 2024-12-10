import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
        toast.error('Failed to fetch users!', { position: 'top-right' });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/delete/user/${userId}`
        );
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        toast.success(response.data.message, { position: 'top-right' });
      } catch (error) {
        console.error('Error while deleting user:', error);
        toast.error('Failed to delete user!', { position: 'top-right' });
      }
    }
  };

  return (
    <div className="m-10 shadow-lg">
      <div className="flex flex-wrap gap-2 mb-5">
        <Link
          to="/add"
          className="flex bg-sky-500 text-white py-2 px-4 rounded text-sm hover:bg-sky-600 transition-colors font-medium shadow-md"
        >
          Add User
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-200 mt-5">
          <p className="text-lg font-semibold">
            No data to display. Please add a user.
          </p>
        </div>
      ) : (
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
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.address}</td>
                <td className="flex gap-3 px-6 py-4">
                  <Link
                    to={`/update/${user._id}`}
                    className="text-green-500 hover:underline font-medium"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="text-red-500 hover:underline font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
