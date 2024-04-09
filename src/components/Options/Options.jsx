import css from "./Options.module.css";

export default function Options({ onButton }) {
  return (
    <>
      <button className={css.button} onClick={() => onButton("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onButton("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onButton("bad")}>
        Bad
      </button>
    </>
  );
}
