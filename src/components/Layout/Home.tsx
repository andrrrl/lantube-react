const tocadiscos = require("../../assets/img/lantube-tocadiscos.png");

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col d-flex">
          <div className="text-light">
            Lantube is an in-site collaborative player.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex">
          <img src={tocadiscos} alt="Tocadiscos Lantube" />
        </div>
      </div>
    </div>
  );
}

export default Home;
