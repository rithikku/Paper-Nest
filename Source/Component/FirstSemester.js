import { C_URL, CO_URL, DISCRETE_URL, FUNDAMENTAL_URL, PC_URL } from "../Utils/constants";

const FirstSemester = () => {
    return (
        <div className="first-semester">
            <h2 className="first-sem-heading">FIRST SEMESTER PAPER</h2>
            <ul className="first-sem-list">
                 <li>
                    <a href={FUNDAMENTAL_URL} target="_blank" rel="noopener noreferrer">
                        Fundamental of Computers & Emerging Technologies
                    </a>
                </li>
                 <li>
                    <a href={C_URL} target="_blank" rel="noopener noreferrer">
                        Problem Solving using C
                    </a>
                </li>
                 <li>
                    <a href={PC_URL} target="_blank" rel="noopener noreferrer">
                        Principles of Management & Communication
                    </a>
                </li>
                 <li>
                    <a href={DISCRETE_URL} target="_blank" rel="noopener noreferrer">
                        Discrete Mathematics
                    </a>
                </li>
                 <li>
                    <a href={CO_URL} target="_blank" rel="noopener noreferrer">
                        Computer Organization & Architecture
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FirstSemester;