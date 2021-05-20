import React, { useEffect, useState } from 'react'
import searchGlass from '../assets/imgs/loupe.svg'

export const Filter = ({setFilter}) => {

  const [filterInput, setFilterInput] = useState('')

  const onInputChange = ({ target }) => {
    setFilterInput(target.value)
  }

  useEffect(() => {
    setFilter(filterInput)
  }, [filterInput]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="filter">
      <img src={searchGlass} alt="" />
      <input value={filterInput} onChange={onInputChange} type="text" placeholder="Filter" />
    </div>
  )
}
