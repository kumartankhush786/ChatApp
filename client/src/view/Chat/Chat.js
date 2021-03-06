import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


let socket;

const Chat = ({location}) => {

  const [name, setName]= useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:4000';


  useEffect(()=>{
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket)
  });
  
  return (
   <h1>Chat</h1>
  )
}

export default Chat