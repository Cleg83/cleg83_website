import BlogPost from '../../src/pages/components/Blog_Posts';

export default function Blog() {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
      <BlogPost file="/posts/favourite_albums.md" />
      <BlogPost file="/posts/test_post2.md" />
      <BlogPost file="/posts/test_post3.md" />
      <BlogPost file="/posts/test_post4.md" />
    </div>
  );
}