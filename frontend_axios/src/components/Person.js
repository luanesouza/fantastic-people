import React from 'react'

export default function Person(props){
  const { name, bio, dob, image_url } = props
  return(
    <section className='person-info'>
      <img src={image_url} alt={`${name}`}/>
      <section className='name-dob'>
        <p id='line'>_____________________</p>
        <h1 id='name'>{name}</h1>
        <p id='dob'>{dob}</p>
        <p id='bio'>{bio}</p>
      </section>
    </section>
  )
}
