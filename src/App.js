import { getAuth } from "firebase/auth";
import './App.css';
import ReactBootstrap from "./components/ReactBootstrap/ReactBootstrap";
import app from "./firebase/firebase.init";

const auth = getAuth(app);
// const handleRegister = (event) => {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.email.value;
//   const password = form.password.value;
//     console.log(email,password);
// }

function App() {
  return (
    <div>

      <ReactBootstrap></ReactBootstrap>
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
