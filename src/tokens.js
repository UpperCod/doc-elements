import { css } from "atomico";

export const tokensSpace = css`
    :host {
        --space-xxs: 8px;
        --space-xs: 16px;
        --space-s: 32px;
        --space-l: 62px;
        --space-xl: 124px;
        --space-xxl: 244px;
        --space-p10: 10%;
    }
`;

export const tokenBorder = css`
    :host {
        --border-split: var(--doc--border-split, 1px solid #cacdcf);
    }
`;

export const tokensColor = css`
    :host {
        --primary: var(--doc--primary, #232329);
        --primary-contrast: var(--doc--primary, white);
        --secondary: var(--doc--secondary, black);
        --active: var(--doc--active, var(--primary));
        --code-background: var(--doc--code-background, #263946);
        --code-color: var(--doc--code-color, #76ffdf);
        --quote-color: var(--doc--quote-color, var(--primary));
        --preview-background: var(--doc--preview-background, #f1f9f9);
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
