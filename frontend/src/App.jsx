import { ContentHeader } from './components/ContentHeader';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { ContentGrid } from './components/ContentGrid';

function App() {
  return (
    <>
      <Header />
      <main className="flex phone:flex-col phone:items-center phone:mt-6 lg:flex-row lg:mt-20 lg:items-start">
        <SideBar />
        <section className="w-4/5">
          <ContentHeader />
          <ContentGrid />
        </section>
      </main>
    </>
  );
}

export default App;
