import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { PlayerStats } from '/lib/collections';
import './stats.html';
import './stats.css';

Template.stats.onCreated(function statsOnCreated() {
  let that = this;
  this.autorun(function () {
    that.subscribe('userData');
  });
});

Template.stats.helpers({
  playerExists: function () {
    return PlayerStats.find({}).fetch() ? true : false;
  },
  playerStats: function () {
    return PlayerStats.find({});
  },
  strikeRate: function () {
    return ((this.totalRuns/this.totalBalls)*100).toFixed(2);
  },
  avg: function () {
    return (this.totalRuns/this.inningsPlayed).toFixed(2);
  },
  playerAdmin: function () {
    if (Meteor.user() === null) {
      return false;
    }
    return Meteor.user() && Meteor.user().isAdmin ? true : false;
  },
});

Template.stats.events({
  'click #upvote-stats': function (event, template) {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For upvoting the stats, user must be logged in.');
      return;
    }
  },

  'click #downvote-stats': function () {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For downvoting the stats, user must be logged in.');
      return;
    }
  }
});
