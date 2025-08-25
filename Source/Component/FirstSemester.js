import { firstSemesterSubjects } from "./FirstSemesterSubject";

const FirstSemester = () => {
  return (
    <div className="first-semester">
      <h2 className="first-sem-heading">FIRST SEMESTER PAPER</h2>
      <ul className="first-sem-list">
        {firstSemesterSubjects.map((subject, index) => (
          <li key={index}>
            <a href={subject.url} target="_blank" rel="noopener noreferrer">
              {subject.code} - {subject.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstSemester;