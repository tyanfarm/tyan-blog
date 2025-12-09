const CreativeIdeasSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" {...props}>
    <circle cx="100" cy="60" r="35" fill="#FFD93D" opacity="0.2"/>
    <path d="M100 30 L90 60 L70 65 L100 75 L130 65 L110 60 Z" fill="#FFD93D"/>
    <rect x="95" y="75" width="10" height="25" fill="#6C63FF" rx="2"/>
    <path d="M85 100 L95 110 L85 120 L75 110 Z" fill="#6C63FF" opacity="0.6"/>
    <path d="M115 100 L105 110 L115 120 L125 110 Z" fill="#6C63FF" opacity="0.6"/>
    <circle cx="60" cy="40" r="8" fill="#FF6B9D" opacity="0.4"/>
    <circle cx="140" cy="35" r="6" fill="#4ECDC4" opacity="0.4"/>
    <circle cx="130" cy="90" r="5" fill="#FFD93D" opacity="0.5"/>
    <path d="M40 130 Q100 110 160 130" stroke="#6C63FF" strokeWidth="3" fill="none" opacity="0.3"/>
  </svg>
);

const LearningRocketSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" {...props}>
    <ellipse cx="100" cy="170" rx="60" ry="10" fill="#000" opacity="0.1"/>
    <path d="M100 40 L110 80 L130 90 L110 100 L100 140 L90 100 L70 90 L90 80 Z" fill="#FF6B9D"/>
    <circle cx="100" cy="70" r="15" fill="#fff" opacity="0.3"/>
    <rect x="95" y="140" width="10" height="30" fill="#6C63FF" rx="5"/>
    <path d="M80 140 Q70 160 75 170" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M120 140 Q130 160 125 170" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <path d="M100 170 Q95 180 100 185" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="50" cy="60" r="4" fill="#4ECDC4" opacity="0.6"/>
    <circle cx="150" cy="50" r="3" fill="#FFD93D" opacity="0.6"/>
    <circle cx="140" cy="80" r="5" fill="#FF6B9D" opacity="0.4"/>
    <circle cx="60" cy="90" r="3" fill="#6C63FF" opacity="0.5"/>
  </svg>
);

const CoffeeCodeSvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" {...props}>
    <rect x="50" y="70" width="60" height="70" rx="5" fill="#8B4513" opacity="0.2"/>
    <rect x="55" y="75" width="50" height="60" rx="3" fill="#D2691E"/>
    <ellipse cx="80" cy="78" rx="20" ry="8" fill="#fff" opacity="0.3"/>
    <path d="M110 95 Q130 95 130 110 Q130 125 110 125" stroke="#8B4513" strokeWidth="4" fill="none"/>
    <rect x="65" y="140" width="30" height="5" rx="2" fill="#8B4513"/>
    <path d="M130 100 L135 95 L140 100 L135 105 Z" fill="#6C63FF"/>
    <path d="M145 110 L150 105 L155 110 L150 115 Z" fill="#FF6B9D"/>
    <path d="M140 125 L145 120 L150 125 L145 130 Z" fill="#4ECDC4"/>
    <rect x="125" y="85" width="2" height="8" fill="#6C63FF" opacity="0.6"/>
    <rect x="160" y="100" width="2" height="10" fill="#FF6B9D" opacity="0.6"/>
    <text x="130" y="75" fontSize="14" fill="#6C63FF" opacity="0.5" fontFamily="monospace">{"{}"}</text>
  </svg>
);

const FeatureList = [
  {
    title: 'Creative Ideas',
    Svg: CreativeIdeasSvg,
    description: 'Exploring new concepts, sharing thoughts, and discovering interesting things along the way.',
  },
  {
    title: 'Always Learning',
    Svg: LearningRocketSvg,
    description: 'Documenting the journey of growth, experiments, and everything in between.',
  },
  {
    title: 'Coffee & Code',
    Svg: CoffeeCodeSvg,
    description: 'Building projects, writing code, and enjoying the process one cup at a time.',
  },
];

function Feature({title, Svg, description}) {
  return (
    <div style={{ flex: '1 1 300px', padding: '20px', textAlign: 'center' }}>
      <div>
        <Svg style={{ height: '200px', width: '200px' }} role="img" />
      </div>
      <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ display: 'flex', alignItems: 'center', padding: '2rem 0', width: '100%' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}