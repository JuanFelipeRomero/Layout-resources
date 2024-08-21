import { useState } from 'react';
import { ResourceCard } from './ResourceCard';
import { useEffect } from 'react';
import { Context } from '../../contexts/Categories';
import { useContext } from 'react';

export function ContentGrid() {
  const [resources, setResources] = useState([]);
  const { category } = useContext(Context);

  console.log(category);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('http://localhost:1234/resources');
        const responseJson = await response.json();
        setResources(responseJson);
      } catch (err) {
        console.error('Error al hacer el fetch: ' + err);
      }
    };

    fetchResources();
  }, []);

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
