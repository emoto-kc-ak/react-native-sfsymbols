var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { processColor, requireNativeComponent, } from "react-native";
export var SFSymbolWeight;
(function (SFSymbolWeight) {
    SFSymbolWeight["ULTRALIGHT"] = "ultralight";
    SFSymbolWeight["LIGHT"] = "light";
    SFSymbolWeight["THIN"] = "thin";
    SFSymbolWeight["REGULAR"] = "regular";
    SFSymbolWeight["MEDIUM"] = "medium";
    SFSymbolWeight["SEMIBOLD"] = "semibold";
    SFSymbolWeight["BOLD"] = "bold";
    SFSymbolWeight["HEAVY"] = "heavy";
})(SFSymbolWeight || (SFSymbolWeight = {}));
export var SFSymbolScale;
(function (SFSymbolScale) {
    SFSymbolScale["SMALL"] = "small";
    SFSymbolScale["MEDIUM"] = "medium";
    SFSymbolScale["LARGE"] = "large";
})(SFSymbolScale || (SFSymbolScale = {}));
var RNSFSymbol = requireNativeComponent("RNSFSymbol");
var SFSymbol = /** @class */ (function (_super) {
    __extends(SFSymbol, _super);
    function SFSymbol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SFSymbol.prototype.render = function () {
        var _a = this.props, name = _a.name, color = _a.color, props = __rest(_a, ["name", "color"]);
        return (<RNSFSymbol {...props} systemName={name} color={processColor(color)}/>);
    };
    return SFSymbol;
}(React.Component));
export { SFSymbol };
