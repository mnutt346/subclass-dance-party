// Creates and returns a new dancer object that can step
window.makeDancer = function(top, left, timeBetweenSteps) {
  // console.log('timeBetweenSteps: ', timeBetweenSteps)
  // console.log('top: ', top, ' left: ', left);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
}

//Step method
  makeDancer.prototype.step = function(timeBetweenSteps) {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('timeBetweenSteps in step: ', timeBetweenSteps);
    setTimeout(this.step.bind(this), timeBetweenSteps);
  
  };
  
  
  

 //setPosition 
  makeDancer.prototype.setPosition = function(top, left) {
    console.log(top, left);
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    // console.log('top: ', top, ' left: ', left);
    let styleSettings = {
      top: top,
      left: left
    }
    this.$node.css(styleSettings);

  };
  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  

