// Imports components
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

// Import module.css
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Description
        title="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options>
        <button className={css.btn}>Good</button>
        <button className={css.btn}>Neutral</button>
        <button className={css.btn}>Bad</button>
        <button className={css.btn}>Reset</button>
      </Options>
      <Feedback>
        <p className={css.reviews}>Good:</p>
        <p className={css.reviews}>Neutral:</p>
        <p className={css.reviews}>Bad:</p>
        <p className={css.reviews}>Total:</p>
        <p className={css.reviews}>Positive:</p>
      </Feedback>
      <Notification noStatistics="No feedback yet" />
    </>
  );
}
