window.onload = function() {
	setInterval(() => {
		axios.post('/get-last-transactions')
		.then(function (response) {
			if(response.data.amount) {
				$('.balance-amount').text(response.data.amount);
			}
			
			if(response.data.incomes && response.data.incomes.length > 0) {
				let incomes_html = '';
				for(let i = 0; i < response.data.incomes.length; i++) {
					incomes_html += '<p>' + response.data.incomes[i].from + ', ' + 
						response.data.incomes[i].to + ', ' + 
						response.data.incomes[i].amount + ', ' + 
						response.data.incomes[i].description + ', ' + 
						response.data.incomes[i].created_at + '</p>';
				}
				
				$('.incomes-list').html(incomes_html);
			}
			
			if(response.data.expenditures && response.data.expenditures.length > 0) {
				let expenditures_html = '';
				for(let i = 0; i < response.data.expenditures.length; i++) {
					expenditures_html += '<p>' + response.data.expenditures[i].from + ', ' + 
						response.data.expenditures[i].to + ', ' + 
						response.data.expenditures[i].amount + ', ' + 
						response.data.expenditures[i].description + ', ' + 
						response.data.expenditures[i].created_at + '</p>';
				}
				
				$('.expenditures-list').html(expenditures_html);
			}
		})
		.catch(function (error) {
			console.log(error);
		});
		
	}, 5000);
	
}
