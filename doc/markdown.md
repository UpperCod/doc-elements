---
title: Markdown
---

The markdown syntax is supported thanks to [@uppercod/markdown-inline](https://github.com/UpperCod/markdown-inline) of only 1kB.

## preview and inject from markdown

`@uppercod/markdown-inline` does not allow the use of html, for this you must declare a block of code type `html inject` or `html preview`, **this does not escape the injection of scripts**.

**html inject**: inject direct code

```html inject
<button>my button</button>
```

**html preview**: inject direct code, but add the preview container and display the code.

```html preview
<button>my button</button>
```

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
