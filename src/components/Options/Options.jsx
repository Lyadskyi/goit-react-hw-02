import css from "./Options.module.css";

export default function Options({ onButton, total, reset }) {
  return (
    <div className={css.button}>
      <button className={css.button} onClick={() => onButton("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onButton("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onButton("bad")}>
        Bad
      </button>
      {total !== 0 && (
        <button className={css.button} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
