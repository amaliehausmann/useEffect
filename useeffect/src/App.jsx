import "./App.scss";
import { StopwatchDisplay } from "./components/StopWatch/StopwatchDisplay";
import { StopWatchBtn } from "./components/StopWatch/StopWatchBtn/StopWatchBtn";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

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
      <StopWatchBtn name="Start" action={StartStopWatch}></StopWatchBtn>
      <StopWatchBtn name="Stop" action={StopStopWatch}></StopWatchBtn>
      <StopWatchBtn name="Reset" action={ResetStopWatch}></StopWatchBtn>
    </>
  );
}

export default App;
