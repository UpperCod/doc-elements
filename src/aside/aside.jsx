import { c, css } from "atomico";
import { tokensSpace } from "../tokens";

function aside() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

aside.props = {
    view: {
        type: String,
        reflect: true,
    },
};

aside.styles = [
    tokensSpace,
    css`
        :host {
            display: grid;
            position: sticky;
            top: 0;
            padding: var(--space-x2);
            grid-gap: var(--space-y2);
        }
    `,
];

export const Aside = c(aside);
