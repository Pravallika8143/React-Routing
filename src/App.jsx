import Counter from "./Counter";
import StudentsForm from "./StudentsForm";
import StudentsTable from "./StudentsTable";
import Todolist from "./Todolist";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">Routing</h1>

      <ul className="nav justify-content-center flex-wrap gap-3 mb-4">
        
        <li className="nav-item">
          <Link 
            to="/counter" 
            className="btn btn-outline-primary px-4 py-2 fw-semibold"
          >
            Counter
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/todolist" 
            className="btn btn-outline-success px-4 py-2 fw-semibold"
          >
            Todolist
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/studentlist" 
            className="btn btn-outline-warning px-4 py-2 fw-semibold"
          >
            All Students
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/addStudent" 
            className="btn btn-outline-info px-4 py-2 fw-semibold"
          >
            New Student
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/food" 
            className="btn btn-outline-danger px-4 py-2 fw-semibold"
          >
            Recipes
          </Link>
        </li>
      </ul>

      {/* Display Components */}
      <div className="mt-3 p-3 border rounded shadow-sm bg-light">
        <Outlet />
      </div>

    </div>
  );
}

export default App;


// 1. links
// 2. routes
// 3. place holder for display component
