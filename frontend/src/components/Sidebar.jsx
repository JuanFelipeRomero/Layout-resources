export function SideBar() {
   return (
      <nav className="w-1/5">
         <ul className="grid gap-4">
            <li>
               <a href="" className="categoryTitle">
                  Principal
               </a>
            </li>
            <li>
               <a href="" className="categoryTitle">
                  Categorias
               </a>
               <ul className="pl-4">
                  <li className="subCategory">
                     <a href="">Colores</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Gradientes</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Imagenes</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Iconos</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Plantillas</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Fuentes</a>
                  </li>
                  <li className="subCategory">
                     <a href="">Otros</a>
                  </li>
               </ul>
            </li>
            <li>
               <a href="" className="categoryTitle">
                  Favoritos
               </a>
            </li>
         </ul>
      </nav>
   );
}
