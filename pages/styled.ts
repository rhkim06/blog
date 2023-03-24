import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  .enter-key {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .down {
    align-self: flex-end;
    .tag {
      top: -21px;
      left: -50px;
    }
  }
`
export default Wrapper
