import './App.css';

function App() {
  return (
    <>
      <header>
        <p>Dentonpalooza</p>
        <h2>SATURDAY / OCTOBER 28, 2023</h2>
        <hr />
        <h3>RUBBER GLOVES REAHEARSAL STUDIOS</h3>
      </header>
      <div className="image-grid">
          <a href='http://recycledbooks.com/'><img src={"./dentonpalooza23/recycled.png"} /></a>
          <a href='https://www.morefuncomicsandgames.com/'><img src={"./dentonpalooza23/morefun.png"} /></a>
          <a href='https://www.littleguys.com/'><img src={"./dentonpalooza23/littleguys.png"} /></a>
          <a href='https://orbitpressusa.com/'><img src={"./dentonpalooza23/orbit.png"} /></a>
          <a href='https://www.smilinrickstattoos.com/'><img src={"./dentonpalooza23/smilinricks.png"} /></a>
          <a href='https://danssilverleaf.com/'><img src={"./dentonpalooza23/dans.png"} /></a>
          <a href='https://oakstreetdrafthouse.com/'><img src={"./dentonpalooza23/oakst.png"} /></a>
          <a href='https://www.eastsidedtx.com/'><img src={"./dentonpalooza23/eastside.jpg"} /></a>
          <a href='https://www.missangelinesdenton.com/'><img src={"./dentonpalooza23/angelines.png"} /></a>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-title">TICKET INFORMATION</div>
          <div className="card-image">
            <img src={"/dentonpaloozastage.jpg"} />
          </div>
          <div className="card-details">Tickets go on sale to the general public on September 1, 2023.</div>
          <div className="card-details">Each ticket is priced at $20.</div>
          <a href='https://www.prekindle.com/event/33981-dentonpalooza-3-denton' target="_blank">
            <button className="button">BUY NOW</button>
          </a>
        </div>
        <div className="card">
          <div className="card-title">PERFORMERS / ATTRACTIONS</div>
          <div className="card-image">
            <img src={"/dentonpaloozaflyer.jpg"} />
          </div>
        </div>
      </div>
      <div className="footer">
      <div className="footer-detail">Follow us on Instragram&nbsp;
          <a href='https://www.instagram.com/dentonpalooza/' target="_blank">@dentonpalooza</a>
        </div>
        <div className="footer-detail">Website design by&nbsp;
          <a href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
        </div>
      </div>
    </>
  );
}

export default App;
