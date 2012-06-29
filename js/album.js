				
jQuery(document).ready(function($){
	
					var thumbnailUrl = "http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}_s.jpg";
					var linkUrl = "http://www.flickr.com/photos/donnior/{id}/";
					var setUrl = "http://www.flickr.com/photos/donnior/sets/";

					$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=d7e125ed4bc163779b226d56d9514a15&user_id=47974905%40N02&format=json&jsoncallback=?", function (data) {
					    var list = $("<div id='sets'></div>");
					    $.each(data.photosets.photoset, function (i, set) {
					        var url = thumbnailUrl.replace("{farm-id}", set.farm)
					            .replace("{server-id}", set.server)
					            .replace("{id}", set.primary)
					            .replace("{secret}", set.secret);

					        var link = $("<a/>").attr("title", set.description._content)
					            .attr("href", setUrl + set.id).attr("target", "_blank")
					            .text(set.title._content);
							var primary_img = $("<img/>").attr("src", url).attr("height", "75").attr("width", "75")
						        .attr("title", set.title._content).attr("alt", "A photo on Flickr");		
					        var li = $("<div/>").append(primary_img);
							li.append("<br/>");
							li.append(link).append(" (" + set.photos + ")");
					        $(list).append(li);

					    });
						$("#flickr-sets span.loading").hide();
					    $("#flickr-sets").append(list);
					});




					$.getJSON("http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=d7e125ed4bc163779b226d56d9514a15&user_id=47974905@N02&format=json&extras=url_t,url_m&jsoncallback=?", function (data) {
					    var photos = [];
						pLength = data.photos.photo.length;
					    for (var i = 0; i < pLength; i++) {
							photos.push(data.photos.photo[i]);
					    }
					    var list = $("<div></div");
						var  li = $("<div/>");
					    $.each(photos, function (i, photo) {
					        var url = thumbnailUrl.replace("{farm-id}", photo.farm)
					            .replace("{server-id}", photo.server)
					            .replace("{id}", photo.id)
					            .replace("{secret}", photo.secret);
					        /*var img = $("<img/>").attr("src", photo.url_t).attr("height", photo.height_t).attr("width", photo.width_t)
					            .attr("title", photo.title).attr("alt", "A photo on Flickr");
    						*/
							var img = $("<img/>").attr("src", url).attr("height", "75").attr("width", "75")
					            .attr("title", photo.title).attr("alt", "A photo on Flickr");
					        var link = $("<a></a>").attr("title", photo.title).attr("href", photo.url_m)
								.attr("rel","lightbox[roadtrip]").attr("flink", linkUrl.replace("{id}", photo.id)).append(img).css({"margin":"5px", "float":"left"});	
							/*var link = $("<a></a>").attr("title", photo.title).attr("href", photo.url_m).attr("rel","lightbox[roadtrip]").append(img).css({"margin":"5px", "float":"left"});	*/
							/*var link = $("<a></a>").attr("href", photo.url_m).append(img).css({"margin":"5px", "float":"left"}).click(
								function(){
									
									iBox.showURL(photo.url_m);
									return false;

								});	
							*/	
							li.append(link);
								
					    });
						
						$(list).append(li);
						$("#flickr-photos span.loading").hide();	
					    $("#flickr-photos").append(list);
					})




 
	
});

