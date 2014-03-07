javascript:
if(typeof qbListenerMap == 'undefined')
		qbListenerMap = {};
	console.log(qbListenerMap);
	(function(){ $('.query_head_status_draft.status-inline').unbind();  

	var com_id = $('.command_id_draft').attr('com_id');
	qbListenerMap[com_id] = 1;

	$('.query_head_status_draft.status-inline').unbind();
	$('.query_head_status_draft.status-inline').bind("DOMSubtreeModified", function(){ 
		var value = $('.query_head_status_draft.status-inline span').html(); 
		console.log('change');
		setTimeout(function() { 
			var com_id = $('.command_id_draft').attr('com_id');
			console.log(com_id);
			if(value=="Succeeded" && qbListenerMap[com_id]){ 
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
