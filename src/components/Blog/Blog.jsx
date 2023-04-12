import React from "react";

const Blog = () => {
  const data = [
    {
      question: "When should you use context API?",
      answer:
        "The Context API is a feature in React that allows for global state management. It can be used when you have data or state that needs to be accessed by multiple components at different levels of your component tree. The Context API can be a powerful tool for managing state and sharing data between components in React.",
    },
    {
      question: "What is a custom hook?",
      answer:
        "A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.  Custom hooks help you extract common functionality from components and reuse it across multiple components, making your code more modular and easier to maintain.",
    },
    {
      question: "What is useRef?",
      answer:
        "The useRef hook takes an initial value as its argument and returns a mutable ref object with a current property. You can assign a value to the current property of the ref object, and it will persist across renders. When you update the current property, React will not re-render the component.",
    },
    {
      question: "What is useMemo?",
      answer:
        "UseMemo is a built-in React hook that allows you to memoize the result of a function so that it is only re-calculated when its dependencies change. This is useful for expensive calculations or operations that you don't want to re-run unnecessarily. To use useMemo, you pass a function as the first argument and an array of dependencies as the second argument. The function will only be re-evaluated when one of the dependencies changes.",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-4xl my-16 text-center">Blog</h1>
      {data.map((blog, idx) => (
        <div tabIndex={0} className="collapse collapse-arrow group" key={idx}>
          <div className="collapse-title bg-indigo-600 rounded-xl text-primary-content text-3xl group-focus:bg-indigo-900 group-focus:text-secondary-content">
            {blog.question}
          </div>
          <div className="collapse-content mt-2 group-focus:mb-8 bg-primary text-primary-content text-lg group-focus:bg-indigo-900 rounded-xl group-focus:text-secondary-content group-focus:p-6">
            {blog.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
