import React from "react";
import Dashboard from '../../components/dashboard/index'

const Home = () => {
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
      {sessionStorage.getItem("user") ? (
        <div
          className="content-box"
          style={{
            width: "1440px",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Dashboard />
        </div>
      ) : (<h1>To access the content of this page you must be connected!</h1>)}
    </div>
  );
};

export default Home;
