import React from 'react'

export default function About(props) {
  return (
    <div style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1 style={{color: props.mode === 'dark'? 'white' : 'black'}}>About</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    </div>
  )
}
