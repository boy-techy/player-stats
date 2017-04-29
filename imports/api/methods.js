import { Meteor } from 'meteor/meteor';
import { PlayerStats } from  '/lib/collections';

Meteor.methods({
	'insertPlayerData': function (data) {
		PlayerStats.insert(data);
	}
})
