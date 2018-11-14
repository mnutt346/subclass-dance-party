window.makeFancyDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="fancyDancer"></span>');
    this.setPosition(top, left);

}

makeFancyDancer.prototype = Object.create(makeDancer.prototype);

makeFancyDancer.prototype.constructor = makeFancyDancer;

makeFancyDancer.prototype.step = function (timeBetweenSteps) {


    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // console.log('inside twirl method', timeBetweenSteps);
    this.$node.animate('nudge')
};

makeFancyDancer.prototype.setPosition = function(left, top){
    let styleSettings = {
        top: top,
        left: left
      }
      this.$node.css(styleSettings);
};

// this.prototype.fancyDance = function() {
//     this.$node.animate()
// }