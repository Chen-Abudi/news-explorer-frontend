import "./About.css";
import GraceCAbudi from "../../images/author-chen.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__overlay">
        <img className="about__author" alt="Author" src={GraceCAbudi} />
        <div className="about__content-overlay">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            My name is Grace Chen Abudi and I'm a Software Engineer with the
            Aloha spirit, blending logic, creativity, and cutting-edge
            technology to shape the digital realm. With hands-on experience in
            both frontend and backend development, I'm skilled in modern
            frameworks and tools including React, Next.js, Node.js, Java, Spring
            Boot, TypeScript, TailwindCSS, and database systems such as MongoDB,
            MySQL, and PostgreSQL..
          </p>
          <p className="about__description">
            Full-Stack Development Certified by TripleTen. Recognized as an
            Outstanding Graduate by Masterschool, I'm passionate about building
            meaningful, user-focused solutions - from full-stack applications to
            AI-powered platforms. Guided by the belief in "Coding with Grace,
            Delivering with Aloha", I aims to create digital products that not
            only solve problems but also inspire. Feel free to connect with me
            through the social links below. ➘
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
