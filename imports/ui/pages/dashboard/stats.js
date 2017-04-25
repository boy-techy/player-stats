import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { PlayerStats } from '/lib/collections';
import './stats.html';
import './stats.css';

Template.stats.onCreated(function statsOnCreated() {

});

Template.stats.helpers({
  playerExists: function () {
    return PlayerStats.find({}).fetch() ? true : false;
  },
  playerStats: function () {
    return PlayerStats.find({}).fetch();
  },
  playerAdmin: function () {
    if (Meteor.user() === null) {
      return false;
    }
    return Meteor.user().isAdmin() ? true : false;
  }
});

Template.stats.events({
  'click #upvote-stats': function () {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For upvoting the stats, user must be logged in.');
    }
  },

  'click #downvote-stats': function () {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For downvoting the stats, user must be logged in.');
    }
  }
});
