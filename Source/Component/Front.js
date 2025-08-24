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
        <p className="disclaimer">DISCLAIMER: These PAPERS Are Shared For EDUCATIONAL Purposes Only. All Rights Belong To The AKTU</p>
         <p className="copyright">© {new Date().getFullYear()} MCA Previous Year Papers. All Rights Reserved</p>
          <p className="developer">
          Developed by <strong>Rithik 🚀</strong> |{" "}
          <a
            href="https://www.linkedin.com/in/rithik-kumar-%F0%9F%9A%80-547074231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn 🚀
          </a>
        </p>
      </div>
    </div>
  );
};

export default Front;
