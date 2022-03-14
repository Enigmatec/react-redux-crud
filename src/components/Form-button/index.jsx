import React from 'react'

function FormButton({children, ...otherProps}) {
  return (
    <>
        <button {...otherProps} className='btn btn-primary'>{ children }</button>
    </>
  )
}

export default FormButton