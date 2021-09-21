export {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
    RouterLink,
} from "@atomico/components/router";

import { Container } from "./container/container.jsx";
export { Container } from "./container/container.jsx";

import { Aside } from "./aside/aside.jsx";
export { Aside } from "./aside/aside.jsx";

import { Header } from "./header/header.jsx";
export { Header } from "./header/header.jsx";

import { Source } from "./source/source.jsx";
export { Source } from "./source/source.jsx";

import { Group } from "./group/group.jsx";
export { Group } from "./group/group.jsx";

import { Pagination, PaginationItem } from "./pagination/pagination.jsx";
export { Pagination, PaginationItem } from "./pagination/pagination.jsx";

import { Code } from "./code/code.jsx";
export { Code } from "./code/code.jsx";

import { Button } from "./button/button.jsx";
export { Button } from "./button/button.jsx";

import { Table } from "./table/table.jsx";
export { Table } from "./table/table.jsx";

import { Quote } from "./quote/quote.jsx";
export { Quote } from "./quote/quote.jsx";

import { Preview } from "./preview/preview.jsx";
export { Preview } from "./preview/preview.jsx";

import { Content } from "./content/content.jsx";
export { Content } from "./content/content.jsx";

customElements.define("doc-container", Container);
customElements.define("doc-aside", Aside);
customElements.define("doc-header", Header);
customElements.define("doc-source", Source);
customElements.define("doc-group", Group);
customElements.define("doc-pagination", Pagination);
customElements.define("doc-pagination-item", PaginationItem);
customElements.define("doc-button", Button);
customElements.define("doc-table", Table);
customElements.define("doc-quote", Quote);
customElements.define("doc-preview", Preview);
customElements.define("doc-content", Content);

customElements.define("doc-code", Code);
