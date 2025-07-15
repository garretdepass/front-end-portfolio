"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.footer `
  padding: 72px 32px;
  background: #f5f5f5;
`;
const ContentContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
`;
const ColumnLeft = styled_components_1.default.div `
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  flex: 1;
`;
const ColumnRight = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  text-align: right;
`;
const Footer = () => {
    return (<Wrapper>
      <ContentContainer>
        <ColumnLeft>
          <div>Garret DePass</div>
          <div>Engineer+</div>
        </ColumnLeft>
        <ColumnRight>
          <a href="" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="https://github.com/garretdepass" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/garretdepass/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </ColumnRight>
      </ContentContainer>
    </Wrapper>);
};
exports.default = Footer;
