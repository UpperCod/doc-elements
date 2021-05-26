import { c } from "atomico";
import style from "./pagination.css";
export { PaginationItem } from "./pagination-item.jsx";

function pagination() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

pagination.styles = style;

pagination.props = {
    next: Object,
    prev: Object,
};

export const Pagination = c(pagination);
