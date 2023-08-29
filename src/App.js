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
          <a href='https://www.barnhartsbarbershop.com/' className='image-gray'><img src={"https://i.imgur.com/nJXwjip.png"} alt='logo of Barnharts Barbershop' /></a>
          <a href='https://danssilverleaf.com/' ><img src={"https://i.imgur.com/jHoY46F.png"} alt='logo of Dans Silverleaf' /></a>
          <a href='https://oakstreetdrafthouse.com/' className='image-reverse'><img src={"https://i.imgur.com/L1Jf7L6.png"} alt='logo of Oak Street Drafthouse' /></a>
          <a href='https://www.eastsidedtx.com/' className='image-reverse'><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></a>
          <a href='https://www.missangelinesdenton.com/' className='image-reverse'><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></a>
          <a href='https://www.tenonecheese.com/' className='image-reverse-gray-bright'><img src={"https://static.wixstatic.com/media/8b7170_ee1b95bd9d0047f09d70ec2a56418d82~mv2_d_1962_2025_s_2.png/v1/crop/x_311,y_347,w_1341,h_1328/fill/w_382,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/10-1_NW_2.png"} alt='logo of Ten One Cheese' /></a>
      </div>
      <div className="message">A big thanks to our sponsors!</div>
      <div className="container">
        <div className="card">
          <div className="card-title">TICKET INFORMATION</div>
          <div className="image-container">
            <img src={"https://i.imgur.com/D6CHEJA.jpg"} alt='image Sarah Jaffe' />
            <img src={"https://i.imgur.com/EZoo0aT.jpg"} alt='image from previous years' />
            <img src={"https://i.imgur.com/Q8uthsf.jpg"} alt='image from previous years' />
            <img src={"https://i.imgur.com/TJdMwyk.jpg"} alt='image from previous years' />
            <img src={"https://i.imgur.com/IlNZI2G.jpg"} className="image-gray" alt='image from previous years' />
            <img src={"https://i.imgur.com/Qe8zKEb.jpg"} alt='image from previous years' />
            <img src={"https://i.imgur.com/D6CHEJA.jpg"} alt='image Sarah Jaffe' />
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
          <div className="card-title">LINEUP & SCHEDULE</div>
          <div className="schedule-image">
            <img src={"https://i.imgur.com/xernEA1.png"} alt='image of the Flyer' />
          </div>
          <div className="schedule">
            <div className="card-details">4:00pm -- Doors Open</div>
            <div className="card-details">4:30pm -- Sidewalk Chalk Art Expo + DJ Justrill</div>
            <div className="card-details">6:00pm --&nbsp;
            <a href='https://bluberrytuesday.bandcamp.com/' target="_blank">Blüberry Tüesday</a></div>
            <div className="card-details">7:00pm -- Gary: Dog Mayor Re-Election Kickoff</div>
            <div className="card-details">7:15pm --&nbsp;
            <a href='https://linktr.ee/smotheredband' target="_blank">Smothered</a></div>
            <div className="card-details">8:15pm -- Do You Know Your Cheese with Secret Chef Lanky</div>
            <div className="card-details">8:45pm -- The Ghost of Festivals Past - T-Shirt Cannon</div>
            <div className="card-details">9:00pm --&nbsp;
            <a href='https://doforitrecords.com/shaolin-death-squad/' target="_blank">Shaolin Death Squad</a></div>
            <div className="card-details">10:15pm -- $666 Costume Contest with Taffeta Darling</div>
            <div className="card-details">11:30pm -- The Ghost of Festivals Past - T-Shirt Cannon</div>
            <div className="card-details">11:45pm --&nbsp;
            <a href='https://sarahjaffe.com/' target="_blank">Sarah Jaffe</a></div>
            <div className="card-details">1:30am -- End of Show</div>
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
