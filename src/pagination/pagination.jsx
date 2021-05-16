import { c } from "atomico";
import style from "./pagination.css";
export { PaginationItem } from "./pagination-item.jsx";

export function pagination() {
  return (
    <host shadowDom>
      <style>{style}</style>
      <slot></slot>
    </host>
  );
}

pagination.props = {
  next: Object,
  prev: Object,
};

export const Pagination = c(pagination);
