import React from "react";
import students from "./assets/students.json";

function StudentsTable() {
  var [allstudents, setStudents] = React.useState([...students]);
  var [startIndex, setStartIndex] = React.useState(10);
  var [endIndex, setEndIndex] = React.useState(15);
  function sortByKey(key) {
    // var temp = [...allstudents];
    // temp.sort(function(a,b){
    //   if(a[key]>b[key]){return 1}
    //   else{return -1}
    // })

    setStudents(function (currentStudents) {
      currentStudents.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        } else {
          return -1;
        }
      });
      return [...currentStudents];
    });
  }
  function next5() {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  }
  return (
    <div>
      <button
        onClick={() => {
          next5();
        }}
      >
        Next 5
      </button>
      <table border="2" className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th
              onClick={() => {
                sortByKey("name");
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                sortByKey("gender");
              }}
            >
              Gender
            </th>
            <th
              onClick={() => {
                sortByKey("fatherName");
              }}
            >
              Father Name
            </th>
            <th
              onClick={() => {
                sortByKey("motherName");
              }}
            >
              Mother Name
            </th>
            <th
              onClick={() => {
                sortByKey("age");
              }}
            >
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {allstudents.slice(startIndex, endIndex).map((student) => {
            return (
              <tr
                style={
                  student.gender === "Female"
                    ? { backgroundColor: "lightpink" }
                    : { backgroundColor: "lightblue" }
                }
              >
                {student.gender === "Male" && (
                  <td>
                    <img
                      width="50px"
                      src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"
                      alt=""
                    />
                  </td>
                )}
                {student.gender === "Female" && (
                  <td>
                    <img
                      width="50px"
                      src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-female-student-icon-png-image_326761.jpg"
                      alt=""
                    />
                  </td>
                )}
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.fatherName}</td>
                <td>{student.motherName}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Praveen Sir Code, naadi kadu</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default StudentsTable;