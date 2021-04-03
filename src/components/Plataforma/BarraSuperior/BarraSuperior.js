import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/mdi/menu'
import './BarraSuperior.css'
import { Link } from 'react-router-dom'

const BarraSuperior = () => {
  return (
    <div className="BarraSuperior">
      <Icon
        className="BarraSuperior__icono_menu"
        icon={menuIcon}
      />
      <h1 className="BarraSuperior__titulo">Demo FONIS 2021</h1>
      <Link to="/acerca">Acerca de</Link>
    </div>
  )
}

export default BarraSuperior
