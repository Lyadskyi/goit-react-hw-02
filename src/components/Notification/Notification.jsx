import css from "./Notification.module.css";

export default function Notification({ noStatistics }) {
  return <p className={css.notification}>{noStatistics}</p>;
}
