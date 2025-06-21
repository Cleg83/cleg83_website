import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';

const markdownComponents = {
  h2: ({ node, ...props }) => (
    <h2 className="text-4xl font-semibold my-5" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="text-base leading-relaxed my-3 text-center" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-none ml-6 my-3 text-center" {...props} />
  ),
  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
  img: ({ node, ...props }) => (
    <img
      className="rounded-lg size-24 mx-auto"
      alt={props.alt || ''}
      {...props}
    />
  ),
  table: ({ node, ...props }) => (
    <table className="table-auto border border-gray-400 w-3/4 my-4 mx-auto" {...props} />
  ),
  thead: ({ node, ...props }) => (
    <thead className="text-black" {...props} />
  ),
  tbody: ({ node, ...props }) => <tbody {...props} />,
  tr: ({ node, ...props }) => (
    <tr className="border-t border-gray-300" {...props} />
  ),
  th: ({ node, ...props }) => (
    <th className="p-2 font-bold border border-gray-300 bg-gray-100" {...props} />
  ),
  td: ({ node, ...props }) => (
    <td className="p-2 border border-gray-300" {...props} />
  ),
};

function BlogPost({ file }) {
  const [post, setPost] = useState({ content: '', data: {} });
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.text();
      })
      .then((raw) => {
        const { content, data } = matter(raw);
        setPost({ content, data });
      })
      .catch((err) => {
        console.error(`Error loading ${file}:`, err);
      });
  }, [file]);

  return (
    <div
      id="blog_post_container"
      className="min-h-screen bg-cover bg-center text-black p-8 border-amber-950"
      style={{
        backgroundImage: post.data.backgroundImage
          ? `url(${post.data.backgroundImage})`
          : 'none',
      }}
    >
      <div id="blog_content_container">
        <div id="blog_heading_container">
          <h1 className="text-4xl my-2">{post.data.title || 'No title'}</h1>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            {isVisible ? 'Hide' : 'Read More'}
          </button>
        </div>

        {isVisible && (
          <div id="blog_post_content" className="mt-6 bg-gray-700 border rounded border-white text-white">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPost;


// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import matter from 'gray-matter';

// const markdownComponents = {
//   h2: ({ node, ...props }) => (
//     <h2 className="text-4xl font-semibold my-5" {...props} />
//   ),
//   p: ({ node, ...props }) => (
//     <p className="text-base leading-relaxed my-3" {...props} />
//   ),
//   ul: ({ node, ...props }) => (
//     <ul className="list-none mx-auto my-3" {...props} />
//   ),
//   li: ({ node, ...props }) => (
//     <li className="mb-1" {...props} />
//   ),
//   img: ({ node, ...props }) => (
//     <img
//       className="rounded-lg size-24 mx-auto"
//       alt={props.alt || ''}
//       {...props}
//     />
//   ),
// };

// function BlogPost({ file }) {
//   const [post, setPost] = useState({ content: '', data: {} });

//   useEffect(() => {
//     fetch(file)
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
//         return res.text();
//       })
//       .then((raw) => {
//         console.log(`RAW for ${file}:\n`, raw); 
//         const { content, data } = matter(raw);
//         console.log(`PARSED for ${file}:`, { data, content }); 
//         setPost({ content, data });
//       })
//       .catch((err) => {
//         console.error(`Error loading ${file}:`, err);
//       });
//   }, [file]);


//   if (!post.content) {
//     return (
//       <div className="min-h-screen p-8 bg-gray-200 text-black">
//         <p>Loading {file}...</p>
//       </div>
//     );
//   }

//   return (
//     <div 
//       id="blog_post_container"
//       className="min-h-screen bg-cover bg-center text-black p-8 border-amber-950"
//       style={{
//         backgroundImage: post.data.backgroundImage
//           ? `url(${post.data.backgroundImage})`
//           : 'none',
//       }}
//     >
//       <div id="blog_content_container">
//         <div id="blog_heading_container">
//           <h1 className="text-4xl my-2">{post.data.title || 'No title'}</h1>
//         </div>
//         <div id="blog_post_content" className="hidden">
//           <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogPost;


