const videos = [
  {
    src: "/videos/dji-0249.mp4",
    poster: "/videos/dji-0249-poster.jpg",
  },
  {
    src: "/videos/dji-0250.mp4",
    poster: "/videos/dji-0250-poster.jpg",
  },
] as const;

export function VideoShowcase() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto layout-max w-full">
        <div className="grid gap-5 sm:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-theme-card border border-border bg-surface"
            >
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
