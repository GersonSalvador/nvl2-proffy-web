import React from 'react'
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

function TeacherForm(){

  const fieldsets = [
    {
      title: "Your Info",
      inputs: [
        {label: "Full name", name:"name"},
        {label: "Avatar", name:"avatar"},
        {label: "Whatsapp", name:"Whatsapp"}
      ],
      textareas:[
        {label: "Bio", name: "bio"}
      ]
    },
    {
      title: "Abput the class",
      selects: [
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
      ],
      inputs: [
        {label: "Cost per hour", name:"cost"},
      ]
    }
  ]

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="It's amazing taht you want to give classes"
        description="Fill up the form and you're ready to go."
      />

      <main>

          {fieldsets.map(({title, selects, inputs, textareas}) => (
            <fieldset>
              <legend>{title}</legend>
              {selects?.map(item => <Select {...item}/>)}
              {inputs?.map(item => <Input {...item}/>)}
              {textareas?.map(item => <Textarea {...item}/>)}
            </fieldset>
          ))}
        <fieldset>
          <legend>
            Schedules Available
            <button>+ New Schedule</button>
          </legend>
          <div className="schedule-items">
            {[
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
            ].map(item => <Select {...item}/>)}

            <Input label="From" name="from"/>
            <Input label="To" name="to"/>
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Warning"/>
            Atention! <br/>
            Fill up all fields
          </p>
          <button>
            Send Info
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;