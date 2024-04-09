import { useState, useEffect } from "react";

// Imports components
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const feedbackReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackTypes;
  const feedbackTotal = good + neutral + bad;

  const percentageFeedback =
    feedbackTotal > 0
      ? Math.round(
          (feedbackTypes.good /
            (feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad)) *
            100
        )
      : 0;

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options
        onButton={updateFeedback}
        total={feedbackTotal}
        reset={feedbackReset}
      />

      {feedbackTotal === 0 ? (
        <Notification noStatistics="No feedback yet" />
      ) : (
        <Feedback
          feedback={feedbackTypes}
          total={feedbackTotal}
          percentage={percentageFeedback}
        />
      )}
    </>
  );
}
