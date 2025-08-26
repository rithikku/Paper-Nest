import { useState } from "react";
import CommingSoon from "./CommingSoon";  // import your ComingSoon component

const SecondSemester = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const papers = [
    "Web Technology",
    "Object Oriented Programming",
    "Operating System",
    "Database Management Systems",
    "Data Structures & Analysis of Algorithms Architecture",
  ];

  return (
    <div className="first-semester">
      <h2 className="first-sem-heading">SECOND SEMESTER PAPER</h2>

      {selectedPaper ? (
        <CommingSoon />  
      ) : (
        <ul className="first-sem-list">
          {papers.map((paper, index) => (
            <li key={index} onClick={() => setSelectedPaper(paper)}>
              {paper}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SecondSemester;
