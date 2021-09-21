import { c, css } from "atomico";
import { PaginationItem } from "./pagination-item.jsx";
export { PaginationItem } from "./pagination-item.jsx";
import { useChannel } from "@atomico/hooks/use-channel";
import { useRender } from "@atomico/hooks/use-render";
import { tokensSpace } from "../tokens";

function pagination() {
    const [{ groupSources = [], currentSource } = {}] =
        useChannel("DocSources");

    const list = groupSources.map((item) => item.sources).flat(2);

    const index = list.indexOf(currentSource);

    const getPaginationItem = (index, align) =>
        list[index] && (
            <PaginationItem
                label={list[index].label}
                href={list[index].href}
                align={align}
            ></PaginationItem>
        );

    useRender(
        () =>
            !!~index && [
                getPaginationItem(index - 1, "left"),
                getPaginationItem(index + 1, "right"),
            ]
    );

    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

pagination.styles = [
    tokensSpace,
    css`
        :host {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            padding: 0 var(--space-p10);
        }
    `,
];

export const Pagination = c(pagination);
