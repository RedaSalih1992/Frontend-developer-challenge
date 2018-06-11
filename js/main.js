    // Get JSON DATA
       $(document).ready(function() {
       $.getJSON("assets/data.json", function(json) {
      var desc = "";
      var plays = "";
       for(var i=0, keys=Object.keys(json.data), l=keys.length; i<l; i++) {
      // Truncate descriptions if too much long
       desc =  jQuery.trim(json.data[i].description).substring(0, 150).split(" ").slice(0, -1).join(" ") + "..."; 
      // Turn null values in Likes to 0
      plays = (json.data[i].stats.plays == null) ? "0" : json.data[i].stats.plays;
       $('#feed-list ul').append('<li class="list-item box"><div class="video-container"><div class="row"><div class="col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6"><div class="panel panel-default bootcards-media"><div class="panel-body row"><div class="row"><div class="col-xs-2"><a href="'+json.data[i].user.pictures.sizes[1].link+'"><img class="author-img" src="'+json.data[i].user.pictures.sizes[1].link+'"></a></div><div class="col-xs-10"><div class="row"><p class="author-name" id="title">'+json.data[i].user.name+'</p></div><div class="row heading"><h5 class="video-name"><a href="'+json.data[i].link+'">'+json.data[i].name+'</a></h5></div></div></div><div class="row body-card"><div class="col-xs-12"><h5 class="video-description">'+desc+'</h5></div></div></div><div class="panel-footer"><p class="no-plays">'+plays+'<i class="fa fa-play" aria-hidden="true"></i></p><p class="no-comments"><i class="fa fa-comment" aria-hidden="true"></i>'+json.data[i].metadata.connections.comments.total+'</p><p class="no-likes"><i class="fa fa-heart" aria-hidden="true"></i>'+json.data[i].metadata.connections.likes.total+'</p></div></div></div></div class="video-container"></li>');
      
       }
      // Count Items
       var jobCount = $('.list-item').length;
         $('.list-count').text(jobCount + ' items');
         //console.log(jobCount);
      // Init list
      $('#feeds').jplist({				
      itemsBox: '.list' 
      ,itemPath: '.list-item' 
      ,panelPath: '.jplist-panel'	
      });
      
       } );     
       
      });
