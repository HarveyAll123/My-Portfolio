import { useEffect, useRef } from 'react';

const NonTechExpertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const expertiseAreas = [
    {
      title: "International Politics & Global Governance",
      description: "Liberal-institutionalist perspective on UN, ASEAN, and EU cooperation frameworks. Focus on great-power rivalry and Indo-Pacific security architecture.",
      color: "from-electric-400 to-purple-400"
    },
    {
      title: "Conflict Prevention & Peacebuilding", 
      description: "Pacifist social-democrat approach to early-warning indicators, Track-II diplomacy, and 'positive peace' through structural justice.",
      color: "from-emerald-400 to-teal-400"
    },
    {
      title: "Political Theory & Comparative Politics",
      description: "Analysis of democratic systems, welfare-state models, and democratic backsliding through electoral and media-freedom metrics.",
      color: "from-purple-400 to-electric-500"
    },
    {
      title: "Research & Policy Analysis",
      description: "Problem-tree diagrams, SWOT analysis, and policy briefs turning complex data into actionable insights.",
      color: "from-teal-400 to-emerald-400"
    }
  ];

  const languages = [
    { lang: "Bahasa Indonesia", level: "Native" },
    { lang: "English", level: "Fluent (Academic & Professional)" },
    { lang: "German & French", level: "Beginner Reading & Conversational" }
  ];

  const politicalValues = [
    { 
      aspect: "Constructivism", 
      myPercentage: 52, 
      neutralPercentage: 29, 
      opposingPercentage: 19,
      opposing: "Essentialism",
      description: "Identities are fluid and shaped by social context; no one is locked into an immutable box."
    },
    { 
      aspect: "Rehabilitative", 
      myPercentage: 33, 
      neutralPercentage: 34, 
      opposingPercentage: 33,
      opposing: "Punitive",
      description: "Justice should fix root causes while still holding people accountable." 
    },
    { 
      aspect: "Progressive", 
      myPercentage: 43, 
      neutralPercentage: 43, 
      opposingPercentage: 14,
      opposing: "Conservative",
      description: "I favour steady social change that expands rights without tearing communities apart." 
    },
    { 
      aspect: "Internationalism", 
      myPercentage: 62, 
      neutralPercentage: 38, 
      opposingPercentage: 0,
      opposing: "Nationalism",
      description: "Borders organise governance, not empathy. Multilateralism over zero-sum nationalism every time." 
    },
    { 
      aspect: "Capitalism", 
      myPercentage: 45, 
      neutralPercentage: 24, 
      opposingPercentage: 31,
      opposing: "Communism",
      description: "Well-regulated markets plus a strong welfare floor feel like the balanced path." 
    },
    { 
      aspect: "Regulation", 
      myPercentage: 40, 
      neutralPercentage: 48, 
      opposingPercentage: 12,
      opposing: "Laissez-faire",
      description: "Free enterprise is fine—as long as guard-rails protect people and planet." 
    },
    { 
      aspect: "Production", 
      myPercentage: 50, 
      neutralPercentage: 33, 
      opposingPercentage: 17,
      opposing: "Ecology",
      description: "Indonesia still needs growth, but growth must get cleaner and smarter." 
    },
    { 
      aspect: "Revolution", 
      myPercentage: 40, 
      neutralPercentage: 22, 
      opposingPercentage: 38,
      opposing: "Reform",
      description: "Bold ideas excite me, yet durable progress usually comes from inclusive, persistent reform." 
    }
  ];

  const projectConnections = [
    {
      project: "Jakarta Museums Visitor Study",
      connections: [
        {
          value: "Constructivism",
          explanation: "Explored how colonial narratives shape visitor identities and museum experiences, revealing how context creates meaning rather than fixed interpretations."
        },
        {
          value: "Internationalism", 
          explanation: "Engaged with foreign tourists to understand cross-cultural perspectives on Indonesian colonial history."
        },
        {
          value: "Progressive",
          explanation: "Advocated for decolonizing museum narratives while respecting existing cultural institutions and visitor experiences."
        }
      ]
    },
    {
      project: "Three Forms of Fascism Critical Review",
      connections: [
        {
          value: "Research & Policy Analysis",
          explanation: "Applied rigorous academic methodology to critique political theory, suggesting quantitative evidence and comparative frameworks."
        },
        {
          value: "Constructivism",
          explanation: "Analyzed how fascist movements construct and reconstruct political identities across different historical contexts."
        },
        {
          value: "Progressive",
          explanation: "Advocated for improved scholarly methodology while building on existing academic work rather than dismissing it entirely."
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('animate-slide-in-up');
            element.style.opacity = '1';
          } else {
            element.classList.remove('animate-slide-in-up');
            element.style.opacity = '0';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('[data-animate]');
    animatedElements?.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      htmlElement.style.transition = 'opacity 0.6s ease-out';
      observer.observe(htmlElement);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-background via-purple-950/10 to-card/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-electric-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-electric-500/20 rounded-full blur-xl animate-pulse rotate-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-animate>
            <h3 className="text-2xl sm:text-4xl font-bold mb-4">
              Where I <span className="gradient-text-alt animate-rainbow">Stand</span>
            </h3>
            <p className="text-white text-lg sm:text-2xl max-w-3xl mx-auto">
              My Non-Tech Expertise – Beyond coding and AI, I bring insights into global governance, 
              conflict resolution, and human-centered policy design.
            </p>
          </div>

          {/* Core Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="glass-effect-vibrant p-6 rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 pulse-glow group"
                data-animate
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-lg mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white/20 rounded-full animate-pulse" />
                </div>
                <h4 className={`text-lg sm:text-2xl font-semibold bg-gradient-to-r ${area.color} bg-clip-text text-transparent mb-3`}>
                  {area.title}
                </h4>
                <p className="text-white text-base sm:text-xl leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Values in Action - Project Connections */}
          <div className="mb-12" data-animate>
            <h4 className="text-3xl font-bold text-center mb-8">
              Values in <span className="gradient-text">Action</span>
            </h4>
            <p className="text-white text-xl text-center mb-8 max-w-4xl mx-auto">
              How my non-Tech projects demonstrate these political values and expertise areas in practice
            </p>
            
            <div className="space-y-8">
              {projectConnections.map((project, index) => (
                <div 
                  key={index}
                  className="glass-effect-vibrant p-6 rounded-xl"
                  data-animate
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h5 className="text-2xl font-semibold gradient-text mb-4">
                    {project.project}
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.connections.map((connection, connIndex) => (
                      <div 
                        key={connIndex}
                        className="p-4 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300"
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-electric-500 rounded-full mr-2" />
                          <span className="text-electric-400 font-medium text-lg">
                            {connection.value}
                          </span>
                        </div>
                        <p className="text-white text-base leading-relaxed">
                          {connection.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 max-w-full px-4 sm:px-6 lg:px-0">
            {/* Languages */}
            <div className="glass-effect-vibrant p-4 sm:p-6 rounded-xl" data-animate>
              <h4 className="text-lg sm:text-2xl font-semibold gradient-text mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-400 to-purple-400 rounded-full mr-3 animate-pulse" />
                Multilingual Communication
              </h4>
              <div className="space-y-4">
                {languages.map((item, index) => (
                  <div key={index} 
                       className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent hover:from-electric-500/10 hover:to-purple-500/10 transition-all duration-300"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-white font-medium text-base sm:text-xl">{item.lang}</span>
                    <span className="text-electric-300 text-xs sm:text-sm lg:text-lg bg-electric-500/20 px-2 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full text-center flex-shrink-0 max-w-[45%] leading-tight">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Political Values Snapshot */}
            <div className="glass-effect-vibrant p-4 sm:p-6 rounded-xl" data-animate>
              <h4 className="text-lg sm:text-2xl font-semibold gradient-text-alt mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 animate-pulse" />
                My PolitiScales Snapshot
              </h4>
              <p className="text-white text-sm sm:text-lg mb-6">
                Results from PolitiScales.party - percentages show my lean; grey portions represent undecided space
              </p>
              <div className="space-y-6">
                {politicalValues.map((value, index) => (
                  <div key={index} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center text-xs sm:text-lg">
                      <span className="text-electric-400 font-medium">{value.aspect} {value.myPercentage}%</span>
                      <span className="text-white">Neutral {value.neutralPercentage}%</span>
                      <span className="text-white">{value.opposing} {value.opposingPercentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 flex overflow-hidden shadow-inner">
                      <div 
                        className="h-3 bg-gradient-to-r from-electric-500 to-purple-400 transition-all duration-1000 relative overflow-hidden"
                        style={{ width: `${value.myPercentage}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                      <div 
                        className="h-3 bg-muted"
                        style={{ width: `${value.neutralPercentage}%` }}
                      />
                      <div 
                        className="h-3 bg-gradient-to-r from-red-500 to-red-600"
                        style={{ width: `${value.opposingPercentage}%` }}
                      />
                    </div>
                    <p className="text-white text-sm sm:text-xl leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How Values Guide Work */}
          <div className="mt-12 text-center glass-effect-vibrant p-8 rounded-xl" data-animate>
            <h4 className="text-2xl font-semibold gradient-text mb-4">
              How These Values Steer My Work
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                "Multilateral solutions guide global governance projects",
                "Prevention-first approach in peacebuilding", 
                "Human-centered innovation in tech development",
                "Incremental but ambitious change strategy"
              ].map((text, index) => (
                <div key={index} className="text-center group" data-animate style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-500/30 to-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-gradient-to-r from-electric-500 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonTechExpertise;
