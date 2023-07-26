import React from 'react'
import Navbar from '../../component/Navbar'
import Header from '../../component/Header'
import List from '../list/List'

const Hotel = () => {
  return (
  <div>
      <Navbar/>
      <Header type="list" />
      <List/>
  </div>
  )
}

export default Hotel