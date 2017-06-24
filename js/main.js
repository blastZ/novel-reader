$(document).ready(function() {
    $('#load').click(function() {
        $(document).load("novels/chapter_1.txt", function(responseTxt) {
            var lines = responseTxt.split('\n');
            console.log(lines);
            for(var i=0; i<lines.length; i++) {
                if(i === 0) {
                    $('#title').text(lines[i]);
                } else {
                    $('#content').append('<p>' + lines[i] + '</p>');
                }
            }
        });
    })
})
