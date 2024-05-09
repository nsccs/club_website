"use client";
import * as menu from "@zag-js/menu";
import { useMachine, normalizeProps } from "@zag-js/react";
import { FaBars } from "react-icons/fa";
import { sva } from "@/styled-system/css";
import React, { useId, useRef } from "react";
import NextLink from "next/link";
import { GrClose } from "react-icons/gr";

const MobileMenuStyle = sva({
    slots: [
        "trigger",
        "item",
        "container",
        "background",
        "content",
        "topBG",
        "closeButton",
    ],
    base: {
        trigger: {
            display: {
                base: "inherit",
                sm: "inherit",
                md: "none",
            },
            aspectRatio: "1 / 1",
            marginLeft: "10%",
            minW: "50px",
            border: "lime.400",
            borderRadius: "5px",
            borderStyle: "solid",
            boxSizing: "border-box",
            bg: "lime.400",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
        },
        item: {
            fontSize: {
                base: "1.8em",
                sm: "1.8em",
                md: "2em",
                lg: "3.7em",
            },
            marginTop: "4vh",
            color: "black",
            _highlighted: { color: "lime.400" },
        },
        container: {
            position: "fixed",
            transition: "all",
            zIndex: 4,
            left: 0,
            top: 0,
            height: "100%",
            _open: {
                // animation: "fadeInFromAboveAnim 200ms ease",
                opacity: 1,
                pointerEvents: "auto",
                transform: "translate(calc(100vw - 100%))",
            },
            _closed: {
                // animation: "fadeInFromAboveAnim 200ms ease reverse",
                opacity: 0,
                pointerEvents: "none",
                transform: "translate(100vw)",
            },
        },
        background: {
            zIndex: -1,
            position: "fixed",
            width: "200vw",
            height: "200vh",
            left: 0,
            top: 0,
            cursor: "pointer",
            transform: "translate(-50%)",
            backdropFilter: "brightness(75%)",
        },
        content: {
            bg: "white",
            minW: "80vw",
            h: "100%",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transitionDuration: "200ms",
            transitionTimingFunction: "ease",
        },
        topBG: {
            display: "flex",
            width: "100%",
            height: "75px",
            background: "CSClubBlue",
        },
        closeButton: {
            width: "32px",
            marginLeft: "20px",
        },
    },
});

const MobileHeaderUI: React.FC<{
    menuItems: {
        name: string;
        url: string;
    }[];
}> = ({ menuItems }) => {
    const [state, send] = useMachine(
        menu.machine({
            id: useId(),
            onOpenChange(details) {
                if (details.open) {
                    openWindow();
                } else {
                    closeWindow();
                }
            },
        }),
    );

    const api = menu.connect(state, send, normalizeProps);

    const contentWindow = useRef<HTMLDivElement>(null);

    const closeWindow = () => {
        contentWindow.current!.setAttribute("data-state", "closed");
    };
    const openWindow = () => {
        contentWindow.current!.setAttribute("data-state", "open");
    };

    const mobileStyles = MobileMenuStyle();
    return (
        <>
            {/* Mobile Button trigger*/}
            <button className={mobileStyles.trigger} {...api.triggerProps}>
                <FaBars />
            </button>

            {/* Body of the menu */}
            <div
                ref={contentWindow}
                data-state="closed"
                className={mobileStyles.container}
            >
                {/* Menu background */}
                {/* @ts-expect-error This functions as a button */}
                <div
                    className={mobileStyles.background}
                    {...api.triggerProps}
                />

                {/* Menu content */}
                <div className={mobileStyles.content}>
                    <div className={mobileStyles.topBG}>
                        <button
                            className={mobileStyles.closeButton}
                            {...api.triggerProps}
                        >
                            <GrClose stroke="white" size="100%" />
                        </button>
                    </div>

                    <div onClick={closeWindow} className={mobileStyles.item}>
                        <NextLink style={{ width: "100%" }} href="/">
                            Home
                        </NextLink>
                    </div>
                    {menuItems.map(({ name, url }) => (
                        <div
                            key={name}
                            onClick={closeWindow}
                            className={mobileStyles.item}
                        >
                            <NextLink
                                style={{ width: "100%" }}
                                key={name}
                                href={url}
                            >
                                {name}
                            </NextLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileHeaderUI;
