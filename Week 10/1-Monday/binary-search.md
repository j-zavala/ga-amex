---
Title: Binary Search
Type: Morning Exercise
Duration: "1:00"
Creator: Melissa Arliss (adapted from ADI)
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Binary Search

## Overview

Searching is an important part of development. It's used in many applications, websites, and more.

> **Knowledge Check**: Can you think of any other uses for searching?

Let's use Google as an example. (This will be a recurring theme throughout this lesson.) Originally, Google's sole purpose was to search through websites given certain criteria.

There are many ways to search for particular items in a set of data. Today, we'll introduce a couple of ways: the brute-force (but still useful) **linear search** and the more common **binary search**.

----

## Introduction: Linear Search

### Let's Play a Game

> Close your laptops during this exercise.

For the next four minutes, talk to the person next to you and try to figure out how to do the following:

- Given an array of random numbers, search for a particular number.

> **Note**: This is a conceptual exercise; don't write this in Java. Use your desks or the walls. Share your approach or realizations when you're done.

### Brute-Force Our Way to the Top

So, the easiest way to search for something is to perform a **linear search**. The idea is to go through each item one at a time and check if it's the one you're looking for.

Here's some pseudocode to search for a number in an array:

```
int linearSearch(int[] array) {
	for each number in array {
		does number equal array[position]?
			Yes: return position
	}

	if number was not found in array, return -1
}
```

> **Knowledge Check**: What do you like or dislike about this method of search?

### Practice: Linear Search

Let's discuss and write out the steps (again, in pseudocode, not in Java) to perform a search on this array:

`[12, -3, 5, 6, 3, 3, 0, -33, 6, 9, 12, 2]`

The goal: Find the number **9**.

----

## Introduction: Binary Search 

### Let's Play a Game

I'm thinking of a number between 60 and 80. Try to guess what that number is. I'll give you no context.

All right, let's try it again. I'll give you contextual clues — this time about whether it's higher or lower. This is one of the ideas behind a binary search.

### Binary Searching

The idea is interesting: If you have a sorted list of numbers, you can **divide and conquer** the set of numbers again and again until you find the answer.

First, divide the set of numbers in half and look at the middle element in the sorted array. Is the number you're looking for higher or lower than the number you're seeing right now? If it's lower, look at the numbers that come before this one. Otherwise, look at the higher numbers. With that, you've just eliminated half of the possibilities!

Repeat this division again, only this time with the numbers left over. Rinse and repeat until you have one number left, which could be the one you're looking for (or not).

### Practice: Binary Search

For the next 20 minutes, write pseudocode for the binary search on the following array:

`[12, -3, 5, 6, 3, 3, 0, -33, 6, 9, 12, 2]`

The goal: Find the number **9** (again).

Once you're done, try coding it in Java.

----

## Conclusion 

Because binary search only works on sorted arrays, what are the pros and cons of this method?
