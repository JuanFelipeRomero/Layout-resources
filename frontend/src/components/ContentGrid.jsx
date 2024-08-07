import { ResourceCard } from './ResourceCard';
export function ContentGrid() {
   //Los divs deben crearse con un map de la lista de recursos > a futuro...
   return (
      <section className="grid lg:gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mr-[8%] phone:mr-0 sm:gap-14 phone:gap-8">
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
         <ResourceCard />
      </section>
   );
}
