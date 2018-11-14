window.makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // console.log('step: ', this.step);
  // console.log('blinky timeBetweenSteps: ', timeBetweenSteps)
  
  
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function


makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
    // console.log('timeBetweenSteps', timeBetweenSteps);
    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle(300);
};

 