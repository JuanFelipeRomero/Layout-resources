import { FiltersContext } from '../../contexts/Filters';
import { CategoriesContext } from '../../contexts/Categories';
import { useContext } from 'react';

export function ContentHeader() {
  const { setFilter } = useContext(FiltersContext);
  const { category } = useContext(CategoriesContext);

  const handleSelect = (event) => {
    setFilter(event.target.value);
  };

  //console.log(filter);

  return (
    <section
      className="phone:mt-8 lg:mt-0 flex justify-between mb-8"
      onChange={handleSelect}
    >
      <h2 className="sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-medium">
        {category === 'all' ? 'Principal' : category}
      </h2>
      <select
        name="mainFilter"
        id="mainFiler"
        className="phone:w-24 md:w-32 py-1 text-center bg-[#293239] border-[1px] rounded-[10px] lg:mr-[8%]"
      >
        <option value="all">Ordernar</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>
    </section>
  );
}
