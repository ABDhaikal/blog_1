import BestPostCard from "./components/HomePageComponents/BestPost";
import CategoryOvrView from "./components/HomePageComponents/CategoryOvrView";
import HomePageHero from "./components/HomePageComponents/HomePageHero";

export default function Home() {
   return (
      <div className=" m-auto  min-h-screen flex flex-col">
         <main className="flex flex-col  justify-center items-center  ">
            <HomePageHero />
            <BestPostCard />
            <CategoryOvrView />
         </main>
         <footer></footer>
      </div>
   );
}
