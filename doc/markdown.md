---
title: Markdown
---

La sintaxis de markdown es soportada gracias a @uppercod/markdown-inline de tan solo 1kB.

ud puede usar markdown desde un fichero JS o Md.

## JS

El uso de template-string permite insertar contenido HTML y JSX, entregando una experiencia similar a MDX.

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

**Para usar html dentro del JSX importe el modulo `atomico/html`**, ejemplo:

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

**Compatible con JSX**
