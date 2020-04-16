// jQuery Doc Ready
$(function() {
  // First input box - set up data and variables
  const data = [2, 4, 6, 8],
    input = $('#firstInput'),
    submit = $('#firstSubmit'),
    resultSum = $('.resultOne');
    // Click event
  submit.on('click', function() {
    // Parse into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify it is a real number
    if (!isNaN(num)) {
      // Add number to the array
      data.push(num);
      // Use reduce to convert array into one value that is the sum of all of them*/
      const results = data.reduce((apple, orange) => apple + orange);
      // Add result to page
      resultSum.text(results);
      // Reset input
      input.val('');
    }
  });
});
  // jQuery document.ready
$(function() {
  // second input box - set up data and variables
  const array = [1, 2, 3, 4],
    input = $('#secondInput'),
    submit = $('#secondSubmit'),
    resultSum = $('.resultTwo');
    // Click event
  submit.on('click', function() {
    // Parse into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify it is a real number
    if (!isNaN(num)) {
      // use map method and multiply by input value
      const sum = array.map(function(banana) {
        return banana * val
      });
      // Add result to page
      resultSum.text(sum);
      // Reset input
      input.val('');
    }
  });
});

// jQuery document.ready
$(function() {
  // third input box - set up data and variables
  const list = [1, 7, 150, 222, 500, 1111, 6000],
    input = $('#thirdInput'),
    submit = $('#thirdSubmit'),
    resultSum = $('.resultThree');
    // Click event
  submit.on('click', function() {
    // Parse into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify it is a real number
    if (!isNaN(num)) {
      // filter for numbers higher than input value
      const sum = list.filter(function(strawberry) {
        return strawberry < val
      });
      // Add result to page
      resultSum.text(sum);
      // Reset input
      input.val('');
    }
  });
});

// jQuery document.ready
$(function() {
  // third input box - set up data and variables
  const list = [20, 40, 60, 80, 100, 120],
    input = $('#fourthInput'),
    submit = $('#fourthSubmit'),
    resultSum = $('.resultFour');
    // Click event
  submit.on('click', function() {
    // Parse into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify it is a real number
    if (!isNaN(num)) {
      // find first number more than input value
      const sum = list.find(function(mango) {
        return mango > val
      });
      // Add result to page
      resultSum.text(sum);
      // Reset input
      input.val('');
    }
  });
  
});
