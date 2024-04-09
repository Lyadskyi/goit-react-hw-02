import { useState } from "react";

// Imports components
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

// Import module.css
// import css from "./App.module.css";

export default function App() {
  const [feedTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackTypes) => {
    setFeedbackTypes({
      ...feedTypes,
      [feedbackTypes]: feedTypes[feedbackTypes] + 1,
    });
    console.log(feedTypes);
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options onButton={updateFeedback} />
      <Feedback />
      <Notification noStatistics="No feedback yet" />
    </>
  );
}
