ember-modal
===========

Ember.js + Zurb Foundation 4 modal example

For working this code need to be commented in foundation.reveal.js

```javascript
if (el.parent('body').length === 0) {
  var placeholder = el.wrap('<div style="display: none;" />').parent();
  el.on('closed.fndtn.reveal.wrapped', function() {
    el.detach().appendTo(placeholder);
    el.unwrap().unbind('closed.fndtn.reveal.wrapped');
  });

  el.detach().appendTo('body');
}