import style from "./footer.module.css";

export function TheFooter() {
  return (
    <div className={style.footer}>
      <a>Вопрос-ответы</a>
      <a>О нас</a>
    </div>
  );
}
