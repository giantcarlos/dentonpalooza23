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
          <a href='http://recycledbooks.com/' className='image-reverse-gray'><img src={"https://i.imgur.com/6F5XWoE.png"} /></a>
          <a href='https://www.morefuncomicsandgames.com/' className='image-reverse'><img src={"https://i.imgur.com/k8Vheyt.png"} /></a>
          <a href='https://orbitpressusa.com/'><img src={"https://i.imgur.com/FzRrdWC.png"} /></a>
          <a href='https://www.littleguys.com/' className='image-reverse-gray'><img src={"https://i.imgur.com/24seD6Q.png"} /></a>
          <a href='https://www.smilinrickstattoos.com/' className="image-rick"><img src={"https://static.wixstatic.com/media/7bb04e_5bff94f3a5ff437a934f80f543555e5f~mv2_d_1842_1200_s_2.png/v1/fill/w_460,h_298,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/smilinrickssign.png"} /></a>
          <a href='https://danssilverleaf.com/'><img src={"https://i.imgur.com/jHoY46F.png"} /></a>
          <a href='https://oakstreetdrafthouse.com/' className='image-reverse'><img src={"https://i.imgur.com/L1Jf7L6.png"} /></a>
          <a href='https://www.eastsidedtx.com/' className='image-reverse'><img src={"https://i.imgur.com/CWrmgQg.jpg"} /></a>
          <a href='https://www.missangelinesdenton.com/' className='image-reverse'><img src={"https://i.imgur.com/GBB5S1l.png"} /></a>
          <div className="message-desktop">A big thanks to our sponsors!</div>
      </div>
      <div className="message-mobile">A big thanks to our sponsors!</div>
      <div className="container">
        <div className="card">
          <div className="card-title">TICKET INFORMATION</div>
          <div className="card-image">
            <img src={"https://i.imgur.com/HBadz63.jpg"} />
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
            <img src={"https://i.imgur.com/xernEA1.png"} />
          </div>
          <div className="card-details">The complete timetable will be on available the week of the event.</div>
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
