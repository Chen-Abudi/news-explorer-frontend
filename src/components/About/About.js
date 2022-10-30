import "./About.css";
import authorImage from "../../images/author-chen-opt1.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__overlay">
        <img className="about__author" alt="Author" src={authorImage} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Grace (Chen) Abudi is an artist and a recent full-stack developer.
            She has experience developing both frontend and backend along
            dealing with server database including the technologies M.E.R.N
            stack, JavaScript, HTML, CSS.
          </p>
          <p className="about__description">
            The soon to be alumni of Practicum Software Engineer program, has a
            competence for creating elegant solutions efficiently with the
            ability of solving problems with logic, art, and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
