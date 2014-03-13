javascript:
if(typeof qbListenerMap == 'undefined')
		qbListenerMap = {};
	console.log(qbListenerMap);
	(function(){ 

	var com_id = $('.command_id_draft').attr('com_id');
	qbListenerMap[com_id] = 1;

	$('.query_hists.qbol-table-query-hist.table').unbind("DOMSubtreeModified");
	$('.query_hists.qbol-table-query-hist.table').bind("DOMSubtreeModified", function(){ 
		var value = $('.query_head_status_draft.status-inline span').html(); 

		console.log('change');
		setTimeout(function() { 
			var value = $("tr[id=" + com_id +"] > td:nth-child(2) icon").attr('title');

			console.log(com_id);
			if(value=="Success" && qbListenerMap[com_id]){ 
		   		alert("Job:" + com_id + " succeeded");

		   		if($.isEmptyObject(qbListenerMap)){
		   			$('.query_head_status_draft.status-inline').unbind();
		   		} 
		   		delete qbListenerMap[com_id];
			}else if(value=="Failed" && qbListenerMap[com_id]){
				alert("Job:" + com_id + " failed"); 
				delete qbListenerMap[com_id];
			}
		}, 1000);

	}); 
	alert("Listening to Qubole job:" + com_id);  
	})()
