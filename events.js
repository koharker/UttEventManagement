var JSONURL = 'https://spreadsheets.google.com/feeds/list/146pDeR841s410i2EnxIe4Xqaj64Z7q6dDLzz91MVbgA/1/public/basic?alt=json';

function callback(data){
    
    var cells = data.feed.entry;
    console.log(data);
    console.log(cells);
    
    var raw = document.createElement('p');
    raw.innerText = JSON.stringify(cells);
    document.body.appendChild(raw);
}

$(document).ready(function(){
    
    $.ajax({
        url:JSONURL,
        success: function(data){
            callback(data);
        }
    });

});
