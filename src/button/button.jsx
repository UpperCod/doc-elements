import { c } from "atomico";
import style from "./button.css";

function button() {
    return (
        <host shadowDom>
            <button>
                <slot></slot>
            </button>
        </host>
    );
}

button.styles = style;

button.props = {
    dark: {
        type: Boolean,
        reflect: true,
    },
};

export const Button = c(button);
