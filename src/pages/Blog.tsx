
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample blog posts data
const blogPostsData = [
  {
    id: 1,
    title: "10 AI Strategies to Boost Your Business Growth",
    excerpt: "Learn how artificial intelligence can transform your business operations and drive sustainable growth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI",
    date: "Apr 12, 2023",
    tags: ["AI", "Business Strategy", "Growth"],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Data-Driven Decision Making",
    excerpt: "Discover how leveraging data analytics can help you make better business decisions and stay ahead of competition.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Data",
    date: "Mar 28, 2023",
    tags: ["Data Analysis", "Decision Making", "Strategy"],
    author: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for SaaS Companies",
    excerpt: "Protect your SaaS business with these essential cybersecurity measures and compliance strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Security",
    date: "Feb 15, 2023",
    tags: ["Cybersecurity", "SaaS", "Compliance"],
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "7 Ways to Improve Your Product User Experience",
    excerpt: "Enhance customer satisfaction and retention by implementing these proven UX design principles.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design",
    date: "Jan 30, 2023",
    tags: ["UX Design", "User Experience", "Product Development"],
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "The Future of Remote Work in Tech Companies",
    excerpt: "How distributed teams are shaping the future of work and productivity in the technology sector.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Work Culture",
    date: "Jan 10, 2023",
    tags: ["Remote Work", "Team Management", "Future of Work"],
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "How to Build a Scalable Microservice Architecture",
    excerpt: "Best practices and patterns for designing resilient and scalable microservices for your applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Engineering",
    date: "Dec 22, 2022",
    tags: ["Microservices", "Architecture", "Scalability"],
    author: {
      name: "Robert Zhang",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const categories = ["All", "AI", "Data", "Security", "Design", "Work Culture", "Engineering"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search term and selected category
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 reveal-element">Our <span className="text-gradient">Blog</span></h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-1">
              Insights, guides, and industry news to help you succeed in the world of AI and technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto reveal-element reveal-delay-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="input pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto reveal-element">
            <div className="flex space-x-2 min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
                      <h2 className="font-bold text-xl mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
          
          {/* Pagination (simplified) */}
          <div className="mt-12 flex justify-center reveal-element">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" disabled>Next</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-brand-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-4 reveal-element">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-1">
              Stay updated with the latest insights, tutorials, and news from our team.
            </p>
            
            <form className="max-w-md mx-auto reveal-element reveal-delay-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input flex-1"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
