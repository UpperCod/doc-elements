import { c, css, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";

/**
 *
 * @param {import("atomico").Props<group.props>}  props
 */
function group({ label }) {
    const ref = useRef();
    const sources = useSlot(ref);
    return (
        <host
            shadowDom
            sources={sources.filter((child) => child instanceof HTMLElement)}
        >
            <slot name="label">
                <strong>{label}</strong>
            </slot>
            <slot ref={ref}></slot>
        </host>
    );
}

group.props = {
    label: String,
    sources: {
        type: Array,
        event: {
            type: "ChangeSources",
            bubbles: true,
        },
        /**
         *
         * @returns {Source["Props"][]}
         */
        value: () => [],
    },
};

group.styles = css`
    :host {
        display: grid;
        grid-gap: 15px;
    }
    slot[name="label"] {
        font-size: 18px;
    }
`;

export const Group = c(group);
