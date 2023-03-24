import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './styled'
import Layout from '@component/layout'
import Title from '@component/title'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Ultra } from 'next/font/google'
import ListItem from '@component/list-item'
import List from '@component/list'
interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = memo(() => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const afterChange = (currentSlide: number) => {
    switch (currentSlide) {
      case 0:
        setFirst(true)
        setSecond(false)
        setThird(false)
        break
      case 1:
        setFirst(false)
        setSecond(true)
        setThird(false)
        break
      case 2:
        setFirst(false)
        setSecond(false)
        setThird(true)
        break
      default:
        break
    }
  }
  useEffect(() => {
    setFirst(true)
  }, [])
  return (
    <Layout>
      <Wrapper>
        <Slider {...settings} afterChange={afterChange}>
          <div className="content">
            <Title>Professional Skills</Title>
            <List>
              <ListItem animate={first}>熟练使用 HTML, CSS, Javascript 开发页面，熟悉各种布局和各种终端适配</ListItem>
              <ListItem animate={first}>熟悉 ES6/ES7/Typescript 及原生方法，熟悉开发可维护代码及代码的重构</ListItem>
              <ListItem animate={first}>熟练使用Vue, React 主流框架</ListItem>
              <ListItem animate={first}>熟练使用Antd、elelmentUl、MaterialUI, Vant 等常见 UI 框架</ListItem>
              <ListItem animate={first}>熟练使用 Git 版本控制工具，进行团队协作开发项目</ListItem>
              <ListItem animate={first}>熟悉模块化，自动化构建工具 webpack 和 npm, yarn 包管理器</ListItem>
              <ListItem animate={first}>熟悉 echarts 等数据可视化工具</ListItem>
            </List>
          </div>
          <div className="content">
            <Title>Work Experience</Title>
            <h3 className="company mt-8">
              鑫普瑞科技有限公司<span className="period">2018.10 ~ 2021.7</span>
            </h3>
            <div className="company-info mt-8">
              韩国的咖啡24公司的中国支社，主要提供购物网站制作平台以及托管、设计和其他服务。
            </div>
            <h3 className="role mt-8">职责一</h3>
            <List>
              <ListItem animate={second}>利用 HTML、CSS、JavaScript 等技术制作符合W3C网络标准的网页。</ListItem>
              <ListItem animate={second}>灵活使用 CSS3， 以及自制的 SDK 制作响应式页面。</ListItem>
              <ListItem animate={second}>为了提高效率，与设计讨论 UI 组件的设计，并制作可重复使用的 UI 组件</ListItem>
            </List>
            <h3 className="role mt-8">指责二</h3>
            <List>
              <ListItem animate={second}>
                使用 Vue, VueX, Typescript, Ant-design 制作和维护员工管理系统的网络应用程序。
              </ListItem>
              <ListItem animate={second}>
                将员工 ISSUE 管理模块，通过 e-charts 可视化，以便更轻松地管理 ISSUE。
              </ListItem>
              <ListItem animate={second}>帮助后端开发人员, 使用 Node.js 实现了文章发布模块的部分逻辑。</ListItem>
            </List>
            <h3 className="role mt-8">指责三</h3>
            <List>
              c<ListItem animate={second}>对三位团队成员进行了为期三个月的React培训。</ListItem>
              <ListItem animate={second}>
                讲解 createElement、redux 等的核心逻辑时，使用了手写代码的方式进行了说明。
              </ListItem>
            </List>
          </div>
          <div className="content">
            <Title>Work Experience</Title>
            <h3 className="company mt-8">
              熊猫跨境电商平台<span className="period">2021.7 ~ 2023.2</span>
            </h3>
            <div className="company-info mt-8">跨境电商平台</div>
            <List>
              <ListItem animate={third}>使用 React, React-router, Reduxjs/toolkit 制作商品进货以及上架平台。</ListItem>
              <ListItem animate={third}>使用 Axios，Typescript 深度封装细粒度、低耦合的网络请求模块</ListItem>
              <ListItem animate={third}>使用 Ant Design 自主构建 UI，UX</ListItem>
              <ListItem animate={third}>维护公司产品销售平台的微信小程序端并添加新工能模块。</ListItem>
            </List>
          </div>
        </Slider>
      </Wrapper>
    </Layout>
  )
})

export default Profile

Profile.displayName = 'Profile'
