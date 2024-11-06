# 100 Algorithm Challenge in JavaScript

Welcome to the **100 Algorithm Challenge in JavaScript**! This repository contains solutions to 100 different algorithm problems solved using JavaScript. The aim of this challenge is to improve problem-solving skills, master JavaScript fundamentals, and gain confidence in coding interviews.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Challenge Structure](#challenge-structure)
- [Algorithms List](#algorithms-list)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is designed for JavaScript enthusiasts, beginners, and those preparing for technical interviews. Each algorithm includes a problem statement, followed by a JavaScript solution. By the end of this challenge, you will have practiced a variety of concepts such as:

- Array manipulation
- String processing
- Sorting and searching
- Recursion
- Basic data structures (stacks, queues, trees, graphs)
- Dynamic programming
- Other common algorithmic patterns

## Getting Started

To start solving the challenges:

1. **Clone this repository**:
    ```bash
    git clone https://github.com/dev-sajid007/100-algorithm-challenge-js.git
    cd 100-algorithm-challenge-js
    ```

2. **Run the solutions**:
    Each solution is a `.js` file. You can run each file with Node.js:
    ```bash
    node problem1.js
    ```

3. **Test the solutions**:
    Some challenges include sample tests. Run these tests by executing each file individually or using a testing framework like Jest or Mocha.

## Challenge Structure

Each algorithm problem follows this structure:

- **Problem**: A description of the challenge.
- **Input/Output**: Explanation of the expected input and output.
- **Examples**: Sample inputs and expected outputs for reference.
- **Solution**: JavaScript code to solve the problem.

Example structure:

```javascript
/**
 * Problem: Reverse a string.
 * Input: A string
 * Output: The reversed string
 * Example: reverseString('hello') => 'olleh'
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Testing the function
console.log(reverseString('hello')); // Expected output: 'olleh'
