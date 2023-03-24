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
    width: calc(100vw - 468px);
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
`
export default Wrapper
