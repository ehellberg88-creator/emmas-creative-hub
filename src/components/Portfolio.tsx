import PortfolioHeader from "./PortfolioHeader";
import CaseStudyCard from "./CaseStudyCard";
import SkillBadge from "./SkillBadge";
import { PortfolioButton } from "./ui/portfolio-button";
import { ExternalLink, Mail, Phone, Linkedin, Facebook, Instagram, MapPin, Calendar, Briefcase, Gamepad2, Lightbulb } from "lucide-react";
import friidrottImage from "../assets/friidrott-image.jpg";
import ifKilImage from "../assets/if-kil-image.jpg";

export default function Portfolio() {
  const personalInfo = {
    name: 'Emma Hellberg',
    role: 'UX Designer / Säljare / Projektledare / Ungdomsledare',
    intro: 'Mångsidig och engagerad person med bred erfarenhet inom service, försäljning och ledarskap. Tidigare arbetat inom restaurang och hotell, samt försäljning. Med starka kommunikativa färdigheter och förmåga att ge högkvalitativ kundservice. Erfaren av försäljning på nätauktion med tunga maskiner och fordon, samt som tf. platschef med personalansvar inom direktmarknadsföring.',
    shortCVLink: '/cv.pdf',
    email: 'emma_hellberg@hotmail.com',
    phone: '073-7334713'
  };

  const education = [
    { org: 'Futuregames', degree: 'Experience Designer', years: '2024–pågående' },
    { org: 'NTI', degree: 'C#', years: '2020' },
    { org: 'Frans Schartaus Handelsinstitut', degree: 'Diplomerad Resekonsult', years: '2010–2012' },
    { org: 'Karlstad Universitet', degree: 'Turism', years: '2009' },
    { org: 'Tullholmsgymnasiet', degree: 'Hotell och Restaurang', years: '2004–2007' }
  ];

  const experience = [
    { 
      role: 'Distributionsansvarig', 
      company: 'Svensk Direktreklam', 
      period: '2022–2024', 
      desc: 'Tillförordnad platschef under frånvaro och semester. Bokning av reklamutdelare, fakturering, reklamationsärenden, lönekörning och offerter till kunder.' 
    },
    { 
      role: 'Administratör', 
      company: 'Klaravik AB', 
      period: '2017–2021', 
      desc: 'Hantering av objekt med finansiering, utveckling av rutiner och processer, nära kontakt med kollegor, säljande kunder och finansbolag. Utveckling av plattformens backoffice.' 
    },
    { 
      role: 'Resesäljare', 
      company: 'Resia AB, Arvika', 
      period: '2012–2016', 
      desc: 'Bokning av resor och framtagning av reseförslag för privat- och affärskunder. Skyltning av butik, kontanthantering och kundservice.' 
    },
    { 
      role: 'Receptionist/Buffévärd', 
      company: 'Hotell Drott, Karlstad', 
      period: '2012 (sommar)', 
      desc: 'Ansvar för in- och utcheckning, bokningar, buffé, disk och servering.' 
    },
    { 
      role: 'Kallskänka', 
      company: 'Ristorante Alfie/Tiffany, Karlstad', 
      period: '2006–2012', 
      desc: 'Förberedelse och tillagning av förrätter och desserter.' 
    }
  ];

  const otherCommitments = [
    { role: 'Ledare', org: 'Kils AIK Friidrott', period: '2020–nu' },
    { role: 'Tränare', org: 'IF Kil Fotboll (F2015)', period: '2022–nu' },
    { role: 'Ordförande', org: 'Kils Ensembleförening', period: 'pågående' }
  ];

  const caseStudies = [
    { 
      id: 1, 
      title: 'Game Psychology and Gamification', 
      intro: 'En fördjupad utforskning av spelpsykologi och de principer som styr mänskligt beteende inom spelmiljöer. Fokus ligger på hur gamification kan användas strategiskt för att öka engagemang, motivation och användarupplevelse i digitala produkter. Genom att analysera både belöningssystem, feedbackmekanismer och användarbeteenden lär jag mig att skapa lösningar som gör digitala upplevelser mer interaktiva och meningsfulla.', 
      link: '#game-psychology' 
    },
    { 
      id: 2, 
      title: 'Game Design', 
      intro: 'En djupgående studie av spelmekanik, användarinteraktion och designprinciper som skapar engagerande och minnesvärda spelupplevelser. Här ingår att förstå hur olika komponenter, som nivådesign, regler och visuell estetik, samverkar för att forma spelarens upplevelse. Genom praktiska projekt och teoretiska analyser utvecklar jag förmågan att skapa spel som är både underhållande och strategiskt välbalanserade.', 
      link: '#game-design' 
    }
  ];

  const skills = {
    hard: ['UX Design', 'Gamification', 'C#', 'Administration', 'Projektledning', 'Försäljning'],
    soft: ['Kommunikation', 'Ledarskap', 'Serviceinriktad', 'Problemlösning', 'Anpassningsförmåga']
  };

  const funFacts = [
    'Ledare inom friidrott och fotboll sedan 2020',
    'Ordförande i Kils Ensembleförening',
    'Musikintresserad och spelar flera instrument',
    'Trivs i högt tempo och varierande uppgifter',
    'Erfaren av att bygga team och utveckla människor'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 md:p-8 lg:p-12">
        <PortfolioHeader 
          name={personalInfo.name}
          role={personalInfo.role}
          intro={personalInfo.intro}
          shortCVLink={personalInfo.shortCVLink}
        />

        <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <section className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <div className="bg-card-gradient p-8 rounded-3xl shadow-soft border border-border/50">
              <h2 className="text-3xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-hero-gradient rounded-full"></div>
                Om mig
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jag trivs i ett högt tempo och har lätt för att växla mellan olika uppgifter, ta ansvar och leverera resultat i varierande situationer. Jag har en naturlig förmåga att prioritera och anpassa mig efter förändrade förutsättningar, vilket gör att jag kan upprätthålla kvalitet och effektivitet även under press.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                På fritiden ägnar jag mig åt ungdomsidrott, musik och ledarskap. Dessa aktiviteter ger mig möjlighet att både utveckla mig själv och inspirera andra, samtidigt som jag stärker mina organisatoriska och kommunikativa färdigheter. Jag värdesätter samarbete och engagemang och tycker om att skapa miljöer där människor kan växa och nå sin fulla potential.
              </p>

              {/* Case Studies */}
              <div id="case-studies">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Case Studies
                </h3>
                <div className="grid gap-6 mb-8">
                  {caseStudies.map(cs => (
                    <CaseStudyCard key={cs.id} caseStudy={cs} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <PortfolioButton variant="hero" asChild>
                    <a href="#game-psychology" className="group">
                      <Gamepad2 className="w-4 h-4 group-hover:rotate-12" />
                      Se Game Psychology
                    </a>
                  </PortfolioButton>
                  <PortfolioButton variant="secondary" asChild>
                    <a href="#game-design" className="group">
                      <Lightbulb className="w-4 h-4 group-hover:scale-110" />
                      Se Game Design
                    </a>
                  </PortfolioButton>
                </div>
              </div>

              {/* References */}
              <div className="mt-12 p-6 bg-accent rounded-2xl border border-border/30">
                <h3 className="text-xl font-semibold text-accent-foreground mb-3">Referenser</h3>
                <p className="text-muted-foreground text-sm">
                  Referenser lämnas gärna på förfrågan. Kontakta mig så förmedlar jag kontaktuppgifter till tidigare arbetsgivare och kollegor som kan ge en djupare bild av min arbetsinsats och personlighet.
                </p>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Experience & Education */}
            <div className="bg-card-gradient p-6 rounded-2xl shadow-soft border border-border/50">
              <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                CV / Erfarenhet
              </h3>
              
              {/* Education */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Utbildning</h4>
                <div className="space-y-3">
                  {education.map((e, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4 pb-2">
                      <div className="font-medium text-sm text-card-foreground">{e.org}</div>
                      <div className="text-sm text-muted-foreground">{e.degree}</div>
                      <div className="text-xs text-primary font-medium">{e.years}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">Arbetslivserfarenhet</h4>
                <div className="space-y-4">
                  {experience.map((ex, i) => (
                    <div key={i} className="border-l-2 border-secondary/50 pl-4 pb-3">
                      <div className="font-medium text-sm text-card-foreground">{ex.role}</div>
                      <div className="text-sm text-muted-foreground">{ex.company}</div>
                      <div className="text-xs text-primary font-medium mb-2">{ex.period}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{ex.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Commitments */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Kils AIK Friidrott</h4>
                <div className="space-y-4">
                  <div className="bg-accent/20 p-4 rounded-xl border border-border/30">
                    <img 
                      src={friidrottImage} 
                      alt="Kils AIK Friidrott träning med flaggor och atletikbana" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sedan 2020 har jag varit aktiv som ledare inom Kils AIK Friidrott. Åldern på grupperna har varierat något men idag är vi två ledare på en grupp som är födda mellan 2011 och 2014. En kul och utmanande ålder där vi tränar året om både inomhus och utomhus. I detta ingår att planera träningar tillsammans, och hitta en bra nivå för alla ungdomar i gruppen för att ge en så allsidig träning som möjligt.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-accent/20 p-4 rounded-xl border border-border/30">
                      <h5 className="font-semibold text-card-foreground mb-3">IF Kil</h5>
                      <img 
                        src={ifKilImage} 
                        alt="Emma som tränare för IF Kil med unga fotbollsspelare" 
                        className="w-full h-48 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Sedan 2022 har jag varit med som tränare för ett gäng tjejer födda 2015. I dagsläget är vi två tränare för laget. Här är jag med och gör träningsupplägg. Bokar planer och domare för hemmamatcher. Samt planer för våra träningar.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-start bg-accent/30 p-3 rounded-lg">
                      <div>
                        <div className="font-medium text-xs text-accent-foreground">Ordförande</div>
                        <div className="text-xs text-muted-foreground">Kils Ensembleförening</div>
                      </div>
                      <div className="text-xs text-primary font-medium">pågående</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card-gradient p-6 rounded-2xl shadow-soft border border-border/50">
              <h3 className="text-xl font-bold text-card-foreground mb-6">Kompetenser</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">Hårda färdigheter</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.hard.map((skill, i) => (
                      <SkillBadge key={i} skill={skill} type="hard" />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">Mjuka färdigheter</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, i) => (
                      <SkillBadge key={i} skill={skill} type="soft" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-accent-gradient p-6 rounded-2xl shadow-soft border border-border/50">
              <h3 className="text-xl font-bold text-accent-foreground mb-4">Intressen & Fun Facts</h3>
              <div className="space-y-2">
                {funFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div id="kontakt" className="bg-hero-gradient p-6 rounded-2xl shadow-elegant text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Kontakt
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/80" />
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-sm text-white/90 hover:text-white transition-smooth underline decoration-white/30 hover:decoration-white"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/80" />
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-sm text-white/90 hover:text-white transition-smooth"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/90">Värmland, Sverige</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs text-white/70 mb-3">Följ mig på sociala medier:</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" }
                  ].map(({ icon: Icon, href, label }) => (
                    <a 
                      key={label}
                      href={href} 
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth group"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-smooth" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </main>

        <footer className="max-w-6xl mx-auto mt-12 text-center">
          <div className="py-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name} — Portfolio byggt med passion för design och utveckling
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
