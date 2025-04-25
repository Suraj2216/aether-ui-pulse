
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 AI Strategies to Boost Your Business Growth",
    excerpt: "Learn how artificial intelligence can transform your business operations and drive sustainable growth.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI",
    date: "Apr 12, 2023",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Data-Driven Decision Making",
    excerpt: "Discover how leveraging data analytics can help you make better business decisions and stay ahead of competition.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Data",
    date: "Mar 28, 2023",
    author: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for SaaS Companies",
    excerpt: "Protect your SaaS business with these essential cybersecurity measures and compliance strategies.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Security",
    date: "Feb 15, 2023",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const BlogPreview = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="heading-lg mb-4 reveal-element">
              Latest from our <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl reveal-element reveal-delay-1">
              Explore our latest insights, guides, and industry trends to stay ahead in the SaaS and AI landscape.
            </p>
          </div>
          <div className="mt-6 md:mt-0 reveal-element reveal-delay-2">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                View all posts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-shadow duration-300 reveal-element"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {post.date}
                  </span>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block group">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
