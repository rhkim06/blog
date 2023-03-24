import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@component/layout'
import type { GetStaticProps, GetStaticPaths } from 'next'

import { fetchPost } from '@service/post'
import { Post } from 'type'

interface IProps {
  children?: ReactNode
  post: Post
}
type Params = {
  id: string
}
const PostDetail: FC<IProps> = memo((props) => {
  const { post } = props
  return <Layout>{post.title}</Layout>
})
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchPost(context.params?.id as string)
  return {
    props: {
      post: res.data
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
