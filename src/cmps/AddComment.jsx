import React, { useRef, useState } from 'react'
import { commentsService } from '../services/commentsService'

export const AddComment = ({ loadComments }) => {

  const initialComment = { email: '', message: '' }
  const [comment, setComment] = useState(initialComment)
  const textareaRef = useRef(null)

  const onAddComment = async (ev) => {
    ev.preventDefault()

    if (!comment.message) {
      textareaRef.current.focus()
      return
    }

    await commentsService.addComment(comment)
    setComment(initialComment)
    loadComments()
  }

  const onCommentChange = ({ target }) => {
    setComment({
      ...comment,
      [target.name]: target.value
    })
  }

  return (
    <form className="add-comment flex column align-center" onSubmit={onAddComment}>
      <input
        value={comment.email}
        onChange={onCommentChange}
        name="email"
        type="email"
        placeholder="Email"
        autoFocus />
      <textarea
        value={comment.message}
        onChange={onCommentChange}
        ref={textareaRef}
        name="message"
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </form>
  )
}
