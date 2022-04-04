import React from 'react';

const Blog = () => {
    return (
        <div className='md:container sm:container md:mx-auto sm:mx-auto grid md:grid-cols-2 grid-cols-1 gap-3'>
            <div className='bg-gray-200 rounded-lg px-10 py-5 my-5'>
                <h2 className='text-3xl'>What is Context API?</h2>
                <ul className='text-left my-5 list-decimal'>
                    <p className='font-bold text-lg'>The Context API is a React Structure its solve props drilling problems.
                        Five steps to know easily context API.</p>
                    <li>Its first step is create a context and then its provide two component context provider and context consumer.</li>
                    <li>Second step wrap parent with context provider.</li>
                    <li>Third step provide a value of the context as prop.</li>
                    <li>Fourth step Warp child with context consumer.</li>
                    <li>Fifth step consumer follows the render prop pattern.</li>
                </ul>
            </div>
            <div className='bg-gray-200 rounded-lg px-10 py-5 my-5'>
                <h2 className='text-3xl'>What is Semantic tag?</h2>
                <ul className='text-left my-5 list-disc'>
                    <p className='font-bold text-lg'>A semantic element clearly describes its meaning to both the browser and the developer. The following HTML tags can be used to break your page into identified parts:</p>
                    <li>(header): t defines a header for a web page.</li>
                    <li>(nav): It defines a container for navigation links.</li>
                    <li>(section): This defines a section in a web page.</li>
                    <li>(article): This element contains the main part, containing information about the web page.</li>
                    <li>(footer): It defines a footer for a document or a section.</li>
                </ul>
            </div>
            <div className='bg-gray-200 rounded-lg px-10 py-5 my-5'>
                <h2 className='text-3xl'>What is Block, inline and inline-block?</h2>
                <ul className='text-left my-5 list-disc'>
                    <p className='font-bold text-lg'>The Context API is a React Structure its solve props drilling problems.
                        Five steps to know easily context API.</p>
                    <li>A block-level element always starts on a new line.
                        A block-level element always takes up the full width available. In a block element we can use break line by force.</li>
                    <li>An Inline elements doesnot start on a new line.
                        An Inline elements only takes up as much width as necessary. In an Inline elements we cant use break line by force.</li>
                    <li>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;