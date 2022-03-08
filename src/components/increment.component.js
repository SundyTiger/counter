import React from "react";

function incrementCount(props) {
  return (
    <div className="mx-auto">
      <button
        className="btn btn-primary mx-auto"
        onClick={() => props.inc(props.count + 1)}
      >
        Increment button
      </button>
    </div>
  );
}

export default incrementCount;
