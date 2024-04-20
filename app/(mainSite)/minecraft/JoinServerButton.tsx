"use client";

import { useId, Fragment, useRef } from "react";
import * as popover from "@zag-js/popover";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { css } from "@/styled-system/css";

import { flex } from "@/styled-system/patterns";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const JoinServerButton = () => {
    // const router = useRouter();

    const [state, send] = useMachine(
        popover.machine({
            id: useId(),
            positioning: { placement: "bottom" },
        }),
    );

    const api = popover.connect(state, send, normalizeProps);

    const Wrapper = api.portalled ? Portal : Fragment;

    const howManyTimesClicked = useRef(0);

    // close the popover after a set delay BUT if it was clicked again reset the delay
    const closeAfterDelay = async (amIViable) => {
        await sleep(6000);

        if (amIViable == howManyTimesClicked.current) {
            api.close();
        }
    };

    return (
        <div>
            <button
                {...api.triggerProps}
                onClick={() => {
                    navigator.clipboard.writeText("mc.northcs.org");
                    howManyTimesClicked.current += 1;
                    api.open();

                    closeAfterDelay(howManyTimesClicked.current);

                    if (howManyTimesClicked.current == 15) {
                        // shhhhhh ;3
                        window.location.replace("/ChangeThwWorld.mp4");
                    }
                }}
            >
                <span
                    className={css({
                        fontSize: {
                            base: "1.3em",
                            sm: "1.8em",
                            md: "2.1em",
                            lg: "2.4em",
                        },
                        color: "white",
                        bg: "#004da8",
                        p: "15px",
                        whiteSpace: "nowrap",
                        borderRadius: "50px",
                        transition: "all 0.3s ease",
                        _hover: {
                            bg: "#95ca59",
                            color: "black",
                        },
                        cursor: "pointer",
                    })}
                >
                    Join the server
                </span>
            </button>
            <Wrapper>
                <div
                    {...api.positionerProps}
                    className={css({
                        "--arrow-size": "15px",
                        "--arrow-background": "white",
                    })}
                >
                    <div {...api.arrowProps}>
                        <div {...api.arrowTipProps} />
                    </div>
                    <div
                        {...api.contentProps}
                        className={flex({
                            flexDir: "column",
                            justifyContent: "center",
                            bgColor: "white",
                            borderRadius: "5px",
                            overflow: "hidden",
                        })}
                    >
                        <div
                            {...api.titleProps}
                            className={css({ marginX: "auto" })}
                        >
                            Copied To Clipboard!
                        </div>
                        <hr />
                        <div
                            {...api.descriptionProps}
                            className={css({ maxW: "15vw" })}
                        >
                            Paste the server address into the address bar when
                            adding the server
                        </div>
                        <button
                            {...api.closeTriggerProps}
                            className={css({
                                marginLeft: "auto",
                                marginRight: "10%",
                                color: "red",
                            })}
                        >
                            X
                        </button>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default JoinServerButton;
