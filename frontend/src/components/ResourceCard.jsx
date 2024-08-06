import { StarIcon } from './Icons';

export function ResourceCard() {
   return (
      <div className="bg-cardbg border-[1px] border-solid border-textGray rounded-[26px]">
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQek2gtZixhOvan8LIR3rUMXzWy6v3jE3toDQ&s"
            alt=""
            className="w-full rounded-t-[24px]"
         />
         <section className="p-5">
            <div className="flex items-center gap-4">
               <strong className="font-questrial text-lg">
                  Nombre recurso
               </strong>
               <button>
                  <StarIcon />
               </button>
            </div>
            <p className="font-questrial text-textGray">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
               facilisis enim ante.
            </p>
         </section>
      </div>
   );
}
