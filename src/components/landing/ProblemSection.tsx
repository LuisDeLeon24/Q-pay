import './ProblemSection.css'

const BLOCKS = [
  {
    source: 'Banco Mundial, Global Findex 2025.',
    stats: [
      { value: '41.3%', label: 'de adultos en Guatemala pidió prestado en el último año.' },
      { value: '8.7%', label: 'lo hizo en una institución formal.' },
      { value: '15.3%', label: 'se prestó de familiares o amigos. Son unos 1.93 millones de adultos.' },
      { value: '38.3%', label: 'tiene cuenta.' },
    ],
  },
  {
    source: 'Según la ENCOVI del INE (2014).',
    stats: [
      { value: '83%', label: 'de los préstamos entre amigos y parientes no tiene ningún documento.' },
      { value: '53%', label: 'se paga en cuotas.' },
    ],
  },
  {
    source:
      'Estimación a partir de Global Findex 2025 y un préstamo típico de US$389 (INE, ENCOVI, ajustado).',
    estimate: true,
    stats: [
      { value: '≈US$750 M', label: 'al año, prestados entre conocidos en Guatemala.' },
      { value: '≈US$34,000 M', label: 'al año, en América Latina y el Caribe.' },
    ],
  },
  {
    source: 'INE, ENIFH 2025.',
    stats: [
      {
        value: '≈500 mil',
        label: 'guatemaltecos usan banca digital y se prestan entre conocidos.',
      },
    ],
  },
] as const

export default function ProblemSection() {
  return (
    <section id="problema" className="problem-section">
      <div className="problem-header animate-fade-up">
        <h2>Prestar entre conocidos ya es lo normal</h2>
        <p>Casi nunca queda por escrito. Estas son las cifras, con su fuente.</p>
      </div>

      <div className="problem-blocks">
        {BLOCKS.map((block) => (
          <article key={block.source} className="problem-block">
            {'estimate' in block && block.estimate ? (
              <p className="problem-estimate">Estimación</p>
            ) : null}
            <ul className="problem-stats">
              {block.stats.map((stat) => (
                <li key={stat.value}>
                  <span className="problem-stat-value">{stat.value}</span>
                  <span className="problem-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
            <p className="problem-source">{block.source}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
