import React, { useEffect, useState } from "react";

export default function () {
  let [seconds, setSeconds] = useState();
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div>
      <h1 className="heading">Timer</h1>

      <div className="input-section">
        <input
          type="number"
          pattern="[0-9]*"
          placeholder="0"
          value={seconds}
          onChange={(event) => {
            setSeconds(event.target.value.toLowerCase());
          }}
        ></input>
        <div className="button-group">
          <button
            onClick={() => {
              setRunning(!running);
            }}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button
            onClick={() => {
              setSeconds(0);
              setRunning(!running);
            }}
            disabled={running ? false : true}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
