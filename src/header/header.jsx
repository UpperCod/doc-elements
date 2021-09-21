import { c, css, useRef } from "atomico";
import { tokensSpace, tokenBorder, tokensPage, tokensColor } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";

function header() {
    const refSlot = useRef();
    const slot = useSlot(refSlot);
    return (
        <host shadowDom>
            <div class="header">
                <slot name="brand"></slot>
                <div
                    class="header-nav"
                    style={`--columns: ${
                        slot.filter((child) => child instanceof Element).length
                    }`}
                >
                    <slot ref={refSlot}></slot>
                </div>
            </div>
        </host>
    );
}

header.props = {
    slot: {
        type: String,
        reflect: true,
        value: "header",
    },
};

header.styles = [
    tokensSpace,
    tokenBorder,
    tokensPage,
    tokensColor,
    css`
        :host {
            width: 100%;
            display: block;
            border-bottom: var(--border-split);
            background: var(--primary);
            color: var(--primary-contrast);
            overflow-x: auto;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: auto;
            max-width: var(--page-width);
            padding: var(--space-xs) var(--space-s);
            box-sizing: border-box;
        }
        .header-nav {
            display: grid;
            grid-gap: var(--space-xs);
            grid-template-columns: repeat(var(--columns), auto);
        }
        ::slotted(a) {
            text-decoration: none;
            color: unset;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 1px;
            padding: var(--space-xs);
        }
    `,
];

export const Header = c(header);
