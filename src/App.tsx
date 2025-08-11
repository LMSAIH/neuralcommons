import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import ImportGallery from "./views/ImportGallery";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
    saySomething();
  }

  async function saySomething() {
    alert(await invoke("say_something"));
  }

  return (
  
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/import" element={<ImportGallery />} />
      </Routes>
    </Router>

  );
}

export default App;
