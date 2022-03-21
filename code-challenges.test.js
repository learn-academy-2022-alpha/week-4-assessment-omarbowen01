// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//
// describe("removeFirstItem", () => {
//   it ("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//   expect(removeFirstItem(colors1)).toEqual(expect.arraycontainingarray(["purple","blue","green","yellow","pink"]))
//   expect(removeFirstItem(colors2)).toEqual(expect.arraycontainingarray(["chartreuse","indigo","periwinkle","ochre","aquamarine","saffron"]))
//   })
// })

// b) Create the function that makes the test pass.

//create a function called removeFirstItem that takes in an array as a parameter
//remove item at first index
//create a variable which is the original array length
//create a new array
//use that array to push values from the original array in random order
//make a while loop to run as long as param array length that is greater than zero
//splice single random index values and push them into new array
// use Math.random
// return new array


// const removeFirstItem = (array) => {
//   let n = array.length
//   let newArr =[]
//   array.shift()
//   while (array.length >0) {
//     let randomnum = Math.floor(Math.random() * n--)
//     let spliceRandomly= array.splice(randomNum, 1)
//     newArr.push(spliceRandomly)
// }
// return newArr.flat()
//
// }


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// // Expected output: [5, 109]
// //
// describe("minAndMax", () => {
//   it ("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
//   expect(minAndMax(nums1)).toEqual(["-8","90"])
//   expect(minAndMax(nums2)).toEqual(["5","109"])
//   })
// })

// b) Create the function that makes the test pass.

//create a function called min and max that returns the min and max values
//minAndMax takes an array as a parameter
// declare two variables
// min variable takes array with spread operator and uses Math.min
// max variable takes in array with spread operator and uses Math.max
// return array

// const minAndMax = (array) => {
//   let nums1= [3, 56, 90, -8, 0, 23, 6]
//   let nums2= [109, 5, 9, 67, 8, 24]
//
//   return Math.min([...array])
//   return Math.max([...array])
// }
//   console.log(minAndMax(nums1))
//   console.log(minAndMax(nums2))





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDuplicates", () => {
  it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
  expect(noDuplicates(testArray1,testArray2)).toEqual(["3","7","10","5","4","8","2","1"])

  })
})

// b) Create the function that makes the test pass.

//declare a function named noDuplicates that takes in two params of array one and array two
// within func declare a var called combined arrays
// set equal array one and concatenated with array 2
// declare a variable called unique arrays
// set that equal to the combined array with a filter method
// use the arguments value and index inside the code block
// return only values where the first index of a value only equales the current index
//return the specific array

const noDuplicates = (array) => {

  var combinedArrays = testArray1.concat(testArray2)
  var uniqueArrays = combinedArrays

  return uniqueArrays.filter((value, index))
}
  console.log(noDuplicates(uniqueArrays))
