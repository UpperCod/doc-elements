---
title: doc-group
---

Create the routes associated with the documentation, you can create more than one group.

# Ejemplo

```html
<doc-group label="Welcome">
    <doc-source path="/" label="my file" load="./my-file.js">
    <doc-source label="my file" load="./my-file.md">
</doc-group>
```

## Properties

| Property | Type     | Description                                                                     |
| -------- | -------- | ------------------------------------------------------------------------------- |
| label    | String   | define a header for the group, this in turn becomes the folder for `doc-source` |
| sources  | Source[] | sources type components associated with the group                               |
