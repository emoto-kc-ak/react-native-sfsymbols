import React from "react";
import { StyleProp, ViewStyle } from "react-native";
export declare enum SFSymbolWeight {
    ULTRALIGHT = "ultralight",
    LIGHT = "light",
    THIN = "thin",
    REGULAR = "regular",
    MEDIUM = "medium",
    SEMIBOLD = "semibold",
    BOLD = "bold",
    HEAVY = "heavy"
}
export declare enum SFSymbolScale {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
interface SFSymbolProps {
    name: string;
    color?: number | string;
    style?: StyleProp<ViewStyle>;
    weight?: SFSymbolWeight;
    scale?: SFSymbolScale;
    multicolor?: boolean;
}
export declare class SFSymbol extends React.Component<SFSymbolProps> {
    render(): JSX.Element;
}
export {};
