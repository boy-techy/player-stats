import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { PlayerStats } from '/lib/collections';
import './stats.html';
import './stats.css';

Template.stats.onCreated(function statsOnCreated() {
  let that = this;
  this.autorun(function () {
    that.subscribe('userData', Meteor.userId);
  })
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
    return Meteor.user() && Meteor.user().isAdmin ? true : false;
  }
});

Template.stats.events({
  'click #upvote-stats': function (event, template) {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For upvoting the stats, user must be logged in.');
      return;
    }

    Meteor.call('upvote', {id: this._id}, function(err, res) {
      if (err) {
        toastr.error(err.error, err.reason);
        return;
      } else if(res.status == 'ok'){
        toastr.success('Up Voted Successfully');
      }
    });
  },

  'click #downvote-stats': function () {
    if (Meteor.user() === null) {
      toastr.error('Login required', 'For downvoting the stats, user must be logged in.');
      return;
    }

    Meteor.call('downvote', {id: this._id}, function(err, res) {
      if (err) {
        toastr.error(err.error, err.reason);
        return;
      } else if(res.status == 'ok'){
        toastr.success('Down Voted Successfully');
      }
    });
  }
});
