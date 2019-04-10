import React from 'react';

export default function Greeting(props) {
  const noMessage = <div>No Message</div>;

  return props.msg ? <div>{props.msg}</div> : noMessage;
}
//test