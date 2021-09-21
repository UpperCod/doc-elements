import { c, css, useRef } from "atomico";
import { tokensSpace, tokenBorder, tokensPage } from "../tokens";
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
    css`
        :host {
            width: 100%;
            display: block;
            border-bottom: var(--border-split);
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: auto;
            max-width: var(--page-width);
            padding: var(--space-y2) var(--space-x2);
            box-sizing: border-box;
        }
        .header-nav {
            display: grid;
            grid-gap: var(--space-x);
            grid-template-columns: repeat(var(--columns), auto);
        }
    `,
];

export const Header = c(header);
