import { useParams } from "react-router-dom";

export default function ChallengeIntro() {
  const challengesData = {
    anime: {
      title: "Anime Challenge",
      description:
        "Bring your favorite anime worlds to life. Upload fan art, dramatic scenes, cosplay, or stylized edits inspired by anime. Show your creativity and let your imagination lead.",
    },

    throwback: {
      title: "Throwback Challenge",
      description:
        "Take us back in time. Share nostalgic moments, vintage-style photos, or memories that capture the feeling of the past. Upload something that tells a story from another era.",
    },

    scenery: {
      title: "Scenery Challenge",
      description:
        "Capture the beauty around you. From sunsets and city skylines to mountains and quiet streets — upload your best scenery shots and let the view speak for itself.",
    },

    daily: {
      title: "Weekly Highlights Challenge",
      description:
        "This week’s open theme. Upload your strongest and most creative image to stand out. No limits — just quality, originality, and impact.",
    },
  };
  const { category } = useParams();

  const data = challengesData[category];

  if (!data) return null;

  return (
    <div className="challenge-background">
      <div className="challenge__title">Anime -</div>
      <div className="challenge__title-sub">Explore the intersection of reality and animation. Capture scenes with high-contrast cel-shaded lighting, vibrant pastel skies, or compositions that feel like a frame from a Studio Ghibli or Makoto Shinkai film.</div>
      div
      <button>Join the Challenge</button>
    </div>
  );
}
