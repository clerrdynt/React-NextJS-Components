## React/NextJS Components
## JavaScript Fundamentals
The application of the JavaScript fundamentals are the following:
    Variables, Functions, Arrays and Objects
        - variables like 'count' that holds the current value of the state management and 'useState' which gives React the ability to reactively update the UI when the variable changes.
        - functions like 'handleSubmit' that triggered when the studenr form is submitted.
        - the usage of objects that holds form data grouped by field name. Makes it easier to manage compared to separate state variables for each input.
        - the usage of array to store the student form data. When the form is submitted, the array is turned back into an object so it's easier to display or process.
    DOM Manipulation Exercises
        - updation of state using useState. React re-renders affected components, and applies only the necessary changes, thus improving performances.
    Event Handling Basics
        - React handles events using handlers like onClick, OnChange, and onSubmit.
## App Router
I used a app/ directory where each folder becomes a route segment.
counter/
    -which holds the that .js file that would render my components Counter.js
student-info/
    -which holds the that .js file that would render my components StudentForm.js
pages.js
    -this .js file renders my component WelcomeCard.js. Note that this file was not located inside a route segment because I didn't know yet while on the process of making this first part of the assignment.
Upon learning more of what an App Router means and how it works. I later on applied the learning unto making more route segments.

## globals.css
    contains my global css style and is applies across my entire assignment app.
## layout.css
    This defines the shared UI structure of my assignment. I import a css file that would further define my UI design.

## Components
Counter.js
    -this a reusable UI building blocks of my interactive counter with state management. This component is being import or render to the route segment counter
NavBar.js
    -since part of the UI design of this assignment project that the user would be able to navigation choose option for: Home (WelcomeCard), Counter, and Student-Info. I made another component that would be able to do that.
NavBar.module.css
    -part of learning and curiosity, I learned that I can integrate an css file unto a .js file instead of dynamically rendering it inside the component file.
StudentForm.js
    -this a reusable UI building blocks of my student form component with input handling. This component is being import or render to the route segment student-info.
WelcomeCard.js
    -this a reusable UI building blocks that display welcome message with props. This component is being import or render to the route segment student-info.
