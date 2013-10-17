$(document).ready( function (){
	apis.getSeriesInfo( seriesId, "#show-overview");
	
	$('a[rel=ajax]').on("click", function(event){
		apis.getEpisodeList( seriesId, "#episodes", event);
	});
});

