import { Circle } from "react-awesome-shapes";
import { Row, Col } from "react-bootstrap";
import about from "../assets/img/about.png";
import edu from "../assets/img/edu.png";



function Aboutme() {
  return (
    <section className="mid">
      <Row>
        <Col>
          <img className="circle" src={about} alt="" />
        </Col>
        <Col>

          <p>
          Information technology final year undergraduate, proficient in <span className="job1"> Python, HTML5, CSS, JQuery, JavaScript, Typescript, ExpressJs  and relational databases - MySQL, PostgreSQL, SQL Server & No SQL - mongo db & firebase. Skilled in REST APIs </span> and adept problem-solving. <span className="job3">Google Python & Meta software development professional certification</span>, strong analytical abilities, and excellent communication. Fast learner, passionate, with applied experience of Django, Flask, Java, OOP, AWS, GCP and Tableau. Eager to contribute dynamic skills to tech challenges.
   
          </p>
        </Col>
      </Row>
      <Row className="edu">
          <img className="eduimg" src={edu} alt=""/>
        </Row>
    </section>
  );

}

export default Aboutme;
