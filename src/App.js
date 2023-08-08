import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import DashBoard from './components/DashBoard';
//import LogIn from './components/LogIn';
//import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <div>
        {/* <SignUp /> */}
        {/* <LogIn /> */}
        <DashBoard />
      </div>
    </>
  );
}

export default App;



// <Router>
    //   <Routes>
    //     <Route exact path="/" component={SignIn} />
    //     <Route path="/" component={SignUp} />
    //     <Route path="/" component={DashBoard} />
    //     <Route path="/" component={LogIn} />
          
   
    //   <main>
    //     <Routes>
          
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/login" element={<LogIn />} />
    //       <Route path="/signin" element={<SignIn />} />
    //       <Route path="/dashboard" element={<DashBoard />} />
          
   

    // <Router>
    //   <div>
    //     <main>
    //       <Routes>
    //         <Route path="/signup" element={<SignUp />} />
    //         <Route path="/login" element={<LogIn />} />
    //         <Route path="/dashboard" element={<DashBoard />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </Router>