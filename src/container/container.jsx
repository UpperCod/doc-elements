import { c, css, useProp, useRef, useHost } from "atomico";
import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
} from "@atomico/components/router";
import { useSlot } from "@atomico/hooks/use-slot";
import { useChannel } from "@atomico/hooks/use-channel";
import { tokensSpace } from "../tokens";

function container() {
    const host = useHost();
    const refContent = useRef();
    const [groupSources, setGroupSources] = useProp("sources");
    const slotContent = useSlot(refContent);
    const [, setChannel] = useChannel("DocSources");

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
                    host.current.scrollTop = 0;

                    groupSources.map(({ sources }) =>
                        sources.map(
                            (_source) =>
                                (_source.active = _source === data.source)
                        )
                    );
                    const [element] = slotContent;

                    if (element) element.value = data.content;

                    setChannel({ groupSources, currentSource: data.source });
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
                        <slot name="aside"></slot>
                        <slot name="content" ref={refContent}></slot>
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

container.styles = [
    tokensSpace,
    css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .layout {
            height: 100%;
            display: flex;
            flex-flow: column nowrap;
        }
        .layout-content {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(200px, 280px) 1fr;
            max-width: 1366px;
            margin: 0px auto;
            max-width: 1366px;
            flex: 0%;
        }

        @media (max-width: 720px) {
            .layout-content {
                grid-template-columns: 100%;
                padding: 0px var(--space-xs);
                box-sizing: border-box;
            }
        }
    `,
];

export const Container = c(container);
