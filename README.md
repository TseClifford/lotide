# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tseclifford/lotide`

**Require it:**

`const _ = require('@tseclifford/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(firstArray, secondArray)`: will log ✅ or 🛑 as to whether the two arrays are identical.
* `assertEqual(actual, expected)`: will log "✅ Assertion Passed" or "🛑 Assertion Failed" when comparing actual and expected primitive data types.
* `assertObjectsEqual(object1, object2)`: will log "✅ Assertion Passed" or "🛑 Assertion Failed" when comparing two objects.
* `countLetters(str)`:  will count the letters of a string and return an object containing the total count of each letter in string.
* `countOnly(allItems, itemsToCount)`: will return a count of the items within a collection of items.
* `eqArrays(firstArray, secondArray)`: will check if the first array equals the second array.
* `eqObjects(object1, object2)`: will check if the first object equals the second object.  
* `findKeyByValue(obj, keyValue)`: will return the first key that contains a value, or undefined if there is no key.
* `findKey(obj, callback)`: will return the first key for which the callback returns a truthy value, or undefined if no key is found.
* `flatten(array)`: will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head(array)`: will return the first item in the array.
* `letterPosition(string)`: will return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: will return a new array of elements modified by the callback function.
* `middle(array)`: will return all the indices (zero-based positions) in the string where each character is found.
* `tail(array)`: will return the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: will return a "slice of the array with elements taken from the beginning until the callback returns a truthy value.
* `without(array, itemsToRemove)`: will return a subset of a given array, removing unwanted elements.