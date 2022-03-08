import React, { useState } from "react";
import Count from "./components/display.component";
import IncCount from "./components/increment.component";
import DecCount from "./components/decrement.component";
function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="container-fluid">
      <div className="card w-25 mt-5 mx-auto">
        <div className="card-body">
          <Count key={1} count={count} />
          <div className="d-flex">
            <IncCount key={2} inc={setcount} count={count} />
            <DecCount key={3} dec={setcount} count={count} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
