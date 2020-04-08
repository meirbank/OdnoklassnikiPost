				var requestOptions = {
	              applicationSecretKey: '',
	              applicationKey: '',
	              applicationId: '',
	            }

	            okRU.setOptions(requestOptions)

	            okRU.setAccessToken(odnoklassnikiToken)

	            okRU.refresh(odnoklassnikiRefreshToken, function(okRefErr, okRefData){
	            	if (okRefErr){
	            		console.log(okRefErr)
	            	} else {
		                okRU.setAccessToken(okRefData.access_token)
		                odnoklassnikiToken=okRefData.access_token;


		                okRU.post({ method: 'stream.publish', message:message}, function(okErr, okData){
							if (okErr){
								
							}

						})

		                
					}
	            })
