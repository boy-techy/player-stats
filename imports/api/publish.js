import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import { PlayerStats } from '/lib/collections.js';

Meteor.publish('getAllPlayerStats', function(){
    return PlayerStats.find({});
});
