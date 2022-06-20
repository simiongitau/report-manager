import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import Verification from "./component/verification/Verification";
import Register from "./component/register/Register";
import Fileupload from "./component/fileupload/Fileupload";
import Feedback from "./component/feedback/Feedback";
import Correction from "./component/collection/Correction";
import Document from "./component/document_view/Document";
import Client from "./component/Client_view/Client_view";
import Admin from "./component/admin_view/Admin";
// import Test from "./component/Test";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/fileupload" element={<Fileupload />} />
        <Route path="/correction" element={<Correction />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Document" element={<Document />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
