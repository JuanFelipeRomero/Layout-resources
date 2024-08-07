import './sideBar.css';

export function SideBar() {
   return (
      <nav className="lg:w-1/5 lg:ml-[4%]">
         <ul className="phone:flex gap-4 lg:grid">
            <li>
               <button href="" className="categoryTitle">
                  Principal
               </button>
            </li>
            <li>
               <button href="" className="categoryTitle">
                  Categorias
               </button>

               <ul className="pl-4 phone:hidden lg:block">
                  <li className="subCategory">
                     <button>Colores</button>
                  </li>
                  <li className="subCategory">
                     <button>Gradientes</button>
                  </li>
                  <li className="subCategory">
                     <button>Imagenes</button>
                  </li>
                  <li className="subCategory">
                     <button>Iconos</button>
                  </li>
                  <li className="subCategory">
                     <button>Plantillas</button>
                  </li>
                  <li className="subCategory">
                     <button>Fuentes</button>
                  </li>
                  <li className="subCategory">
                     <button>Otros</button>
                  </li>
               </ul>
            </li>
            <li>
               <button href="" className="categoryTitle">
                  Favoritos
               </button>
            </li>
         </ul>
      </nav>
   );
}
