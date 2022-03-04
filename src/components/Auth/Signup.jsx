import React, { useState } from "react";
import UserForm from "../UserForm";
import { useNavigate } from "react-router-dom";
import Google from "./Google";

const signup = (email, password) => {
  let status = true;

  return fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) {
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      if (status) {
        return info;
      }
      throw info;
    });
};

const SignUp = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (email, password) => {
    setError(null);
    setLoading(true);

    signup(email, password)
      .then(() => {
        navigate("/");
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
      {error ? <p>{error?.message ?? "unknown error"}</p> : null}
      <UserForm
        onSubmit={handleSignup}
        loading={loading}
        title="Registration"
      />
      <Google />
    </div>
  );
};

export default SignUp;

//"proxy": "http://localhost:8080",  //hozza kell adni mert elhiteti bongeszovel hogy oda mutasson ahova kell
