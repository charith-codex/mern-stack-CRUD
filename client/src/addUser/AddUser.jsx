import React from 'react';

const AddUser = () => {
  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
      <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-xl font-semibold">Add New User</h1>
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
            Back
          </button>
        </div>

        <form action="#" method="POST">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div class="mb-4">
            <label
              for="address"
              class="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
