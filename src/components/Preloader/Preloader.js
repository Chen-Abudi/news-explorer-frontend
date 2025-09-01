import "./Preloader.css";
import CirclePreLoader from "../../images/preloader.png";

const Preloader = () => {
  return (
    <section className="preloader">
      <div className="preloader__overlay">
        <img
          className="preloader__circle"
          src={CirclePreLoader}
          alt="Circle Preloader"
        />
        <p className="preloader__description">Searching for news...</p>
      </div>
    </section>
  );
};

export default Preloader;
