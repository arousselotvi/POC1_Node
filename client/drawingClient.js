document.addEventListener("DOMContentLoaded", function() {
    // get canvas element and create context
    var canvas  = document.getElementById('drawing');
    var context = canvas.getContext('2d');
    var width   = window.innerWidth;
    var height  = window.innerHeight;
    var socket  = io.connect();

    // set canvas to full browser width/height
    canvas.width = width;
    canvas.height = height;

    // draw line received from server
    socket.on('draw_line', function (data) {
        console.log("client received draw_line");
        var line = data.line;
        console.log(data.line);
        console.log(line[0]);
        context.beginPath();
        context.moveTo(JSON.parse(line[0]).x * width, JSON.parse(line[0]).y * height);
        context.lineTo(JSON.parse(line[1]).x * width, JSON.parse(line[1]).y * height);
        context.stroke();
    });
});
