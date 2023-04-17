import Title from '../components/Title';
import BlogItem from '../components/BlogItem';
import { blogData } from '../assets/data';

const Blog = () => {
    return (
        <section id='blog' className='section blog'>
            <Title>Coding Journal</Title>
            <div className='blog__item'>
                <BlogItem data={blogData} />
            </div>
        </section>
    )
}

export default Blog;