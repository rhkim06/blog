import styled from 'styled-components'
type IProps = {
  animate?: boolean
}
const Wrapper = styled.div<IProps>`
  li {
    position: relative;
    display: inline-block;
    margin-left: 8px;
    font-size: 13px;
    &::before {
      content: '';
      position: absolute;
      left: -11px;
      top: 6px;
      width: 1px;
      height: 8px;
      background-color: #d3d3d3;
      transform: rotate(45deg);
      animation: rotateInfinite linear 7000ms infinite;
    }
    &::after {
      content: '';
      position: absolute;
      left: -11px;
      top: 6px;
      width: 1px;
      height: 8px;
      background-color: #d3d3d3;
      transform: rotate(-45deg);
      animation: rotateInfinite2 linear 7000ms infinite;
    }
    .line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #d3d3d3;
      transform-origin: 0 0;
      transform: scale(0);
      animation: ${({ animate }) => (animate ? 'flash 1000ms ease forwards' : '')};
    }
  }
  @keyframes rotateInfinite {
    to {
      transform: rotate(405deg);
    }
  }
  @keyframes rotateInfinite2 {
    to {
      transform: rotate(315deg);
    }
  }
  @keyframes flash {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
      transform: scale(1);
    }
  }
`
export default Wrapper
