import { c, css, useHost, useMemo, useRef } from "atomico";
import { Button } from "../button/button.jsx";
import { Preview } from "../preview/preview.jsx";
import { useCopy } from "@atomico/hooks/use-copy";
import { tokensColor, tokensSpace } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";
import Prism from "https://cdn.skypack.dev/prismjs";
import { themeA11yDark } from "./theme";

function code({ type }) {
    const host = useHost();
    const copy = useCopy(host);
    const ref = useRef();
    const slot = useSlot(ref);
    const test = (type || "").match(/(.*)\s+(.*)/);
    let [, format = type, preview] = test || [];

    const code = slot.find((item) => item instanceof Element);

    const html = useMemo(
        () =>
            code && format
                ? Prism.highlight(
                      code.textContent,
                      Prism.languages[format],
                      format
                  )
                : "",
        [code, format]
    );

    return (
        <host shadowDom>
            {preview == "preview" && format == "html" && (
                <Preview innerHTML={host.current.textContent}></Preview>
            )}
            {preview == "inject" && format == "html" && (
                <div class="inject" innerHTML={host.current.textContent}></div>
            )}
            {preview != "inject" && (
                <div class="code">
                    <pre class="pre">
                        <slot
                            style={html ? "display: none" : ""}
                            ref={ref}
                        ></slot>
                        {html && <code innerHTML={html}></code>}
                    </pre>
                    <div class="button-align">
                        <Button
                            type="circle"
                            class="button-copy"
                            onclick={copy}
                        >
                            <svg width="13" height="13" viewBox="0 0 13 13">
                                <rect
                                    rx="1"
                                    ry="1"
                                    width="10"
                                    height="2"
                                    fill="currentColor"
                                ></rect>
                                <rect
                                    rx="1"
                                    ry="1"
                                    width="2"
                                    height="10"
                                    fill="currentColor"
                                ></rect>
                                <rect
                                    width="8"
                                    height="8"
                                    rx="1"
                                    ry="1"
                                    x="4"
                                    y="4"
                                    fill="transparent"
                                    stroke-width="2"
                                    stroke="currentColor"
                                ></rect>
                            </svg>
                        </Button>
                    </div>
                </div>
            )}
        </host>
    );
}

code.props = {
    type: String,
};

code.styles = [
    tokensSpace,
    tokensColor,
    themeA11yDark,
    css`
        :host {
            display: block;
            margin: 0.9em;
        }
        .code {
            position: relative;
        }

        .pre,
        .inject {
            padding: var(--space-y2);
        }

        .pre {
            width: 100%;
            display: block;
            overflow-x: auto;
            box-sizing: border-box;
            background-color: var(--code-background, #263946);
            color: var(--code-color, #76ffdf);
            font-size: 0.9em;
            line-height: 1.4em;
            margin: 0px;
        }

        .button-align {
            position: absolute;
            top: 50%;
            right: 0px;
            transform: translate(50%, -50%);
        }

        .button-copy {
            display: block;
            transition: 0.2s ease all;
        }

        .button-copy:active {
            transform: scale(0.8);
        }

        ::slotted(code) {
            padding: 0px !important;
            white-space: unset !important;
        }

        @media (max-width: 480px) {
            .button-copy {
                display: none;
            }
        }
    `,
];

export const Code = c(code);
