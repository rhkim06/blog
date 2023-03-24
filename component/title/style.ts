import styled from 'styled-components'
import { architectsDaughter } from '@styles/fonts'
import { mobile } from '@styles/mixins'

const Wrapper = styled.div`
  .title {
    text-indent: 100px;
    ${mobile(`text-indent: 0`)};
    font-family: ${architectsDaughter.style.fontFamily};
    font-size: 33px;
    ${mobile(`text-indent: 0;`)}
  }
`
export default Wrapper
