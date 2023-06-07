import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import { headers } from "next/headers"


export default async function Home() {

  const lang = headers()
  .get("accept-language")
  ?.split("")[0]
  const query = lang ? `?lang=${lang}` : ""

  async function getMovies(type: string) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US${query}`
    );
    return res.json();
  }

  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <UpcomingMovies upcomingMovies={upcomingMovies} />
        <PopularMovies popularMovies={popularMovies} />
        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </div>
    </main>
  );
}


