import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello folks,</h1>
    <p>My name is <b>Hardik Modi</b>.</p>
    <p>I am from vadnagar,India. I am studying at Dhirubhai Ambani Institute of Information and Communication Technology.
    	I am full stack developer with one year of experience of working and developing MERN and MEAN stack application.
    	I have also successfully completed three months long internship this summer at start up and also selected for summer 
    	intern at sprinklr.I am also contribute to open source community. My github profile page is <a href="https://github.com/hardiked">Hardik Modi </a>
    	Some of the major projects are plant disease prediction, Blog for sugar labs(I am doing it for GSoC),MSTC website,
    	React image load component,express cart etc. I am very much intrested in learning new things and every day I used to explore some new things.
    	My favourite pass time is to read books and play harmonium.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
