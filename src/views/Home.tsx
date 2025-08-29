import { Link } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";
import FileSelection from "../components/FileSelection";
const Home = () => {
    async function sayHi() {
        alert(await invoke("say_something"));
    }
    return (
    <div> 
        <h1> Neural Commons</h1>
        <Link to="/import"> Go to Import Gallery</Link>
        <FileSelection />
    </div>
    )
}


export default Home;

