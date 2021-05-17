import { c } from "atomico";
import style from "./preview.css";

function preview() {
    return (
        <host shadowDom>
            <style>{style}</style>
            <div>
                <slot></slot>
            </div>
        </host>
    );
}

export const Preview = c(preview);
