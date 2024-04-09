import css from "./Description.module.css";

export default function Description({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p className={css.description}>{description}</p>
    </>
  );
}
