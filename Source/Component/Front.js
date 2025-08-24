import { Link } from "react-router-dom";

const Front = () => {
  return (
    <div className="card">
      <ul className="card-list">
        <li className="list-item">
          <Link to="/first-semester" className="first-sem-card">
            <h2 className="course">FIRST SEMESTER</h2>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/second-semester" className="first-sem-card">
            <h2 className="course">SECOND SEMESTER</h2>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/third-semester" className="first-sem-card">
            <h2 className="course">THIRD SEMESTER</h2>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/fourth-semester" className="first-sem-card">
            <h2 className="course">FOURTH SEMESTER</h2>
          </Link>
        </li>
      </ul>

      <div className="footer">
        <p className="disclaimer">Disclaimer: These papers are shared for educational purposes only. All rights belong to the respective universities.</p>
         <p className="copyright">© {new Date().getFullYear()} MCA Previous Year Papers. All rights reserved.</p>
          <p className="developer">
          Developed by <strong>Rithik</strong> |{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Front;
