/*
All Rights Reserved, (c) 2025 incra

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T15:36:16.198Z
Modified:     2025-02-04T15:36:16.198Z
File Name:   Application.tsx

Description: description

*/

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { css } from "glamor";
import './Application.css';

type ApplicationProps =  React.PropsWithChildren<{
  rootElementProps: React.HTMLAttributes<HTMLDivElement>; 
}>;

type ApplicationRef = {
  rootElement: HTMLDivElement | null;
}

const Application = forwardRef(function <ApplicationRef>(
  props: ApplicationProps,
  ref: React.ForwardedRef<ApplicationRef>
) {
  // const {
  //   ...rootElementProps,
  // } = props;

  const rootElementProps = props.rootElementProps;

  const style = useMemo(
    () => ({
      root: css({
        fontFamily: `"Source Sans 3", "Inter", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif`,

        // display: "flex",
        // alignItems: "stretch",
        // justifyContent: "stretch",
        // flexDirection: "row",
        // backgroundColor: "#f0f0f0",
        // backgroundImage: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
        // border: "1px solid #d8d8d8",
        // borderRadius: "6px",
        // color: "#444",
        // cursor: "pointer",
        // fontWeight: "bold",
        // lineHeight: "1",
        // textAlign: "center",
        // textDecoration: "none",
        // userSelect: "none",
        // verticalAlign: "middle",

        // textShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
        // boxShadow:
        //   "0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 1px 0 rgba(0, 0, 0, 0.1)",
        // transition:
        //   "background-image: 0.5s, background-color 0.5s, border-color 0.3s, color 0.3s, box-shadow 0.3s",

        // ":hover": {
        //   backgroundImage: "linear-gradient(to bottom, #d8d8d8, #f0f0f0)",
        //   borderColor: "#b0b0b0",
        //   color: "#222",
        // },
  
        // ":active": {
        //   backgroundImage: "linear-gradient(to bottom, #cbcbcb, #f0f0f0)",
        // },

        // ":focus": {
        //   // Use light blue as the focus ring color with a 2px width and a 2px offset like the mac os x focus ring
        //   outlineStyle: "solid",
        //   outlineWidth: "3px",
        //   outlineColor: "#00aeffbb",
        //   outlineOffset: "3px",
        // },

        // ":disabled": {
        //   backgroundColor: "#f0f0f0",
        //   backgroundImage: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
        //   borderColor: "#d8d8d8",
        //   color: "#b0b0b0",
        //   cursor: "not-allowed",
        //   textDecoration: "none",
        // },
      }),
    }),
    []
  );
  
  const rootElementRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(
    ref, 
    () => ({
        rootElement: rootElementRef.current,
    } as ApplicationRef),
  );

  return (
    <div
      {...style.root}
      {...rootElementProps}
      ref={rootElementRef}
    >
      {props.children ?? null}
    </div>
  );
});

export default Application;
export {
  ApplicationRef,
}
