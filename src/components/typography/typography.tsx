import React from "react";

interface Props {
    variant?: "h1" | "h2" | "lead" | "body-lg" | "body-base" | "body-sm" | "body-md" | "body-xs";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    theme?: "red" | "grey" | "white" | "black";
    align?: "left" | "center" | "right";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "lead",
    component: Component = "div",
    theme = "red",
    align = "left",
    className,
    children
}: Props) => {

    let variantStyles: string = "", colorStyles: string = "", alignStyles: string = "";
    // #region **** Variant Font Text ****
    switch (variant) {
        case "h1":
            variantStyles = "tex_5xl";
            break;
        case "lead":
            variantStyles = "text_xl";
            break;
        case "body-lg":
            variantStyles = "text_lg";
            break;
        case "body-md":
            variantStyles = "text_md";
            break;
        case "body-sm":
            variantStyles = "text_sm";
            break;
        case "body-xs":
            variantStyles = "text_xs"
            break;

    }
    // #endregion **** Variant Font Text ****
    // #region **** Theme Font color ****
    switch (theme) {
        case "red":
            colorStyles = "text_red"
            break;
        case "white":
            colorStyles = "text_white"
            break;
        case "black":
            colorStyles = "text_black"
            break;
        case "grey":
            colorStyles = "text_grey"
            break;

    }
    // #endregion **** Theme Font color ****
    //#region **** Align Font ****
    switch (align) {
        case "left":
            alignStyles = "text_left"
            break;
        case "center":
            alignStyles = "text_center"
            break;
        case "right":
            alignStyles = "text_right"
            break;
    }
    //#endregion **** Align Font ****
    return (
        <Component
            className={`${variantStyles} ${colorStyles} ${alignStyles} ${className}`}
        >
            {children}
        </Component>
    )
}

export default Typography
