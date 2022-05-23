import React from "react";

const Message = ({ children, variant }) => {
  return (<p className="alert alert-danger" variant={variant}>
    {children}
  </p>
  )
};

Message.defaultProps = {
  variant: 'info'
}



export default Message;
