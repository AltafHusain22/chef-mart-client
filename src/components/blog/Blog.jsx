/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="p-12 text-center">
          <h1 className="py-12 text-4xl font-sans font-bold">
            Here are the 4 questions answer!
          </h1>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-8"
          >
            <div className="collapse-title text-xl font-medium bg-red-400">
              1.Tell us the differences between uncontrolled and controlled
              components?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                In React, controlled components are those that are bound to a
                state value and are modified via user input by updating the
                state value. They rely on the parent component to manage the
                state and handle all user input.
                <br />
                In contrast, uncontrolled components are components that do not
                rely on a state value to function, but instead manage their own
                state internally through the DOM. They are usually created using
                refs in React. Controlled components provide a more reliable way
                of managing state, while uncontrolled components are easier to
                set up but may lead to inconsistencies.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-red-400">
              2.What is a custom hook?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                A custom hook is a JavaScript function that uses one or more
                built-in hooks and can be used to encapsulate and reuse stateful
                logic in React components. Custom hooks are a way to share
                functionality among components without repeating code, similar
                to how regular functions are used to share logic among different
                parts of an application. They allow developers to extract
                commonly used logic from components and create reusable and
                composable hooks.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-red-400">
              3.What is useRef?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                <strong>useRef:</strong> is a hook in React that creates a
                reference to a mutable value which persists for the entire
                lifecycle of the component. It is often used to access or modify
                the properties of a DOM element, to store a value that should
                persist between renders, or to create a reference to a child
                component.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-red-400">
              4.What is useMemo?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                <strong>useMemo:</strong> is a React hook that is used to
                memoize the result of a function so that it is only recomputed
                when its dependencies have changed. It is used to optimize the
                performance of the application by preventing unnecessary
                re-renders. When a component renders, all of its functions and
                variables are re-evaluated, which can be a costly operation. By
                using useMemo, we can memoize the result of a function so that
                it is only re-evaluated when its dependencies change. This can
                be especially useful for expensive computations or when dealing
                with large data sets.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
