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
    </div>
  );
};

export default Front;
