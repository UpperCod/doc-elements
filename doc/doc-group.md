---
title: doc-group
---

Crea las rutas asociadas a la documentacion, puedes crear mas de un grupo.

# Ejemplo

```html
<doc-group label="Welcome">
    <doc-source path="/" label="my file" load="./my-file.js">
    <doc-source label="my file" load="./my-file.md">
</doc-group>
```

## Propiedades

| Propiedadad | Tipo   | Descripcion                                                                             |
| ----------- | ------ | --------------------------------------------------------------------------------------- |
| label       | String | define un encabeado para el grupo, este a su vez pasa a ser el folder para `doc-source` |
