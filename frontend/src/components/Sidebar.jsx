export function SideBar() {
   return (
      <nav className="w-1/5 ml-[4%]">
         <ul className="grid gap-4">
            <li>
               <button href="" className="categoryTitle">
                  Principal
               </button>
            </li>
            <li>
               <button href="" className="categoryTitle">
                  Categorias
               </button>
               <ul className="pl-4">
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
