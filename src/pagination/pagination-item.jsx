import { c } from "atomico";
import { RouterLink } from "@atomico/components/router";
import style from "./pagination-item.css";

function paginationItem({ href, direction }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <RouterLink href={href} data-direction={direction}>
        <svg
          style={direction == ">" ? `margin-left: 1rem` : `margin-right: 1rem`}
          width="7.656"
          height="13.314"
          viewBox="0 0 7.656 13.314"
        >
          <path
            d={
              direction == ">"
                ? "M.707,13.435a1,1,0,0,1,0-1.415l4.95-4.95L.707,2.121A1,1,0,0,1,2.121.707L7.778,6.364a1,1,0,0,1,0,1.414L2.121,13.435a1,1,0,0,1-1.414,0Z"
                : "M7.778,13.435a1,1,0,0,0,0-1.415l-4.95-4.95,4.95-4.95A1,1,0,0,0,6.364.707L.707,6.364a1,1,0,0,0,0,1.414l5.656,5.657a1,1,0,0,0,1.414,0Z"
            }
            transform="translate(-0.414 -0.414)"
            fill="currentColor"
          />
        </svg>
        <slot></slot>
      </RouterLink>
    </host>
  );
}

paginationItem.props = {
  href: {
    type: String,
    reflect: true,
  },
  direction: {
    type: String,
    reflect: true,
  },
};

export const PaginationItem = c(paginationItem);
