import { c, useHost } from "atomico";
import style from "./code.css";
import { Button } from "../button/button.jsx";
import { useCopy } from "@atomico/hooks/use-copy";

function code() {
  const host = useHost();
  const copy = useCopy(host);
  return (
    <host shadowDom>
      <style>{style}</style>
      <pre>
        <slot></slot>
      </pre>
      <div class="button-align">
        <Button type="circle" class="button-copy" onclick={copy}>
          <svg width="13" height="13" viewBox="0 0 13 13">
            <rect
              rx="1"
              ry="1"
              width="10"
              height="2"
              fill="currentColor"
            ></rect>
            <rect
              rx="1"
              ry="1"
              width="2"
              height="10"
              fill="currentColor"
            ></rect>
            <rect
              width="8"
              height="8"
              rx="1"
              ry="1"
              x="4"
              y="4"
              fill="transparent"
              stroke-width="2"
              stroke="currentColor"
            ></rect>
          </svg>
        </Button>
      </div>
    </host>
  );
}

export const Code = c(code);
