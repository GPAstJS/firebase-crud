import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="content-box"
        style={{
          width: "1440px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Sign Up</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          style={{
            margin: "5px 0px 20px 0px",
            width: "20rem",
          }}
        />
        <Button
          variant="contained"
          style={{
            margin: "5px 0px 0px 0px",
            width: "20rem",
          }}
        >
          Sign Up
        </Button>

        <Link
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <p
            style={{
              color: "#000",
              TextDecoraton: "none",
            }}
          >
            Already registered?
            <a
              href=""
              style={{
                color: "#1565C0",
                textDecoration: "none",
              }}
            >
              Sign In
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
