import { Link } from "react-router-dom";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="From the Blog" title="Latest Insights & Updates" description="Practical advice on budgeting, design, quantity surveying, and renovation for your project in Kenya." />
      <section className="bg-[#FDFAF4] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-xl border border-brand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-md">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-[12px] text-coffee-400">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-brand-500" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 text-brand-500" />{post.category}</span>
                  </div>
                  <h3 className="mt-2.5 font-serif text-[16px] font-semibold leading-snug text-coffee-900">{post.title}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-coffee-500">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
