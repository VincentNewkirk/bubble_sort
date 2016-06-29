There are many algorithms that deal with sorting collections of data. One of the most basic forms of sorting is known as __Bubble Sort__ and is named by it's nature of the order of data having a "bubbling" effect as a collection of data is sorted. We will start off by implementing a Bubble Sort algorithm on a one-dimensional Array.

###Bubble Sort Implementation
The trick to remembering bubble sort is to visualize that your array is vertical rather than horizontal. If smaller values are "deeper" in the array, they will "rise" to the top until they are the smallest value. If larger values are "higher" in the array, they will sink to the bottom until they are the largest value.

###Your challenge
1. Create a project and a repo for your Bubble Sort implementation. You probably want a README as well.
2. Add Mocha/Chai to your project for writing your tests against your function.
3. Write your tests __FIRST__ that will indicate that your sorting function works with multiple inputs.
4. Implement a function that will take an input Array and apply the bubble sort algorithm to sort the input and return the number of moves that were necessary to sort the Array.

###Extra
Create a way for all Arrays to be able to use your bubble sort function as a method of the Array object.

###Super Extra
Write a browser tool that will visually show the array and it's values as they are being sorted to see how the elements are moving in real time. It will be impossible to see things being sorted in real time, so you may need to tweak your function to make this work or find new ways of calling it.# bubble_sort
