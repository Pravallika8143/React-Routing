import React from "react";

function Counter() {
  const [c, setC] = React.useState(0);

  function inc() {
    setC((prev) => prev + 1);
  }

  function dec() {
    setC((prev) => prev - 1);
  }

  return (
    <div className="card shadow p-4 mx-auto mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Counter: {c}</h2>

      <div className="d-flex justify-content-between">

        <button 
          className="btn btn-success px-4 py-2 fw-bold"
          onClick={inc}
        >
          Increment
        </button>

        <button 
          className="btn btn-danger px-4 py-2 fw-bold"
          onClick={dec}
        >
          Decrement
        </button>

      </div>
    </div>
  );
}

export default Counter;
