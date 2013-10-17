var template = {
	ajaxLoader: 
		'<div class="loading"><img src="http://images.zap2it.com/html/images/loading.gif" /></div>',
	
	episode_row: 
	'<table>'+
		'{{#episodes}}'+
			'<tr class="schedule-grid-episode-info-border" itemprop="episode" itemscope="" itemtype="http://schema.org/TVEpisode">'+
				'<td>'+
					'<div class="schedule-grid-episode-container">'+
						'<h3>'+
							'<span itemprop="name">{{episodeTitle}} ({{tmsId}})</span>'+
						'</h3>'+
					'</div>'+
					'<div class="schedule-grid-description">'+
						'<span itemprop="description">{{shortDescription}}</span>'+
					'</div>'+
				'</td>'+
			'</tr>'+
		'{{/episodes}}'+
	'</table>',
	
	showcard: 
		'<div id="showcard"><h1>{{title}}</h1>'+
			'<p>{{longDescription}}</p>'+
			'<p>OAD:{{origAirDate}}</p>'+
			'<p>Seasons:{{totalSeasons}}</p>'+
			'<p>Episodes:{{totalEpisodes}}</p>'+
			'<ul>'+
				'{{#genres}}'+
					'<li>{{.}}</li>'+
				'{{/genres}}'+
			'</ul>'+
		'</div>'
		};