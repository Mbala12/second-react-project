import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Apoulah', 'Djedje', 'Bore','Apoulah','Jay','Isaac']
    const persons = [
        {
            //id:5,
            name: 'Jay',
            age: 50,
            skill: 'Blazor'
        },
        {
            id:1,
            name: 'Apoulah',
            age: 40,
            skill: 'VB .Net'
        },
        {
            id:2,
            name: 'Djedje',
            age: 45,
            skill: 'C# .Net'
        },
        {
            id:3,
            name: 'Bore',
            age: 50,
            skill: 'ReactJS'
        },
        {
            id:4,
            name: 'Isaac',
            age: 30,
            skill: 'Blazor'
        }
    ]
    const nameList = names.map((name, idx) => <h2 key={idx}>{idx} {name}</h2> )
    const personList = persons.map(person => 
                <Person key={person.id} human={person} />)
  return (
    <div>
        <div>{ personList }</div>
        <div>{nameList}</div>
    </div>
  )
}

export default NameList