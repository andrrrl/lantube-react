
function PlayerStats(props: any) {
    function isPlaying(){
        return props.stats.status === 'playing' || props.stats.status === 'paused'  ? 'Now playing' : 'Last played';
    }
  
    return (
    <ul className="text-light">
        <li>Status: {props.stats.status}</li>
        <li>Player: {props.stats.player}</li>
        <li>{isPlaying()}: {props.stats.videoInfo.title}</li>
    </ul>
  );
}

export default PlayerStats;