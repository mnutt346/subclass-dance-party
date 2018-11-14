window.makeTwirlyDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    // console.log('inside makeTwirlyDancer', top, left, timeBetweenSteps);
    this.$node = $('<span class="twirlyDancer"></span>');
    this.setPosition(top, left);


    // console.log(this.$node);

};

makeTwirlyDancer.prototype = Object.create(makeDancer.prototype);

makeTwirlyDancer.prototype.constructor = makeTwirlyDancer;

makeTwirlyDancer.prototype.step = function (timeBetweenSteps) {


    makeDancer.prototype.step.call(this, timeBetweenSteps);
    // console.log('inside twirl method', timeBetweenSteps);
    this.$node.animate('twirl')
}; 

makeTwirlyDancer.prototype.setPosition = function(left, top){
    let styleSettings = {
        top: top,
        left: left
      }
      this.$node.css(styleSettings);
};