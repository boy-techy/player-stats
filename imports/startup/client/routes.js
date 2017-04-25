import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render("masterLayout", { main: "stats" });
    },
    subscriptions: function (params, queryParams) {
        this.register('stats', Meteor.subscribe('getAllPlayerStats'));
    }
});

FlowRouter.route('/add', {
    action: function (params) {
        BlazeLayout.render("masterLayout", { main: "playerInfo" });
    }
});
