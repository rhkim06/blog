import React, { memo, ReducerStateWithoutAction } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './styled'
import Layout from '@component/layout'
import EnterIcon from '@icon/enter-icon'
import CodeStream from '@component/code-stream'
import { useReducer } from 'react'
import { useState } from 'react'
import { off } from 'process'
import { useEffect } from 'react'

interface IProps {
  children?: ReactNode
}
const messages = [
  'Hi !',
  'Welcome to my world of web design and development!',
  'As a frontend developer, I`m always excited to collaborate with',
  'fellow creatives to bring unique and stunning websites to life.',
  'Let`s work together and make magic happen!'
]

interface IAction {
  type: number
  payload?: IStatus
}
interface IStatus {
  type: boolean
  end?: boolean
}
const About: FC<IProps> = memo(() => {
  // States
  const initialStatus = [{ type: true, end: false }, ...messages.map(() => ({ type: false, end: false }))]
  initialStatus.splice(messages.length)

  const [iconClicked, setIconClicked] = useState(false)
  const [streamIndex, setStreamIndex] = useState(0)

  // Effects
  useEffect(() => {
    if (streamIndex > 0) {
      dispatch({ type: streamIndex })
    }
  }, [streamIndex])

  // Reducders
  const changeStreamStatus = (state: IStatus[], action: IAction) => {
    state = state.map((item, index) => {
      if (index === action.type) {
        if (action.payload?.end) {
          return {
            type: true,
            end: true
          }
        } else {
          return {
            type: true,
            end: false
          }
        }
      } else {
        return {
          type: false,
          end: false
        }
      }
    })
    return state
  }
  const [state, dispatch] = useReducer(changeStreamStatus, initialStatus)

  // Handler
  const iconClickHandler = () => {
    dispatch({ type: streamIndex, payload: { type: false, end: true } })
    setStreamIndex(streamIndex + 1)
  }

  return (
    <Wrapper>
      <Layout>
        <div className="enter-key">{/* <EnterIcon iconClickHandler={iconClickHandler} /> */}</div>
        <div className="message-list flex direction-column align-start">
          {messages.map((item, index) => {
            return (
              <CodeStream
                streamStatus={state[index]}
                key={item}
                streamEndCB={(idx) => {
                  setStreamIndex(idx + 1)
                }}
                streamIndex={index}
              >
                {item}
              </CodeStream>
            )
          })}
        </div>
      </Layout>
    </Wrapper>
  )
})

export default About

About.displayName = 'About'
