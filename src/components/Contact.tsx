
const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+62 812 8746 4800",
      link: "tel:+6281287464800"
    },
    {
      icon: "✉️",
      label: "Email",
      value: "hasan.abdullah5000@gmail.com",
      link: "mailto:hasan.abdullah5000@gmail.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/hasan-abdullah",
      link: "https://www.linkedin.com/in/hasan-abdullah-5791bb275/"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bekasi City, Indonesia",
      link: "#"
    }
  ];

  const goals = [
    {
      term: "Short-term",
      description: "Apply AI and software engineering expertise in high-impact internships or junior roles that demand innovation and leadership."
    },
    {
      term: "Long-term",
      description: "Lead R&D teams delivering AI solutions for healthcare and smart cities, elevating quality of life worldwide."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-electric-500 mx-auto mb-16" />
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-electric-400">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground group-hover:text-electric-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Goals */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-electric-400">
                Career Goals
              </h3>
              
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div key={index} className="glass-effect p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-electric-300 mb-3">
                      {goal.term} Goals
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm eager to stand and learn in hobbies, committed to lifelong learning and technological excellence. 
              Let's connect and create something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hasan.abdullah5000@gmail.com"
                className="px-8 py-4 bg-electric-500 hover:bg-electric-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
              >
                Send Email
              </a>
              
              <a
                href="https://www.linkedin.com/in/hasan-abdullah-5791bb275/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-electric-500 text-electric-400 hover:bg-electric-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
