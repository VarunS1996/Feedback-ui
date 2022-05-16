import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes /*NavLink*/, } from "react-router-dom";
// import Card from "./Components/shared/Card";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconList from "./Components/AboutIconList";
import Post from "./Components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
            ></Route>
            <Route path="/about" element={<AboutPage />}>
              This is the about route
            </Route>
            <Route path="/post/*" element={<Post />}>
              This is the Post
            </Route>
          </Routes>
          {/* <Card>
            <NavLink to='/' activeClassName='active'>
                Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
                About Us
            </NavLink>
          </Card> */}
        </div>
        <AboutIconList></AboutIconList>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
