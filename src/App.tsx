import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  CircleCheck,
  HardHat,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Shovel,
  Weight,
  X,
} from 'lucide-react';
import { useState } from 'react';

const excavatorImage =
  'https://images.pexels.com/photos/14846286/pexels-photo-14846286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const services = [
  'Копання фундаментів',
  'Копання траншей',
  'Траншеї під воду, газ, електрику та каналізацію',
  'Копання септиків',
  'Дренажні роботи',
  'Планування території та ділянок',
  'Навантаження ґрунту та сипучих матеріалів',
  'Встановлення бетонних кілець',
  'Підготовка території під будівництво',
  'Інші земляні та будівельні роботи',
];

const advantages = [
  { icon: Shovel, title: 'Різні ковші', text: '30 / 40 / 60 / 120 см для точних робіт' },
  { icon: MapPin, title: 'Виїзд на обʼєкт', text: 'Працюємо у Львові та області' },
  { icon: HardHat, title: 'З оператором', text: 'Досвідчений фахівець на кожному виїзді' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="JCB 8030 на головну">
          <span className="brand-mark"><Shovel size={19} strokeWidth={2.6} /></span>
          <span><strong>JCB</strong><small>земляні роботи</small></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Про техніку</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Наші роботи</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакти</a>
        </nav>
        <a className="header-call" href="tel:+380975340026"><Phone size={17} /> +38 097 534 00 26</a>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Відкрити меню">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${excavatorImage})` }} />
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Львів та область</p>
              <h1>Міні-екскаватор<br /><em>JCB 8030</em></h1>
              <p className="hero-description">Компактна техніка для складних завдань. Копаємо точно, працюємо акуратно, приїжджаємо вчасно.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Замовити виїзд <ArrowRight size={18} /></a>
                <a className="button button-quiet" href="#about">Дізнатись більше <ArrowDown size={17} /></a>
              </div>
            </div>
            <div className="hero-facts" aria-label="Основні характеристики">
              <div><strong>3,2</strong><span>тонни<br />вага</span></div>
              <div><strong>3,5</strong><span>метра<br />глибина</span></div>
              <div><strong>4</strong><span>види<br />ковшів</span></div>
            </div>
          </div>
          <div className="scroll-hint"><span>Гортайте, щоб дізнатись більше</span><ArrowDown size={16} /></div>
        </section>

        <section className="intro-section page-width" id="about">
          <div className="section-kicker">01 / Про техніку</div>
          <div className="intro-grid">
            <div>
              <h2>Малий формат.<br /><span>Велика точність.</span></h2>
            </div>
            <div className="intro-text">
              <p className="lead">JCB 8030 — гусеничний міні-екскаватор, який легко працює там, де велика техніка не пройде.</p>
              <p>Виконуємо земляні та будівельні роботи з оператором. Беремося за приватні ділянки, будівельні майданчики та інженерні мережі.</p>
              <a className="text-link" href="#services">Переглянути всі роботи <ChevronRight size={17} /></a>
            </div>
          </div>
          <div className="spec-grid">
            <div className="spec-item"><Weight /><span>Вага</span><strong>3,2 т</strong></div>
            <div className="spec-item"><Ruler /><span>Глибина копання</span><strong>до 3,5 м</strong></div>
            <div className="spec-item"><Shovel /><span>Ширина ковшів</span><strong>30–120 см</strong></div>
            <div className="spec-item"><ShieldCheck /><span>Формат роботи</span><strong>З оператором</strong></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="page-width">
            <div className="section-heading">
              <div><div className="section-kicker">02 / Що виконуємо</div><h2>Готові до роботи</h2></div>
              <p>Від однієї траншеї до комплексної підготовки ділянки — підберемо техніку та підхід під ваше завдання.</p>
            </div>
            <div className="services-list">
              {services.map((service, index) => <div className="service-row" key={service}><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span>{service}</span><ArrowRight size={17} /></div>)}
            </div>
          </div>
        </section>

        <section className="advantages-section page-width">
          {advantages.map(({ icon: Icon, title, text }) => <div className="advantage" key={title}><div className="advantage-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </section>

        <section className="contact-section page-width" id="contact">
          <div className="contact-card">
            <div className="contact-copy"><div className="section-kicker">03 / Наступний крок</div><h2>Є робота?<br /><span>Ми приїдемо.</span></h2><p>Опишіть коротко, що потрібно зробити на ділянці. Узгодимо деталі та організуємо виїзд техніки.</p></div>
            <div className="contact-action"><div className="contact-badge"><CircleCheck size={18} /> Працюємо щодня</div><a className="button button-primary button-large" href="tel:+380975340026"><Phone size={18} /> +38 097 534 00 26</a><small>Львів та Львівська область</small></div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width"><a className="brand" href="#top"><span className="brand-mark"><Shovel size={17} /></span><span><strong>JCB</strong><small>земляні роботи</small></span></a><span>Міні-екскаватор JCB 8030 · Львів та область</span><span>© 2026</span></footer>
    </div>
  );
}

export default App;
