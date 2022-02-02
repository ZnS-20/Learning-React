import React from 'react'

export default function Alert(props) {

    const capatalizeFirstChar = (word) => {
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {  props.alert&&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalizeFirstChar(props.alert.type)}</strong>:{props.alert.message}
    </div>}
    </div>
    
  )
}
