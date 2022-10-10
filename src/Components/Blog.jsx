import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <div>
                <h4 className='font-bold text-2xl'>1. What is the purpose of React Router?</h4><br />
                <p className='px-8'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
                </p>
            </div><br /><br />
            <div>
                <h4 className='font-bold text-2xl'>2. How Does Context API works?</h4>
                <br />
                <p className='px-8'>
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.
                </p>
            </div><br /><br />
            <div>
                <h4 className='font-bold text-2xl'>3. What is 'useHref()' hook?</h4>
                <br />
                <p className='px-8'>
                    The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                    <br /><br />
                    const refContainer = useRef(initialValue);
                    <br /><br />
                    There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.
                </p>
            </div>
        </div>
    );
};

export default Blog;