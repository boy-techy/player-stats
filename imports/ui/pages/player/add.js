import './add.html';

Template['playerInfo'].onCreated(function() {
});

Template['playerInfo'].events({
	'submit #addPlayerInfo' : function (event, template) {
		event.preventDefault();
		let playerData = {};
		let formData = $('#addPlayerInfo').serializeArray();

		formData.map(function (item, key) {
			playerData[item.name] = item.value;
		});
		playerData['upvoteCount'] = 0;
		playerData['downvoteCount'] = 0;

		Meteor.call('insertPlayerData', playerData, function (err, res) {
			if (err) {
				toastr.error(err.error, err.reason);
				return;
			}
			FlowRouter.go('/');
		});
	}
})
