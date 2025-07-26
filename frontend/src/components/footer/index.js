import classes from "./index.module.css";
import { useState } from "react";

export default function Footer(props) {
    const [text, setText] = useState(0);
    return (
        <footer className={classes.footer}>
            <div onClick={() => setText(text + 1)}>
                {/* {text > 2 ? "Roshani" : "Made with"} ❤️ {text > 2 ? "Sonika" : "by team Zenith"} */}
                Made by ❤️ Sonika 
            </div>
        </footer>
    );
}