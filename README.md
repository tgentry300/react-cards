# Assessment: React Cards

For this assessment, you will be revisiting the cards you made for
[this](https://my.kenzie.academy/courses/4/assignments/160?module_item_id=260)
assessment. In doing so, will become more proficient at:

- breaking down a monolithic component into smaller, composable components
- writing JSX and interpolating JavaScript values into HTML fragments
- passing [props](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
  to different components

## Getting Started
To get started, _fork_ this repository into your own GitHub account then clone
this repository to your local machine:

```console
foo@bar:~ $ git clone git@github.com:github-username/react-cards
foo@bar:~ $ cd react-cards
foo@bar:~/react-cards $
```

Note `github-username` above. In other words, __don't__ simply copy-paste the
code above blindly into a terminal. 

We've removed any boilerplate that was not essential to this project. As such,
the two key files in this project are:

- [src/index.css](src/index.css): Contains all the CSS ported from the original
  [Flexbox Cards](https://my.kenzie.academy/courses/4/assignments/160?module_item_id=260)
    assessment
- [src/App.js](src/App.js): Contains the monolithic `App` component that needs
  to be broken down. You should _only_ modify this file, but knowing about
  `index.css` may help you gain an understanding of how things are wired
  together.

## Acceptance Criteria
_Note: Please see the rubric on Canvas for detailed breeak down on how this
assessment is being graded. The information below is provided for your
convenience._

### Step 1: Use the CardGroup component inside of the App component (2 points)

## Hints

Here are a few hints to help you along the way.

### Minimal Imports
You'll notice that we've changed the import line from this:

```jsx
import React, { Component } from "react";
```

To this:

```jsx
import React from "react";
```

We will eventually explain how ES6 [import syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
works, but the short version for now is that we aren't using `Component`
anywhere, so there is no need to import it. We also prefer to use the shorter
version when using classes, as the expanded version is technically more typing
and leads to confusion. That is, instead of `class App extends Component`, we
prefer `class App extends React.Component`.

### Functional Components

As you look at [src/App.js](App.js), you'll notice that not a single class is
defined. The reason for this is that none of the components take state. As such,
a component that looks like this:

```jsx
class Text extends React.Component {
    render() {
        return (
            <h1>Hello, <span style={{ color: this.props.color }}{this.props.value}</span></h1>
        );
    }
}
```

Can be rewritten as:

```jsx
const SomeComponent = props => (
    <h1>Hello, <span style={{ color: props.color }}{props.value}</span></h1>
);
```

By utilizing [ES6 destructuring assignment](http://es6-features.org/#ObjectMatchingShorthandNotation)
we can reduce that further, still:

```jsx
const SomeComponent = { props, color } => (
    <h1>Hello, <span style={{ color }}{ value }</span></h1>
);
```

## Bonus (0 points)

If you find yourself with extra time (e.g., don't have other assessments to
catch up on), you may consider improving the quality in a number of ways:

- The `Card` component can be broken down into further components that use
    `props.children` like `CardGroup` does. Experiment with doing so.
- Now that they are broken down, compare/contrast benefits of having done so.
  Does using smaller components lead to more boilerplate when using the
  comopnents? Are there any benefits to taking `children` over regular
  `props`?

## Submission

This morning, you learned how to deploy a React app to GitHub Pages, so you
__will__ be required to submit a deployed application today. If you instead
submit a link to a GitHub repository (that is, only code), you _will_ be awarded
0 points.
