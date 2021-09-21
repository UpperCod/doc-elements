import { c, css } from "atomico";
import { tokensSpace } from "../tokens";

/**
 *
 * @param {import("atomico").Props<paginationItem.props>}props
 * @returns
 */
function paginationItem({ label, description, align }) {
    return (
        <host shadowDom>
            <svg
                style={
                    align == "right"
                        ? `margin-left: 1rem`
                        : `margin-right: 1rem`
                }
                width="7.656"
                height="13.314"
                viewBox="0 0 7.656 13.314"
            >
                <path
                    d={
                        align == "right"
                            ? "M.707,13.435a1,1,0,0,1,0-1.415l4.95-4.95L.707,2.121A1,1,0,0,1,2.121.707L7.778,6.364a1,1,0,0,1,0,1.414L2.121,13.435a1,1,0,0,1-1.414,0Z"
                            : "M7.778,13.435a1,1,0,0,0,0-1.415l-4.95-4.95,4.95-4.95A1,1,0,0,0,6.364.707L.707,6.364a1,1,0,0,0,0,1.414l5.656,5.657a1,1,0,0,0,1.414,0Z"
                    }
                    transform="translate(-0.414 -0.414)"
                    fill="currentColor"
                />
            </svg>
            <div class="content">
                <slot name="label">
                    <strong>{label}</strong>
                </slot>
                <slot name="description">
                    <strong>{description}</strong>
                </slot>
            </div>
        </host>
    );
}

paginationItem.props = {
    href: {
        type: String,
        reflect: true,
    },
    align: {
        type: String,
        reflect: true,
    },
    label: String,
    description: String,
};

paginationItem.styles = [
    tokensSpace,
    css`
        :host {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            padding: var(--space-s) 0px;
        }

        :host([href]) {
            cursor: pointer;
        }

        :host([align="right"]) {
            grid-template-columns: 1fr auto;
        }

        :host([align="right"]) .content {
            order: -1;
        }
    `,
];

export const PaginationItem = c(paginationItem);
