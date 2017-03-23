// First line of function
blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, C WHERE B ="+num,
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "YOURURLHERE" 
    //Cache is false so that your browser does not run an old function when you cnange your code
    }, { cache: false, expiry: 7200}, function(res) {
        // All results are part of the res.params.data object.
        // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
        //There is one matching row in this case, with two elements
      	var skill=res.params.data[0]['skill'];
      	var key=res.params.data[0]['key'];
});


















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
