import "./App.scss";
import { StopwatchDisplay } from "./components/StopWatch/StopwatchDisplay";
import { StopWatchBtn } from "./components/StopWatch/StopWatchBtn/StopWatchBtn";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = 1;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning]);

  function StartStopWatch() {
    setIsRunning(true);
  }

  function StopStopWatch() {
    setIsRunning(false);
  }

  function ResetStopWatch() {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <>
      <StopwatchDisplay time={seconds}></StopwatchDisplay>
      <section className="buttonSection">
        <StopWatchBtn
          styling="startStyle"
          name="Start"
          action={StartStopWatch}
        ></StopWatchBtn>
        <StopWatchBtn
          styling="stopStyle"
          name="Stop"
          action={StopStopWatch}
        ></StopWatchBtn>
        <StopWatchBtn
          styling="resetStyle"
          name="Reset"
          action={ResetStopWatch}
        ></StopWatchBtn>
      </section>
    </>
  );
}

export default App;
