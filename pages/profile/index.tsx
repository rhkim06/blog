import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './styled'
import Layout from '@component/layout'
import Title from '@component/title'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Ultra } from 'next/font/google'
import ListItem from '@component/list-item'
import List from '@component/list'
interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = memo(() => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    customPaging: (i) => (
      <div
        style={{
          width: '30px',
          color: '#999'
        }}
      >
        {i + 1}
      </div>
    )
  }
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const afterChange = (currentSlide: number) => {
    switch (currentSlide) {
      case 0:
        setFirst(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
        break
      case 1:
        setFirst(false)
        setSecond(true)
        setThird(false)
        setFourth(false)

        break
      case 2:
        setFirst(false)
        setSecond(false)
        setThird(true)
        setFourth(false)

        break
      case 3:
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFourth(true)
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
              <ListItem animate={first}>
                Fluent in developing web pages using HTML, CSS and Javascript. proficient in various layouts and
                adapting to various devices.
              </ListItem>
              <ListItem animate={first}>
                Proficient in the latest ECMAScript syntax such ad ES6 and skilled in using TypeScript to optimize
                projects.
              </ListItem>
              <ListItem animate={first}>
                Proficient in the main Vue and React frameworks and able to develop with mainstream UI frameworks such
                as Ant-design, Element UI and Material UI.
              </ListItem>
              <ListItem animate={first}>
                Proficient in the Git version control tool, capable of collaborating with teams on development projects.
              </ListItem>
              <ListItem animate={first}>Skilled in using module bundling tools such as webpack, vite.</ListItem>
              <ListItem animate={first}>Skilled in using front-end visualization tools such as E-charts.</ListItem>
              <ListItem animate={first}>
                Skilled in using Node.js, Koa, Express and MySQL to build backend projects and use Jenkins to build
                automated deployment.
              </ListItem>
            </List>
          </div>
          <div className="content">
            <Title>Work Experience</Title>
            <h3 className="company mt-8">
              Simple X Tech Co. <span className="period">2018.10 ~ 2021.7</span>
            </h3>
            <div className="company-info mt-8">
              A large website builing platform that provides online website creation tools, servers, domain names and
              other services.
            </div>
            <h3 className="role mt-8">Project Experience and Roles Held - 1</h3>
            <List>
              <ListItem animate={second}>
                Create web pages that comply with W3C web standards using HTML, CSS, JavaScript and other technologies.
              </ListItem>
              <ListItem animate={second}>
                Use CSS3, bootstrap, post-css, styled-components or tailwind to build a website pixel perfect for both
                large screen and mobile.
              </ListItem>
              <ListItem animate={second}>
                Create various types of websites for customers, including personal websites, e-commerce websites,
                charity websites and so on.
              </ListItem>
            </List>
            <h3 className="role mt-8">Project Experience and Roles Held - 2</h3>
            <List>
              <ListItem animate={second}>
                Create and maintain network applications for the employee management system using Vue, VueX, Typescript,
                Ant-design.
              </ListItem>
              <ListItem animate={second}>
                Visualize the employee ISSUE management module through e-charts to make it easier to manage ISSUE.
              </ListItem>
              <ListItem animate={second}>
                Building a blog module for the employee management system using Node.js and MySQL.
              </ListItem>
            </List>
            <h3 className="role mt-8">Project Experience and Roles Held - 3</h3>
            <List>
              <ListItem animate={second}>
                Providing React training for three team members over a period of three months.
              </ListItem>
            </List>
          </div>
          <div className="content">
            <Title>Work Experience</Title>
            <h3 className="company mt-8">
              Cross-border E-commerce LLC<span className="period">2021.7 ~ 2023.2</span>
            </h3>
            <div className="company-info mt-8">Cross-border E-commerce</div>
            <List>
              <ListItem animate={third}>
                No design drafts, reasonably utilize several large UI frameworks to develop company`s procurement
                management system website using Vue, Typescript and ant-design.
              </ListItem>
              <ListItem animate={third}>
                Develop company common SDKs for different projects such as using Axios and Typescript to develop a
                network request module can be deeply encapsulated to finely monitor each request and Collaborate with
                our team to develop a foundational infrastructure for Vue, React and other frameworks tha conforms to
                our company`s standards.
              </ListItem>
              <ListItem animate={third}>
                Developing staff log management system using React, Typescript and Material UI.
              </ListItem>
            </List>
          </div>
          <div className="content">
            <Title>Self-Evaluation</Title>
            <ListItem animate={fourth}>
              I`m a frontend engineer with four years of experience in builing user-focused web applications. My passion
              for creating intuitive and engaging user experiences has driven my interest in frontend development
            </ListItem>
            <ListItem animate={fourth}>
              I have adeep understanding of frontend technologies such as HTML, CSS and JavaScript as well as popular
              frameworks like React and Vue. I pride myself on my ability to quickly adapt to new technologies and
              project environments and I work closely with other technical professionals to ensure successful project
              outcomes. Throuhout my career, I have consistently demonstrated a strong work ethic and a commitment to
              delivering high-quality code. I am always eager to learn new skills and stay up-to-date with the latest
              developments in frontend technology.
            </ListItem>
            <ListItem animate={fourth}>
              In addition to my technical skills, I am also an effective communicator and team player. I enjoy
              collaborating with colleagues to solve complex problems and achieve shared goals. Overall, Iam confident
              that my skills and experience make me a valuable asset to any team in nedd of a skilled and dedecated
              fronend engineer.{' '}
            </ListItem>
          </div>
        </Slider>
      </Wrapper>
    </Layout>
  )
})

export default Profile

Profile.displayName = 'Profile'
