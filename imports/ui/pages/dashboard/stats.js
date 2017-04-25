import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './stats.html';

Template.stats.onCreated(function statsOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.stats.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.stats.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
