type popularLoType = { location: popularLoParams[] };
type popularLoParams = { url: string; title: string };

type bestType = { best: bestParams[] };
type bestParams = { url: string; title: string };

type hotType = { hot: hotParams[] };
type hotParams = { url: string; title: string };

type activity = { activity: activityParams[] };
type activityParams = { url: string; title: string };

interface preDataType {
  id: number;
  popular_location: popularLoType;
  carousel: object[];
  popular_accommodation: bestType;
  hot_hotel: hotType;
  popular_activity: activity;
}

export type { preDataType };
