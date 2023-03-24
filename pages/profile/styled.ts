import { mobile } from '@styles/mixins'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 20px;
  .title {
    text-indent: 0;
  }
  .profile-list {
    li {
      margin: 16px 0 0;
      font-size: 14px;
    }
    .content {
      width: 100%;
    }
  }
  .slick-list {
    width: 700px;
    ${mobile(`width: 70vw;`)}
  }
  .company {
    .period {
      display: inline-block;
      margin-left: 20px;
      font-size: 14px;
      font-style: italic;
      color: #999;
    }
  }
  .company-info {
    font-size: 13px;
    font-style: italic;
    color: #999;
  }
  .role {
    margin-top: 8px;
  }
  .role-content {
    font-size: 13px;
    li {
      position: relative;
      &::after {
      }
    }
  }
  .slick-dots li button:before {
    color: #fff;
  }
  .slick-dots {
    top: -10px;
    .slick-active {
      transform: scale(2);
      div {
        color: #fff !important;
      }
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    ${mobile(`font-size: 24px;`)}
  }

  .slick-prev {
    left: -60px;
    ${mobile(`left: -28px;`)}
  }
  .slick-next {
    right: -30px;
    ${mobile(`right: -25px;`)}
  }
`
export default Wrapper
