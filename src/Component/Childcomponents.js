import React from 'react'
const mylist = {
    name: 'hello',
    age: 24,
    city: "abc"
}
function Childcomponents(props) {
    return (
        <div>
            <button className='btn btn-dark mt-5' onClick={() => props.perentPass(mylist)}>perent data</button>
            <h1> {props.children}</h1>
        </div>
    )
}

export default Childcomponents
