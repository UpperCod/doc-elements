import { c, css } from "atomico";
import { tokensSpace, tokensColor } from "../tokens";

function source(props) {
    return (
        <host shadowDom>
            <div class="souce-row">
                <div class="source-mark"></div>
                <slot class="source-label">
                    <span>{props.label}</span>
                </slot>
            </div>
        </host>
    );
}

source.props = {
    href: {
        type: String,
        reflect: true,
    },
    label: String,
    src: String,
    active: {
        type: Boolean,
        reflect: true,
    },
};

source.styles = [
    tokensSpace,
    tokensColor,
    css`
        :host {
            cursor: pointer;
        }
        :host([active]) .source-mark {
            opacity: 1;
        }
        :host([active]) .source-label {
            font-weight: 700;
        }
        .souce-row {
            display: grid;
            align-items: center;
            grid-template-columns: auto 100%;
            grid-gap: 15px;
        }
        .source-mark {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: var(--primary);
            opacity: 0;
        }
        .source-label {
            font-size: 0.875rem;
        }
    `,
];

export const Source = c(source);
