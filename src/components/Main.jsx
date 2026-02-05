import comics from "../assets/comics";

function Main() {
  return (
    <main>
      <section className="comics">
        <div className="container comics-grid">

          {comics.map((comic, index) => (
            <div key={index} className="comic-card">

              <img src={comic.thumb} alt={comic.series} />

              <h4>{comic.series}</h4>

            </div>
          ))}

        </div>
      </section>
    </main>
  );
}

export default Main;