import { c } from "atomico";
import style from "./aside.css";

function aside() {
    return (
        <host shadowDom>
            <div class="aside">
                <div class="aside-content">
                    <header class="aside-header">
                        <slot name="brand"></slot>
                    </header>
                    <div class="aside-menu">
                        <slot name="aside-menu"></slot>
                    </div>
                </div>
            </div>
        </host>
    );
}

aside.styles = style;

aside.props = {
    view: {
        type: String,
        reflect: true,
    },
};

export const Aside = c(aside);
