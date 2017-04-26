import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Accounts } from 'meteor/accounts-base';


export const PlayerStats = new Meteor.Collection('player-stats');

const PlayerSchema = new SimpleSchema({
  name: {
  	type: String,
  	optional: false,
  },
  dob: {
  	type: Date,
  	optional: false,
  },
  height: {
  	type: Number,
  	optional: false
  },
  role: {
  	type: String,
  	optional: false,
  	allowedValues: ['Batsmen', 'Bowler']
  },
  battingStyle: {
  	type: String,
  	optional: false
  },
  bowlingStyle: {
  	type: String,
  	optional: false
  },
  iplTeam: {
  	type: String,
  	optional: false
  },
  seasonsPlayed: {
  	type: String,
  	optional: false
  },
  numOf50s: {
  	type: String,
  	optional: false
  },
  upvoteCount: {
  	type: Number,
  	optional: true
  },
  downvoteCount: {
  	type: Number,
  	optional: true
  },
  upvoteUsers:{
  	type: Array,
    optional: true
  },
  'upvoteUsers.$':{
  	type: String,
    optional: true
  },
  downvoteUsers:{
  	type: Array,
    optional: true
  },
  'downvoteUsers.$':{
  	type: String,
    optional: true
  },
});

PlayerStats.attachSchema(PlayerSchema);

if(Meteor.users.find().count() == 0){
	let systemAdmin = {
		email: "systemAdmin@playerstats.io", 
		password: "Password@123"
	};

	const id = Accounts.createUser(systemAdmin);
	Meteor.users.update({_id: id},{$set: {isAdmin: true}})
}