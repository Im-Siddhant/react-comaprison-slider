import React from "react";
import ReactDOM from "react-dom";
import { install } from "resize-observer";

import "./styles.css";
import { App } from "./App";

// Polyfill for legacy browsers https://caniuse.com/resizeobserver
if (!window.ResizeObserver) install();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
