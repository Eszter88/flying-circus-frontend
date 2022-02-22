import React from "react";
import SignUp from "./Signup";
import Login from "./Login";

function App() {
  const handleLoginOnSuccess = () => {
    console.log("done login");
  };

  return (
    <div className="App">
      <SignUp onSuccess={handleLoginOnSuccess} />
      <Login onSuccess={handleLoginOnSuccess} />
    </div>
  );
}

export default App;
