import { c } from "atomico";

function source({ load }) {
  return <host></host>;
}

source.props = {
  href: String,
  label: String,
  load: null,
  path: String,
};

export const Source = c(source);
