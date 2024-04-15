"use client";

import * as progress from "@zag-js/progress";
import { normalizeProps, useMachine } from "@zag-js/react";
import { useId } from "react";
import { sva } from "../styled-system/css";

const circleStyleFunc = sva({
    slots: ["circle", "circleTrack", "circleRange", "contentWrapper", "title"],
    base: {
        circle: {
            "--size": "200px",
            "--thickness": "20px",
        },
        circleTrack: { stroke: "black" },
        circleRange: {
            stroke: "CSClubBlue",
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
        <div {...api.rootProps}>
            <div {...api.labelProps}>Loading</div>
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
    );
};
export default Loading;
