import { useState } from 'react';
import { ResourceCard } from './ResourceCard';
import { useEffect } from 'react';
import { CategoriesContext } from '../../contexts/Categories';
import { FiltersContext } from '../../contexts/Filters';
import { SearchContext } from '../../contexts/Search';

import { useContext } from 'react';

export function ContentGrid() {
  const [resources, setResources] = useState([]);
  const { category } = useContext(CategoriesContext);
  const { filter } = useContext(FiltersContext);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(
          `http://localhost:1234/resources/?category=${category}`
        );
        const responseJson = await response.json();

        let filteredResources = responseJson;

        // Aplica el filtro de orden si no es 'all'
        if (filter !== 'all') {
          if (filter === 'az') {
            //filtro a-z
            filteredResources = filteredResources.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          } else {
            //filtro <-a
            filteredResources = filteredResources.sort((a, b) =>
              b.name.localeCompare(a.name)
            );
          }
        }

        // Filtra los recursos que contentan la query
        if (search.trim() !== '') {
          filteredResources = filteredResources.filter((resource) =>
            resource.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        setResources(filteredResources);
      } catch (err) {
        console.error('Error al hacer el fetch: ' + err);
      }
    };

    fetchResources();
  }, [category, filter, search]);

  return (
    <section className="grid lg:gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mr-[8%] phone:mr-0 sm:gap-14 phone:gap-8">
      {resources.length == 0
        ? 'No se encontraron recursos relacionaos'
        : resources.map((resource) => (
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
