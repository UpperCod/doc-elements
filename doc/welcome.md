---
title: Doc Elements
---

    > webcomponents for fast, simple and lightweight documentation.

## Installation

```bash
# NPM
npm install doc-elements

# CDN, to start directly in the HTML
http://jspm.dev/doc-elements
```

## Example

```markup
<doc-container>
    <img slot="brand" src="./logo.svg" />
    <doc-group label="Tutorial">
        <doc-source
            path="/"
            label="welcome"
            load="./src/welcome.js"></doc-source>
        <doc-source
            label="next content"
            load="./src/next-content.js"></doc-source>
    </doc-group>
</doc-container>
```

Where :

1. [doc-container](/components/doc-container): Element that interprets the nested components and generates the routes.
2. [doc-group](/components/doc-group): Element that generates the groups in the navigation bar.
3. [doc-source](/components/doc-source): Element that associates the resources to import, with which you can import JS or Markdown files.
