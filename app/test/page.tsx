"use client";
import * as dialog from "@zag-js/dialog";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { useId } from "react";
import { css } from "../../styled-system/css";

const Dialog = () => {
    const [state, send] = useMachine(dialog.machine({ id: useId() }));

    const api = dialog.connect(state, send, normalizeProps);

    return (
        <>
            <button {...api.triggerProps}>Open Dialog</button>
            {api.isOpen && (
                <Portal>
                    <div
                        {...api.backdropProps}
                        className={css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            backdropFilter: "auto",
                            backdropBlur: "20px",
                            w: "100vw",
                            h: "100vh",
                        })}
                    />
                    <div {...api.positionerProps}>
                        <div {...api.contentProps}>
                            <h2 {...api.titleProps}>Edit profile</h2>
                            <p {...api.descriptionProps}>
                                Make changes to your profile here. Click save
                                when you are done.
                            </p>
                            <div>
                                <input placeholder="Enter name..." />
                                <button>Save</button>
                            </div>
                            <button {...api.closeTriggerProps}>Close</button>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

const Test = () => {
    return (
        <>
            <Dialog />
            <Dialog />
        </>
    );
};
export default Test;
