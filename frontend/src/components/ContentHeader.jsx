export function ContentHeader() {
   return (
      <section className="phone:mt-8 lg:mt-0 flex justify-between mb-8">
         <h2 className="sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-medium">
            Nombre categoria
         </h2>
         <select
            name="mainFilter"
            id="mainFiler"
            className="phone:w-24 md:w-32 py-1 text-center bg-[#293239] border-[1px] rounded-[10px] lg:mr-[8%]"
         >
            <option value="all">Filtrar</option>
            <option value="alphabetic">A - Z</option>
            <option value="likes">Likes</option>
         </select>
      </section>
   );
}
