import styled, { css } from "styled-components";
import Theme from "../../../../styles/Theme";

import {
  Input,
  RadioInput,
} from "../InputStyles";
import {
  GridBoxDiv,
  WholeWrapperDiv,
  WrapperDiv,
  DatepickerDiv,
  TabMenuBarDiv,
  TabMenuWrapperDiv,
} from "../DivStyles";
import {
  Select,
} from "../SelectStyles";
import {
  Button,
} from "../ButtonStyles";
import {
  TabMenuA,
} from "../AStyles";


export {
  Input,
  RadioInput,
  GridBoxDiv,
  WrapperDiv,
  DatepickerDiv,
  Button,
  TabMenuA,
  TabMenuBarDiv,
  TabMenuWrapperDiv,
  WholeWrapperDiv,
  Select
};

export const FilterWrapper = styled.div<any>`
  width: ${(props) => props.width || `100%`};
  margin-bottom: 0;
  text-overflow: ellipsis;
  display: grid;
  grid-template-columns: ${(props) => props.gtc || `0.5fr 1px 5fr 1px 4fr`};
  gap: 15px;
  justify-content: end;
  ${(props) => props.kindOf === `longFilter` && `width : 130% `}
`;

export const FilterBox = styled.div<any>`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 0 10px;
  align-items: center;
  flex-direction: row;

  ${(props) => props.kindOf === `term` && `grid-template-columns : auto repeat(3, 1fr) 0.1fr 1fr`}
  ${(props) => props.kindOf === `termTemporary` && `grid-template-columns : auto 3fr 3fr auto 30px`}
  ${(props) => props.kindOf === `search` && `grid-template-columns : 3fr 7fr 30px`}
  ${(props) => props.kindOf === `detail` && `grid-template-columns : auto 3fr 7fr 30px`}
  ${(props) => props.kindOf === `temporary` && `grid-template-columns : auto 3fr 3fr auto 30px`}

`;
