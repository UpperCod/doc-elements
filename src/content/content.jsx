import { c, css } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { setup } from "@uppercod/markdown-inline";
import { h } from "atomico";
import { tokensSpace, tokenBorder, tokensPattern } from "../tokens";

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
            children.unshift(<h1 slot="header">{frontmatter.title}</h1>);
        }
        if (frontmatter.description) {
            children.unshift(<p slot="header">{frontmatter.description}</p>);
        }
    } else {
        children.unshift(first);
    }

    useRender(() => children);

    return (
        <host shadowDom>
            <div class="content-padding content-header">
                <slot name="header"></slot>
            </div>
            <div class="content-padding content-markdown">
                <slot></slot>
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
            display: block;
            border-left: var(--border-split);
            border-right: var(--border-split);
            line-height: 1.75rem;
        }
        .content-padding {
            padding: 0 var(--space-x2);
            box-sizing: border-box;
        }
        .content-header {
            border-bottom: var(--border-split);
            padding-top: var(--space-y4);
            padding-bottom: var(--space-y2);
            min-height: 200px;
            align-items: flex-end;
            display: flex;
            box-sizing: border-box;
            background: var(--pattern-background);
        }
        .content-markdown {
            padding-top: var(--space-y2);
            padding-bottom: var(--space-y2);
        }
        ::slotted([slot="header"]) {
            margin: 0px;
        }

        ::slotted(doc-code) {
            margin: 0px calc(var(--space-x2) * -1);
        }
    `,
];

export const Content = c(content);
