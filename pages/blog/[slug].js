import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';

const BlogPost = ({ source, frontMatter }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </article>
  );
};

export async function getStaticPaths() {
  // Read the list of MDX files from the 'content/posts' directory
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  // Generate the paths for static generation based on post slugs
  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    return {
      params: { slug }
    };
  });

  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Load the MDX content and frontmatter based on the slug
  const filePath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    },
    revalidate: 1 // In seconds
  };
}

export default BlogPost;
