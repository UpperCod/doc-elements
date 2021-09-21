import { c, css, useProp, useRef } from "atomico";
import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
} from "@atomico/components/router";
import { useSlot } from "@atomico/hooks/use-slot";

function container() {
    const refContent = useRef();
    const [groupSources, setGroupSources] = useProp("sources");
    const slotContent = useSlot(refContent);

    return (
        <host
            shadowDom
            onChangeSources={(event) => {
                setGroupSources((groupSources = []) => [
                    ...new Set(groupSources.concat(event.target)),
                ]);
            }}
        >
            <RouterSwitch
                onData={({
                    target: {
                        data: { data },
                    },
                }) => {
                    groupSources.map(({ sources }) =>
                        sources.map(
                            (_source) =>
                                (_source.active = _source === data.source)
                        )
                    );
                    const [element] = slotContent;
                    if (element) element.value = data.content;
                }}
            >
                {groupSources.map(({ sources }) =>
                    sources.map((source) => (
                        <RouterCase
                            path={source.href}
                            load={async () => ({
                                data: {
                                    content: await fetch(source.src).then(
                                        (data) => data.text()
                                    ),
                                    source,
                                },
                            })}
                        />
                    ))
                )}
            </RouterSwitch>
            <RouterRedirect>
                <div class="layout">
                    <div class="layout-header">
                        <slot name="header"></slot>
                    </div>
                    <div class="layout-content">
                        <div>
                            <slot name="aside-left"></slot>
                        </div>
                        <slot name="content" ref={refContent}></slot>
                        <div>
                            <slot name="aside-right"></slot>
                        </div>
                    </div>
                </div>
            </RouterRedirect>
        </host>
    );
}

container.props = {
    sources: {
        type: Array,
        value: () => [],
    },
};

container.styles = css`
    :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .layout {
        height: 100%;
    }
    .layout-content {
        min-height: 100%;
        display: grid;
        grid-template-columns: minmax(200px, 280px) 1fr minmax(200px, 280px);
        max-width: 1366px;
        margin: 0px auto;
        max-width: 1366px;
    }
`;

export const Container = c(container);
