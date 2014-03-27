var socket = io.connect('http://localhost:1337');
socket.on('connect', function(){
    socket.request('/Omdocument', {}, function(Omdocument){console.log(Omdocument);});
    
    socket.on('message', function(message){
        console.log("Got message:", message);
        
    });
});