const BlogItem = ({ data }) => {
    const renderedBlog = data.map(blogItem => (
        <article className='blog-item reveal' key={blogItem.id} >
            <h3 className='blog-item__title'>{blogItem.title}</h3>
            <p className='blog-item__content'>
                {blogItem.content}
            </p>
        </article>
    ))
    return renderedBlog;
};

export default BlogItem;