import { useState } from "react";

// Imports components
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
// import Notification from "../Notification/Notification";

// Import module.css
import css from "./App.module.css";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(5);
  };
  return (
    <>
      <Description
        title="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options>
        <button onClick={handleClick} className={css.btn}>
          Good {clicks}
        </button>
        <button onClick={handleClick} className={css.btn}>
          Neutral
        </button>
        <button onClick={handleClick} className={css.btn}>
          Bad
        </button>
      </Options>
      <Feedback>
        <p className={css.reviews}>Good: </p>
        <p className={css.reviews}>Neutral: </p>
        <p className={css.reviews}>Bad: </p>
      </Feedback>
      {/* <Notification noStatistics="No feedback yet" /> */}
    </>
  );
}
