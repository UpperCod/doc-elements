import { c, useRef, useUpdate, useEffect } from "atomico";
import { useRouteMatch } from "@atomico/hooks/use-router";
import { useSlot } from "@atomico/hooks/use-slot";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";

import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
} from "@atomico/components/router";

import { Group } from "../group/group.jsx";
import { Aside } from "../aside/aside.jsx";
import { Article } from "../article/article.jsx";
import { Hero } from "../hero/hero.jsx";
import { Menu, MenuItem } from "../menu/menu.jsx";
import { Pagination, PaginationItem } from "../pagination/pagination.jsx";
import { MenuPhone } from "../menu-phone/menu-phone.jsx";
import style from "./container.css";

import { getPagination, getSourcePath, createFetchMarkdown } from "./utils.js";

function container() {
    const ref = useRef();
    const refSwitch = useRef();
    const slots = useSlot(ref);
    const update = useUpdate();
    /**
     * @type {Group["Props"][]}
     */
    const groups = slots.filter((child) => child instanceof Group);
    const match = useRouteMatch();
    // Extract the meta import from the path resulting in the dynamic import
    const meta = refSwitch.current?.data?.meta;

    const [prev, next] = getPagination(groups, match);

    const view = useResponsiveState("phone, tablet 834px , desktop 1080px");

    useEffect(() => {
        if (meta && meta.title) document.title = meta.title;
    }, [meta]);

    return (
        <host shadowDom onChangeSources={update}>
            <slot ref={ref}></slot>
            <RouterRedirect class={`content content-${view}`}>
                <Aside view={view}>
                    {view == "desktop" && (
                        <slot name="brand" slot="brand"></slot>
                    )}
                    {groups &&
                        groups.map(({ label, sources }) => (
                            <div slot="aside-menu">
                                <Menu>
                                    <strong>{label}</strong>
                                    {sources.map((source) => {
                                        const href = getSourcePath(
                                            label,
                                            source
                                        );
                                        return (
                                            <MenuItem
                                                href={source.href || href}
                                                active={!!match(href)}
                                                target={
                                                    source.href
                                                        ? "_blank"
                                                        : null
                                                }
                                                ignore={source.href ? "" : null}
                                            >
                                                <strong>{source.label}</strong>
                                            </MenuItem>
                                        );
                                    })}
                                </Menu>
                            </div>
                        ))}
                </Aside>
                <Article>
                    <Hero slot="header">
                        {meta?.title && <h1 slot="title">{meta?.title}</h1>}
                    </Hero>
                    <RouterSwitch ref={refSwitch} onData={update}>
                        {groups.map(({ label, sources }) =>
                            sources.map(
                                (source) =>
                                    source.load && (
                                        <RouterCase
                                            path={getSourcePath(label, source)}
                                            key={source}
                                            load={
                                                typeof source.load ==
                                                    "string" &&
                                                source.load.endsWith(".md")
                                                    ? createFetchMarkdown(
                                                          source.load
                                                      )
                                                    : source.load
                                            }
                                        ></RouterCase>
                                    )
                            )
                        )}
                    </RouterSwitch>
                    <Pagination slot="pagination">
                        <PaginationItem href={prev?.href} direction="<">
                            {prev?.label}
                        </PaginationItem>
                        <PaginationItem href={next?.href} direction=">">
                            {next?.label}
                        </PaginationItem>
                    </Pagination>
                </Article>
                <aside class="aside"></aside>
                {view == "phone" && (
                    <MenuPhone>
                        <slot name="brand" slot="brand"></slot>
                        {groups &&
                            groups.map(({ label, sources }) => (
                                <div slot="aside-menu">
                                    <Menu>
                                        <strong>{label}</strong>
                                        {sources.map((source) => {
                                            const href = getSourcePath(
                                                label,
                                                source
                                            );
                                            return (
                                                <MenuItem
                                                    href={source.href || href}
                                                    active={!!match(href)}
                                                    target={
                                                        source.href
                                                            ? "_blank"
                                                            : null
                                                    }
                                                    ignore={
                                                        source.href ? "" : null
                                                    }
                                                >
                                                    <strong>
                                                        {source.label}
                                                    </strong>
                                                </MenuItem>
                                            );
                                        })}
                                    </Menu>
                                </div>
                            ))}
                    </MenuPhone>
                )}
            </RouterRedirect>
        </host>
    );
}

container.styles = style;

container.props = {
    path: String,
};

export const Container = c(container);
