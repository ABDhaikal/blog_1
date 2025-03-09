import BestCategory from "./components/HomePageComponents/BestCategory";
import BestPostCard from "./components/HomePageComponents/BestPost";
import HomePageHero from "./components/HomePageComponents/HomePageHero";

export default function Home() {
   return (
      <div className=" m-auto  min-h-screen flex flex-col">
         <main className="flex flex-col  justify-center items-center  ">
            <HomePageHero />
            <BestPostCard />
            <BestCategory />
         </main>
         <footer></footer>
      </div>
   );
}
