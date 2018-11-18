    initInstagramFeed = (function(){
   		var igID = '3023384543'; //maks_sad_
	    var igClientID = 
      '8c683a02106d4e5d9a481ad3f29960cd';
	 
	    var count = 33; // weird max image?
	    var accessToken = '3023384543.8c683a0.b5c81ec1f2f643a7971d54c9b80524e5';
	    $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/users/" + igID + "/media/recent/?access_token=" + accessToken + '&count=' + count,
			success: function(data) {
				for (var i = 0; i < count; i++) {
					$(".instagram-wrapper").append("<a target='_blank' href='" + data.data[i].link +"'><img src='" + data.data[i].images.thumbnail.url +"' /></a>");
				}
				console.log(data);
			},
			error: function(){
				console.log('Something went wrong', data);
			}
		});
    }());