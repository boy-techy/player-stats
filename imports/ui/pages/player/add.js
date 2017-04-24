import './add.html';

Template['playerInfo'].onCreated(function() {
	console.log("Created");
});

Template['playerInfo'].events({
	'submit #addPlayerInfo' : function (event, template) {
		event.preventDefault();
		let playerData = {}; 
		let formData = $('#addPlayerInfo').serializeArray();

		formData.map(function (item, key) {
			playerData[item.name] = item.value;
		});

		console.log("The Player Data", playerData);
		Meteor.call('add',{ playerData }, function (err, res) {
			console.log(err, res);
		})
	}
})