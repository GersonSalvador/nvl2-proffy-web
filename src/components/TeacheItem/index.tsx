import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/13970277?s=460&u=8e8f858a4e26264e82c5f7d8ec92e5a11785f13d&v=4" alt="Gerson Salvador"/>
        <div>
          <strong>Gerson Salvador</strong>
          <span>JavaScript</span>
        </div>
      </header>

      <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Hourly Cost
          <strong>$ 25,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;