import "./App.css";
import WhiteH from "./WhiteH";
import FrontImg from "./frontImg";
import Work from "./Work";
import Option from "./Option";
import Areas from "./Areas";
import Facts from "./Facts";
import MenteeReg from "./MenteeReg";
import { Route, Routes } from "react-router-dom";
import MentorReg from "./MentorReg";
import Login from "./Login";
import MentorGrid from "./MentorGrid";
import HomePage from "./HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/become-a-mentor" element={<MentorReg />} />
      <Route path="/become-a-mentee" element={<MenteeReg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mentors" element={<MentorGrid />} />
    </Routes>
  );
}

export default App;
