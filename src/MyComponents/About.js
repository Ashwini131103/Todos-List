import React from 'react'

const About = () => {
  return (
    <div>
      <h3>About This App</h3>
      <p>
        This is a simple <b>Todo List Application</b> built with React. 
        It allows users to add, view, and delete tasks easily. 
        All todos are stored in your browser's <b>local storage</b>, 
        so your list is saved even after refreshing the page.
      </p>
      <p>
        The app is built using modern React features like <b>functional components</b>, 
        <b>hooks</b> (<code>useState</code> and <code>useEffect</code>), and 
        <b>React Router</b> for navigation. It also uses <b>Bootstrap</b> for styling.
      </p>
      <p>
        This project is a great example for beginners to learn the fundamentals of React, 
        component reusability, and client-side routing.
      </p>
    </div>
  )
}

export default About
