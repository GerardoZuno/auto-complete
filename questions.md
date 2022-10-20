1. What is the difference between Component and PureComponent? give an example where it might break my app.
React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.
Pure components Improve performance but if a prop is mutated it might not re-render which can break the app.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
It is dangerous to use them together because shouldComponentUpdate can interfere with the working of the context.

3. Describe 3 ways to pass information from a component to its PARENT.
Through props calling the function in the child component.
Using Redux.
Using Context.

4. Give 2 ways to prevent components from re-rendering.
Using hooks like useMemo(), which memorizes the values, and re-renders only when they change.
Use useRef() when we want to get a value that we don't want to be reflected on the screen, since useState() re-renders the component.

5. What is a fragment and why do we need it? Give an example where it might break my app.
A fragment helps us to contain two or more elements without having to use a div, since div add extra nodes which can break the design of our app.

6. Give 3 examples of the HOC pattern.
Return a new component.
Do not use HOCs inside the render method of a component.
Reusing component logic.

7. what's the difference in handling exceptions in promises, callbacks and async...await.
Async does it in the simplest way using try and catch.
Promises use then and catch to handle errors, although nesting sometimes results.

8. How many arguments does setState take and why is it async.
It takes two arguments and is considered async because, to update the state, the first argument does it through a callback.

9. List the steps needed to migrate a Class to Function Component.
Change the class to a function.
Delete the render by return.
Remove all this.
Delete constructor.
Also change all methods to functions.

10. List a few ways styles can be used with components.
Defining styles in the index.html.
Using the style tag directly.
Using third-party libraries as react-style components.

11. How to render an HTML string coming from the server.
It is usually used dangerouslySetInnerHTML attribute, although this is not recommended because we are vulnerable to attacks

