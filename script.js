window.onload = function(){
				var ip = 'http://172.26.14.7:8080'
				var entered_devicename,
					entered_devicenamewrite,
					entered_value;

    			$("#getrecordbydevice").click(function(){

    					entered_devicename = $('#devicenameval').val();
    					var url = ip +'/read-latest?devicename=' + entered_devicename;
    					console.log('the name is' + entered_devicename);
    					$.getJSON(url, function(result){
    						$.each(result, function(i,obj){
    							$('#readreqresp').append(JSON.stringify(obj));
    							$('#singleval').append(JSON.stringify(obj.items[0].a3))
    							//console.log(obj.items); // show object traverse in console
    							console.log(obj.items[0]);
    						});
    					});
    				});
    			
    			$("#writevalout").click(function(){

    					entered_devicenamewrite = $('#devicenamevalwrite').val();
    					entered_value = $('#writevalue').val();
    					var url = ip + '/write?devicename='+entered_devicenamewrite+ '&val1=' + entered_value;
    					$.get(url,function(data){
    					//callback goes here on success
    					});

    			});
    		}