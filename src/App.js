import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './components/LoginBootstrap/LoginBootstrap';
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap";
import Main from './layouts/Main';

const router = createBrowserRouter([
  {path:'/',
   element: <Main></Main>,
   children:[
    {path: '/',
    element: <ReactBootstrap></ReactBootstrap>
    },
    {path: '/register',
    element: <ReactBootstrap></ReactBootstrap>
    },
    {path: '/login',
    element: <LoginBootstrap></LoginBootstrap>
    }
   ] 
  }
])

function App() {
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
      {/* <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder="Enter your email" />
        <br />
        <input type="password" name="password" id="" placeholder="Enter your password" />
        <br />
        <button type="submit">Register</button>
      </form> */}
    </div>
  );
}

export default App;
