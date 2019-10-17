import React from "react";

// function component because it does not have state
function Chat(props) {

  console.log(props)

  return (
    <div style={{ backgroundColor: props.color }}> username : {props.username}
      {props.array.map(e => e * 100)}
    </div>
  )

}

export default Chat;