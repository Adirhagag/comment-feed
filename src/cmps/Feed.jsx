import React, { useEffect, useState } from 'react'
import { commentsService } from '../services/commentsService'
import { AddComment } from './AddComment'
import { Comments } from './Comments'

export const Feed = () => {

  const initialFilterBy = { email: '' }
  const [filterBy, setFilterBy] = useState(initialFilterBy)
  const [comments, setComments] = useState([])

  const loadComments = async () => {
    const fetchedComments = await commentsService.getComments(filterBy)
    setComments(fetchedComments)
  }

  const setFilter = (txt) => {
    setFilterBy({
      ...filterBy,
      email: txt
    })
  }
  
  useEffect(() => {
    loadComments()
  }, [filterBy]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="feed flex column align-center">
      <AddComment loadComments={loadComments} />
      <Comments comments={comments} setFilter={setFilter} />
    </div>
  )
}