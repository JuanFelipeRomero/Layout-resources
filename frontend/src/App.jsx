import { ContentHeader } from './components/ContentHeader';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';

function App() {
   return (
      <>
         <Header />
         <main className="grid grid-cols-subgrid">
            <SideBar />
            <section>
               <ContentHeader />
            </section>
         </main>
      </>
   );
}

export default App;
