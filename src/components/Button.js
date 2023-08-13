import React from 'react';

 // Make  the button component accept props, and on the button iam going to say {props.children}

  function Button(props) {
  return(
   <button>{props.children}</button>
  )
  }


  export default Button;