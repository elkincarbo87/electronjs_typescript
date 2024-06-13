import React from "react";
import { createRoot } from "react-dom/client";
import { MyComponent } from "./components/MyComponent";

const App = () => (
  <div>
    <h1>Hello, Electron with React!</h1>
    <MyComponent />
  </div>
);

const container = document.getElementById("root");
const root = container && createRoot(container); // createRoot(container!) if you use TypeScript
root && root.render(<App />);

// taking values from the bridge
// const information = document.getElementById("info");
// const brigeInfo = document.getElementById("brigde");
// // should only run when is running the desktop app, in webpack will not work
// try {
//   information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;

//   const func = async () => {
//     const response = await window.versions.ping();
//     console.log(response); // prints out 'pong'
//     brigeInfo.innerText = response;
//   };

//   func();
// } catch (e) {}
