export function SearchBar() {
   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <form onSubmit={handleSubmit} className="w-1/4 ">
         <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-[50px] border-[#ADADAD] border-[1px] border-solid rounded-full bg-[#0F4167] bg-opacity-[17%] px-6 text-lg"
         />
      </form>
   );
}
