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
          <a href='http://recycledbooks.com/'><img src={"/recycled.png"} /></a>
          <a href='https://www.morefuncomicsandgames.com/'><img src={"/morefun.png"} /></a>
          <a href='https://www.littleguys.com/'><img src={"/littleguys.png"} /></a>
          <a href='https://orbitpressusa.com/'><img src={"/orbit.png"} /></a>
          <a href='https://www.smilinrickstattoos.com/'><img src={"/smilinricks.png"} /></a>
          <a href='https://danssilverleaf.com/'><img src={"/dans.png"} /></a>
          <a href='https://oakstreetdrafthouse.com/'><img src={"/oakst.png"} /></a>
          <a href='https://www.eastsidedtx.com/'><img src={"/eastside.jpg"} /></a>
          <a href='https://www.missangelinesdenton.com/'><img src={"/angelines.png"} /></a>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-title">Ticket Information</div>
          <div className="card-image">
            <img src={"/dentonpaloozastage.jpg"} />
          </div>
          <div className="card-details">Tickets go on sale to the general public on September 1, 2023.</div>
          <div className="card-details">Tickets are priced at $20 each.</div>
          <a href='https://www.prekindle.com/event/33981-dentonpalooza-3-denton' target="_blank">
            <button className="button">BUY NOW</button>
          </a>
        </div>
        <div className="card">
          <div className="card-title">Performers / Attractions</div>
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
