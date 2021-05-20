import { c } from "atomico";
import style from "./hero.css";

function hero() {
    return (
        <host shadowDom>
            <slot name="title"></slot>
        </host>
    );
}

hero.styles = style;

export const Hero = c(hero);
