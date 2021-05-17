import { setup } from "@uppercod/markdown-inline";
import { h } from "atomico";

export default setup(h, {
    code: "doc-code",
    table: "doc-table",
    quote: "doc-quote",
});
