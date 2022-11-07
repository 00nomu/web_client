import styled, { keyframes } from "styled-components";

export const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fullWidth = keyframes`
  0%{
    width : 0%;
  }100%{
    width : 100%;
  }
`;

export const rotate720 = keyframes`
  0%{
   transform:rotate(0);
  }100%{
    transform:rotate(720deg);
  }
`;

export const translate10 = keyframes`
0%{
  transform:translateY(0);
}
50%{
  transform:translateY(10px);
}
100%{
  transform:translateY(0px);
}
`;

export const translate = keyframes`
0%{
  transform:translateY(50px);
}
100%{
  transform:translateY(0px);
}
`;

export const translateX = keyframes`
0%{
  transform:translateX(-50px);
}
100%{
  transform:translateX(0px);
}
`;

export const boxFade = keyframes`
  from {transform: translate3d(0, 0, 0);}
  to {transform: translate3d(0, 50px, 0);}
`

export const floating = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-4px);
    }
    100% {
        transform: translateY(0);
    }
`

export const day = keyframes`
    0% {
        transform: translateY(-20px);
        opacity:1;
    }
    50% {
        transform: translateY(-20px);
        opacity:1;
    }
    100% {
      transform: translateY(0);
      opacity:0;
  }
`

export const slideUp = keyframes`
    0% {
      transform: translate(-50%,-40%);
      opacity:0;
    }
    100% {
      transform: translate(-50%,-50%);
      opacity:1;
  }
`