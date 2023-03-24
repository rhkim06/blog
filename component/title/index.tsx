import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const Title: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <Wrapper>
      <h2 className="title">{children}</h2>
    </Wrapper>
  )
})

export default Title

Title.displayName = 'Title'
