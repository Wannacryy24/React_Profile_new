import "./DealCard.css";

export function DealCard({
  image,
  title,
  description,
  highlights = [],
  price,
  link,
}) {
  return (
    <div className="deal-card">
      <img src={image} alt={title} className="deal-image" />

      <div className="deal-content">
        <h3 className="deal-title">{title}</h3>

        <p className="deal-description">{description}</p>

        <ul className="deal-highlights">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="deal-footer">
          <span className="deal-price">{price}</span>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="deal-button"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}