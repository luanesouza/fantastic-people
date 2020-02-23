import React from 'react'
import Person from './Person'

export default function PersonContainer(props){
    const people = props.people.map( person => <Person
      key={person.id}
      name={person.name}
      dob={person.dob}
      image_url={person.image_url}
      bio={person.bio}

      />)
  return(
    <>
      <h1> Historical Figures </h1>
      {people}
    </>
  )
}
