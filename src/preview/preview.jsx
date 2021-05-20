import { c } from "atomico";
import style from "./preview.css";

function preview() {
    return (
        <host shadowDom>
            <div>
                <slot></slot>
            </div>
        </host>
    );
}

preview.styles = style;

export const Preview = c(preview);
