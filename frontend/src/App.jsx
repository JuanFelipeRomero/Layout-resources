import { ContentHeader } from './components/ContentHeader';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { ContentGrid } from './components/ContentGrid';
import { FiltersContextProvider } from '../contexts/Filters';
import { ContextProvider } from '../contexts/Categories';

function App() {
  return (
    <>
      <Header />
      <main className="flex phone:flex-col phone:items-center phone:mt-6 lg:flex-row lg:mt-20 lg:items-start">
        <ContextProvider>
          <SideBar />
          <section className="w-4/5">
            <FiltersContextProvider>
              <ContentHeader />
              <ContentGrid />
            </FiltersContextProvider>
          </section>
        </ContextProvider>
      </main>
    </>
  );
}

export default App;
