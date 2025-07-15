"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../styles/theme");
const ButtonInner = styled_components_1.default.button `
  border-radius: 8px;
  border: 0px solid transparent;
  background: ${theme_1.theme.colors.purple_200};
  padding: 10px;
  color: ${theme_1.theme.colors.neutral_600};
  font-family: ${theme_1.theme.fontFamily.base};
  font-size: ${theme_1.theme.fontSizes.base};
  font-weight: 700;
  line-height: 33px; /* 137.5% */
`;
const Button = ({ text }) => {
    return <ButtonInner>{text}</ButtonInner>;
};
exports.default = Button;
