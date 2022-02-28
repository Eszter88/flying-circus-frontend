import React from "react";
import SignUp from "./Signup";
import Login from "./Login";
import UserContext from "./UserContext";
import Profile from "./Profile";
import Private from "./Private";
import Google from "./Google";

function App() {
  const handleLoginOnSuccess = () => {
    console.log("done login");
  };

  return (
    <UserContext>
      <div className="App">
        <SignUp onSuccess={handleLoginOnSuccess} />
        <Login onSuccess={handleLoginOnSuccess} />
        <Google />
        <Profile />
        <Private message="secret message" />
      </div>
    </UserContext>
  );
}

export default App;
