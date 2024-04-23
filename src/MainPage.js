import React, {useState} from 'react'

function MainPage(props) {
  const {name,setName} = useState(props.name)
  const {lastName,setLastName} = useState(props.lastName)
  return (
    <div>
   u can come in site {props.name + " " + props.lastName} 
    </div>
  )
}
export default  MainPage
