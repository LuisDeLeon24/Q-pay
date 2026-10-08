import SemifinalistCard from './SemifinalistCard'
import './TeamSection.css'

const PEOPLE = [
  {
    name: 'Luis Eduardo De León Barrientos',
    role: 'CEO',
    photo: '/assets/Luis De León.jpg',
    photoPosition: 'center 18%',
    bio: 'Estudiante de Ciencias de la Computación (USAC). Head of Builders en Open2. IA y ciberseguridad. Miembro IEEE.',
  },
  {
    name: 'Gabriel Enrique Hurtarte García',
    role: 'CTO',
    photo: '/assets/Gabriel Hurtarte.jpeg',
    photoPosition: 'center',
    bio: 'Ingeniero fullstack (Flutter, Node.js, Java/Quarkus), con más de 4 años de experiencia. Operations lead en Penka. Integración de pasarelas de pago.',
  },
] as const

export default function TeamSection() {
  return (
    <section id="equipo" className="team-section">
      <div className="team-header animate-fade-up">
        <h2>Quiénes construyen Q-Pay</h2>
      </div>

      <div className="team-grid">
        {PEOPLE.map((person) => (
          <article key={person.name} className="team-card">
            <img
              src={person.photo}
              alt=""
              className="team-photo"
              style={{ objectPosition: person.photoPosition }}
            />
            <h3>{person.name}</h3>
            <p className="team-role">{person.role}</p>
            <p className="team-bio">{person.bio}</p>
          </article>
        ))}
      </div>

      <SemifinalistCard />

      <p className="team-aside">
        Juntos obtuvieron el 1er lugar en la Computer Science Hackathon UFM × Banco Industrial.
      </p>
    </section>
  )
}
