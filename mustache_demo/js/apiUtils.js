var callback = {
	episodes: function( data ){
		var data_rows = {
			"episodes" : data
		};
		return Mustache.render(template.episode_row, data_rows);
	},
	series: function( data ){
		return Mustache.render(template.showcard, data);
	}
}

var apis = {
	config: {
		debug: false,
		oc_baseUrl: "http://data.tmsapi.com/v1/series/",
		oc_key: "?api_key=f4e68drjqy93jk8djh9bsf8g",
	},
	
	_getData: function(url, callback, domHandle, event){
		var response = 'request failure';
		if(event !== undefined){
			$(event.target).closest("div").html(Mustache.render(template.ajaxLoader,{}));
		}
		var jqxhr = $.getJSON(url, function( data ){
			$(domHandle).html(callback(data));
			if(apis.config.debug) console.log("request success");
		})
		.done(function() {
			if(apis.config.debug) console.log("response success");
		})
		.fail(function() {
			if(apis.config.debug) console.log( "response error" );
		})
		.always(function() {
			if(apis.config.debug) console.log( "complete" );
			$('#loading').hide();
		});
	},
	
	getSeriesInfo: function( rootId, domHandle ){
		reqUrl = apis.config.oc_baseUrl + rootId + apis.config.oc_key;
		this._getData(reqUrl, callback.series, domHandle);
	},
	
	getEpisodeList: function( rootId, domHandle, event ){
		reqUrl = apis.config.oc_baseUrl + rootId + "/episodes" + apis.config.oc_key;
		this._getData(reqUrl, callback.episodes, domHandle, event);
	}
}
