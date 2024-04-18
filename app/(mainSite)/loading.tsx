"use client";

import * as progress from "@zag-js/progress";
import { normalizeProps, useMachine } from "@zag-js/react";
import { useId } from "react";
import { sva } from "@/styled-system/css";
import { Flex, Grid } from "@/styled-system/jsx";

const circleStyleFunc = sva({
    slots: [
        "root",
        "circle",
        "circleTrack",
        "circleRange",
        "contentWrapper",
        "title",
    ],
    base: {
        root: {
            alignSelf: "center",
            justifySelf: "center",
            display: "flex",
            alignContent: "center",
            flexDir: "column",
            gap: "15px",
        },
        circle: {
            "--size": "200px",
            "--thickness": "20px",
        },
        circleTrack: { stroke: "black" },
        circleRange: {
            stroke: "CSClubBlue",
        },
        title: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "4xl",
        },
    },
});

const Loading = () => {
    const [state, send] = useMachine(
        progress.machine({ id: useId(), value: null, min: 0, max: 100 }),
    );

    const api = progress.connect(state, send, normalizeProps);

    const circleStyle = circleStyleFunc();

    return (
        <Grid w="100%" h="100%">
            <div {...api.rootProps} className={circleStyle.root}>
                <div {...api.labelProps} className={circleStyle.title}>
                    Loading
                </div>
                <svg {...api.circleProps} className={circleStyle.circle}>
                    <circle
                        {...api.circleTrackProps}
                        className={circleStyle.circleTrack}
                    />
                    <circle
                        {...api.circleRangeProps}
                        className={circleStyle.circleRange}
                    />
                </svg>
            </div>
        </Grid>
    );
};
export default Loading;
