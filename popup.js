$(document).ready(function(){

$(function(){
  $('#domainform').on('submit', function(event){
    event.preventDefault();

    console.log("something submitted");
     
    var usertopic = $('#searchrequest').val();
        console.log(usertopic);
    var requrl = "http://www.reddit.com/r/";
    var fullurl = requrl + usertopic + ".json"

    $.getJSON(fullurl, function(json){
	   var listing = json.data.children;
	   var html = '';
    // console.log(json.data);

    for(var i=0, l=listing.length; i<l; i++) {
    	var obj = listing[i].data;
 
	    var title     = obj.title;
	    var exturl    = obj.url;
	    var thumb     = obj.thumbnail;
	    var redditurl = "http://www.reddit.com"+obj.permalink;
	    	console.log(redditurl);
    
    if(obj.thumbnail === 'default' || obj.thumbnail === 'nsfw' || obj.thumbnail === '')
      thumb = "weird-shoes-win.jpg";
   
    html += '<img src="'+thumb+'" class="thumbimg">\n';
    console.log(thumb);
    html += '<h2>'+title+'</h2>\n';
    console.log(title);
    // html += '<a href="'+exturl+'" target="_blank">"Click to read"</a>
    html += '<a href="'+exturl+'" target=_blank">Click to Read</a> - "<a href="'+redditurl+'" target="_blank"></a>\n';
    console.log(html);
  } // end for{} loop

$('#redditresults').html(html);
 
  }); // end getJSON()
}); // end .on(submit) listener
});
});