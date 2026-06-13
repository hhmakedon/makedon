type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  // Duplicate the list so the loop is seamless when the track animates -50%.
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
