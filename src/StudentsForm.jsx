import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function StudentsForm() {
  const [submitData, setSubmitData] = React.useState([]);

  const studentsForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      techs: [],
      country: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Firstname is required").min(3),
      lastname: Yup.string().required("Lastname is required").min(5),
    }),
    onSubmit: (values) => {
      setSubmitData([...submitData, values]);
    },
  });

  const handleTechChange = (e) => {
    const value = e.target.value;
    let newTechs = [...studentsForm.values.techs];

    if (newTechs.includes(value)) {
      newTechs = newTechs.filter((t) => t !== value);
    } else {
      newTechs.push(value);
    }

    studentsForm.setFieldValue("techs", newTechs);
  };

  return (
    <div className="container my-4 p-4 shadow rounded bg-light">
      <h2 className="text-center mb-4">Student Registration Form</h2>

      <form onSubmit={studentsForm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label"><b>First Name</b></label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              onChange={studentsForm.handleChange}
              onBlur={studentsForm.handleBlur}
            />
            {studentsForm.touched.firstname && studentsForm.errors.firstname && (
              <div className="text-danger small">{studentsForm.errors.firstname}</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label"><b>Last Name</b></label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              onChange={studentsForm.handleChange}
              onBlur={studentsForm.handleBlur}
            />
            {studentsForm.touched.lastname && studentsForm.errors.lastname && (
              <div className="text-danger small">{studentsForm.errors.lastname}</div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <b>Gender:</b>
          <div>
            <label className="me-3">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={studentsForm.handleChange}
                className="form-check-input me-1"
              />
              Male
            </label>

            <label className="me-3">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={studentsForm.handleChange}
                className="form-check-input me-1"
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="others"
                onChange={studentsForm.handleChange}
                className="form-check-input me-1"
              />
              Others
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Age</b></label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={studentsForm.handleChange}
          />
        </div>

        <div className="mb-3">
          <b>Technologies:</b>
          <div className="d-flex flex-wrap mt-2">
            {["HTML", "CSS", "Javascript", "Nodejs", "Angularjs", "Reactjs"].map(
              (tech) => (
                <label className="me-3" key={tech}>
                  <input
                    type="checkbox"
                    name="techs"
                    value={tech}
                    onChange={handleTechChange}
                    className="form-check-input me-1"
                  />
                  {tech}
                </label>
              )
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label"><b>Country</b></label>
          <select
            name="country"
            className="form-select"
            onChange={studentsForm.handleChange}
          >
            <option disabled selected>
              Select Country
            </option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Sweden">Sweden</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <button className="btn btn-success me-3" type="submit">
          Show Data
        </button>

        <button
          className="btn btn-secondary"
          type="reset"
          onClick={() => studentsForm.resetForm()}
        >
          Clear Data
        </button>
      </form>

      <hr />
      <h3 className="mt-4">Submitted Students</h3>

      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Technologies</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {submitData.map((data, i) => (
            <tr key={i}>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>{data.techs.join(", ")}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsForm;
