export function ContentHeader() {
   return (
      <section className="flex justify-between mb-8">
         <h2 className="text-4xl font-medium">Nombre categoria</h2>
         <select
            name="mainFilter"
            id="mainFiler"
            className="w-32 py-1  text-center bg-[#293239] border-[1px] rounded-[10px] mr-[8%]"
         >
            <option value="all">Filtrar</option>
            <option value="alphabetic">A - Z</option>
            <option value="likes">Likes</option>
         </select>
      </section>
   );
}
