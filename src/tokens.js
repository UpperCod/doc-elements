import { css } from "atomico";

export const tokensSpace = css`
    :host {
        --space-x: var(--doc--space-x, 20px);
        --space-y: var(--doc--space-y, 10px);
        --space-x2: calc(var(--space-x) * 2);
        --space-y2: calc(var(--space-y) * 2);
        --space-x3: calc(var(--space-x2) * 2);
        --space-y3: calc(var(--space-y2) * 2);
        --space-x4: calc(var(--space-x3) * 2);
        --space-y4: calc(var(--space-y3) * 2);
        --space-between: var(--doc--space-between, 15px);
    }
`;

export const tokenBorder = css`
    :host {
        --border-split: var(--doc--border-split, 1px solid #cacdcf);
    }
`;

export const tokensColor = css`
    :host {
        --primary: var(--doc--primary, #0080ff);
        --secondary: var(--doc--secondary, black);
        --active: var(--doc--active, var(--primary));
        --code-background: var(--doc--code-background, #263946);
        --code-color: var(--doc--code-color, #76ffdf);
        --quote-color: var(--doc--quote-color, var(--primary));
    }
`;

export const tokensPage = css`
    :host {
        --page-width: var(--doc--page-width, 1366px);
    }
`;

export const tokensPattern = css`
    :host {
        --pattern-background: var(
            --doc--pattern-background,
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(0,0,0,.25)'/%3E%3C/svg%3E")
                repeat 0 0 / auto fixed
        );
    }
`;
