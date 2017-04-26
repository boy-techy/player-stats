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
		PlayerStats.insert(data);
	},
	'upvote': function (data) {
		const userId = this.userId;
		if(!this.userId) {
			throw new Meteor.Error('not-authorized', 'Only System Admin can add players');
			return;
		}

		let player = PlayerStats.findOne({_id: data.id, upvoteUsers: {$in: [userId]} });
		if(player) {
			throw new Meteor.Error('not-authorized', 'You have already upvoted the Player');
			return;
		}

		player = PlayerStats.findOne({_id: data.id, downvoteUsers: {$in: [userId]} });
		if(player) {
			PlayerStats.update({_id: data.id}, {$inc:{upvoteCount: 1, downvoteCount: -1}, $push: {upvoteUsers:userId}, $pull:{downvoteUsers: userId}});
			return {status: 'ok', data: null};
		}

		PlayerStats.update({_id: data.id},{$inc:{upvoteCount: 1}, $push: {upvoteUsers:userId}});

		return {status: 'ok', data: null};
	},
	'downvote': function (data) {
		const { userId } = this;
		if(!this.userId) {
			throw new Meteor.Error('not-authorized', 'Only System Admin can add players');
			return;
		}

		let player = PlayerStats.findOne({_id: data.id, downvoteUsers: {$in: [userId]} });
		if(player) {
			throw new Meteor.Error('not-authorized', 'You have already downvoted the Player');
			return;
		}

		player = PlayerStats.findOne({_id: data.id, upvoteUsers: {$in: [userId]} });
		if(player) {
			PlayerStats.update({_id: data.id}, {$inc: {upvoteCount: -1, downvoteCount: 1}, $pull: {upvoteUsers: userId}, $push:{downvoteUsers: userId}});
			return {status: 'ok', data: null};
		}

		PlayerStats.update({_id: data.id},{$inc:{downvoteCount: 1}, $push: {downvoteUsers:userId}});

		return {status: 'ok', data: null};
	}
})
