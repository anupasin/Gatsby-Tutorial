import * as React from 'react';
import { graphql } from 'gatsby'; // highlight-line
import { MDXRenderer } from 'gatsby-plugin-mdx'; // highlight-line
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  // hightlight-line
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
// highlight-end

export default BlogPost;
