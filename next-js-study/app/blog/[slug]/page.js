import Link from 'next/link';
import React from 'react';

const BlogPostPage = (props) => {
    return (
        <main>
            <h1>Blog post</h1>
            <p>{props.params.slug}</p>
            <p><Link href="/blog">All Blogs</Link></p>
        </main>
    );
};

export default BlogPostPage;