import { c } from "atomico";
import style from "./table.css";

function table() {
    return (
        <host shadowDom>
            <table>
                <slot></slot>
            </table>
        </host>
    );
}

table.styles = style;

export const Table = c(table);
