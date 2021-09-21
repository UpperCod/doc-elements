import { c, css } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { setup } from "@uppercod/markdown-inline";
import { h } from "atomico";
import { tokensSpace, tokenBorder, tokensPattern } from "../tokens";
import { Pagination } from "../pagination/pagination";

let id = 0;

function content(props) {
    const md = setup(h, {
        code: "doc-code",
        table: "doc-table",
        quote: "doc-quote",
        ...props.tags,
    });

    const [first, ...children] = md.call(null, [props.value]);

    let frontmatter = {};

    if (first.props.meta) {
        const [
            {
                children: [child],
            },
        ] = first.children;

        frontmatter = JSON.parse(
            `{${child
                .replace(/\s*([^:]+):\s*(.*)/g, '"$1":"$2",')
                .replace(/,$/, "")}}`
        );
        if (frontmatter.title) {
            children.unshift(
                <h1 slot="header" key="header">
                    {frontmatter.title}
                </h1>
            );
        }
        if (frontmatter.description) {
            children.unshift(
                <p slot="header" key="header">
                    {frontmatter.description}
                </p>
            );
        }
    } else {
        children.unshift(first);
    }

    useRender(() =>
        children
            .map((child) => ({
                ...child,
                props: { ...child.props, key: props.key || id++ },
            }))
            .concat(
                <style key="style">{`::marker{font-weight:bold}`}</style>,
                <Pagination key="pagination" slot="footer"></Pagination>
            )
    );

    return (
        <host shadowDom>
            <div class="content-padding content-header">
                <slot name="header"></slot>
            </div>
            <div class="content-padding content-markdown">
                <slot></slot>
            </div>
            <div class="content-footer">
                <slot name="footer"></slot>
            </div>
        </host>
    );
}

content.props = {
    slot: {
        type: String,
        reflect: true,
        value: "content",
    },
    value: String,
    tags: Object,
};

content.styles = [
    tokensSpace,
    tokenBorder,
    tokensPattern,
    css`
        :host {
            display: flex;
            border-left: var(--border-split);
            border-right: var(--border-split);
            line-height: 1.75rem;
            flex-flow: column nowrap;
        }
        .content-padding {
            padding: 0 var(--space-p10);
            box-sizing: border-box;
        }

        .content-header {
            border-bottom: var(--border-split);
            padding-top: var(--space-l);
            padding-bottom: var(--space-xs);
            min-height: 200px;
            align-items: flex-end;
            display: flex;
            box-sizing: border-box;
            background: var(--pattern-background);
        }
        .content-markdown {
            padding-top: var(--space-xs);
            padding-bottom: var(--space-xs);
        }
        .content-footer {
            margin: auto 0px 0px;
            border-top: var(--border-split);
        }
        ::slotted([slot="header"]) {
            margin: 0px;
        }

        ::slotted(doc-code) {
            margin: 0px;
        }
        ::slotted(ol) {
            list-style-type: decimal-leading-zero;
        }

        :host-context(ul li::marker) {
            font-weight: bold;
        }
    `,
];

export const Content = c(content);
