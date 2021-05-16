import md from "../md.js";

const MD = {};

/**
 *
 * @param {string} label
 * @param {import("./source/source").Source} source
 * @returns
 */
export const getSourcePath = (label, source) =>
  source.path || encodeURI(`/${label}/${source.label}`.toLowerCase());
/**
 * @param {Group[]} groups
 * @param {(path:string)=>any} match
 */
export const getPagination = (groups, match) => {
  const sources = groups
    .map(({ label, sources }) =>
      sources
        .filter((source) => !source.href)
        .map((source) => ({
          href: getSourcePath(label, source),
          label: source.label,
        }))
    )
    .flat();

  for (let i = 0; i < sources.length; i++) {
    if (match(sources[i].href)) {
      const prev = sources[i - 1];
      const next = sources[i + 1];
      return [prev, next];
    }
  }
  return [];
};

export const createFetchMarkdown = (src) => {
  MD[src] =
    MD[src] ||
    (() =>
      fetch(src)
        .then((res) => res.text())
        .then((content) => {
          const [firstChild, ...children] = md.call(null, [content]);
          if (firstChild) {
            const meta = firstChild.props?.meta;
            if (meta) {
              const [code] = firstChild.children[0].children;
              const json = `{${code
                .replace(/\s*([^:]+):\s*(.*)/g, '"$1":"$2",')
                .replace(/,$/, "")}}`;
              return { meta: JSON.parse(json), default: children };
            } else {
              return { deafult: [firstChild, ...children] };
            }
          }
        }));

  return MD[src];
};
