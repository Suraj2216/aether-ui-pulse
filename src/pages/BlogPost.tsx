
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

// Sample blog posts data (same as in Blog.tsx)
const blogPostsData = [
  {
    id: 1,
    title: "10 AI Strategies to Boost Your Business Growth",
    excerpt: "Learn how artificial intelligence can transform your business operations and drive sustainable growth.",
    content: `
      <p>Artificial Intelligence (AI) has moved beyond being just a buzzword to become a crucial part of business strategy. Companies across industries are leveraging AI to drive efficiency, improve customer experiences, and gain competitive advantages.</p>
      
      <h2>1. Personalize Customer Experiences</h2>
      <p>Use AI to analyze customer data and behavior patterns to deliver highly personalized experiences. From product recommendations to customized marketing messages, personalization can significantly boost engagement and conversion rates.</p>
      
      <h2>2. Automate Routine Tasks</h2>
      <p>Identify repetitive, time-consuming tasks that can be automated using AI. This frees up your team to focus on strategic initiatives that require human creativity and judgment.</p>
      
      <h2>3. Enhance Decision Making with Predictive Analytics</h2>
      <p>Implement predictive analytics models that can forecast trends, customer behavior, and market changes. This allows you to make proactive decisions rather than reactive ones.</p>
      
      <h2>4. Optimize Pricing Strategies</h2>
      <p>AI can analyze multiple factors including market demand, competitor pricing, and customer willingness to pay to recommend optimal pricing strategies that maximize revenue and profitability.</p>
      
      <h2>5. Improve Customer Service with Chatbots</h2>
      <p>Deploy AI-powered chatbots to handle customer queries 24/7, providing instant responses and escalating complex issues to human agents when necessary.</p>
      
      <h2>6. Enhance Product Development</h2>
      <p>Use AI to analyze customer feedback, market trends, and competitor offerings to identify gaps and opportunities for new products or features.</p>
      
      <h2>7. Streamline Supply Chain Management</h2>
      <p>Implement AI solutions that can optimize inventory levels, predict supply chain disruptions, and recommend mitigation strategies.</p>
      
      <h2>8. Detect Fraud and Enhance Security</h2>
      <p>Leverage AI's pattern recognition capabilities to identify unusual activities that may indicate fraud or security breaches.</p>
      
      <h2>9. Optimize Marketing Campaigns</h2>
      <p>Use AI to analyze campaign performance in real-time and automatically adjust strategies to maximize ROI.</p>
      
      <h2>10. Gain Competitive Intelligence</h2>
      <p>Implement AI tools that monitor competitor activities, pricing changes, and market trends to stay ahead of the competition.</p>
      
      <h2>Implementation Strategies</h2>
      <p>While the benefits of AI are clear, implementation requires careful planning:</p>
      
      <ul>
        <li>Start small with projects that can demonstrate quick wins</li>
        <li>Ensure you have the right data infrastructure in place</li>
        <li>Invest in upskilling your workforce to work alongside AI</li>
        <li>Establish clear metrics to measure the impact of AI initiatives</li>
        <li>Partner with AI experts if you lack in-house expertise</li>
      </ul>
      
      <p>By strategically implementing AI across your business operations, you can drive growth, improve efficiency, and create sustainable competitive advantages in today's rapidly evolving business landscape.</p>
    `,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI",
    date: "Apr 12, 2023",
    readTime: "8 min read",
    tags: ["AI", "Business Strategy", "Growth"],
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "David is an AI Strategy Consultant with over 10 years of experience helping businesses implement AI solutions.",
    },
    relatedPosts: [2, 3, 4]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Data-Driven Decision Making",
    excerpt: "Discover how leveraging data analytics can help you make better business decisions and stay ahead of competition.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Data",
    date: "Mar 28, 2023",
    readTime: "10 min read",
    tags: ["Data Analysis", "Decision Making", "Strategy"],
    author: {
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Sophia is a Data Scientist and Business Intelligence Specialist focused on helping organizations make data-driven decisions.",
    },
    relatedPosts: [1, 3, 5]
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for SaaS Companies",
    excerpt: "Protect your SaaS business with these essential cybersecurity measures and compliance strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Security",
    date: "Feb 15, 2023",
    readTime: "7 min read",
    tags: ["Cybersecurity", "SaaS", "Compliance"],
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "James is a Cybersecurity Expert with a focus on cloud security and SaaS applications.",
    },
    relatedPosts: [1, 2, 6]
  },
  {
    id: 4,
    title: "7 Ways to Improve Your Product User Experience",
    excerpt: "Enhance customer satisfaction and retention by implementing these proven UX design principles.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design",
    date: "Jan 30, 2023",
    readTime: "6 min read",
    tags: ["UX Design", "User Experience", "Product Development"],
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Emily is a UX Designer with experience at leading tech companies creating intuitive user interfaces.",
    },
    relatedPosts: [1, 5, 6]
  },
  {
    id: 5,
    title: "The Future of Remote Work in Tech Companies",
    excerpt: "How distributed teams are shaping the future of work and productivity in the technology sector.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Work Culture",
    date: "Jan 10, 2023",
    readTime: "9 min read",
    tags: ["Remote Work", "Team Management", "Future of Work"],
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Michael is a People Operations Director specializing in remote work strategies and team culture.",
    },
    relatedPosts: [2, 4, 6]
  },
  {
    id: 6,
    title: "How to Build a Scalable Microservice Architecture",
    excerpt: "Best practices and patterns for designing resilient and scalable microservices for your applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisi eu nisi.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Engineering",
    date: "Dec 22, 2022",
    readTime: "12 min read",
    tags: ["Microservices", "Architecture", "Scalability"],
    author: {
      name: "Robert Zhang",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Robert is a Software Architect with expertise in designing scalable systems and distributed architectures.",
    },
    relatedPosts: [1, 3, 5]
  },
];

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Find the post with the matching ID
  const post = blogPostsData.find(post => post.id === Number(postId));
  
  // Get related posts
  const relatedPosts = post
    ? blogPostsData.filter(relatedPost => 
        post.relatedPosts?.includes(relatedPost.id)
      ).slice(0, 3)
    : [];
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);
  
  // If no post found, render NotFound
  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-brand-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm mb-6 reveal-element">
              <Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all articles
              </Link>
            </div>
            
            {/* Category Badge */}
            <div className="mb-4 reveal-element">
              <span className="bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-sm font-medium px-2.5 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="heading-xl mb-6 reveal-element reveal-delay-1">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-600 dark:text-slate-400 reveal-element reveal-delay-2">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="h-10 w-10 rounded-full mr-3" 
                />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg reveal-element">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none mb-12 reveal-element reveal-delay-1">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Tags */}
            <div className="mb-12 reveal-element reveal-delay-2">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="mb-12 reveal-element reveal-delay-3">
              <h3 className="text-lg font-semibold mb-4">Share this article:</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-12 shadow-sm reveal-element reveal-delay-4">
              <div className="flex items-start">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="h-16 w-16 rounded-full mr-6" 
                />
                <div>
                  <h3 className="text-lg font-bold mb-1">About {post.author.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-md mb-8 text-center reveal-element">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-shadow duration-300 flex flex-col reveal-element"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <span className="text-sm text-brand-600 dark:text-brand-400 mb-1 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-brand-500">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
