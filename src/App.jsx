import Counter from "./Counter";
import StudentsForm from "./StudentsForm";
import StudentsTable from "./StudentsTable";
import Todolist from "./Todolist";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="border border-3 p-2 m-2 border-black">
      <h1>This is APP</h1>
      <ul style={{listStyle:"none"}}>
        <li>
          <Link to="/counter" style={{textDecoration:"none", color:"black"}}>Counter</Link>
        </li>
        <li>
          <Link to="/todolist" style={{textDecoration:"none", color:"black"}}>Todolist</Link>
        </li>
        <li>
          <Link to="/studentlist" style={{textDecoration:"none", color:"black"}}>All Student</Link>
        </li>
        <li>
          <Link to="/addStudent" style={{textDecoration:"none", color:"black"}}>NewStudent</Link>
        </li>
        <li>
          <Link to="/food" style={{textDecoration:"none", color:"black"}}>Recipes</Link>
        </li>
      </ul>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App

// 1. links
// 2. routes
// 3. place holder for display component
