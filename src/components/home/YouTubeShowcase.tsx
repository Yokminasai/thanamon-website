import { SOCIAL, YOUTUBE_EMBEDS } from "@/lib/constants";
import { Section } from "../Section";

export function YouTubeShowcase() {
  return (
    <Section
      id="youtube"
      title="YouTube — ธนมน โสภณธนวัฒน์"
      subtitle="วิดีโอความคิด เทคโนโลยี และสังคมจากช่องอย่างเป็นทางการ"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {YOUTUBE_EMBEDS.map((video) => (
          <div key={video.id} className="overflow-hidden rounded-2xl border border-white/10">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white">{video.title}</h3>
              <p className="mt-1 text-sm text-silver">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={SOCIAL.youtube}
        target="_blank"
        rel="me noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-accent hover:underline"
      >
        ติดตามช่อง YouTube อย่างเป็นทางการ →
      </a>
    </Section>
  );
}
