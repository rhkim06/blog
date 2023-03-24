import request from 'request'
import type { Post } from 'type'
const paths = {
  getPost: '/post'
}

export function fetchPost(id: string) {
  return request.get<Post>(`${paths.getPost}/${id}`)
}
