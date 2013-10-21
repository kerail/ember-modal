window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();


App.Router.map(function () {
  this.resource('test', { path: '/' }, function() {
    this.route('showModal');
  });
});

App.TestShowModalRoute = Ember.Route.extend({
  actions: {
    close: function() {
      this.transitionTo('/');
    }
  }
})

App.ModalView = Ember.View.extend({
    classNames: ['reveal-modal'],

    didInsertElement: function() {
        var that = this;
        this.$().foundation('reveal', 'open');
        this.$().on('closed', function(){
            that.controller.send('close');
        })
    },
});

App.TestShowModalView = App.ModalView.extend();