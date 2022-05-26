import Video from '../Video/Video1';

export default function VideoList({ items }: { items: any[] }) {
  return (
    <>
      <h2>VideoList</h2>
      {items.map(
        (item: { snippet: { title: string; description: string }; id: { videoId: string } }) => (
          <Video key={item.id.videoId} item={item} />
        )
      )}
    </>
  );
}
