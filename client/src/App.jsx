import './App.css';
import User from './getUser/User';
import AddUser from './addUser/addUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateUser from './updateUser/Update';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />,
    },
    {
      path: '/add',
      element: <AddUser />,
    },
    {
      path: '/update/:id',
      element: <UpdateUser />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
