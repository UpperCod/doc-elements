import { c } from "atomico";
import style from "./button.css";

function button() {
    return (
        <host shadowDom>
            <style>{style}</style>
            <button>
                <slot></slot>
            </button>
        </host>
    );
}

button.props = {
    dark: {
        type: Boolean,
        reflect: true,
    },
};

export const Button = c(button);
