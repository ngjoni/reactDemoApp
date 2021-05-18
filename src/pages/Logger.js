import React from 'react'

import AddBtn from '../components/layout/AddBtn'
import AddLogModal from '../components/logs/AddLogModal'
import EditLogModal from '../components/logs/EditLogModal'
import AddTechModal from '../components/techs/AddTechModal'
import TechListModal from '../components/techs/TechListModal'
import SearchBar from '../components/layout/SearchBar'

import Logs from '../components/logs/Logs'

const Logger = () => {
  return (
    <div className='container'>
      <SearchBar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </div>
  )
}

export default Logger
