import './Piramide.css'

const Piramide = () => {
  return (
    <div className="Piramide">
      <p className="Piramide__indicador_paciente">
        Su resultado esta semana
      </p>
      <p className="Piramide__indicador_paciente Piramide__indicador_paciente--anterior">
        Su resultado anterior
      </p>
      <div className="Piramide__nivel_1">
        <p className="Piramide__etiqueta_nivel">Posible consumo problema o dependencia (2%)</p>
        <div className="Piramide__punta" />
      </div>
      <div className="Piramide__nivel_2">
        <p className="Piramide__etiqueta_nivel">Consumo de riesgo (11%)</p>
        <div className="Piramide__mitad" />
      </div>
      <div className="Piramide__nivel_3">
        <p className="Piramide__etiqueta_nivel">Consumo de bajo riesgo (87%)</p>
        <div className="Piramide__base" />
      </div>
    </div>
  )
}

export default Piramide
