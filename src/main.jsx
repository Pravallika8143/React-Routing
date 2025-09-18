import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./Counter.jsx";
import Todolist from "./Todolist.jsx";
import StudentsTable from "./StudentsTable.jsx";
import RecipesMaster from "./RecipesMaster.jsx";
import RecipeDetails from "./RecipeDetails.jsx";
import StudentsForm from "./StudentsForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/studentlist",
        element: <StudentsTable></StudentsTable>,
      },
      {
        path: "/food",
        element: <RecipesMaster></RecipesMaster>,
      },
      {
        path: "/recipeDetails/:id",
        element: <RecipeDetails></RecipeDetails>,
      },
      {
        path: "/addStudent",
        element: <StudentsForm></StudentsForm>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

//  <li>
//           <Link to="/todolist">Todolist</Link>
//         </li>
//         <li>
//           <Link to="/studentlist">All Student</Link>
//         </li>
//         <li>
//           <Link to="/addStudent">NewStudent</Link>
//         </li>