# doc-elements(working...)

Facilitate documentation through the use of webcomponents.

```html
<doc-container>
    <doc-header>
        <img
            slot="brand"
            src="doc/logo-v2-contrast.svg"
            alt="Logotipo"
            width="180px"
        />
        <a ignore href="https://github.com/uppercod/doc-elements">Github</a>
        <a ignore href="https://twitter.com/Uppercod">Twitter</a>
        <a ignore href="https://t.co/GOwj7XKrvy?amp=1">Discord</a>
    </doc-header>
    <doc-aside>
        <doc-group label="Tutoriales">
            <doc-source
                src="./doc/demo.md"
                label="Welcome"
                href="/"
                id="welcome"
                active
                keywords="Tutorial"
            ></doc-source>
            <doc-source
                src="./doc/markdown.md"
                label="Welcome"
                href="/"
                id="welcome"
                active
                keywords="Tutorial"
            ></doc-source>
        </doc-group>
    </doc-aside>
    <doc-content> </doc-content>
</doc-container>
```
