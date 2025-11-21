import troutBatting from "../assets/images/trout-batting.png";
import troutFielding from "../assets/images/trout-fielding.png";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      <p className={styles.p}>
        Welcome to Baseball Junkyard, where you can find all the baseball
        equipment you would ever need! We have bats, gloves, cleats, and much
        more!
      </p>
      <div>
        <img src={troutBatting} alt="Trout batting" className={styles.img} />
        <img src={troutFielding} alt="Trout fielding" className={styles.img} />
      </div>
    </main>
  );
}

export default Home;
