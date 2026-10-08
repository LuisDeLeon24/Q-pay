import './SemifinalistCard.css'

export default function SemifinalistCard() {
  return (
    <article className="semifinalist">
      <div className="semifinalist-badge" aria-hidden="true">
        <span className="semifinalist-year">2026</span>
      </div>
      <div className="semifinalist-copy">
        <p className="semifinalist-kicker">Semifinalistas</p>
        <h3>INNOVATECH</h3>
        <p>
          Hackathon de innovación financiera organizado por la Asociación Bancaria de Guatemala y la
          Escuela Bancaria de Guatemala, en el marco de CORETIC 2026. Como semifinalistas, estuvimos
          entre los 5 mejores proyectos.
        </p>
      </div>
    </article>
  )
}
