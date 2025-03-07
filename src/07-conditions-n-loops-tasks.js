/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 0;
  if (n === 1) {
    return n;
  }
  res = getFactorial(n - 1) * n;
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let resalt = 0;
  for (let index = n1; index <= n2; index += 1) {
    resalt += index;
  }
  return resalt;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const firstIf = a + b > c;
  const secondIf = a + c > b;
  const threeIf = b + c > a;

  if (firstIf === true && secondIf === true && threeIf === true) {
    return true;
  }

  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let res = null;
  const firstIf = rect1.height + rect1.top;
  const secondIf = rect1.width + rect1.left;
  const threeIf = firstIf > rect2.top;
  const fourIf = secondIf > rect2.left;

  if (threeIf === true && fourIf === true) {
    res = true;
  } else {
    res = false;
  }

  return res;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  let sumVal = 0;
  let res = null;

  const xValue = point.x - circle.center.x;
  const yValue = point.y - circle.center.y;

  const powValueX = xValue ** 2;
  const powValueY = yValue ** 2;

  const sqrtValueX = Math.sqrt(powValueX);
  const sqrtValueY = Math.sqrt(powValueY);

  sumVal = sqrtValueX + sqrtValueY;

  if (circle.radius > sumVal) {
    res = true;
  } else {
    res = false;
  }

  return res;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const res = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str.indexOf(str[index]) === str.lastIndexOf(str[index])) {
      res.push(str[index]);
    }
  }

  if (res.length === 0) {
    return null;
  }
  return res[0];
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const resalt = [];
  let firstCloseSymb = '';
  let endCloseSymb = '';

  let maxN = 0;
  let minN = 0;

  if (isStartIncluded === true) {
    firstCloseSymb = '[';
  } else {
    firstCloseSymb = '(';
  }

  if (isEndIncluded === true) {
    endCloseSymb = ']';
  } else {
    endCloseSymb = ')';
  }

  if (a > b) {
    maxN = a;
    minN = b;
  } else {
    maxN = b;
    minN = a;
  }

  let resStr = '';

  resalt.push(firstCloseSymb, minN, ',', maxN, endCloseSymb);

  for (let i = 0; i < resalt.length; i += 1) {
    if (i === 3) {
      resStr += ' ';
    }
    resStr += resalt[i];
  }

  return resStr;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const arr = str.split('').reverse();
  const strRes = arr.join('');
  return strRes;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = String(num);
  const arr = str.split('').reverse();
  const strRes = arr.join('');
  return strRes;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const str = String(ccn);
  const arr = str.split('').reverse();
  let res = 0;
  const arrNew = [];
  let ansv = null;
  for (let i = 0; i < arr.length; i += 1) {
    arrNew.push(Number(arr[i]));
  }

  for (let index = 0; index < arrNew.length; index += 1) {
    if (index % 2 === 0) {
      res += arrNew[index];
    } else if (index % 2 !== 0) {
      if ((arrNew[index] * 2) > 9) {
        res += (arrNew[index] * 2) - 9;
      } else {
        res += (arrNew[index]) * 2;
      }
    }
  }

  if (res % 10 === 0) {
    ansv = true;
  } else {
    ansv = false;
  }

  return ansv;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const str = String(num);
  const arrNum = str.split('');
  const firstArr = arrNum.map((cv) => Number(cv));
  const secondArr = firstArr.reduce((acc, cv) => acc + cv, 0);
  // console.log('sec', secondArr)
  if (secondArr > 9) {
    return getDigitalRoot(secondArr);
  }
  return secondArr;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (str === '') {
    return true;
  }
  if (str === '[]' || str === '{}' || str === '()') {
    return true;
  }
  const stack = [];
  const open = ['{', '[', '<', '('];
  const close = ['}', ']', '>', ')'];

  for (let i = 0; i < str.length; i += 1) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else {
      const isOpen = open.indexOf(str[i]) !== -1;
      if (isOpen) {
        stack.push(str[i]);
      } else {
        const indexClose = close.indexOf(str[i]);
        const openBrack = open[indexClose];
        if (stack[stack.length - 1] === openBrack) {
          stack.splice(stack.length - 1, 1);
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const resNum = String(num.toString(n));
  return resNum;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const arrLength = [];

  for (let i = 0; i < pathes.length; i += 1) {
    arrLength.push(pathes[i].length);
  }

  const minLength1 = Math.min(...arrLength);
  let minLengthElement = '';

  for (let i = 0; i < pathes.length; i += 1) {
    if (pathes[i].length === minLength1) {
      minLengthElement = pathes[i];
      break;
    }
  }

  const resaltAr = [];
  let resPath = '';

  for (let a = 0; a < pathes.length; a += 1) {
    resPath = '';
    for (let b = 0; b < minLength1; b += 1) {
      if (pathes[a][b] === minLengthElement[b]) {
        resPath += pathes[a][b];
      } else {
        break;
      }
    }
    resaltAr.push(resPath);
  }

  const arrLengthNew = [];

  for (let i = 0; i < resaltAr.length; i += 1) {
    arrLengthNew.push(resaltAr[i].length);
  }

  const minLength2 = Math.min(...arrLengthNew);

  let minLengthElement23 = '';

  for (let i = 0; i < resaltAr.length; i += 1) {
    if (resaltAr[i].length === minLength2) {
      minLengthElement23 = resaltAr[i];
      break;
    }
  }

  const indSlice = minLengthElement23.lastIndexOf('/');

  const resStrNew = minLengthElement23.slice(0, indSlice + 1);

  return resStrNew;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resaltArr = [];
  let sumElem = 0;
  let arr = [];

  for (let a = 0; a < m1.length; a += 1) {
    arr = [];
    for (let b = 0; b < m2[a].length; b += 1) {
      sumElem = 0;
      for (let c = 0; c < m1[a].length; c += 1) {
        sumElem += m1[a][c] * m2[c][b];
      }
      arr.push(sumElem);
    }
    resaltArr.push(arr);
  }

  return resaltArr;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(p) {
  if (p[0][2] && p[2][0] === p[0][2] && p[1][1] === p[0][2]) {
    return p[0][2];
  }
  if (p[0][0] && p[2][2] === p[0][0] && p[1][1] === p[0][0]) {
    return p[0][0];
  }

  for (let ind = 0; ind < p.length; ind += 1) {
    if (p[ind][0] && p[ind][2] === p[ind][0] && p[ind][1] === p[ind][0]) {
      return p[ind][0];
    }
    if (p[0][ind] && p[2][ind] === p[0][ind] && p[1][ind] === p[0][ind]) {
      return p[0][ind];
    }
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
