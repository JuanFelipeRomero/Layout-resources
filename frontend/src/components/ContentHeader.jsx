export function ContentHeader() {
   return (
      <section className="flex justify-around">
         <h2 className="text-4xl">Nombre categoria</h2>
         <select
            name="mainFilter"
            id="mainFiler"
            className="w-28 py-1  text-center bg-[#293239] border-[1px] rounded-[10px]"
         >
            <option value="all">Filtrar</option>
            <option className="" value="alphabetic">
               A - Z
            </option>
            <option className="" value="likes">
               Likes
            </option>
         </select>
      </section>
   );
}
