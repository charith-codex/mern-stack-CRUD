import './App.css';
import User from './getUser/User';
import AddUser from './addUser/addUser';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const route = createBrowserRouter([
   {
    path:"/",
    element:<User/>
   },
   {
    path:"/add",
    element:<AddUser />
   },
  ])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
