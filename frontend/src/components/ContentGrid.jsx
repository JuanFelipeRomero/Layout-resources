import { useState } from 'react';
import { ResourceCard } from './ResourceCard';
import { useEffect } from 'react';
import { Context } from '../../contexts/Categories';
import { FiltersContext } from '../../contexts/Filters';
import { useContext } from 'react';

export function ContentGrid() {
  const [resources, setResources] = useState([]);
  const { category } = useContext(Context);
  const { filter } = useContext(FiltersContext);

  console.log('Category: ' + category);
  console.log('filter: ' + filter);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(
          `http://localhost:1234/resources/?category=${category}`
        );
        const responseJson = await response.json();

        if (filter !== 'all') {
          if (filter === 'az') {
            const filteredResources = responseJson.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            setResources(filteredResources);
            return;
          } else {
            const filteredResources = responseJson.sort((a, b) =>
              b.name.localeCompare(a.name)
            );

            setResources(filteredResources);
            return;
          }
        }

        setResources(responseJson);
      } catch (err) {
        console.error('Error al hacer el fetch: ' + err);
      }
    };

    fetchResources();
  }, [category, filter]);

  return (
    <section className="grid lg:gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mr-[8%] phone:mr-0 sm:gap-14 phone:gap-8">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          imgUrl={resource.image}
          name={resource.name}
          description={resource.description}
          url={resource.url}
        />
      ))}
    </section>
  );
}
