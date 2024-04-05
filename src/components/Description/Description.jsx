import css from '../Description/Description.module.css'

export default function Description({ title, desc }) {
  return (
    <>
      <h1>{title}</h1>
      <p className={css.description}>{desc}</p>
    </>
  );
}
