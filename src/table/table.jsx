import { c, css } from "atomico";

function table() {
    return (
        <host shadowDom>
            <table>
                <slot></slot>
            </table>
        </host>
    );
}

table.styles = css`
    :host {
        display: block;
        overflow-x: auto;
    }

    table {
        font-size: 0.9em;
        width: 100%;
        border-collapse: collapse;
    }
    :host-context(h1) {
        font-weight: 300;
    }
`;

export const Table = c(table);
