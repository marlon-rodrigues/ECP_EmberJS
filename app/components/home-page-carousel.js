import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement : function(){
		Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
	},
	afterRenderEvent : function(){
		Ember.$('.owl-carousel').owlCarousel({
		    items: 1,
		    loop: true,
		    dots: true,
		    autoplay: true
		});
	}
});
