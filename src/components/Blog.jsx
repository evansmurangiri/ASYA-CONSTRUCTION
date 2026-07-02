import { Link } from "react-router-dom";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const featuredPosts = blogPosts.filter((p) => p.featured);

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="gold-divider" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-600">From the Blog</p>
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-coffee-900">Latest Insights & Updates</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-xl border border-brand-200 bg-[#FDFAF4] transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
              <Link to={`/blog/${post.slug}`} className="overflow-hidden block">
                <img src={post.image} alt={post.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-4 text-[12px] text-coffee-400">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-brand-500" />{post.date}</span>
                  <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 text-brand-500" />{post.category}</span>
                </div>
                <h3 className="mt-2.5 font-serif text-[16px] font-semibold leading-snug text-coffee-900">{post.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-coffee-500">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
