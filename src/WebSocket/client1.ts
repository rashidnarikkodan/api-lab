const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  socket.send('from client 1');
};

socket.onmessage = (e) => {
  console.log(e.data);
};

socket.onclose = (e)=>{
  console.log(e)
}

socket.onerror = (error) => {
  console.log(error.toString())
}
