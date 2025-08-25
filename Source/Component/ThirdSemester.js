import {thirdSemesterSubject} from "./ThirdSemesterSubject"

const ThirdSemester = () => {
    return (
        <div className="first-semester">
            <h2 className="first-sem-heading">THIRD SEMESTER PAPER</h2>
            <ul className="first-sem-list">
                {thirdSemesterSubject.map((subject, index) => (
                    <li key={index}>
                        <a href={subject.url} target="_blank" rel="noopener noreferrer">
                            {subject.code} - {subject.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThirdSemester;