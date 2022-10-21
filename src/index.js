import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

import theme from "./theme";

import HomePage from "./views/HomePage";
import FunStuffPage from "./views/FunStuffPage";
import ExperiencePage from "./views/ExperiencePage";
import ProjectsPage from "./views/ProjectsPage";

const routing = (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/fun-stuff" element={<FunStuffPage />} />
        <Route exact path="/experience" element={<ExperiencePage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />

        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  </ThemeProvider>
);

// ReactGA.initialize("UA-140221499-1");
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
