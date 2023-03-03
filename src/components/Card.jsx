import style from "./Card.module.css";

const Card = ({ children }) => {
  return (
    <div className={style.box}>
      <div className={style.imageSection}>
        <h1> {children}</h1>̦
      </div>
      <div className={style.details}>
        <h4 class="font-bold bg-slate-200 w-fit">Card title</h4>
        <p>
          Some qiuck example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className={style.cardButton}>Go somewhere</button>
      </div>
    </div>
  );
};
export default Card;
