export default function Video({
  item,
}: {
  item: { snippet: { title: string; description: string }, id: { videoId: string} };
}) {
  return (
    <div>
      <h3>{item.snippet.title}</h3>
      <p>{item.snippet.description}</p>
    </div>
  );
}
