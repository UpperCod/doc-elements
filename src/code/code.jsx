import { c, css, useHost, useMemo, useRef } from "atomico";
import { Preview } from "../preview/preview.jsx";
import { useCopy } from "@atomico/hooks/use-copy";
import { usePromise } from "@atomico/hooks/use-promise";
import { tokensColor, tokensSpace } from "../tokens";
import { useSlot } from "@atomico/hooks/use-slot";

import { themeA11yDark } from "./theme";

function code({ type }) {
    const host = useHost();
    const copy = useCopy(host);
    const ref = useRef();
    const slot = useSlot(ref);
    const test = (type || "").match(/(.*)\s+(.*)/);
    let [, format = type, preview] = test || [];

    const code = slot.find((item) => item instanceof Element);

    const [html = "", state] = usePromise(
        async () => {
            const Prism = await import("https://cdn.skypack.dev/prismjs");
            try {
                return format
                    ? Prism.highlight(
                          code.textContent,
                          Prism.languages[format],
                          format
                      )
                    : "";
            } catch {
                return "";
            }
        },
        !!code,
        [code, format]
    );

    return (
        <host shadowDom preview={!!preview}>
            {preview == "preview" && format == "html" && (
                <Preview
                    class="preview"
                    innerHTML={host.current.textContent}
                ></Preview>
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
                    <button class="button-copy" onclick={copy}>
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
                    </button>
                </div>
            )}
        </host>
    );
}

code.props = {
    type: String,
    preview: {
        type: Boolean,
        reflect: true,
    },
};

code.styles = [
    tokensSpace,
    tokensColor,
    themeA11yDark,
    css`
        :host {
            max-width: 100%;
            display: block;
            margin: 0.9em;
            --radius: 0.5rem;
        }
        .code {
            width: 100%;
            position: relative;
        }

        .pre,
        .preview {
            padding: var(--space-xs);
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
            border-radius: var(--radius);
        }

        .button-copy {
            position: absolute;
            top: 4px;
            right: 4px;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.25);
            border: none;
            color: var(--code-color, #76ffdf);
            cursor: pointer;
            opacity: 0;
            transition: 0.3s ease all;
            border-radius: calc(var(--radius) * 0.75);
        }

        .button-copy:active {
            background: rgba(0, 0, 0, 0);
        }

        ::slotted(code),
        code {
            padding: 0px !important;
            white-space: unset !important;
        }

        :host(:hover) .button-copy {
            opacity: 1;
        }

        :host([preview]) .pre {
            border-radius: 0px 0px var(--radius) var(--radius);
        }

        :host([preview]) .preview {
            border-radius: var(--radius) var(--radius) 0px 0px;
        }
    `,
];

export const Code = c(code);
