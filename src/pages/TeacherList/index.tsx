import React from 'react'
// import { Link } from 'react-router-dom'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacheItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList(){
          
  const 
    inputs = [
      {type: "time",name: "time", label:"Time"}
    ]
    
    const selects = [
      {label: "Subject", name:"subject", options: [
        {value: "Artes", label: "Artes"},
        {value: "Biologia", label: "Biologia"},
        {value: "Ciências", label: "Ciências"},
        {value: "Educação Física", label: "Educação Física"},
        {value: "Física", label: "Física"},
        {value: "Geografia", label: "Geografia"},
        {value: "História", label: "História"},
        {value: "Matemática", label: "Matemática"},
        {value: "Português", label: "Português"},
        {value: "Química", label: "Química"},
      ]},
      {label: "Week Day", name:"week_day", options: [
        {value: "0", label: "Domingo"},
        {value: "1", label: "Segunda-Feira"},
        {value: "2", label: "Terça-Feira"},
        {value: "3", label: "Quart-Feira"},
        {value: "4", label: "Quinta-Feira"},
        {value: "5", label: "Sexta-Feira"},
        {value: "6", label: "Sábado"},
      ]},
    ]

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são so proffys disponíveis.">
        <form  id="search-teachers" action="">

          {selects?.map(item => <Select {...item}/>)}
          {inputs.map(item => <Input {...item}/>)}

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