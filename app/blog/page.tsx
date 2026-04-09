import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog - Vacation Cappadocia",
  description:
    "Read travel tips, guides, and stories about Cappadocia from our team of local experts.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-[3px] bg-light-bg shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
