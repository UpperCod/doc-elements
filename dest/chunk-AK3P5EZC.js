// src/md.js
import {setup} from "@uppercod/markdown-inline";
import {h} from "atomico";
var md_default = setup(h, {
  code: "doc-code",
  table: "doc-table"
});

export {
  md_default
};
