
import { ArrowRight, Briefcase, Heart, Star, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Sample team members data
const teamMembers = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-founder",
    bio: "10+ years experience in SaaS and AI. Previously founded and sold DataSync Technologies.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Samantha Chen",
    role: "CTO",
    bio: "PhD in Computer Science with focus on machine learning. Led engineering teams at Google and Microsoft.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Product strategist passionate about creating intuitive user experiences and solving complex problems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating beautiful, functional interfaces that users love.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    linkedin: "#",
    twitter: "#"
  },
];

// Company values data
const companyValues = [
  {
    icon: <Users className="h-8 w-8 text-brand-500" />,
    title: "Customer-First",
    description: "We put our customers at the center of everything we do, constantly seeking to understand and exceed their expectations."
  },
  {
    icon: <Star className="h-8 w-8 text-brand-500" />,
    title: "Excellence",
    description: "We strive for excellence in all aspects of our work, from product development to customer support."
  },
  {
    icon: <Heart className="h-8 w-8 text-brand-500" />,
    title: "Empathy",
    description: "We approach challenges with empathy, understanding the human impact of the technology we build."
  },
  {
    icon: <Target className="h-8 w-8 text-brand-500" />,
    title: "Innovation",
    description: "We foster a culture of continuous innovation, encouraging bold ideas and creative problem-solving."
  },
];

// Timeline events data
const timelineEvents = [
  { year: "2018", title: "Foundation", description: "AetherUI was founded with a mission to simplify complex data operations." },
  { year: "2019", title: "First Product Launch", description: "Released our core analytics platform with 100 beta customers." },
  { year: "2020", title: "Series A Funding", description: "Secured $5M in funding to expand our team and product capabilities." },
  { year: "2021", title: "Global Expansion", description: "Opened offices in London and Singapore to serve international customers." },
  { year: "2022", title: "Enterprise Partnership", description: "Established strategic partnerships with Fortune 500 companies." },
  { year: "2023", title: "AI Integration", description: "Integrated advanced AI capabilities into our core product offering." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 reveal-element">
              Our <span className="text-gradient">Mission</span> & <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-1">
              We're a team of innovators, engineers, and problem solvers dedicated to making AI technology accessible and valuable for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-element">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team at work" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="reveal-element reveal-delay-1">
              <h2 className="heading-md mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                AetherUI was founded in 2018 with a clear vision: to democratize access to advanced AI technologies and help businesses leverage data for better decision-making.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                What started as a small team of three engineers working out of a garage has grown into a global company with over 200 employees across four continents. Our journey has been driven by the belief that AI should be accessible, ethical, and impactful.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Today, we serve thousands of customers worldwide, from startups to Fortune 500 companies, all while staying true to our original mission of making complex technology simple and valuable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <h2 className="heading-lg text-center mb-16 reveal-element">Our <span className="text-gradient">Journey</span></h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-brand-200 dark:bg-brand-800/50"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={event.year}
                    className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start reveal-element ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="md:w-1/2 text-center md:text-right">
                      <h3 className="text-xl font-bold text-brand-500 mb-2">{event.year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{event.description}</p>
                    </div>
                    
                    {/* Circle marker */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 top-0 w-[30px] h-[30px] bg-white dark:bg-slate-900 rounded-full border-4 border-brand-500"></div>
                    
                    {/* Empty div for alignment */}
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 reveal-element">Meet Our <span className="text-gradient">Leadership Team</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
              The passionate individuals behind AetherUI who are dedicated to building innovative solutions and fostering a culture of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow reveal-element"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-500 dark:text-brand-400 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-slate-500 hover:text-brand-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href={member.twitter} className="text-slate-500 hover:text-brand-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-gradient-to-br from-brand-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 reveal-element">Our <span className="text-gradient">Values</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
              The core principles that guide our decisions, shape our culture, and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 reveal-element"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="bg-brand-50 dark:bg-brand-900/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bg-brand-500 dark:bg-brand-600 rounded-2xl text-white p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join our team?</h2>
                <p className="text-lg text-white/80 mb-0 lg:mb-0">
                  We're always looking for talented individuals to help us build the future of AI-powered software.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 justify-end">
                <Link to="/careers">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
