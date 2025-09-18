import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


function StudentsForm(){
    // state
    const [submitData, setSubmitData] = React.useState([]);
    const studentsForm=useFormik({ 
    initialValues:{
          firstname:"",
          lastname:"",
          gender:"",
          age:"",
          techs:"",
          country:""
    },
    validationSchema:Yup.object({
      firstname:Yup.string().required("Firstname is required").min(3),
      lastname:Yup.string().required("Lastname is required").min(5)
    }),
    onSubmit: (values) => {
      setSubmitData([...submitData, values]);
    },
   })
    // UI`
   return (
    <div className="border border-success border-5 m-2 p-3">
        <h1>StudentsForm</h1>
        <form onSubmit={studentsForm.handleSubmit}>
            <b>FirstName:</b>
            <input type="text" name="firstname" 
            onChange={studentsForm.handleChange} 
            onBlur={studentsForm.handleBlur}/>
            {studentsForm.errors.firstname && (<div>"Firstname is required"</div>)}
            <br/><br/>
            <b>LastName:</b>
            <input type="text" name="lastname" 
            onChange={studentsForm.handleChange}
            onBlur={studentsForm.handleBlur}/>
            {studentsForm.errors.lastname && (<div>"Lastname is required"</div>)}
            <br/><br/>
            <b>Gender: </b>
            <input type="radio" name="gender" 
            value="male" onChange={studentsForm.handleChange}/>Male
            <input type="radio" name="gender" 
            value="female" onChange={studentsForm.handleChange}/>Female
            <input type="radio" name="gender" 
            value="others" onChange={studentsForm.handleChange}/>Others
            <br/><br/>
            <b>Age:</b>
            <input type="text" name="age" 
            onChange={studentsForm.handleChange}
            /><br/><br/>
            <b>Technologies: </b>
            <input type="checkbox" name="techs" 
            value="HTML," onChange={studentsForm.handleChange}/>HTML
            <input type="checkbox" name="techs" 
            value="CSS" onChange={studentsForm.handleChange}/>CSS
            <input type="checkbox" name="techs" 
            value="Javascript" onChange={studentsForm.handleChange}/>Javascript
            <input type="checkbox" name="techs" 
            value="Nodejs" onChange={studentsForm.handleChange}/>Nodejs
            <input type="checkbox" name="techs" 
            value="Angularjs" onChange={studentsForm.handleChange}/>Angularjs
            <input type="checkbox" name="techs" 
            value="Reactjs" onChange={studentsForm.handleChange}/>Reactjs<br/><br/>
            <b>Country:</b>
            <select name="country" onChange={studentsForm.handleChange}>
                <option  disabled selected>Select Country</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Sweden">Sweden</option>
                <option value="UK">UK</option>
            </select><br/><br/>
            <button style={{marginRight:"2%"}}>ShowData</button>
            <button onClick={()=>{{studentsForm.resetForm()}}} type="reset">ClearData</button>
        </form>
            <table className="table table-border">
             <thead>
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
                 {submitData.map((data) => (
                  <tr>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.gender}</td>
                  <td>{data.age}</td>
                  <td>{data.techs}</td> 
                  <td>{data.country}</td>
                  </tr>
              ))}
            </tbody>
          </table>
          </div>
   )
}

export default StudentsForm;