import React from "react";

function dectCount(props) {
  return (
    <>
      <button
        className="ms-3 btn btn-danger mx-auto"
        onClick={() => props.dec(props.count - 1)}
        disabled={props.count === 0}
      >
        Decrement Button
      </button>
    </>
  );
}
export default dectCount;
