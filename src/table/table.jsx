import { c } from "atomico";
import style from "./table.css";

function table() {
  return (
    <host shadowDom>
      <style>{style}</style>
      <table>
        <slot></slot>
      </table>
    </host>
  );
}

export const Table = c(table);
