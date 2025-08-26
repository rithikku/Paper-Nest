import { useState } from "react";
import CommingSoon from "./CommingSoon";  // import ComingSoon component

const FourthSemester = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const papers = [
    "Privacy & Security in Online Social Media",
    "Soft Computing",
    "Pattern Recognition",
    "Data Analytics",
    "Software Quality Engineering",
    "Blockchain Architecture",
    "Neural Network",
    "Internet of Things",
    "Modern Application Development",
    "Distributed Database Systems",
    "Mobile Computing",
    "Computer Graphics and Animation",
    "Natural Language Processing",
    "Machine Learning",
    "Quantum Computing",
  ];

  return (
    <div className="first-semester">
      <h2 className="first-sem-heading">FOURTH SEMESTER PAPER</h2>

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

export default FourthSemester;
