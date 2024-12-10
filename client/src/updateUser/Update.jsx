import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUser = () => {
  const users = {
    name: '',
    email: '',
    address: '',
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: 'top-right' });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Update User</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Back
          </button>
        </div>

        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              onChange={inputHandler}
              id="name"
              value={user.name}
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              onChange={inputHandler}
              id="email"
              value={user.email}
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              onChange={inputHandler}
              id="address"
              value={user.address}
              name="address"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
