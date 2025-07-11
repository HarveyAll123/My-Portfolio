
const Contact = () => {
  const contactInfo = [
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
      icon: "💻",
      label: "GitHub",
      value: "github.com/HarveyAll123",
      link: "https://github.com/HarveyAll123"
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
      description: "Apply AI and software engineering expertise in high-impact junior roles that demand innovation and leadership."
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
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-full px-4 sm:px-6 md:px-0">
            {/* Contact Information */}
            <div className="mx-auto w-full max-w-md md:max-w-none">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-electric-400 text-center md:text-left">
                Contact Information
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-lg md:text-2xl flex-shrink-0">{info.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm sm:text-base md:text-xl text-white font-medium">{info.label}</div>
                      <div className="text-foreground group-hover:text-electric-400 transition-colors text-sm sm:text-base md:text-xl break-words">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Goals */}
            <div className="mx-auto w-full max-w-md md:max-w-none">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-electric-400 text-center md:text-left">
                Career Goals
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {goals.map((goal, index) => (
                  <div key={index} className="glass-effect p-4 md:p-6 rounded-lg">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-electric-300 mb-2 md:mb-3">
                      {goal.term} Goals
                    </h4>
                    <p className="text-white leading-relaxed text-sm sm:text-base md:text-xl">
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
            <p className="text-white mb-6 max-w-2xl mx-auto text-xl leading-relaxed">
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
