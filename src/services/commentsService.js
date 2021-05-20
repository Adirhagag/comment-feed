import axios from 'axios'

const BASE_URL = 'https://big-panda-feed.herokuapp.com/comments'

export const commentsService = {
  getComments,
  addComment,
  getGravatarUrl
}

async function getComments(filterBy) {
  const res = await axios.get(BASE_URL, { params: filterBy })
  return res.data
}

async function addComment(newPost) {
  const res = await axios.post(BASE_URL, newPost)
  return res.data
}

async function getGravatarUrl(email) {
  const res = await axios.get(`${BASE_URL}/${email}`)
  return res.data
}