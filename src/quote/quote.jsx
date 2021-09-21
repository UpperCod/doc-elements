import { c, css } from "atomico";
import { tokensSpace, tokensColor } from "../tokens";

function quote() {
    return (
        <host shadowDom>
            <div class="quote">
                <svg
                    viewBox="0 0 120 180"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="1rem"
                >
                    <path d="M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z" />
                </svg>
                <svg
                    viewBox="0 0 120 180"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="1rem"
                >
                    <path d="M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z" />
                </svg>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </host>
    );
}

quote.styles = [
    tokensColor,
    tokensSpace,
    css`
        :host {
            display: flex;
            flex-flow: row wrap;
        }

        .quote {
            padding-right: var(--space-xs);
            padding-top: 0.2em;
        }

        .quote svg:first-child {
            margin-right: 0.2rem;
        }

        .content {
            flex: 0%;
        }

        svg {
            fill: var(--primary);
        }
    `,
];

export const Quote = c(quote);
