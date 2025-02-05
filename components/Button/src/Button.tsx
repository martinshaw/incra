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
  size?: "small" | null | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(function <T extends HTMLButtonElement>(
  props: ButtonProps,
  ref: React.ForwardedRef<T>
) {
  const {
    text,
    leftIcon = null,
    rightIcon = null,
    size = null,
    ...containerProps
  } = props;

  const style = useMemo(
    () => ({
      button: css({
        // I want to style this button like the mac os x snow leopard cocoa ui button with a blue gradient
        // The same again but with larger text and a subtly inverted gradient on hover
        // Add a subtle drop shadow to the button on hover

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
        backgroundImage: "linear-gradient(to bottom, #f0f0f0, #d8d8d8)",
        border: "1px solid #d8d8d8",
        borderRadius: "6px",
        color: "#444",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: "1",
        padding: "8px 16px",
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

      icon: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: "0 2px",
      }),

      leftIcon: css({
        marginRight: "8px",
      }),

      rightIcon: css({
        marginLeft: "8px",
      }),

      large: css({
        fontSize: "16px",
        padding: "12px 24px",
      }),

      small: css({
        fontSize: "12px",
        padding: "6px 12px",
      }),
    }),
    []
  );

  return (
    <button
      ref={ref}
      {...style.button}
      {...(size === "large" ? style.large : null)}
      {...(size === "small" ? style.small : null)}
      {...containerProps}
    >
      {leftIcon && (
        <div {...style.icon} {...style.leftIcon}>
          {leftIcon}
        </div>
      )}
      {text ?? props.children}
      {rightIcon && (
        <div {...style.icon} {...style.rightIcon}>
          {rightIcon}
        </div>
      )}
    </button>
  );
});

export default Button;
