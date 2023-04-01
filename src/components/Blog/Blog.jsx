import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center sm:text-9xl  md:text-4xl font-bold mt-10">
        Some Important Questions
      </h1>
      <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-1 gap-6">
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the main difference of Props vs State.?
            </h5>
            <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
              State and Props are both uses for store data. but some of this,
              they have some difference like:
              <ol className="list-decimal mt-5">
                <li>
                  Props : Props is a kind of short properties and passed to a
                  from it has parent component. Props is a Immutable.
                </li>
                <li className="mt-5">
                  State : On the other side State is used for store internal
                  data and state of component. it can be change a value. and it
                  used to dynamic behavior for every component.
                </li>
              </ol>
            </p>
          </a>
        </div>
        {/*============ Second Card-=========== */}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How does Works UseState? Explain it.....
            </h5>
            <div>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                In React, the useState hook is used to manage state in a
                functional component. For Example :
                <ol className="list-decimal mt-5">
                  <li className="mb-5">
                    First, we will import the useState hook from the react
                  </li>
                  <li>
                    Then, We call the useState hook and pass in the initial
                    state value as its argument. The hook returns an array with
                    two values: the current state value, and a function to
                    update that state value: Moreover this is a to Important for
                    create a new components
                  </li>
                </ol>
              </p>
            </div>
          </a>
        </div>
        {/* =============Third Card ===============*/}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What the work useEffect without Data Load....?
            </h5>
            <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
              The useEffect hook in React is used to handle side effects in a
              component. A side effect is anything that affects something
              outside of the component, such as making an API call, For example
              :
              <ol className="list-decimal mt-5">
                <li>
                  Updating the document title: This way, the document title will
                  change whenever the state or props change.
                </li>
                <li className="mt-5">
                  Cleaning up after a component: You can use useEffect to clean
                  up any resources used by a component, such as closing a
                  connection,
                </li>
              </ol>
            </p>
          </a>
        </div>
        {/* =================Fourth Card============== */}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <h2 className="">How does Works React JS ?</h2>
            </h5>
            <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
              React is a JavaScript library that is used for building user
              interfaces (UIs). It works by using a virtual DOM (Document Object
              Model) to represent the UI, and efficiently updating the real DOM
              based on changes to the virtual DOM. Overall, React provides a
              powerful and efficient way to build user interfaces using a
              virtual DOM, reconciliation, and a component-based architecture.
              By updating the virtual DOM instead of the real DOM, React
              minimizes the number of updates to the UI and improves
              performance.
            </p>
          </a>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
};

export default Blog;
