import { useState, useContext } from "react";
import UserForm from "./UserForm";
import { userContext } from "./UserContext";

const apiLogin = (email, password) => {
  return fetch("/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("wrong credentials");
  });
};

const Login = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(userContext);

  const handleLogin = (email, password) => {
    setError(null);
    setLoading(true);

    apiLogin(email, password)
      .then((user) => {
        props.onSuccess();
        login(user);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h2>Login</h2>
      {error ? <p>{error?.message ?? "unknown error"}</p> : null}
      <UserForm onSubmit={handleLogin} loading={loading} />
    </div>
  );
};

export default Login;
