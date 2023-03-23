import React from "react";
import Button from "@mui/material/Button";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";  
import { useState, useEffect } from "react";
import "./App.css";
import { width } from "@mui/system";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAJFeTUzQAqqw51x5CYpqzaG7cq5Pmy9jI",

  authDomain: "primeiro-projeto-12dfc.firebaseapp.com",

  projectId: "primeiro-projeto-12dfc",

  storageBucket: "primeiro-projeto-12dfc.appspot.com",

  messagingSenderId: "375273755998",

  appId: "1:375273755998:web:15e5e0ac75e4f253f2ebcf",

  measurementId: "G-1BDJXGC3FX",
});

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "usuarios");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  async function createUser() {
    const user = await addDoc(userCollectionRef, {
      firstName,
      lastName, 
      email,
      password,
    });
    console.log(user);
  }

  const updateUser = async (id) => {
    const userDoc = doc(db, "usuarios", id)
    const newFields = {firstName, lastName, email, password}
    await updateDoc(userDoc, newFields)

  }

  async function deleteUser(id) {
    const userDoc = doc(db, "usuarios", id);
    await deleteDoc(userDoc);
  }

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "1920px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="box"
        style={{
          height: "100vh",
          width: "1440px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "10rem",
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={createUser}>
            Create User
          </Button>
        </div>
        <ul>
          {users.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  paddingBottom: '2rem'
                }}
              >
                <li>{e.firstName}</li>
                <li>{e.lastName}</li>
                <li>{e.email}</li>
                <li>{e.password}</li>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateUser(e.id)}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteUser(e.id)}
                >
                  Delete User
                </Button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
