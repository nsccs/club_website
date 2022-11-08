import mediaQuery from "./mediaQuery.js";

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */

const useBreakpoints = () => {
  const breakpoints = {
    isXs: mediaQuery("(max-width: 640px)"),
    isSm: mediaQuery("(min-width: 641px) and (max-width: 768px)"),
    isMd: mediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: mediaQuery("(min-width: 1025px)"),
    active: "xs"
  };

  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  return breakpoints;
}

export default useBreakpoints;