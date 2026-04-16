import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const founders = [
  {
    name: 'Dr. Engr. Sandra Nnabuife',
    role: 'Chief Executive Officer',
    roleShort: 'CEO',
    image: 'https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/14be6f954_IMG_5553.jpg',
    bio: [
      'Sandra is a Medical Doctor and Engineer specializing in the systematic integration of healthcare processes, with nearly a decade of experience in software sales.',
      "She's passionate about fixing the gaps in healthcare access in Nigeria and is building Neurona to make care faster, simpler, and actually accessible, because it shouldn't be this hard.",
      "When she's not working on Neurona, she's probably on a plane somewhere, exploring a new country and convincing herself it counts as 'rest.'",
    ],
    linkedin: 'https://www.linkedin.com/in/sandra-nnabuife-0483031bb/',
    linkedinLabel: 'More about Sandra',
  },
  {
    name: 'Mayowa M. Morgan',
    role: 'Chief Operating Officer',
    roleShort: 'COO',
    image: 'https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/a4153c639_IMG_6093.png',
    bio: [
      'Mayowa has over a decade of experience building healthcare products and brings a deep, firsthand understanding of the realities of the Nigerian healthcare system.',
      'At Neurona, he focuses on product idea implementation, building efficient operations and strong provider relationships, making sure things actually work, not just look good on paper.',
      'Outside of Neurona, he\'s widely known as Mayorfit "the celebrity trainer," working with high-profile clients and proving that discipline applies both in fitness and in building systems that scale.',
    ],
    linkedin: 'https://www.linkedin.com/in/mayowa-morgan-19185111b/',
    linkedinLabel: 'More about Mayowa',
  },
  {
    name: 'Abdulbasit Aliyu',
    role: 'Chief Technology Officer',
    roleShort: 'CTO',
    image: 'https://media.base44.com/images/public/69b8c37c9acfcacacb58570b/e21462e8a_IMG_6095.png',
    bio: [
      'Abdulbasit is an AI Engineer with extensive experience across healthcare and education, having worked on projects in multiple countries.',
      "He's passionate about using technology to transform healthcare access, and is responsible for building the systems that power Neurona.",
      "When he's not doing that, he's likely at a hackathon somewhere in the world… and more often than not, winning it.",
    ],
    linkedin: 'https://www.linkedin.com/in/abdulbasitaliyu/',
    linkedinLabel: 'More about Basit',
  },
];

export default function Founders() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Founders</h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          The people behind Neurona, driven by purpose, built on experience.
        </p>
      </div>

      {/* Founders */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {founders.map((founder, idx) => (
          <div
            key={founder.name}
            className={`flex flex-col md:flex-row gap-10 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Photo */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] bg-secondary">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">

              <h2 className="text-3xl font-bold text-foreground mb-1">{founder.name}</h2>
              <p className="text-base font-semibold text-muted-foreground mb-6">{founder.role}</p>
              <div className="space-y-4">
                {founder.bio.map((para, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed">{para}</p>
                ))}
              </div>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <Button className="gap-2 rounded-xl">
                  <Linkedin className="w-4 h-4" />
                  {founder.linkedinLabel}
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}