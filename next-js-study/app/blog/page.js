import React from 'react';
import Link from 'next/link'

const BlogPage = () => {
    return (
        <main>
            <h1>The Blog</h1>
            <p><Link href="/blog/blog-1">Blog-1</Link></p>
            <p><Link href="/blog/blog-2">Blog-2</Link></p>
        </main>
    );
};

export default BlogPage;