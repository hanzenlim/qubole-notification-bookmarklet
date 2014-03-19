javascript:
(function(window){ 
	var qbListenerMap = qbListenerMap || {};
	var com_id = $('.command_id_draft').attr('com_id');
	qbListenerMap[com_id] = 1;
	var histElem = $('.query_hists.qbol-table-query-hist.table');
	if(histElem.data('events').DOMSubtreeModified == undefined){
	  $('.query_hists.qbol-table-query-hist.table').bind("DOMSubtreeModified", function(){ 
		var value = $('.query_head_status_draft.status-inline span').html(); 
		setTimeout(function() { 
			for(var key in qbListenerMap){
			   var value = $("tr[id=" + key +"] > td:nth-child(2) icon").attr('title');

			   if(value=="Success" && qbListenerMap[key]){ 
		   		alert("Job:" + key + " succeeded");

		   		if($.isEmptyObject(qbListenerMap)){
		   			$('.query_hists.qbol-table-query-hist.table').unbind("DOMSubtreeModified");
		   		} 
		   		delete qbListenerMap[key];
			   }else if(value=="Failed" && qbListenerMap[key]){
				alert("Job:" + key + " failed"); 
				delete qbListenerMap[key];
			   }	
			}
			
		}, 2000);

	  });
	}
	alert("Listening to Qubole job:" + com_id);  
	})(this)
