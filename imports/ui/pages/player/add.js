import './add.html';

Template['playerInfo'].onCreated(function() {
});

Template['playerInfo'].events({
	'submit #addPlayerInfo' : function (event, template) {
		event.preventDefault();
		let playerData = {};
		let formData = $('#addPlayerInfo').serializeArray();
	}
})
