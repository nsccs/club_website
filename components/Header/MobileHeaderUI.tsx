"use client";
import * as menu from "@zag-js/menu";
import { useMachine, normalizeProps } from "@zag-js/react";
import { FaBars } from "react-icons/fa";
import { sva } from "@/styled-system/css";
import { useId, useRef } from "react";
import NextLink from "next/link";

const MobileMenuStyle = sva({
    slots: ["trigger", "item", "content"],
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
            _open: {
                // animation: "fadeInFromAboveAnim 200ms ease",
                pointerEvents: "auto",
                opacity: 1,
            },
            _closed: {
                // animation: "fadeInFromAboveAnim 200ms ease reverse",
                pointerEvents: "none",
                transform: "translate(-50%, -80%)",
                opacity: 0,
            },
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
                className={mobileStyles.content}
                ref={contentWindow}
                data-state="closed"
            >
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
        </>
    );
};

export default MobileHeaderUI;
