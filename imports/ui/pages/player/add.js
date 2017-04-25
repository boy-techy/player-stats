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
		Meteor.call('insertPlayerData', { playerData }, function (err, res) {
			if (err) {
				return;
			}

		})
	}
})
