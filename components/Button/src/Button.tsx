/*
All Rights Reserved, (c) 2025 ffs

Author:      Martin Shaw (developer@martinshaw.co)
Created:     2025-02-04T15:36:16.198Z
Modified:     2025-02-04T15:36:16.198Z
File Name:   Button.tsx

Description: description

*/

import { forwardRef, useMemo } from "react";
import { css } from "glamor";

type ButtonProps = {
  text?: string | number | JSX.Element;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size?: "small" | "base" | "large" | "fill" | "fill-horizontal" | "fill-vertical";
  intent?: "none" | "primary" | "success" | "warning" | "danger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(function <T extends HTMLButtonElement>(
  props: ButtonProps,
  ref: React.ForwardedRef<T>
) {
  const {
    text,
    leftIcon = null,
    rightIcon = null,
    size = 'base',
    intent = 'none',
    ...containerProps
  } = props;

  const style = useMemo(
    () => ({
      button: css({
        // I want to style this button like the mac os x snow leopard cocoa ui button with a blue gradient
        // The same again but with larger text and a subtly inverted gradient on hover
        // Add a subtle drop shadow to the button on hover

        display: "flex",
        alignItems: "stretch",
        justifyContent: "stretch",
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        backgroundImage: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
        border: "1px solid #d8d8d8",
        borderRadius: "6px",
        color: "#444",
        cursor: "pointer",
        fontWeight: "bold",
        lineHeight: "1",
        textAlign: "center",
        textDecoration: "none",
        userSelect: "none",
        verticalAlign: "middle",

        textShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
        boxShadow:
          "0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 1px 0 rgba(0, 0, 0, 0.1)",
        transition:
          "background-image: 0.5s, background-color 0.5s, border-color 0.3s, color 0.3s, box-shadow 0.3s",

        ":hover": {
          backgroundImage: "linear-gradient(to bottom, #d8d8d8, #f0f0f0)",
          borderColor: "#b0b0b0",
          color: "#222",
        },
  
        ":active": {
          backgroundImage: "linear-gradient(to bottom, #cbcbcb, #f0f0f0)",
        },

        ":focus": {
          // Use light blue as the focus ring color with a 2px width and a 2px offset like the mac os x focus ring
          outlineStyle: "solid",
          outlineWidth: "3px",
          outlineColor: "#00aeffbb",
          outlineOffset: "3px",
        },

        ":disabled": {
          backgroundColor: "#f0f0f0",
          backgroundImage: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
          borderColor: "#d8d8d8",
          color: "#b0b0b0",
          cursor: "not-allowed",
          textDecoration: "none",
        },
      }),

      contents: css({
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }),

      icon: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: "0 2px",
      }),

      smallIcon: css({
        width: "12px",
      }),

      baseIcon: css({
        width: "16px",
      }),

      largeIcon: css({
        width: "24px",
      }),

      smallContents: css({
        minWidth: "12px",
      }),

      baseContents: css({
        minWidth: "16px",
      }),

      largeContents: css({
        minWidth: "24px",
      }),

      leftIcon: css({
        marginRight: "8px",
      }),

      rightIcon: css({
        marginLeft: "8px",
      }),

      smallSize: css({
        minHeight: "26px",
        fontSize: "12px",
        padding: "6px 12px",
      }),

      baseSize: css({
        minHeight: "32px",
        fontSize: "14px",
        padding: "8px 16px",
      }),

      largeSize: css({
        minHeight: "42px",
        fontSize: "16px",
        padding: "12px 24px",
      }),

      fillSize: css({
        width: "100%",
        height: "100%",
      }),

      fillHorizontalSize: css({
        width: "100%",
      }),

      fillVerticalSize: css({
        height: "100%",
      }),

      intentPrimary: css({
        backgroundColor: "#007bff",
        backgroundImage: "linear-gradient(to bottom, #007bff, #0056b3)",
        borderColor: "#0056b3",
        color: "#fff",
        textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)",
        boxShadow: "0 1px 0 #b7d9ff inset, 0 1px 0 #001a38",

        ":hover": {
          backgroundImage: "linear-gradient(to bottom, #0056b3, #007bff)",
          borderColor: "#0041a3",
          color: "#fff",
        },
        ":active": {
          backgroundImage: "linear-gradient(to bottom, #0056b3, #007bff)",
          color: "#fff",
        },
      }),

      intentSuccess: css({
        backgroundColor: "#28a745",
        backgroundImage: "linear-gradient(to bottom, #28a745, #218838)",
        borderColor: "#218838",
        color: "#fff",
        textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)",
        boxShadow: "0 1px 0 #b9ffc8 inset, 0 1px 0 #002809",

        ":hover": {
          backgroundImage: "linear-gradient(to bottom, #218838, #28a745)",
          borderColor: "#1e7e34",
          color: "#fff",
        },
        ":active": {
          backgroundImage: "linear-gradient(to bottom, #218838, #28a745)",
          color: "#fff",
        },
      }),

      intentWarning: css({
        backgroundColor: "#ffc107",
        backgroundImage: "linear-gradient(to bottom, #ffc107, #d39e00)",
        borderColor: "#d39e00",
        color: "#fff",
        textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)",
        boxShadow: "0 1px 0 #ffe08c inset, 0 1px 0 #3d2c00",

        ":hover": {
          backgroundImage: "linear-gradient(to bottom, #d39e00, #ffc107)",
          borderColor: "#c69500",
          color: "#fff",
        },
        ":active": {
          backgroundImage: "linear-gradient(to bottom, #d39e00, #ffc107)",
          color: "#fff",
        },
      }),

      intentDanger: css({
        backgroundColor: "#dc3545",
        backgroundImage: "linear-gradient(to bottom, #dc3545, #c82333)",
        borderColor: "#c82333",
        color: "#fff",
        textShadow: "0 1px 0 rgba(0, 0, 0, 0.3)",
        boxShadow: "0 1px 0 #ff9e9e inset, 0 1px 0 #330f0f",

        ":hover": {
          backgroundImage: "linear-gradient(to bottom, #c82333, #dc3545)",
          borderColor: "#bd2130",
          color: "#fff",
        },
        ":active": {
          backgroundImage: "linear-gradient(to bottom, #c82333, #dc3545)",
          color: "#fff",
        },
      }),
    }),
    []
  );

  return (
    <button
      ref={ref}
      {...style.button}
      {...(size === "large" ? style.largeSize : null)}
      {...((size === "base" || size == null) ? style.baseSize : null)}
      {...(size === "small" ? style.smallSize : null)}
      {...(size === "fill" ? style.fillSize : null)}
      {...(size === "fill-horizontal" ? style.fillHorizontalSize : null)}
      {...(size === "fill-vertical" ? style.fillVerticalSize : null)}
      {...(intent === "primary" ? style.intentPrimary : null)}
      {...(intent === "success" ? style.intentSuccess : null)}
      {...(intent === "warning" ? style.intentWarning : null)}
      {...(intent === "danger" ? style.intentDanger : null)}
      {...containerProps}
    >
      {leftIcon && (
        <div 
          {...style.icon} 
          {...style.leftIcon}
          {...(size === "large" ? style.largeIcon : null)}
          {...(size === "small" ? style.smallIcon : null)}
          {...((size === "base" || size == null) ? style.baseIcon : null)}
        >
          {leftIcon}
        </div>
      )}
      {(text != null || props.children != null) && 
        <div 
          {...style.contents}
          {...(size === "large" ? style.largeContents : null)}
          {...(size === "small" ? style.smallContents : null)}
          {...((size === "base" || size == null) ? style.baseContents : null)}
        >
          {text ?? props.children}
        </div>
      }
      {rightIcon && (
        <div 
          {...style.icon} 
          {...style.rightIcon}
          {...(size === "large" ? style.largeIcon : null)}
          {...(size === "small" ? style.smallIcon : null)}
          {...((size === "base" || size == null) ? style.baseIcon : null)}
        >
          {rightIcon}
        </div>
      )}
    </button>
  );
});

export default Button;
