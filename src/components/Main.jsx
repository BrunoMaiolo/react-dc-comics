
import ComicCard from "./ComicsCard";
import comics from "../assets/comics";

function Main() {
  return (
    <main>
      <div className="jumbotron"></div>
      <section className="comics">
        <div className="container comics-grid">

          {comics.map((comic, index) => (
            <ComicCard key={index} comic={comic} />
          ))}

        </div>
      </section>
    </main>
  );
}

export default Main;