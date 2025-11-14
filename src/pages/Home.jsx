import troutBatting from "../assets/trout-batting.png";
import troutFielding from "../assets/trout-fielding.png";
function Home() {
  return (
    <>
      <p>
        Welcome to Baseball Junkyard, where you can find all the baseball
        equipment you would ever need! We have bats, gloves, cleats, and much
        more!
      </p>
      <div>
        <img src={troutBatting} alt="Trout batting" />
        <img src={troutFielding} alt="Trout fielding" />
      </div>
    </>
  );
}

export default Home;
