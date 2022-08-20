function wish(name) {
    alert(`Welcome, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt('Please enter your name:');
    callback(name);
  }
  processUserInput(wish);