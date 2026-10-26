import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigation, Volume2, VolumeX } from 'lucide-react';
import './styles.css';
import { wedding } from './wedding';
import {
  RoyalCornerFlourish,
  RoyalMandala,
  RoyalLotus,
  RoyalFloralVine,
  RoyalButterfly,
  RoyalBlossomPetal,
  RoyalGoldenLeaf,
} from './WeddingIcons';

/* ─── Floating petals ─── */
function generatePetals(count = 24) {
  const types = ['daisy', 'rose', 'svg-blossom', 'svg-leaf'];
  return Array.from({ length: count }, (_, i) => {
    const type = types[i % types.length];
    return {
      id: i,
      type,
      left: `${Math.random() * 100}%`,
      duration: `${13 + Math.random() * 13}s`,
      delay: `${Math.random() * 10}s`,
      rotation: `${Math.random() * 360}deg`,
      size: 20 + Math.random() * 25,
    };
  });
}

const PETALS = generatePetals();

function FloatingPetals() {
  return (
    <div className="petals-layer" aria-hidden="true">
      {PETALS.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            transform: `rotate(${p.rotation})`,
          }}
        >
          {p.type === 'daisy' && (
            <img src="/image/imgi_1_petal-daisy (1).png" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size, objectFit: 'contain' }} />
          )}
          {p.type === 'rose' && (
            <img src="/image/imgi_2_petal-rose.png" alt="" width={p.size} height={p.size} style={{ width: p.size, height: p.size, objectFit: 'contain' }} />
          )}
          {p.type === 'svg-blossom' && (
            <RoyalBlossomPetal size={p.size} />
          )}
          {p.type === 'svg-leaf' && (
            <RoyalGoldenLeaf size={p.size} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Butterfly ─── */
function Butterfly() {
  return (
    <div className="butterfly-path">
      <span className="butterfly-wings">
        <RoyalButterfly size={36} />
      </span>
    </div>
  );
}

/* ─── Music toggle (fixed) ─── */
function MusicToggle({ playing, onToggle }) {
  return (
    <button className="music-toggle" onClick={onToggle} aria-label="Toggle music">
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}

/* ─── Ornament divider ─── */
function Divider({ className = '' }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <span className="ornament-line" />
      <span className="ornament-svg">
        <RoyalMandala size={className.includes('small') ? 16 : 22} />
      </span>
      <span className="ornament-line" />
    </div>
  );
}

/* ─── Scratch-to-reveal card ─── */
function ScratchCard() {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);

  const initCanvas = useCallback((canvas) => {
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.fillStyle = '#6e1f2c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '600 14px "Cinzel", serif';
    ctx.fillStyle = '#e8d1ba';
    ctx.textAlign = 'center';
    ctx.fillText('✦ SCRATCH TO REVEAL ✦', canvas.width / 2, canvas.height / 2 + 5);
    ctx.globalCompositeOperation = 'destination-out';
  }, []);

  const scratch = useCallback((e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    // Check reveal percentage
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imgData.data.length; i += 4) {
      if (imgData.data[i] === 0) cleared++;
    }
    if (cleared / (imgData.data.length / 4) > 0.45) {
      setRevealed(true);
    }
  }, []);

  return (
    <div className="scratch-card">
      <div className="scratch-content">
        <p className="scratch-tagline">Together, our story begins</p>
        <p className="scratch-names">{wedding.groom} & {wedding.bride}</p>
        <p className="scratch-date">{wedding.weddingDate}</p>
      </div>
      {!revealed && (
        <canvas
          ref={initCanvas}
          className="scratch-canvas"
          onMouseDown={() => { isDrawing.current = true; }}
          onMouseUp={() => { isDrawing.current = false; }}
          onMouseLeave={() => { isDrawing.current = false; }}
          onMouseMove={scratch}
          onTouchStart={() => { isDrawing.current = true; }}
          onTouchEnd={() => { isDrawing.current = false; }}
          onTouchMove={scratch}
        />
      )}
    </div>
  );
}

/* ─── Envelope landing ─── */
function EnvelopeLanding({ onOpen }) {
  return (
    <section className="landing">
      <span className="landing-ornament tl"><RoyalLotus size={46} /></span>
      <span className="landing-ornament bl"><RoyalFloralVine size={46} /></span>
      <button className="envelope-btn" onClick={onOpen} aria-label="Open invitation">
        <img
          src="/image/imgi_3_image (1).webp"
          alt="Wedding invitation envelope"
          className="envelope-img"
        />
        <span className="wax-seal-overlay">
          <span className="wax-seal-circle">
            {wedding.groom.charAt(0)}{wedding.bride.charAt(0)}
          </span>
        </span>
      </button>
      <div className="landing-text">
        <h2 className="landing-title">You're Invited</h2>
        <p className="landing-sub">Tap the envelope to open your invitation</p>
      </div>
    </section>
  );
}

/* ─── Hero section (names + parents) ─── */
function HeroSection() {
  return (
    <section className="hero-section">
      <img src="/image/imgi_3_image.webp" alt="" className="hero-bg-img" />
      <div className="hero-gradient" />
      <div className="hero-inner">
        <div className="hero-content animate-fade-up">
          <img src="/image/imgi_4_image.webp" alt="Lord Ganesha" className="ganesh-img" />
          <p className="ganesh-text">‖ Shree Ganeshaya Namah ‖</p>
          <p className="hero-invite-text animate-fade-up delay-200">
            We solicit your gracious presence on the auspicious occasion of<br />
            the wedding celebration of
          </p>

          <h1 className="groom-name animate-fade-up delay-300">{wedding.groom}</h1>
          <div className="parent-info">
            {wedding.groomParents.relation}<br />
            {wedding.groomParents.mother}<br />
            & {wedding.groomParents.father}
          </div>

          <p className="with-text">with</p>

          <h1 className="bride-name">{wedding.bride}</h1>
          <div className="parent-info pb-extra">
            {wedding.brideParents.relation}<br />
            {wedding.brideParents.mother}<br />
            & {wedding.brideParents.father}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Scratch reveal section ─── */
function ScratchSection() {
  return (
    <section className="scratch-section">
      <CornerOrnaments />
      <div className="scratch-wrapper">
        <Divider />
        <ScratchCard />
      </div>
    </section>
  );
}

/* ─── Corner Ornaments helper (Royal SVG) ─── */
function CornerOrnaments() {
  return (
    <>
      <RoyalCornerFlourish className="corner-ornament tl" />
      <RoyalCornerFlourish className="corner-ornament tr" />
      <RoyalCornerFlourish className="corner-ornament bl" />
      <RoyalCornerFlourish className="corner-ornament br" />
    </>
  );
}

/* ─── Events Schedule ─── */
function EventsSection() {
  return (
    <section className="events-section">
      <CornerOrnaments />
      <div className="events-inner">
        <div className="events-header">
          <h2 className="events-title">Events Schedule</h2>
          <Divider />
        </div>
        <div className="events-grid">
          {wedding.events.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.bgImage} alt="" className="event-bg" />
      <div className="event-overlay" />
      <div className="event-body">
        <div className="event-text-col">
          <h3 className="event-name">{event.title}</h3>
          <p className="event-desc">{event.description}</p>
          <Divider className="small" />
          <div className="event-details">
            <div>
              <div className="event-label">Date</div>
              <div className="event-value">{event.day} · {event.date}</div>
            </div>
            <div>
              <div className="event-label">Time</div>
              {event.time && <div className="event-value">{event.time}</div>}
              {event.times && event.times.map((t) => (
                <div key={t.label} className="event-value">{t.label} · {t.time}</div>
              ))}
            </div>
            <div>
              <div className="event-label">Venue</div>
              <div className="event-value venue-val">{event.venue}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Awaiting presence ─── */
function PresenceSection() {
  return (
    <section className="presence-section">
      <CornerOrnaments />
      <div className="presence-inner">
        <h2 className="presence-title">Awaiting Your Noble Presence</h2>
        <Divider />
        <p className="presence-text">Because meeting two souls requires twice the fun — and you!</p>
      </div>
    </section>
  );
}

/* ─── Family host section ─── */
function FamilySection() {
  return (
    <section className="family-section">
      <CornerOrnaments />
      <div className="family-inner">
        <p className="family-label">WITH LOVE</p>
        <h2 className="family-name">{wedding.hostFamily}</h2>
        <Divider />
        <p className="family-text">Eagerly waiting for your presence,</p>
      </div>
    </section>
  );
}

/* ─── Venue / Map ─── */
function VenueSection() {
  return (
    <section className="venue-section">
      <CornerOrnaments />
      <div className="venue-inner">
        <p className="venue-label">VENUE</p>
        <h2 className="venue-title">Where We Celebrate</h2>
        <Divider />
        {wedding.venues.map((v) => (
          <div key={v.name} className="venue-block">
            <p className="venue-name">{v.name}</p>
            <div className="map-container">
              <iframe
                title={`${v.name} map`}
                src={v.mapEmbed}
                className="map-iframe"
                loading="lazy"
              />
            </div>
            <a
              href={v.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="directions-btn"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-label">WITH LOVE</p>
      <h3 className="footer-names">
        {wedding.groom} <span className="amp">&</span> {wedding.bride}
      </h3>
      <div className="footer-divider">
        <span className="ornament-line short" />
        <span className="ornament-svg">
          <RoyalMandala size={20} />
        </span>
        <span className="ornament-line short" />
      </div>
      <p className="footer-date">{wedding.weddingDate}</p>
    </footer>
  );
}

/* ─── Main App ─── */
function App() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.title = `${wedding.groom} & ${wedding.bride} | Wedding Invitation`;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const openInvitation = () => {
    setOpened(true);
    setMusicOn(true);
    window.setTimeout(() => {
      document.getElementById('invitation-content')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="app-root">
      <FloatingPetals />
      <Butterfly />
      <audio ref={audioRef} src="/background (1).mp3" preload="auto" loop />

      {!opened && <EnvelopeLanding onOpen={openInvitation} />}

      {opened && (
        <>
          <MusicToggle playing={musicOn} onToggle={() => setMusicOn(!musicOn)} />
          <div id="invitation-content" className="invitation-wrap animate-fade-in">
            <HeroSection />
            <ScratchSection />
            <EventsSection />
            <PresenceSection />
            <FamilySection />
            <VenueSection />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
