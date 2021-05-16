---
title: doc-source
---

Asocia un recurso a doc-group, este recurso puede ser un vinculo, importacion dinamica o archivo markdown, ejemplo:

**importacion dinamica**

**html**:

```html
<doc-source label="My code" load="./my-code.js"></doc-source>
```

**jsx**:

```jsx
const myCode = () => import("./my-code.js");

function myDoc() {
  return (
    <host>
      <doc-container>
        <doc-group>
          <doc-source label="My code" load={myCode}></doc-source>
        </doc-group>
      </doc-container>
    </host>
  );
}
```

**markdown**

```html
<doc-source label="My code" load="./my-code.md"></doc-source>
```

## Propiedades

| Propiedad | Tipo             | Descripcion                                        |
| --------- | ---------------- | -------------------------------------------------- |
| label     | String           | define el label para el menu que asocia el recurso |
| path      | String, opcional | permite modificar la ruta generada por defecto     |
| load      | Function, String | carga el recurso al momento del match con la ruta  |
