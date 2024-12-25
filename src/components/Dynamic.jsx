import React from 'react'

const Dynamic = (props) => {
// console.log(props);


  return (
    <div style={{border:'2px solid red',backgroundColor:'green',padding:'20px 100px', margin:'20px',color:'white'}}>
<h5> This is from Dynamic</h5>
<h6>Name:{props.Name}</h6>
<h6>Age:{props.Age}</h6>
<h6>Profession:{props.Profession}</h6>


    </div>
  )
}

export default Dynamic