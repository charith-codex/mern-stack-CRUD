'use client';
import React from 'react';
import { Button } from 'flowbite-react';

const User = () => {
  return (
    <>
      <div className=' m-10 shadow-lg'>
        <div className="flex flex-wrap gap-2 mb-5">
          <Button>Add User</Button>
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
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">001</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">abz@mail.com</td>
                <td className="px-6 py-4">Kandy</td>
                <td className="flex gap-3 px-6 py-4 ">
                  <button className="text-green-500 hover:underline font-medium">
                    Update
                  </button>
                  <button className="text-red-500 hover:underline font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
