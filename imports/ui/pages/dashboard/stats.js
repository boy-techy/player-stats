import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './stats.html';
import './stats.css';

Template.stats.onCreated(function statsOnCreated() {

});

Template.stats.helpers({
  playerExists: function () {
    return true
  },
  playerStats: function () {
    return [
      {
        "name": "Sehwag",
        "dob": "19/04/1989",
        "height": "178",
        "role": "Batsman",
        "battingStyle": "Explosive",
        "bowlingStyle": "Off break spin",
        "iplTeam": "DD",
        "seasonsPlayed": 5,
        "numOf50s": 10
      }
    ];
  },
  playerAdmin: function () {
    if (Meteor.user() === null) {
      return false;
    }
    return Meteor.user() && Meteor.user().isAdmin ? true : false;
  }
});

Template.stats.events({
  'click #upvote-stats': function (event, template) {

  },

  'click #downvote-stats': function () {

  }
});
