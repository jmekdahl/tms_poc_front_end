$(document).ready( function (){
	apis.getSeriesInfo( seriesId, "#show-overview");
	
	$('a[rel=ajaxEpisodes]').on("click", function(event){
		apis.getEpisodeList( seriesId, "#episodes", event);
	});
});

