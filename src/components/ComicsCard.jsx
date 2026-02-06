function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <img src={comic.thumb} alt={comic.series} />
      <h4>{comic.series}</h4>
    </div>
  );
}

export default ComicCard;