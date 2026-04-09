import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Calendar } from "lucide-react";

export default function BlogPosts() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-[3px] bg-light-bg shadow-md transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-1 text-sm text-text-lighter">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-accent transition duration-300 group-hover:text-primary">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
