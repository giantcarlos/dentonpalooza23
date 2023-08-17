import './App.css';

function App() {
  return (
    <div>
      <header>
        <p>Dentonpalooza</p>
        <h2>SATURDAY / NOVEMBER 4, 2023</h2>
        <hr />
        <h3>RUBBER GLOVES REAHEARSAL STUDIOS</h3>
      </header>
      <body>
        <div class="image-grid">
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
      </body>
    </div>
  );
}

export default App;
