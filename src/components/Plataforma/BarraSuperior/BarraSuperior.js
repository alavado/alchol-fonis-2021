import { Icon } from '@iconify/react'
import menuIcon from '@iconify-icons/mdi/menu'
import './BarraSuperior.css'
import { muestraMenu } from '../../../redux/ducks/menu'
import { useDispatch, useSelector } from 'react-redux'
import logoUC from '../../../assets/images/logo_uc_color.svg'

const BarraSuperior = () => {

  const dispatch = useDispatch()
  const { visible } = useSelector(state => state.menu)

  return (
    <div className="BarraSuperior">
      <div className="BarraSuperior__izquierda">
        <button
          className="BarraSuperior__boton_menu"
          onClick={() => dispatch(muestraMenu(!visible))}
        >
          <Icon
            className="BarraSuperior__icono_menu"
            icon={menuIcon}
          />
        </button>
        <h1 className="BarraSuperior__titulo">
          <img src={logoUC} alt="Logo Pontificia Universidad Católica de Chile" />
          FONIS 2021
        </h1>
      </div>
      {/* <Link className="BarraSuperior__link" to="/acerca">
        <InlineIcon icon={iconoAcercaDe} />
      </Link> */}
    </div>
  )
}

export default BarraSuperior
