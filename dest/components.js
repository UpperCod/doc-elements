import {
  md_default
} from "./chunk-AK3P5EZC.js";

// src/components.js
import {
  RouterRedirect as RouterRedirect2,
  RouterSwitch as RouterSwitch2,
  RouterCase as RouterCase2,
  RouterLink as RouterLink2
} from "@atomico/components/router";
import {
  RouterRedirect as RouterRedirect3,
  RouterSwitch as RouterSwitch3,
  RouterCase as RouterCase3,
  RouterLink as RouterLink3
} from "@atomico/components/router";

// src/container/container.jsx
import {jsx as _jsx12} from "atomico/jsx-runtime";
import {c as c12, useRef as useRef3, useUpdate as useUpdate2} from "atomico";
import {useRouteMatch} from "@atomico/hooks/use-router";
import {useSlot as useSlot2} from "@atomico/hooks/use-slot";
import {useResponsiveState} from "@atomico/hooks/use-responsive-state";
import {
  RouterRedirect,
  RouterSwitch,
  RouterCase
} from "@atomico/components/router";

// src/group/group.jsx
import {jsx as _jsx2} from "atomico/jsx-runtime";
import {c as c2, useRef} from "atomico";
import {useSlot} from "@atomico/hooks/use-slot";

// src/source/source.jsx
import {jsx as _jsx} from "atomico/jsx-runtime";
import {c} from "atomico";
function source({load}) {
  return /* @__PURE__ */ _jsx("host", null);
}
source.props = {
  href: String,
  label: String,
  load: null,
  path: String
};
var Source = c(source);

// src/group/group.jsx
function group() {
  const ref = useRef();
  const slots = useSlot(ref);
  const sources = slots.filter((child) => child instanceof Source);
  return /* @__PURE__ */ _jsx2("host", {
    shadowDom: true,
    sources
  }, /* @__PURE__ */ _jsx2("slot", {
    ref
  }));
}
group.props = {
  label: String,
  sources: {
    type: Array,
    event: {
      type: "ChangeSources",
      bubbles: true
    },
    value: () => []
  }
};
var Group = c2(group);

// src/aside/aside.jsx
import {jsx as _jsx3} from "atomico/jsx-runtime";
import {c as c3} from "atomico";

// src/aside/aside.css
var aside_default = ":host {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-end;\r\n}\r\n.aside {\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 3rem 20%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.aside-content {\r\n  max-width: 13rem;\r\n  position: sticky;\r\n  top: 3rem;\r\n}\r\n\r\n.aside-menu {\r\n  display: grid;\r\n  gap: 1rem;\r\n  padding: 1rem 0px;\r\n}\r\n\r\n.aside-header {\r\n  padding-bottom: 2rem;\r\n}\r\n";

// src/aside/aside.jsx
function aside() {
  return /* @__PURE__ */ _jsx3("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx3("style", null, aside_default), /* @__PURE__ */ _jsx3("div", {
    class: "aside"
  }, /* @__PURE__ */ _jsx3("div", {
    class: "aside-content"
  }, /* @__PURE__ */ _jsx3("header", {
    class: "aside-header"
  }, /* @__PURE__ */ _jsx3("slot", {
    name: "brand"
  })), /* @__PURE__ */ _jsx3("div", {
    class: "aside-menu"
  }, /* @__PURE__ */ _jsx3("slot", {
    name: "aside-menu"
  })))));
}
aside.props = {
  view: {
    type: String,
    reflect: true
  }
};
var Aside = c3(aside);

// src/article/article.jsx
import {jsx as _jsx4} from "atomico/jsx-runtime";
import {c as c4} from "atomico";

// src/article/article.css
var article_default = ":host {\r\n  display: flex;\r\n  flex-flow: column;\r\n  background: var(--doc-container-bg, #fff);\r\n  box-shadow: 0px 0px 88px rgb(0 0 0 / 5%);\r\n  min-height: 100vh;\r\n}\r\n\r\n.content {\r\n  font-size: 1rem;\r\n  line-height: 2em;\r\n  flex: 0%;\r\n  padding: var(--doc-content-padding, 2rem);\r\n  box-sizing: border-box;\r\n}\r\n";

// src/article/article.jsx
function article() {
  return /* @__PURE__ */ _jsx4("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx4("style", null, article_default), /* @__PURE__ */ _jsx4("div", {
    class: "header"
  }, /* @__PURE__ */ _jsx4("slot", {
    name: "header"
  })), /* @__PURE__ */ _jsx4("div", {
    class: "content"
  }, /* @__PURE__ */ _jsx4("slot", null)), /* @__PURE__ */ _jsx4("div", {
    class: "pagination"
  }, /* @__PURE__ */ _jsx4("slot", {
    name: "pagination"
  })));
}
article.props = {};
var Article = c4(article);

// src/hero/hero.jsx
import {jsx as _jsx5} from "atomico/jsx-runtime";
import {c as c5} from "atomico";

// src/hero/hero.css
var hero_default = `:host {\r
  min-height: 16rem;\r
  display: flex;\r
  align-items: flex-end;\r
  background: var(\r
    --doc-hero-bg,\r
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(0,0,0,.25)'/%3E%3C/svg%3E")\r
      repeat 0 0 / auto fixed\r
  );\r
  padding: var(--doc-content-padding, 2rem);\r
  box-sizing: border-box;\r
}\r
\r
::slotted([slot="title"]) {\r
  font-size: 3.125rem;\r
  margin: 0px;\r
  line-height: 1em;\r
}\r
`;

// src/hero/hero.jsx
function hero() {
  return /* @__PURE__ */ _jsx5("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx5("style", null, hero_default), /* @__PURE__ */ _jsx5("slot", {
    name: "title"
  }));
}
var Hero = c5(hero);

// src/menu/menu.jsx
import {jsx as _jsx7} from "atomico/jsx-runtime";
import {c as c7, useEffect, useRef as useRef2, useUpdate, useState} from "atomico";
import {useChildNodes} from "@atomico/hooks/use-child-nodes";
import {useMutationObserver} from "@atomico/hooks/use-mutation-observer";

// src/menu/menu-item.jsx
import {jsx as _jsx6} from "atomico/jsx-runtime";
import {c as c6} from "atomico";
function menuItem() {
  return /* @__PURE__ */ _jsx6("host", null);
}
menuItem.props = {
  active: {
    type: Boolean,
    reflect: true,
    event: {
      type: "MenuItemChange",
      bubbles: true,
      composed: true
    }
  }
};
var MenuItem = c6(menuItem, HTMLAnchorElement);

// src/menu/menu.css
var menu_default = ".items {\r\n  display: grid;\r\n  grid-template-columns: 0.065rem auto;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.items-line {\r\n  background: var(--doc-menu-line-inactive, rgba(0, 0, 0, 0.25));\r\n  border-radius: 100px;\r\n}\r\n.items-line div {\r\n  width: 300%;\r\n  left: 50%;\r\n  height: var(--h);\r\n  position: relative;\r\n  transform: translate(-50%, var(--y));\r\n  background: var(--doc-menu-line-active, currentColor);\r\n  transition: 0.3s ease all;\r\n  border-radius: 1rem;\r\n}\r\n\r\n::slotted(a) {\r\n  text-decoration: none;\r\n  color: unset;\r\n  display: block;\r\n  padding: 0.5rem 0rem;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n}\r\n\r\n::slotted(:not(a)) {\r\n  opacity: 0.75;\r\n}\r\n";

// src/menu/menu.jsx
function menu() {
  const update = useUpdate();
  const refHost = useRef2();
  const refContainer = useRef2();
  const [childNodes, updateChildNodes] = useChildNodes();
  useMutationObserver(refHost, updateChildNodes, {childList: true});
  const items = childNodes.filter((child) => child instanceof MenuItem);
  const active = items.find((child) => child.active);
  const [top, height] = useOffsetTop(refContainer, items, active);
  return /* @__PURE__ */ _jsx7("host", {
    shadowDom: true,
    ref: refHost,
    onMenuItemChange: update
  }, /* @__PURE__ */ _jsx7("style", null, menu_default), /* @__PURE__ */ _jsx7("slot", null), /* @__PURE__ */ _jsx7("div", {
    class: "items"
  }, /* @__PURE__ */ _jsx7("div", {
    class: "items-line",
    style: `--y:${top}px;--h:${height}px;`
  }, /* @__PURE__ */ _jsx7("div", null)), /* @__PURE__ */ _jsx7("div", {
    class: "items-slots",
    ref: refContainer
  }, items.map((element, index) => {
    element.slot = index;
    return /* @__PURE__ */ _jsx7("div", {
      class: "items-item"
    }, /* @__PURE__ */ _jsx7("slot", {
      name: index
    }));
  }))));
}
menu.props = {};
function useOffsetTop(refContainer, items, active) {
  const [state, setState] = useState([0, 0]);
  useEffect(() => {
    if (!active)
      return;
    const children = [...refContainer.current.children];
    const index = items.indexOf(active);
    const offsetTop = children.slice(0, index).reduce((offsetTop2, child) => offsetTop2 + child.clientHeight, 0);
    setState([offsetTop, children[index]?.clientHeight || 0]);
  }, [active]);
  return active ? state : [0, 0];
}
var Menu = c7(menu);

// src/pagination/pagination.jsx
import {jsx as _jsx9} from "atomico/jsx-runtime";
import {c as c9} from "atomico";

// src/pagination/pagination.css
var pagination_default = ":host {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n";

// src/pagination/pagination-item.jsx
import {jsx as _jsx8} from "atomico/jsx-runtime";
import {c as c8} from "atomico";
import {RouterLink} from "@atomico/components/router";

// src/pagination/pagination-item.css
var pagination_item_default = 'a {\r\n    min-height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n    color: unset;\r\n}\r\n\r\n:host([direction="<"]) {\r\n    background: var(--doc-container-bg, #f1f9f9);\r\n}\r\n\r\n:host([direction=">"]) a {\r\n    flex-flow: row-reverse;\r\n}\r\n\r\n:host(:not([href])) svg {\r\n    display: none;\r\n}\r\n';

// src/pagination/pagination-item.jsx
function paginationItem({href, direction}) {
  return /* @__PURE__ */ _jsx8("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx8("style", null, pagination_item_default), /* @__PURE__ */ _jsx8(RouterLink, {
    href,
    "data-direction": direction
  }, /* @__PURE__ */ _jsx8("svg", {
    style: direction == ">" ? `margin-left: 1rem` : `margin-right: 1rem`,
    width: "7.656",
    height: "13.314",
    viewBox: "0 0 7.656 13.314"
  }, /* @__PURE__ */ _jsx8("path", {
    d: direction == ">" ? "M.707,13.435a1,1,0,0,1,0-1.415l4.95-4.95L.707,2.121A1,1,0,0,1,2.121.707L7.778,6.364a1,1,0,0,1,0,1.414L2.121,13.435a1,1,0,0,1-1.414,0Z" : "M7.778,13.435a1,1,0,0,0,0-1.415l-4.95-4.95,4.95-4.95A1,1,0,0,0,6.364.707L.707,6.364a1,1,0,0,0,0,1.414l5.656,5.657a1,1,0,0,0,1.414,0Z",
    transform: "translate(-0.414 -0.414)",
    fill: "currentColor"
  })), /* @__PURE__ */ _jsx8("slot", null)));
}
paginationItem.props = {
  href: {
    type: String,
    reflect: true
  },
  direction: {
    type: String,
    reflect: true
  }
};
var PaginationItem = c8(paginationItem);

// src/pagination/pagination.jsx
function pagination() {
  return /* @__PURE__ */ _jsx9("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx9("style", null, pagination_default), /* @__PURE__ */ _jsx9("slot", null));
}
pagination.props = {
  next: Object,
  prev: Object
};
var Pagination = c9(pagination);

// src/menu-phone/menu-phone.jsx
import {jsx as _jsx11} from "atomico/jsx-runtime";
import {c as c11, useProp} from "atomico";

// src/menu-phone/menu-phone.css
var menu_phone_default = ":host {\n  display: block;\n  position: fixed;\n  bottom: 0.5rem;\n  right: 0.5rem;\n}\n\n.content {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  padding: 4rem 2rem;\n  background: white;\n  box-shadow: 5rem 0px 20rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.5rem 0.5rem 1.375rem 0.5rem;\n  transform-origin: 100% 100%;\n  transform: translateX(120%);\n  transition: 0.3s ease all;\n  opacity: 0.5;\n  visibility: hidden;\n}\n\n.content-brand {\n  padding-bottom: 2rem;\n}\n\n.button-container {\n  position: relative;\n  margin: 0.5rem;\n}\n\n.burger {\n  width: 80%;\n  height: 30%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  transition: 0.3s ease all;\n}\n\n.burger div {\n  width: 100%;\n  height: 1px;\n  background: white;\n  transition: 0.3s ease all;\n}\n\n:host([show]) .content {\n  visibility: visible;\n  transform: translateX(0px);\n  opacity: 1;\n}\n\n:host([show]) .burger {\n  height: 2px;\n  transform: rotate(45deg);\n}\n\n:host([show]) .burger div:nth-child(3) {\n  transform: scale(0, 1);\n}\n\n:host([show]) .burger div:nth-child(2) {\n  transform: rotate(90deg);\n}\n";

// src/button/button.jsx
import {jsx as _jsx10} from "atomico/jsx-runtime";
import {c as c10} from "atomico";

// src/button/button.css
var button_default = "button {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 100rem;\n  background: var(--doc-button-bg, #fff);\n  border: 1px solid var(--doc-button-border, #ececec);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n:host([dark]) button {\n  color: var(--doc-button-border, #ececec);\n  border: none;\n  background: var(--doc-button-bg-dark, #000);\n}\n";

// src/button/button.jsx
function button() {
  return /* @__PURE__ */ _jsx10("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx10("style", null, button_default), /* @__PURE__ */ _jsx10("button", null, /* @__PURE__ */ _jsx10("slot", null)));
}
button.props = {
  dark: {
    type: Boolean,
    reflect: true
  }
};
var Button = c10(button);

// src/menu-phone/menu-phone.jsx
function menuPhone() {
  const [show, setShow] = useProp("show");
  return /* @__PURE__ */ _jsx11("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx11("style", null, menu_phone_default), /* @__PURE__ */ _jsx11("div", {
    class: "content"
  }, /* @__PURE__ */ _jsx11("div", {
    class: "content-brand"
  }, /* @__PURE__ */ _jsx11("slot", {
    name: "brand"
  })), /* @__PURE__ */ _jsx11("slot", {
    name: "aside-menu"
  })), /* @__PURE__ */ _jsx11("div", {
    class: "button-container"
  }, /* @__PURE__ */ _jsx11(Button, {
    dark: true,
    onclick: () => setShow(!show)
  }, /* @__PURE__ */ _jsx11("div", {
    class: "burger"
  }, /* @__PURE__ */ _jsx11("div", null), /* @__PURE__ */ _jsx11("div", null), /* @__PURE__ */ _jsx11("div", null)))));
}
menuPhone.props = {
  show: {
    type: Boolean,
    reflect: true
  }
};
var MenuPhone = c11(menuPhone);

// src/container/container.css
var container_default = '/*#a7ffce*/\r\n:host {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--doc-container-bg, #f1f9f9);\r\n  display: block;\r\n  overflow: hidden auto;\r\n  font-family: unset;\r\n  color: var(--doc-container-color, #232323);\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 45rem 1fr;\r\n}\r\n\r\n.content-phone {\r\n  grid-template-columns: 0px 100%;\r\n}\r\n\r\n.content-tablet {\r\n  grid-template-columns: 1fr 45rem;\r\n}\r\n\r\nsection[slot="view"] code {\r\n  background: var(--doc-code-bg, #263946);\r\n  color: var(--doc-code-color, #76ffdf);\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 0.25rem;\r\n  white-space: nowrap;\r\n}\r\n\r\ndoc-code {\r\n  margin: 0px calc(var(--doc-article-padding, 2rem) * -1);\r\n}\r\n\r\ndoc-table td {\r\n  padding: 0.5rem 2rem 0.5rem 0px;\r\n  vertical-align: top;\r\n}\r\n\r\ndoc-table tr:first-child td {\r\n  font-weight: bold;\r\n  text-align: left;\r\n  border-bottom: 1px solid currentColor;\r\n}\r\n\r\nsection[slot="view"] a {\r\n  padding: 0.1rem 0.5rem;\r\n  border-radius: 1rem;\r\n  text-decoration: none;\r\n  border: 1px solid currentColor;\r\n  color: unset;\r\n  font-size: 0.9em;\r\n  margin-right: 0.1rem;\r\n}\r\n\r\nsection[slot="view"] a:hover {\r\n  background: var(--doc-container-bg, #f1f9f9);\r\n}\r\n';

// src/container/utils.js
var MD = {};
var getSourcePath = (label, source2) => source2.path || encodeURI(`/${label}/${source2.label}`.toLowerCase());
var getPagination = (groups, match) => {
  const sources = groups.map(({label, sources: sources2}) => sources2.filter((source2) => !source2.href).map((source2) => ({
    href: getSourcePath(label, source2),
    label: source2.label
  }))).flat();
  for (let i = 0; i < sources.length; i++) {
    if (match(sources[i].href)) {
      const prev = sources[i - 1];
      const next = sources[i + 1];
      return [prev, next];
    }
  }
  return [];
};
var createFetchMarkdown = (src) => {
  MD[src] = MD[src] || (() => fetch(src).then((res) => res.text()).then((content) => {
    const [firstChild, ...children] = md_default.call(null, [content]);
    if (firstChild) {
      const meta = firstChild.props?.meta;
      if (meta) {
        const [code2] = firstChild.children[0].children;
        const json = `{${code2.replace(/\s*([^:]+):\s*(.*)/g, '"$1":"$2",').replace(/,$/, "")}}`;
        return {meta: JSON.parse(json), default: children};
      } else {
        return {deafult: [firstChild, ...children]};
      }
    }
  }));
  return MD[src];
};

// src/container/container.jsx
function container() {
  const ref = useRef3();
  const refSwitch = useRef3();
  const slots = useSlot2(ref);
  const update = useUpdate2();
  const groups = slots.filter((child) => child instanceof Group);
  const match = useRouteMatch();
  const meta = refSwitch.current?.data?.meta;
  const [prev, next] = getPagination(groups, match);
  const view = useResponsiveState("phone, tablet 834px , desktop 1080px");
  return /* @__PURE__ */ _jsx12("host", {
    shadowDom: true,
    onChangeSources: update
  }, /* @__PURE__ */ _jsx12("style", null, container_default), /* @__PURE__ */ _jsx12("slot", {
    ref
  }), /* @__PURE__ */ _jsx12(RouterRedirect, {
    class: `content content-${view}`
  }, /* @__PURE__ */ _jsx12(Aside, {
    view
  }, view == "desktop" && /* @__PURE__ */ _jsx12("slot", {
    name: "brand",
    slot: "brand"
  }), groups && groups.map(({label, sources}) => /* @__PURE__ */ _jsx12("div", {
    slot: "aside-menu"
  }, /* @__PURE__ */ _jsx12(Menu, null, /* @__PURE__ */ _jsx12("strong", null, label), sources.map((source2) => {
    const href = getSourcePath(label, source2);
    return /* @__PURE__ */ _jsx12(MenuItem, {
      href: source2.href || href,
      active: !!match(href),
      target: source2.href ? "_blank" : null,
      ignore: source2.href ? "" : null
    }, /* @__PURE__ */ _jsx12("strong", null, source2.label));
  }))))), /* @__PURE__ */ _jsx12(Article, null, /* @__PURE__ */ _jsx12(Hero, {
    slot: "header"
  }, meta?.title && /* @__PURE__ */ _jsx12("h1", {
    slot: "title"
  }, meta?.title)), /* @__PURE__ */ _jsx12(RouterSwitch, {
    ref: refSwitch,
    onData: update
  }, groups.map(({label, sources}) => sources.map((source2) => source2.load && /* @__PURE__ */ _jsx12(RouterCase, {
    path: getSourcePath(label, source2),
    key: source2,
    load: typeof source2.load == "string" && source2.load.endsWith(".md") ? createFetchMarkdown(source2.load) : source2.load
  })))), /* @__PURE__ */ _jsx12(Pagination, {
    slot: "pagination"
  }, /* @__PURE__ */ _jsx12(PaginationItem, {
    href: prev?.href,
    direction: "<"
  }, prev?.label), /* @__PURE__ */ _jsx12(PaginationItem, {
    href: next?.href,
    direction: ">"
  }, next?.label))), /* @__PURE__ */ _jsx12("aside", {
    class: "aside"
  }), view == "phone" && /* @__PURE__ */ _jsx12(MenuPhone, null, /* @__PURE__ */ _jsx12("slot", {
    name: "brand",
    slot: "brand"
  }), groups && groups.map(({label, sources}) => /* @__PURE__ */ _jsx12("div", {
    slot: "aside-menu"
  }, /* @__PURE__ */ _jsx12(Menu, null, /* @__PURE__ */ _jsx12("strong", null, label), sources.map((source2) => {
    const href = getSourcePath(label, source2);
    return /* @__PURE__ */ _jsx12(MenuItem, {
      href: source2.href || href,
      active: !!match(href),
      target: source2.href ? "_blank" : null,
      ignore: source2.href ? "" : null
    }, /* @__PURE__ */ _jsx12("strong", null, source2.label));
  })))))));
}
container.props = {
  path: String
};
var Container = c12(container);

// src/code/code.jsx
import {jsx as _jsx13} from "atomico/jsx-runtime";
import {c as c13, useHost} from "atomico";

// src/code/code.css
var code_default = ":host {\n  position: relative;\n  display: block;\n}\npre {\n  width: 100%;\n  display: block;\n  overflow-x: auto;\n  padding: 2rem;\n  box-sizing: border-box;\n  background: var(--doc-code-bg, #263946);\n  color: var(--doc-code-color, #76ffdf);\n  font-size: 0.9em;\n  line-height: 1.4em;\n}\n\n.button-align {\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  transform: translate(50%, -50%);\n}\n\n.button-copy {\n  display: block;\n  transition: 0.2s ease all;\n}\n\n.button-copy:active {\n  transform: scale(0.8);\n}\n\n::slotted(code) {\n  padding: 0px !important;\n  white-space: unset !important;\n}\n\n@media (max-width: 480px) {\n  .button-copy {\n    display: none;\n  }\n}\n";

// src/code/code.jsx
import {useCopy} from "@atomico/hooks/use-copy";
function code() {
  const host = useHost();
  const copy = useCopy(host);
  return /* @__PURE__ */ _jsx13("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx13("style", null, code_default), /* @__PURE__ */ _jsx13("pre", null, /* @__PURE__ */ _jsx13("slot", null)), /* @__PURE__ */ _jsx13("div", {
    class: "button-align"
  }, /* @__PURE__ */ _jsx13(Button, {
    type: "circle",
    class: "button-copy",
    onclick: copy
  }, /* @__PURE__ */ _jsx13("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13"
  }, /* @__PURE__ */ _jsx13("rect", {
    rx: "1",
    ry: "1",
    width: "10",
    height: "2",
    fill: "currentColor"
  }), /* @__PURE__ */ _jsx13("rect", {
    rx: "1",
    ry: "1",
    width: "2",
    height: "10",
    fill: "currentColor"
  }), /* @__PURE__ */ _jsx13("rect", {
    width: "8",
    height: "8",
    rx: "1",
    ry: "1",
    x: "4",
    y: "4",
    fill: "transparent",
    "stroke-width": "2",
    stroke: "currentColor"
  })))));
}
var Code = c13(code);

// src/table/table.jsx
import {jsx as _jsx14} from "atomico/jsx-runtime";
import {c as c14} from "atomico";

// src/table/table.css
var table_default = ":host {\n  display: block;\n  overflow-x: auto;\n}\n\ntable {\n  font-size: 0.9em;\n  width: 100%;\n  border-collapse: collapse;\n}\n";

// src/table/table.jsx
function table() {
  return /* @__PURE__ */ _jsx14("host", {
    shadowDom: true
  }, /* @__PURE__ */ _jsx14("style", null, table_default), /* @__PURE__ */ _jsx14("table", null, /* @__PURE__ */ _jsx14("slot", null)));
}
var Table = c14(table);

// src/components.js
customElements.define("doc-router-redirect", RouterRedirect2);
customElements.define("doc-router-switch", RouterSwitch2);
customElements.define("doc-router-case", RouterCase2);
customElements.define("doc-router-link", RouterLink2, {extends: "a"});
customElements.define("doc-container", Container);
customElements.define("doc-aside", Aside);
customElements.define("doc-article", Article);
customElements.define("doc-hero", Hero);
customElements.define("doc-source", Source);
customElements.define("doc-group", Group);
customElements.define("doc-menu", Menu);
customElements.define("doc-pagination", Pagination);
customElements.define("doc-pagination-item", PaginationItem);
customElements.define("doc-button", Button);
customElements.define("doc-menu-phone", MenuPhone);
customElements.define("doc-table", Table);
customElements.define("doc-menu-item", MenuItem, {
  extends: "a"
});
customElements.define("doc-code", Code);
export {
  Article,
  Aside,
  Button,
  Code,
  Container,
  Group,
  Hero,
  Menu,
  MenuItem,
  MenuPhone,
  Pagination,
  PaginationItem,
  RouterCase3 as RouterCase,
  RouterLink3 as RouterLink,
  RouterRedirect3 as RouterRedirect,
  RouterSwitch3 as RouterSwitch,
  Source,
  Table
};
