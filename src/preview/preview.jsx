import { c, css } from "atomico";
import { tokensColor } from "../tokens";

function preview() {
    return (
        <host shadowDom>
            <div>
                <slot></slot>
            </div>
        </host>
    );
}

preview.styles = [
    tokensColor,
    css`
        :host {
            background: var(--preview-background, #f1f9f9);
            display: flex;
            padding: 2rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
        }
    `,
];

export const Preview = c(preview);
