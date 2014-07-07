import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'article',
    attributeBindings: ['draggable'],
    draggable: "true",
    dragStart: function(ev) {
      ev.dataTransfer.setData('text/data', this.get('content.id'));
      return $('.box').addClass('dragging');
    },
    dragEnd: function() {
      return $('.box').removeClass('dragging');
    }
});