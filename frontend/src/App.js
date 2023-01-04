import React, { createContext, useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarNew from "./Components/NavbarNew";
import HomeNew from "./Components/HomeNew";
import BrowseContest from "./Components/BrowseContest";
import CreateContest from "./Components/CreateContest";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Logout from "./Components/Logout";
import CreateTwo from "./Components/CreateContest2";
import ContestOpen from "./Components/ContestOpen";
import AboutMe from "./Components/AboutMe";
import Events from "./Components/Events";

import { initialState, reducer } from "../src/reducer/UseReducer";

// 1: contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeNew />} />
      <Route path="/create" element={<CreateContest />} />
      <Route path="/browse" element={<BrowseContest />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/createtwo" element={<CreateTwo />} />
      <Route path="/contestopen/:id" element={<ContestOpen />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <NavbarNew />
        <Routing />
      </UserContext.Provider>
    </div>
  );
};

export default App;
