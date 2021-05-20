import React, { useEffect, useState } from 'react'
import { commentsService } from '../services/commentsService'

export const CommentPreview = ({ comment }) => {

  const [gravatarUrl, setGravatarUrl] = useState('')

  const loadUserGravatar = async () => {
    const fetchedGravatarUrl = await commentsService.getGravatarUrl(comment.email)
    setGravatarUrl(fetchedGravatarUrl)
  }

  useEffect(() => {
    loadUserGravatar()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="comment-preview flex">
      {gravatarUrl && <img className="gravatar-img" src={gravatarUrl} alt="" />}
      <div className="content-wrapper flex column justify-center">
        <h1 className="email">{comment.email}</h1>
        <p className="msg">{comment.message}</p>
      </div>
    </div>
  )
}
