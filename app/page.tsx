import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const blogDir = "blogs";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace('.mdx', ''),
      };
    });

  return (
    <div>
      <Header />
      <main className='flex flex-col'>
        <h2 className='text-4xl font-bold py-10'>Welcome to my First Blog...👋</h2>
        <h4 className='text-1xl'>
          Hey there! 🚀 I'm thrilled to have you on my blog where I share insights, tips, and experiences in the exciting world of frontend development.
          <br /><br />
          In this space, you can expect to find a variety of articles covering everything related to frontend technologies. Whether it's the latest JavaScript frameworks, CSS tricks, or UI/UX design trends, I've got you covered!
          <br /><br />
          I'm passionate about creating engaging and user-friendly web experiences, and I can't wait to dive into all things frontend with you. So, buckle up for a journey through the ever-evolving landscape of frontend development!
          <br /><br />
          Stay tuned for regular updates, tutorials, and musings. Let's code, design, and build together! 💻✨
          <br /><br />
          Happy coding!<br /><br />
        </h4>

        <section className='py-10'>
          <h2 className='text-4xl font-blod'>I write mainly about frontend on my blog.</h2>

          <div className='py-4'>
            {blogs.map((blog) => (
              <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
                <div className='py-4 mb-4 flex justify-between align-middle gap-4 border p-4 rounded-md cursor-pointer'>
                  <div  className= 'hover:bg-dodgerblue-100 hover:shadow-md' >
                    <h3 className='text-lg font-blod'>{blog.meta.title}</h3>
                    <div>
                      <p className='text-gray-400'>{blog.meta.description}</p>
                    </div>
                    <div className='my-auto text-gray-400'>
                      <p>{blog.meta.date}</p>
                    </div>
                  </div>
                  {/* Optional: You can include an image here */}
                  {/* <Image src={blog.meta.image} alt={blog.meta.title} width={100} height={100} /> */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
