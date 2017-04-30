import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import { PlayerStats } from '/lib/collections.js';

Meteor.publish('getAllPlayerStats', function(){
    return PlayerStats.find({});
});

Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, {
      fields: { isAdmin: 1}
    });
  } else {
    this.ready();
  }
});
