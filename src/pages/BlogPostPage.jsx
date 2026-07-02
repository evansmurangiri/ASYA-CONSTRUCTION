import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Tag, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-serif text-[1.8rem] font-bold text-coffee-900">Article not found</h1>
        <Link to="/blog" className="btn-gold mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    </section>
  );

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-coffee-900 py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[13px] text-coffee-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-coffee-200">{post.title}</span>
          </div>
          <div className="flex items-center gap-3 mt-5 mb-2">
            <div className="gold-divider" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-400">{post.category}</p>
          </div>
          <h1 className="font-serif text-[2rem] font-bold leading-tight text-brand-50 sm:text-[2.3rem]">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-[13px] text-coffee-300">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-brand-500" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-500" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img src={post.image} alt={post.title} className="h-[280px] w-full object-cover sm:h-[360px]" />
        </div>
      </div>

      <article className="bg-[#FDFAF4] py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {post.content.map((para, i) => (
            <p key={i} className="mb-5 text-[15.5px] leading-relaxed text-coffee-600">{para}</p>
          ))}

          <div className="mt-10 rounded-xl border border-brand-300 bg-white p-6">
            <h3 className="font-serif text-[16px] font-bold text-coffee-900">Have a project in mind?</h3>
            <p className="mt-1.5 text-[13.5px] text-coffee-500">Tell us about it and we'll point you to the right next step.</p>
            <Link to="/contact" className="btn-gold mt-4 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[13.5px] font-semibold">
              Get in Touch <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <Link to="/blog" className="mt-10 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" /> Back to All Articles
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-divider" />
              <h2 className="font-serif text-[1.5rem] font-bold text-coffee-900">More Articles</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link to={`/blog/${r.slug}`} key={r.slug} className="group overflow-hidden rounded-xl border border-brand-200 bg-[#FDFAF4] transition-all hover:-translate-y-1 hover:shadow-md">
                  <img src={r.image} alt={r.title} className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[12px] text-coffee-400">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-brand-500" />{r.date}</span>
                      <span className="flex items-center gap-1"><Tag className="h-3 w-3 text-brand-500" />{r.category}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-[14.5px] font-semibold leading-snug text-coffee-900">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
