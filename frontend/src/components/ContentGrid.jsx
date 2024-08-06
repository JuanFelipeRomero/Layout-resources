import { ResourceCard } from './ResourceCard';
export function ContentGrid() {
   //Los divs deben crearse con un map de la lista de recursos > a futuro...
   return (
      <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mr-[8%]">
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
      </section>
   );
}
