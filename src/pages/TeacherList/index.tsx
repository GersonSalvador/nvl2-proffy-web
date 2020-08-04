import React from 'react'
// import { Link } from 'react-router-dom'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacheItem'

function TeacherList(){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são so proffys disponíveis.">
        <form  id="search-teachers" action="">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Week Day</label>
            <input type="text" id="week_day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>

    </div>
  )
}

export default TeacherList;