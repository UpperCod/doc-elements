---
title: Markdown
---

The markdown syntax is supported thanks to [@uppercod/markdown-inline](https://github.com/UpperCod/markdown-inline) of only 1kB.

## JS

The use of template-string allows inserting HTML and JSX content, delivering an experience similar to MDX.

```js
import md from "doc-elements/md";

export const meta = {
    title: "my page",
};

export default md`
# welcome!

bla bla bla...

## block code

~~~jsx
const x = <host></host>;
~~~
`;
```

**To use html within the JSX import the `atomico/html` model**, example:

```js
import html from "atomico/html";
import md from "doc-elements/md";

export const meta = {
    title: "my page",
};

export default md`
# welcome!

${html`<button></button>`}
`;
```

**JSX Compatible**
