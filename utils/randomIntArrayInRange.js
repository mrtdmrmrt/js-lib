
// -----------------------------------------------------------------------------
// randomIntArrayInRange
// This snippet can be used to generate an array with n random integers in a specified range.
// 
// randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]

export const randomIntArrayInRange = (min, max, n = 1) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
