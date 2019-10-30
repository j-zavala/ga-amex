---
Title: Stacks and Queues
Type: Morning Exercise
Duration: "1:00"
Creator: Melissa Arliss
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Stacks and Queues

## What Are Stacks and Queues?

Stacks and queues are defined by their behavior — in other words, how items are added to and removed from them.

### Stacks

**Stacks** operate on **"last-in, first-out"** (aka, LIFO) behavior. The last, most recently added item is the first to be removed.

Stacks as a data structure are a lot like stacks as a physical structure. Think of stacks of dishes or books: We can remove an item from the top of the stack (by popping it) or add an item to the top of the stack (by pushing it). While we may be able to carefully pull from within stacks of real-world objects, the data structure only allows us to manipulate the top item of the stack.

These main operations for a stack — `push()` and `pop()` — are both `O(1)` constant time. Some stack implementations also allow us to peek at the value of the top item without actually popping it off the stack.

![stack](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-data-structures/5-Push-Pop.png)

### Queues

**Queues** operate on **"first-in, first-out"** (aka, FIFO) behavior. Items are removed in the order they were added — from first to last.

Queues as a data structure are a lot like queues as a physical structure. This makes more sense with British English, where queue means "a line" or "to line up." Think of an orderly line of people waiting to do something.

We can remove an item from the front of the queue when its turn comes (by dequeueing) or add an item to the back of the queue when it joins the line (by enqueueing it). Again, while we may be able to cut in line in the real world, the queue data structure only allows us to add to the end of the stack or remove from the beginning.

The `enqueue()` and `dequeue()` operations for a queue are both `O(1)` constant time. Like with stacks, some implementations of queues also allow us to peek at the value of the first item without dequeueing it.

![queue](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-data-structures/6-Enqueue.png)

### Decisions, Decisions

Would you use a stack or a queue to:

1. Let users create playlists and play back their songs?
2. Allow a user to undo changes to a document one by one?
3. Display only the 10 most recent messages a user posted in the order they were posted?

---

## Practice Time

Surely by now you've made an error in your code that seemed impossible to track down. But, in the end, the root of all that trouble might have been something as simple as a missing (or extra) curly brace `}`. This example might be all too relatable (or painful).

One really convenient application for LIFO structures is matching brackets. That's because every time you encounter a closing bracket, it needs to match the **most recently used** open bracket.

For example, this is valid (nesting is OK):

```
[]{}(({}))
```

But this one doesn't work:

```
{(})
```

This is because the closing `}` you encounter doesn't close an opening `{` but instead is trying to close `(`, which doesn't match.

### Directions

Create a method called `bracketMatcher()` that takes a `String` as an input. The function should determine if all brackets are correctly matching and properly nested. The return value of the function is `true` if the bracket combination is valid and `false` if it's not. This is a tool that could be used to detect syntax errors in your code.

It should check for the following: `[ ]`, `{ }`, and `( )`. Anything else (numbers, letters, punctuation, whitespace, and so on) should be skipped or ignored.

This is a valid bracket sequence:

```
abc(123)!{def}456:D
```

Once you ignore or remove all of the other characters, it just becomes:

```
(){}
```

### Starter Code

If you feel ready, grab the starter code and begin.

#### Hints

Need some help getting started? Click on the hints below for inspiration.

<details>
    <summary>Hint No. 1</summary>
    <br>

   We need to go through the input <code>String</code> one character at a time. You can do this in Java by calling **<code>toCharArray()</code>**. Then, you can loop through the characters with a <code>for</code> loop. Here's what that looks like:

    String input = "abc123";
    char[] characters = input.toCharArray();

    for(int i = 0; i < characters.length; i++) {
        // YOUR CODE HERE
        // Inside this loop, characters[i] is the particular character
        // inside the String you're iterating over.

        System.out.println(characters[i]);
    }

</details>

<details>
    <summary>Hint No. 2</summary>
    <br>

   This problem is all about **matching**. Once we find a closing bracket that matches an opening bracket, we don't need to keep track of it anymore. Thus, the only thing we need to keep in our data structure is the opening brackets. We can also just skip anything that isn't a bracket entirely.

   > **Knowledge Check**: Which data structure seems most suited to hold your opening brackets?
</details>

<details>
    <summary>Hint No. 3</summary>
    <br>

In this instance, a stack will be more useful than a queue because we always want to **close** the **most recently** opened bracket. For example, if we encounter <code>(</code>, <code>{</code>, <code>}</code>, and <code>)</code> — in that order — we know it's valid. Our actions would look like this in pseudocode:

    1. See (. Because it's an opening bracket, push it onto the stack.
    2. See {. Because it's an opening bracket, push it onto the stack.
    3. See }. Because it's a closing bracket, pop from the stack and check for a match.
    4. It matches. { is the opening bracket for }, so let's keep going.
    5. See ). Because it's a closing bracket, pop from the stack and check for a match.
    6. It matches. ( is the opening bracket for ), so let's keep going.
    7. No more items in the stack.
    8. Return true (no errors found, so it's valid).

Likewise, we know that if the brackets don't match, then we must return <code>false</code>. For example, <code>{</code>, <code>(</code>, <code>}</code>, and <code>)</code> is not valid. We'd walk through that example like so:

    1. See {. Because it's an opening bracket, push it onto the stack.
    2. See (. Because it's an opening bracket, push it onto the stack.
    3. See }. Because it's a closing bracket, pop from the stack and check for a match.
    4. It doesn't match, so return false.
</details>

<details>
    <summary>Hint No. 4</summary>
    <br>

How do you know if a bracket is an opening bracket? How do you know if it's a closing bracket? You could determine this any number of ways, but for your convenience, you can use these two helper functions:

    private boolean isOpening(char character) {
        return "{([".indexOf(character) != -1;
    }

    private boolean isClosing(char character) {
        return "})]".indexOf(character) != -1;
    }

</details>

<details>
    <summary>Hint No. 5</summary>
    <br>

You may notice that you get to a point where you're passing almost all of the tests except for one, such as this:

    bracketMatcher.test("abc(123");

It should return <code>false</code> because an opening bracket with no closing bracket is invalid. You can catch this case by checking to make sure the stack is empty at the end of the function.
</details>

<details>
    <summary>Hint No. 6</summary>
    <br>

We need a way to make sure the opening and closing brackets of each type (<code>()</code>, <code>{}</code>, <code>[]</code>) are matched to each other. We can write some <code>if...else</code> statements to figure this out, and that would work. However, because we enjoy writing less code, we might consider alternatives to match the opening and closing brackets of each type.

You have a couple of ways to go about this. First, you could keep the values in a <code>String</code> and check that the position is the same. For example, you could have:

    let openings = '{(['
    let closings = '})]'

Then, when you access them with the built-in <code>indexOf()</code> function, you could check that the position of the opening and closing brackets match. For example, <code>[</code> and <code>]</code> are both found at index <code>2</code> in their respective <code>String</code>s.

**Alternatively**, we can use a <code>switch</code> statement. This has the benefit of increased readability:

    private char brackets(char closing) {
        switch (closing) {
            case '}':
                return '{';
            case ']':
                return '[';
            case ')':
                return '(';
            default:
                return ' ';
        }
    }

Now, instead of a gnarly <code>if</code> statement, you can simply do this:

    if (!stack.peek().equals(brackets(characters[i]))) { /* do something here */ }

</details>
