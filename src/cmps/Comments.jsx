import React from 'react'
import { CommentPreview } from './CommentPreview'
import { Filter } from './Filter'

export const Comments = ({ comments, setFilter }) => {

  return (
    <div className="comments flex column">
      <Filter setFilter={setFilter} />
      {!comments.length && <div>Loading...</div>}
      {comments && comments.length > 0 && comments.map((comment) => <CommentPreview key={comment._id} comment={comment} />)}
    </div>
  )
}
