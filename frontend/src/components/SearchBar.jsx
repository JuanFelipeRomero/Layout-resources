export function SearchBar() {
   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="w-2/5 phone:w-3/4 phone:mt-6 phoneLand:w-3/5 sm:w-2/4 md:w-2/5 md:mt-0 lg:w-2/5 xl:w-4/12"
      >
         <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-10 xl:h-12 border-[#ADADAD] border-[1px] border-solid rounded-full bg-[#0F4167] bg-opacity-[17%] px-6 text-lg"
         />
      </form>
   );
}
