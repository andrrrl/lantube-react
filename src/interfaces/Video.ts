export interface Video {
  videoId: string;
  order: number;
  videoInfo: {
    img: string;
    title: string;
    duration: string;
    url: string;
  };
}