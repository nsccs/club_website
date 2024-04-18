"use client";
import * as menu from "@zag-js/menu";
import { useMachine, normalizeProps } from "@zag-js/react";
import { FaBars } from "react-icons/fa";
import { sva } from "@/styled-system/css";
import React, { useId, useRef } from "react";
import NextLink from "next/link";

const MobileMenuStyle = sva({
    slots: ["trigger", "item", "container", "background", "content"],
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
            _open: {
                // animation: "fadeInFromAboveAnim 200ms ease",
                display: "initial",
                opacity: 1,
                pointerEvents: "auto",
            },
            _closed: {
                // animation: "fadeInFromAboveAnim 200ms ease reverse",
                display: "none",
                opacity: 0,
                pointerEvents: "none",
            },
        },
        background: {
            position: "fixed",
            zIndex: 4,
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            cursor: "pointer",
            backdropFilter: "blur(2px)",
        },
        content: {
            position: "fixed",
            zIndex: 5,
            bg: "white",
            minW: "20vh",
            h: "60vh",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderStyle: "solid",
            borderWidth: "4px",
            borderRadius: "20px",
            borderColor: "CSClubBlue",
            transitionDuration: "200ms",
            transitionTimingFunction: "ease",
            padding: "30px",
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
                    <div
                        {...api.getItemProps({ value: "home" })}
                        id="home"
                        key={"home"}
                        className={mobileStyles.item}
                    >
                        <NextLink style={{ width: "100%" }} key="home" href="/">
                            Home
                        </NextLink>
                    </div>
                    <hr />
                    {menuItems.map(({ name, url }) => (
                        <div
                            key={name}
                            {...api.getItemProps({ value: name })}
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
