import React from 'react'
// //import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

//import SignUp from './components/SignUp';
//import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';


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

export default App

  
        
     //My routing did not work so i just had to comment it out to be able to work on each page individually

    // <Router>
    //   <nav>
    //     <Link to="/signup">Sign Up</Link>
    //     <Link to="/login">Log In</Link>
    //     <Link to="/dashboard">DashBoard</Link>
    //   </nav>
    //   <Switch>
    //     <Route path="/signup" component={SignUp} />
    //     <Route path="/login" component={LogIn} />
    //     <Route path="/dashboard" component={DashBoard} />
    //   </Switch>
    // </Router>


    // <Router>
    //   <nav>
    //     <Link to="/signup">Sign Up</Link>
    //     <Link to="/login">Log In</Link>
    //     <Link to="/dashboard">Dash Board</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/signup" element={<SignUp />} />
    //     <Route path="/login" element={<LogIn />} />
    //     <Route path="/dashboard" element={<DashBoard />} />
    //   </Routes>
    // </Router>


// function App() {
//   return (
//     <>
//         <div>
//         {/* <SignUp /> */}
//         <LogIn />
//         {/* <DashBoard /> */}
//       </div>
//     </>
//   );
// };

// export default App;