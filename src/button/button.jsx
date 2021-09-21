import { c, css } from "atomico";

function button() {
    return (
        <host shadowDom>
            <button>
                <slot></slot>
            </button>
        </host>
    );
}

button.styles = css`
    button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100rem;
        background-color: var(--doc-button--bgcolor, #fff);
        border: 1px solid var(--doc-button--border-color, #ececec);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    :host([dark]) button {
        color: var(--doc-button--border, #ececec);
        border: none;
        background: var(--doc-button--bgcolor-dark, #000);
    }
`;

button.props = {
    dark: {
        type: Boolean,
        reflect: true,
    },
};

export const Button = c(button);
