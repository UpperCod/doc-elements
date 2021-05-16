import { c } from "atomico";
import styleAside from "./aside.css";

/**
 *
 * @param {Object} props
 * @param {import("../group/group").Group["Props"][]} props.groups
 * @param {(path:string)=>any} props.match
 */
export function aside() {
  return (
    <host shadowDom>
      <style>{styleAside}</style>
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

aside.props = {
  view: {
    type: String,
    reflect: true,
  },
};

export const Aside = c(aside);
