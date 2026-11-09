import { useState } from 'react'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <main className="experience">
      <nav className="navbar">
        <a className="brand" href="#">
          VELOURA<span>.</span>
        </a>
        <span className="nav-label">DIGITAL EXPERIENCES</span>
        <span className="edition">NO. 001 — BIRTHDAY</span>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="gold-line" />
            A LITTLE SOMETHING FOR YOU
            <span className="gold-line" />
          </span>

          <h1>
            A day as
            <br />
            <em>special</em> as you.
          </h1>

          <p className="intro">
            Some moments deserve more than just a message.
            They deserve their own little world.
          </p>

          <div className={`envelope ${opened ? 'is-open' : ''}`}>
            <div className="envelope-back" />
            <div className="letter">
              <span className="letter-small">A MESSAGE FOR YOU</span>
              <span className="letter-heart">♡</span>
              <h2>Happy Birthday</h2>
              <p>You make the world a little more beautiful.</p>
              <span className="letter-sign">With love, always.</span>
            </div>
            <div className="envelope-front" />
            <div className="envelope-flap" />
            <div className="envelope-seal">V</div>
          </div>

          {!opened ? (
            <button
              className="open-button"
              onClick={() => setOpened(true)}
            >
              OPEN YOUR LETTER <span>↗</span>
            </button>
          ) : (
            <p className="opened-message">
              A beautiful day begins with you. ♡
            </p>
          )}

          <span className="personal-note">
            MADE WITH LOVE BY VELOURA STUDIO
          </span>
        </div>

        <div className="side-decoration decoration-left">EST. WITH LOVE</div>
        <div className="side-decoration decoration-right">A MOMENT TO REMEMBER</div>
      </section>

      <footer className="footer">
        <span>© 2026 VELOURA STUDIO</span>
        <span>CRAFTED TO MAKE MOMENTS LAST</span>
        <span>PROJECT 001</span>
      </footer>
    </main>
  )
}

export default App