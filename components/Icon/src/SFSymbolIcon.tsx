/*
All Rights Reserved, (c) 2025 incra

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T23:28:01.876Z
Modified:     2025-02-04T23:28:01.876Z
File Name:   SFSymbolIcon.tsx

Description: description

*/

import { forwardRef, useMemo } from "react";
import { css } from "glamor";
import { generated, type SFSymbolIconNames } from "./generated";

type SFSymbolIconProps = {
  name: SFSymbolIconNames;
  size?: number;
  //   fill?: string;
  //   stroke?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SFSymbolIcon = forwardRef(function <T extends HTMLDivElement>(
  props: SFSymbolIconProps,
  ref: React.ForwardedRef<T>
) {
  const {
    name,
    size = 16,
    // fill = "currentColor",
    // stroke = "none",
    ...containerProps
  } = props;

  const style = useMemo(
    () => ({
      container: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        backgroundImage: generated[name]
          ? 'url("data:image/svg+xml,' + generated[name] + '")'
          : null,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // fill: fill,
        // stroke: stroke,
      }),
    }),
    [size /* fill, stroke */, , name, generated]
  );

  return <div ref={ref} {...style.container} {...containerProps}></div>;
});

export {
    SFSymbolIcon,
    type SFSymbolIconNames
};
