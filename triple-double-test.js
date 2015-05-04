/*
  TripleDouble
  Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0.
*/

// SOLUTION
function tripleDouble(num1,num2) {

  // code goes here
  num1 = num1.toString();
  num2 = num2.toString();
  var a1 = {};
  var a2 = {};
  for(var i in num1) {
    var _1 = num1[i];
  var _2 = num1[i+1];
  var _3 = num1[i-1];
    if(a1[_1]) {
        if(_1 === _2 || _1 == _3)
            a1[_1]++;
    }
    else {

        a1[_1] = 1;
    }
  }
  for(var j in num2) {
  var _1 = num2[j];
  var _2 = num2[j+1];
  var _3 = num2[j-1];
    if(a2[_1]) {
        if(_1 === _2 || _1 === _3)
            a2[_1]++;
    }
    else {
        a2[_1] = 1;
    }
  }

  for (var k in a1) {
    var _1 = a1[k];
    if(_1 >= 3 && a2[k] >= 2) {
    return 1;
    }
  }
  return 0;

}

descripe ('TripleDouble', function (){
  it('should return 0 for 34534544 and 43534556', function(){
    expect(tripleDouble(34534544, 43534556)).toBe(0);
  });

  it('should return 0 for 456552 and 55759', function(){
    expect(tripleDouble(456552, 55759)).toBe(0);
  });

  it('should return 1 for 451999277 and 41177722899', function(){
    expect(tripleDouble(451999277, 41177722899)).toBe(1);
  });

  it('should return 1 for 5559090 and 565543', function(){
    expect(tripleDouble(5559090, 565543)).toBe(1);
  });
});


descripe ('TripleDouble', function (){
  it('should return 0 for 1212121 and 4242421', function(){
    expect(tripleDouble(1212121, 4242421)).toBe(0);
  });

  it('should return 1 for 12342499234234999 and 992992992', function(){
    expect(tripleDouble(12342499234234999, 992992992)).toBe(1);
  });
});



