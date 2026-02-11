import { Scale, FileText, Users, Home, Shield, Heart, Star, Sparkles, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const areas = [
  { name: "CIVIL LAW", icon: Scale, color: "from-blue-500 to-blue-600" },
  { name: "SOCIAL SECURITY", icon: FileText, color: "from-green-500 to-green-600" },
  { name: "CONSENSUAL FAMILY", icon: Heart, color: "from-rose-500 to-rose-600" },
  { name: "PROBATE", icon: Users, color: "from-purple-500 to-purple-600" },
  { name: "PROPERTY REGULARIZATION", icon: Home, color: "from-orange-500 to-orange-600" },
  { name: "CRIMINAL LAW", icon: Shield, color: "from-red-500 to-red-600" },
];

const areasDetalhadas = [
  {
    title: "Social Security Law",
    description: "Pension benefit reviews, social security claims, and various legal actions to secure your rights.",
    icon: FileText,
    highlight: false,
    stats: "90% success rate",
    features: ["Benefit Reviews", "Social Security Claims", "Pensions"]
  },
  {
    title: "Civil Law",
    description: "Actions for obligations, material and moral damages, probate, adverse possession, property regularization, judgment enforcement, and consensual family law.",
    icon: Scale,
    highlight: true,
    stats: "Main Specialization",
    features: ["Adverse Possession", "Regularization", "Probate", "Indemnities"]
  },
  {
    title: "Criminal",
    description: "Consultation available with our specialized criminal defense lawyer.",
    icon: Shield,
    highlight: false,
    stats: "Specialized Consulting",
    features: ["Criminal Defense", "Legal Consulting", "Procedural Monitoring"]
  }
];

export const Atuacao = () => {
  console.log('[AtuacaoSection]', 'Component rendered successfully');

  return (
    <section id="atuacao" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-accent/10 to-law-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-law-navy/5 to-accent/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-radial from-white/50 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/20 mb-4 sm:mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent mr-2" />
            <span className="text-law-navy font-semibold text-sm sm:text-base">Areas of Excellence</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-law-navy mb-4 sm:mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-law-gold animate-[slideInUp_0.8s_ease-out_0.3s_both]">Expertise</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-law-text-light max-w-3xl mx-auto leading-relaxed">
            Dedicated specialization in each area of law with proven results and personalized service
          </p>
        </div>

        {/* Interactive Areas Grid */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:bg-white cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  role="button"
                  aria-label={`Practice area: ${area.name}`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>

                  {/* Icon with animated background */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-xl sm:rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="relative p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-law-navy group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  <h4 className="font-display text-sm sm:text-base lg:text-lg font-bold text-law-navy group-hover:text-accent transition-colors duration-300 leading-tight">
                    {area.name}
                  </h4>

                  {/* Hover indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Areas - Detailed Cards */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              <Badge variant="outline" className="border-accent text-accent px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm">
                Featured Specialties
              </Badge>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-law-navy mb-4 sm:mb-6">
              Legal Excellence
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-law-text-light max-w-2xl mx-auto leading-relaxed">
              Practice areas with dedicated specialization and a proven track record of results
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {areasDetalhadas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:scale-105 cursor-pointer animate-fade-in ${area.highlight
                    ? 'bg-gradient-to-br from-accent/5 via-white to-law-gold/5 border-2 border-accent/30 shadow-2xl shadow-accent/10 hover:shadow-3xl hover:shadow-accent/20 lg:scale-105 lg:z-10'
                    : 'bg-white/80 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl hover:border-accent/20'
                    }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  role="region"
                  aria-label={`Detalhes da área: ${area.title}`}
                >
                  {/* Top Badge for Highlight */}
                  {area.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-law-gold text-white px-6 py-3 rounded-bl-3xl font-bold text-sm shadow-lg">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        FEATURED
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8 relative z-10">
                    {/* Header with Icon and Title */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                        <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${area.highlight
                          ? 'bg-gradient-to-r from-accent/20 to-law-gold/20'
                          : 'bg-gradient-to-r from-accent/10 to-law-gold/10 group-hover:from-accent/20 group-hover:to-law-gold/20'
                          }`}>
                          <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${area.highlight ? 'text-accent' : 'text-law-navy group-hover:text-accent'
                            }`} />
                        </div>
                        <div>
                          <h4 className={`font-display text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${area.highlight
                            ? 'text-law-navy'
                            : 'text-law-navy group-hover:text-accent'
                            }`}>
                            {area.title}
                          </h4>

                          {/* Stats Badge */}
                          <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                            <span className="text-accent font-semibold text-xs sm:text-sm">{area.stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-law-text-light text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-law-text transition-colors duration-300 text-center sm:text-left">
                      {area.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center sm:justify-start text-law-text group-hover:text-law-navy transition-colors duration-300">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Indicator */}
                    <div className="flex items-center justify-center sm:justify-between">
                      <div className="text-accent font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                      </div>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ${area.highlight
                    ? 'bg-gradient-to-r from-accent to-law-gold'
                    : 'bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent group-hover:to-law-gold'
                    }`} />

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${area.highlight
                    ? 'bg-gradient-to-r from-accent/5 to-law-gold/5'
                    : 'bg-gradient-to-r from-accent/3 to-law-gold/3'
                    }`} />
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/30 shadow-xl max-w-4xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-law-navy mb-4 sm:mb-6">
              Need specialized legal guidance?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-law-text-light mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team is ready to analyze your case and offer the best legal solution
            </p>
            <button
              className="group inline-flex items-center bg-gradient-to-r from-accent to-law-gold hover:from-accent/90 hover:to-law-gold/90 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl min-h-[44px]"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Talk to our team
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};