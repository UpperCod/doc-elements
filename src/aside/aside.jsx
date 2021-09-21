import { c, css, useProp } from "atomico";
import { tokensSpace, tokensColor } from "../tokens";

function aside() {
    const [show, setShow] = useProp("show");
    return (
        <host shadowDom onclick={() => setShow(!show)}>
            <div class="content">
                <slot></slot>
            </div>
            <button class="menu">
                <slot name="icon-menu">
                    <svg width="20" height="16" viewBox="0 0 20 16">
                        <path
                            id="menu"
                            d="M1,16a1,1,0,1,1,0-2H19a1,1,0,0,1,0,2ZM1,9A1,1,0,1,1,1,7H19a1,1,0,0,1,0,2ZM1,2A1,1,0,0,1,1,0H19a1,1,0,0,1,0,2Z"
                            fill="#fff"
                        />
                    </svg>
                </slot>
            </button>
        </host>
    );
}

aside.props = {
    slot: {
        type: String,
        reflect: true,
        value: "aside",
    },
    show: {
        type: Boolean,
        reflect: true,
    },
};

aside.styles = [
    tokensSpace,
    tokensColor,
    css`
        .content {
            display: grid;
            position: sticky;
            top: 0;
            padding: var(--space-s);
            grid-gap: var(--space-s);
            box-sizing: border-box;
            overflow-y: auto;
        }
        .menu {
            display: none;
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: var(--primary);
            width: 40px;
            height: 40px;
            z-index: 2;
            border-radius: 100%;
            border: none;
            align-items: center;
            justify-content: center;
        }
        :host([show]) .content {
            display: flex;
        }
        @media (max-width: 720px) {
            .menu {
                display: flex;
            }
            .content {
                position: fixed;
                width: 100%;
                height: 100%;
                left: 0px;
                align-items: center;
                justify-content: center;
                background: white;
                z-index: 1;
                display: none;
            }
        }
    `,
];

export const Aside = c(aside);
