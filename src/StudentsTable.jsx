import React from "react";
import students from "./assets/students.json";

function StudentsTable() {
  const [allstudents, setStudents] = React.useState([...students]);
  const [startIndex, setStartIndex] = React.useState(10);
  const [endIndex, setEndIndex] = React.useState(15);

  function sortByKey(key) {
    setStudents((currentStudents) => {
      const sorted = [...currentStudents].sort((a, b) =>
        a[key] > b[key] ? 1 : -1
      );
      return sorted;
    });
  }

  function next5() {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  }

  return (
    <div className="container mt-4">

      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="m-0">Students List</h2>

          <button
            className="btn btn-primary"
            onClick={next5}
          >
            Next 5
          </button>
        </div>
      </div>

      <table className="table table-hover table-bordered text-center shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Photo</th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => sortByKey("name")}
            >
              Name ⬍
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => sortByKey("gender")}
            >
              Gender ⬍
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => sortByKey("fatherName")}
            >
              Father Name ⬍
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => sortByKey("motherName")}
            >
              Mother Name ⬍
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => sortByKey("age")}
            >
              Age ⬍
            </th>
          </tr>
        </thead>

        <tbody>
          {allstudents.slice(startIndex, endIndex).map((student, index) => (
            <tr
              key={index}
              className={
                student.gender === "Female"
                  ? "table-danger"
                  : "table-info"
              }
            >
              <td>
                {student.gender === "Male" && (
                  <img
                    width="50"
                    className="rounded-circle border"
                    src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"
                    alt="male"
                  />
                )}

                {student.gender === "Female" && (
                  <img
                    width="50"
                    className="rounded-circle border"
                    src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-female-student-icon-png-image_326761.jpg"
                    alt="female"
                  />
                )}
              </td>

              <td className="fw-bold">{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="text-center mt-3">
        <button className="btn btn-outline-secondary" onClick={next5}>
          Load More
        </button>
      </div> */}
    </div>
  );
}

export default StudentsTable;
