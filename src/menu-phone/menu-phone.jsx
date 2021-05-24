import { c, useProp } from "atomico";
import style from "./menu-phone.css";
import { Button } from "../button/button.jsx";

function menuPhone() {
    const [show, setShow] = useProp("show");

    return (
        <host shadowDom>
            <div class="content-scroll">
                <div class="content-space">
                    <div class="content">
                        <div class="content-brand">
                            <slot name="brand"></slot>
                        </div>
                        <slot name="aside-menu"></slot>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <Button dark onclick={() => setShow(!show)}>
                    <div class="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Button>
            </div>
        </host>
    );
}

menuPhone.styles = style;

menuPhone.props = {
    show: {
        type: Boolean,
        reflect: true,
    },
};

export const MenuPhone = c(menuPhone);
