import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";

import { Route, Routes, createBrowserRouter } from "react-router-dom";

import Issue from "./pages/Issue";
import Books from "./pages/Books";
import Student from "./pages/Student";
import Sidemenu from "./components/Sidemenu";
import AddBook from "./pages/AddBook";
import StudentList from "./pages/StudentList";
import IssueBookList from "./pages/IssueBookList";

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "books/:contactId",
//     element: <Contact />,
//   },
// ]);

function App() {
  return (
    <div className="flex w-full App ">
      <Sidemenu />

      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
     
        <Route path="issue" element={<Issue />} />
        <Route  path="/" element={<Books />}/>
        <Route path="addbook" element={<AddBook />} />
        <Route path="studentlist" element={<StudentList />} />
        <Route path="issuelist" element={<IssueBookList/>} />
        <Route path="/users" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
