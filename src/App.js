import './App.css';

function App() {
  return (
    <>
      <header>
        <p>DENTONPALOOZA 3</p>
        <h2>SATURDAY / OCTOBER 28, 2023</h2>
        <hr />
        <h3>RUBBER GLOVES REAHEARSAL STUDIOS</h3>
      </header>
      <div className="image-grid">
          <a href='http://recycledbooks.com/' className='image-reverse-gray'><img src={"https://i.imgur.com/6F5XWoE.png"} alt='logo of Recycled Books' /></a>
          <a href='https://www.morefuncomicsandgames.com/' className='image-reverse'><img src={"https://i.imgur.com/k8Vheyt.png"} alt='logo of More Fun Comics and Games' /></a>
          <a href='https://orbitpressusa.com/' ><img src={"https://i.imgur.com/FzRrdWC.png"} alt='logo of Orbit' /></a>
          <a href='https://www.littleguys.com/' className='image-reverse-gray'><img src={"https://i.imgur.com/24seD6Q.png"} alt='logo of Little Guys Movers' /></a>
          <a href='https://danssilverleaf.com/' ><img src={"https://i.imgur.com/jHoY46F.png"} alt='logo of Dans Silverleaf' /></a>
          <a href='https://oakstreetdrafthouse.com/' className='image-reverse'><img src={"https://i.imgur.com/L1Jf7L6.png"} alt='logo of Oak Street Drafthouse' /></a>
          <a href='https://www.eastsidedtx.com/' className='image-reverse'><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></a>
          <a href='https://www.missangelinesdenton.com/' className='image-reverse'><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></a>
          <div className="message-mobile">A big thanks to our sponsors!</div>
      </div>
      <div className="message-desktop">A big thanks to our sponsors!</div>
      <div className="container">
        <div className="card">
          <div className="card-title">TICKET INFORMATION</div>
          <div className="card-image">
            <img src={"https://i.imgur.com/HBadz63.jpg"} alt='image of a previous Dentonpalooza' />
          </div>
          <div className="card-details">Each ticket is priced at $20.</div>
          <div className="card-details">Funds raised will benefit both&nbsp; 
            <a href="https://leukemiatexas.org/" target="_blank">Leukemia Texas</a> and the&nbsp; 
            <a href="https://dmacdenton.org/" target="_blank">DMAC</a>.
          </div>
          <a href='https://www.prekindle.com/event/33981-dentonpalooza-3-denton' target="_blank">
            <button className="button">BUY NOW</button>
          </a>
        </div>
        <div className="card">
          <div className="card-title">LINEUP / SCHEDULE</div>
          <div className="card-image">
            <img src={"https://i.imgur.com/xernEA1.png"} alt='image of the Flyer' />
          </div>
          <div className="card-details">A complete timetable will be available closer to the week of the event.</div>
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
