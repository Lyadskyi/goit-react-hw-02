import css from "../Options/Options.module.css";

export default function Options({ children }) {
  return (
    <>
      <div className={css.buttons}>{children}</div>
    </>
  );
}
