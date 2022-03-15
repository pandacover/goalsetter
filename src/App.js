import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Register } from "./pages"
import { Header, EditForm } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const App = () => {
  const [goals, setGoals] = useState({
    _id: "",
    text: ""
  })

  const dispatchEditGoals = (value) => {
    setGoals(value)
  }

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="*" element={<Dashboard payload={{ goals, dispatchEditGoals }} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path={`/edit/${goals._id}`} element={<EditForm payload={goals} />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
