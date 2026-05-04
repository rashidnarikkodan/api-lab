const socket = new WebSocket("ws://localhost:3000");

socket.onopen = ()=>{
  socket.send('from client 2')
}

socket.onmessage = (e)=>{
  console.log(e.data)
}