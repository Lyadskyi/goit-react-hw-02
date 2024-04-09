import css from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  total,
  percentage,
}) {
  return (
    <div className={css.feedback}>
      <p className={css.types}>Good: {good}</p>
      <p className={css.types}>Neutral: {neutral}</p>
      <p className={css.types}>Bad: {bad}</p>
      <p className={css.total}>Total: {total}</p>{" "}
      <p className={css.positive}>Positive: {percentage} %</p>
    </div>
  );
}
