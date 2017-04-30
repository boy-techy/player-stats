import { Meteor } from 'meteor/meteor';
import { PlayerStats } from  '/lib/collections';

Meteor.methods({
	'insertPlayerData': function (data) {
		if(!this.userId) {
			throw new Meteor.Error('not-authorized', 'No user logged in');
			return;
		}

		let user = Meteor.users.findOne({_id: this.userId});
		if(!user || !user.isAdmin) {
			throw new Meteor.Error('not-authorized', 'Only System Admin can add players');
		}
		let doc = PlayerStats.insert(data);
		
		return {status: 'ok', data: doc};
	}
})
