import { useState } from "react";
import UserForm from "./UserForm";

const login = (email, password) => {
  let status = true;
  return fetch("/signin", {
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

  const handleLogin = (email, password) => {
    setError(null);
    setLoading(true);

    login(email, password)
      .then(() => {
        props.onSuccess();
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
