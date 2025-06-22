import { useEffect, useState, useRef } from 'react';
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
  const [showContent, setShowContent] = useState(false);
  const [showBackgroundImage, setShowBackgroundImage] = useState(true);
  const postRef = useRef(null);

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

  const handleToggleVisibility = () => {
    if (!isVisible) {
      setShowBackgroundImage(false); 
      setTimeout(() => {
        setShowContent(true); 
        setIsVisible(true);   
      }, 500);
    } else {
      setIsVisible(false); 
      setTimeout(() => {
        setShowContent(false); 
        setShowBackgroundImage(true); 
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen text-black snap-start">
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          backgroundImage: post.data.backgroundImage ? `url(${post.data.backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: showBackgroundImage ? 1 : 0,
        }}
      />

      <div
        id="blog_post_container"
        ref={postRef}
        className={`relative z-10 pt-16 transition-colors duration-500 ${
          isVisible ? 'bg-white' : ''
        }`}
      >
        <div id="blog_content_container">
          <div id="blog_heading_container">
            <h1
              className={`text-4xl my-2 transition-colors duration-500 ${
                isVisible ? 'text-black' : 'text-white'
              }`}
            >
              {post.data.title || 'No title'}
            </h1>
            <button
              onClick={handleToggleVisibility}
              className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
            >
              {isVisible ? 'Hide' : 'Read More'}
            </button>
          </div>

          {showContent && (
            <div
              id="blog_post_content"
              className={`font-[Open_Sans] w-[90%] pt-4 mx-auto mt-6 bg-gray-700 rounded text-white 
                transition-all duration-500 ease-in-out transform origin-top ${
                  isVisible
                    ? 'opacity-100 scale-100 max-h-[100%]'
                    : 'opacity-0 scale-90 max-h-0'
                }`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.content}
              </ReactMarkdown>

              <button
                onClick={() => {
                  handleToggleVisibility();
                  postRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="font-[Raleway] bg-amber-800 text-white px-4 py-2 mb-4 rounded hover:bg-amber-700 transition"
              >
                Hide
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

