import SemesterCard from "./SemesterCard";

const SemesterList = () => {
  const semesters = [
    { to: "/first-semester", title: "FIRST SEMESTER" },
    { to: "/second-semester", title: "SECOND SEMESTER" },
    { to: "/third-semester", title: "THIRD SEMESTER" },
    { to: "/fourth-semester", title: "FOURTH SEMESTER" },
  ];

  return (
    <ul className="card-list">
      {semesters.map((sem, index) => (
        <SemesterCard key={index} to={sem.to} title={sem.title} />
      ))}
    </ul>
  );
};

export default SemesterList;
