interface Stats {
  player: string
  action: string
  status: string
  videoId: string
  videoInfo: {
    videoId: string
    title: string
    url: string
    img: string
  }
  audioOnly: boolean
  playlist: boolean
  volume: number
  lastUpdated: string
}
