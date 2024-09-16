import './sideBar.css';
import { CategoriesContext } from '../../contexts/Categories';
import { useContext } from 'react';
import { useState } from 'react';

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setCategory } = useContext(CategoriesContext);

  const toggleMenu = () => {
    //Funcion para alternar el estado del menu
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    setCategory(event.target.value); //Category guarda el valor del button
  };

  return (
    <nav className="lg:w-1/5 lg:ml-[4%]">
      <ul className="phone:flex gap-4 lg:grid">
        <li>
          <button className="categoryTitle" value={'all'} onClick={handleClick}>
            Principal
          </button>
        </li>
        <li>
          <button onClick={toggleMenu} className="categoryTitle">
            Categorias
          </button>

          {/* Usamos el estado para controlar si el menú está visible */}
          {isOpen && (
            <ul className="pl-4 phone:block lg:block">
              <li className="subCategory">
                <button value={'colores'} onClick={handleClick}>
                  Colores
                </button>
              </li>
              <li className="subCategory">
                <button value={'gradientes'} onClick={handleClick}>
                  Gradientes
                </button>
              </li>
              <li className="subCategory">
                <button value={'imagenes'} onClick={handleClick}>
                  Imagenes
                </button>
              </li>
              <li className="subCategory">
                <button value={'iconos'} onClick={handleClick}>
                  Iconos
                </button>
              </li>
              <li className="subCategory">
                <button value={'plantillas'} onClick={handleClick}>
                  Plantillas
                </button>
              </li>
              <li className="subCategory">
                <button value={'fuentes'} onClick={handleClick}>
                  Fuentes
                </button>
              </li>
              <li className="subCategory">
                <button value={'otros'} onClick={handleClick}>
                  Otros
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
