# Task Manager  

## Table of Contents
1. [Overview](#project-overview)
   1. [Features](#features) 
   2. [Usage](#usage)
2. [Problem](#problem)     
   1. [Problem Breakdown / Goal](#problem-breakdown-goal)
   2. [Questions and Answers](#questions-and-answers)
   3. [Input](#input)
   4. [Output](#output)
   5. [Step-by-Step Process](#step-by-step-process)
3. [What I Did in Detail](#what-i-did-in-detail)
4. [Troubleshooting](#troubleshooting)
5. [Reflection](#reflection)
6. [References](#references)
   1. [Programs Used](#programs-used) 

---

## Project Overview

In this project, I created a Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering. It uses TypeScript and React components to handle lists of data, implement filtering, and show different states based on task properties. The lab focuses on:

- List rendering
- Key management
- Conditional rendering
- Component composition

---

## Problem

### Problem Breakdown / Goal
Creating a Task Manager application with the following features:

- UI: form, table, and list
- Input validation
- Dynamic color changes
- Controlled inputs
- Reading input values
- Passing data from child to parent components

### Questions and Answers
1. **How to use the `map()` method?**  
   - The `map()` method is used to iterate over an array and render components dynamically.

2. **How can I dynamically change the status colors?**  
   - Create a function that returns a color based on the status using a `switch` statement. Apply this color to the element whose style you want to update. This approach can be used for multiple elements.

### Input
- Task title
- Task description
- Due date
- Priority

### Output
A dynamically rendered list displaying all tasks with their respective properties.

### Step-by-Step Process
1. Ensure TypeScript types are correctly defined.
2. Type event handlers properly.
3. Keep the `<select>` HTML element fully controlled.
4. Implement the delete button functionality.
5. Test each feature thoroughly.

---

## What I Did in Detail

1. **Created the task item component**
   - Defined the item structure using the `TaskItemProps` interface.
   - Implemented a function to handle status updates.
   - Structured the component to return individual list/table items.

2. **Built the task list component**
   - Implemented a component to render the full list of tasks.
   - Used the `.map()` method to dynamically render task items.

3. **Implemented filtering functionality**
   - Created a filter using a `<select>` dropdown.
   - Added an `onChange` handler to filter tasks dynamically.

4. **Organized component structure**
   - Kept the `App()` component clean by moving core logic to a dedicated parent component.
   - Centralized state management and rendering in this component.

5. **Added input fields**
   - Built form inputs for creating new tasks.
   - Connected inputs to state for controlled form behavior.

6. **Implemented validation**
   - Added validation logic to display error messages when required fields are missing or incorrect.
   - Used conditional rendering to display validation messages appropriately.

7. **Improved list rendering**
   - Switched from an unordered list (`<ul>`) to a table for improved readability and structure.

8. **Applied styling**
   - Added base styling to improve layout, spacing, and usability.

9. **Enhanced user experience**
   - Implemented dynamic priority color changes.
   - Enabled real-time status updates.
   - Added hover states for interactive elements.

---

## Troubleshooting

**Process:**
- Ask: “What should happen right now?”
- Ask: “What is actually happening?”
- Test assumptions step by step.

### Problems
1. Task list not rendering correctly.

### Solutions
1. Path issues caused difficulty; retraced all paths in the code to resolve the problem.

---

## Reflection

1. How did you ensure unique keys for your list items?
 - I used the unique id of each task as the key when rendering list items. Each task has an id property that is guaranteed to be unique across the list.
2. What considerations did you make when implementing the filtering functionality?
- I used a select element to let the user use the select a filter. I then Had the parent comoponet update the state using setTask , replacing the modified task while keeping the rese of the list together. 
3. How did you handle state updates for task status changes?
- I  added an on change handler for its status dropdown. When the status changes , the  handler calls a function in the parent component , passing the task id and new status .
4. What challenges did you face when implementing conditional rendering?
- making sure that the page elenments update in real time
---

## References

### Programs Used
- Visual Studio Code
- Node.js
- Vite / React

### Websites Used
- [MDN: Array map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [W3Schools: Switch Statement](https://www.w3schools.com/Js/js_switch.asp)

### Colors Used
- **Technicolor Dream**
  - #FF00FF
  - #00FFFF
  - #CCFF00
  - #191970