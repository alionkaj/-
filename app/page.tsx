"use client";

import { useMemo, useState } from "react";
import { content, links } from "./site-content";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [eventType, setEventType] = useState("Свадьба");
  const [guests, setGuests] = useState("50–80");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const base: Record<string, number> = {
      Свадьба: 65000,
      Корпоратив: 75000,
      Юбилей: 55000,
      Выпускной: 70000,
    };
    const guestFactor: Record<string, number> = {
      "до 30": 0,
      "30–50": 5000,
      "50–80": 10000,
      "80–120": 18000,
      "120+": 30000,
    };
    return (base[eventType] + guestFactor[guests]).toLocaleString("ru-RU");
  }, [eventType, guests]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="На главную">
          <span>ДТ</span>
          <strong>Дмитрий Тихомиров</strong>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Основная навигация">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Проверить дату</a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Ведущий событий · Кострома и вся Россия</p>
          <h1>Праздник, который<br />звучит <em>как вы.</em></h1>
          <p className="hero-copy">Без неловких конкурсов и чужих сценариев. Живая атмосфера, точный юмор и внимание к людям — чтобы вы прожили свой вечер, а не контролировали его.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Узнать свободную дату <Arrow /></a>
            <a className="btn btn-ghost" href="#showreel">Смотреть шоурил <span aria-hidden="true">▶</span></a>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>12+</strong><span>лет в событиях</span></div>
          <div><strong>480</strong><span>проведённых вечеров</span></div>
          <div><strong>4.9</strong><span>оценка гостей</span></div>
        </div>
        <a className="scroll-cue" href="#approach">Листайте, чтобы почувствовать <span>↓</span></a>
      </section>

      <section className="manifesto section" id="approach">
        <div className="section-index">01 / подход</div>
        <div>
          <p className="eyebrow gold">Не шоу ради шоу</p>
          <h2>Главные здесь —<br /><em>вы и ваши люди.</em></h2>
        </div>
        <div className="manifesto-copy">
          <p>Я не перетягиваю внимание на себя. Слышу зал, чувствую темп вечера и создаю пространство, в котором легко смеяться, говорить важное и быть собой.</p>
          <a className="text-link" href="#about">Познакомиться ближе <Arrow /></a>
        </div>
      </section>

      <section className="principles section">
        {content.principles.map((item, i) => (
          <article className="principle" key={item.title}>
            <span>0{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="about section" id="about">
        <div className="portrait">
          <div className="portrait-image" role="img" aria-label="Ведущий на праздничном событии" />
          <div className="portrait-caption"><span>В кадре</span><strong>Дмитрий Тихомиров</strong></div>
        </div>
        <div className="about-copy">
          <div className="section-index">02 / обо мне</div>
          <p className="eyebrow gold">Человек, а не образ</p>
          <h2>С чувством такта.<br /><em>И чувством юмора.</em></h2>
          <p>Для меня хорошее событие — это не набор активностей. Это точная драматургия вечера: знакомство, энергия, тепло, кульминация и то самое послевкусие, которое остаётся на годы.</p>
          <blockquote>«Моя работа — сделать так, чтобы вам было спокойно до праздника и невозможно хорошо во время него».</blockquote>
          <a className="btn btn-outline" href={links.vk} target="_blank" rel="noreferrer">Мой VK <Arrow /></a>
        </div>
      </section>

      <section className="showreel section" id="showreel">
        <div className="showreel-image" />
        <div className="showreel-overlay">
          <p className="eyebrow">90 секунд настоящих эмоций</p>
          <button className="play" aria-label="Запустить шоурил"><span>▶</span></button>
          <h2>Это нужно <em>увидеть.</em></h2>
        </div>
      </section>

      <section className="events section" id="events">
        <div className="section-head">
          <div><div className="section-index">03 / события</div><h2>Для моментов,<br /><em>которые важны.</em></h2></div>
          <p>Каждый формат — со своей интонацией. Но всегда с одним результатом: людям хорошо вместе.</p>
        </div>
        <div className="event-grid">
          {content.events.map((event, i) => (
            <a className={`event-card event-${i + 1}`} href="#calculator" key={event.title}>
              <div className="event-image" />
              <div className="event-tint" />
              <span className="event-num">0{i + 1}</span>
              <div><h3>{event.title}</h3><p>{event.text}</p></div>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-index">04 / говорят гости</div>
        <div className="review-shell">
          <span className="quote">“</span>
          <blockquote>{content.reviews[activeReview].text}</blockquote>
          <div className="review-author">
            <div className="avatar">{content.reviews[activeReview].initials}</div>
            <div><strong>{content.reviews[activeReview].name}</strong><span>{content.reviews[activeReview].event}</span></div>
          </div>
          <div className="review-controls">
            <button aria-label="Предыдущий отзыв" onClick={() => setActiveReview((activeReview - 1 + content.reviews.length) % content.reviews.length)}>←</button>
            <span>{String(activeReview + 1).padStart(2, "0")} / {String(content.reviews.length).padStart(2, "0")}</span>
            <button aria-label="Следующий отзыв" onClick={() => setActiveReview((activeReview + 1) % content.reviews.length)}>→</button>
          </div>
        </div>
      </section>

      <section className="calculator section" id="calculator">
        <div className="calc-copy">
          <div className="section-index">05 / ориентир по бюджету</div>
          <p className="eyebrow gold">30 секунд до понимания</p>
          <h2>Сколько стоит<br /><em>ваш праздник?</em></h2>
          <p>Выберите формат — покажу предварительный ориентир. Точная стоимость зависит от даты, города и программы.</p>
        </div>
        <div className="calc-card">
          <label>Формат события
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              {["Свадьба", "Корпоратив", "Юбилей", "Выпускной"].map((x) => <option key={x}>{x}</option>)}
            </select>
          </label>
          <label>Количество гостей
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {["до 30", "30–50", "50–80", "80–120", "120+"].map((x) => <option key={x}>{x}</option>)}
            </select>
          </label>
          <div className="estimate"><span>Предварительно</span><strong>от {estimate} ₽</strong></div>
          <a className="btn btn-gold wide" href="#contact">Получить точный расчёт <Arrow /></a>
        </div>
      </section>

      <section className="process section">
        <div className="section-head">
          <div><div className="section-index">06 / как всё проходит</div><h2>Спокойно. Понятно.<br /><em>По-человечески.</em></h2></div>
        </div>
        <div className="steps">
          {content.steps.map((step, i) => (
            <article key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div><div className="section-index">07 / без сомнений</div><h2>Частые<br /><em>вопросы.</em></h2></div>
        <div className="faq-list">
          {content.faq.map((item) => (
            <details key={item.q}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-bg" />
        <div className="contact-copy">
          <p className="eyebrow">Давайте начнём с разговора</p>
          <h2>Расскажите,<br />что вы <em>задумали.</em></h2>
          <p>Отвечу лично, уточню дату и предложу формат, который подойдёт именно вашему событию.</p>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div className="success"><span>✓</span><h3>Спасибо!</h3><p>Заявка принята. Дмитрий свяжется с вами в ближайшее время.</p></div>
          ) : (
            <>
              <label>Ваше имя<input required name="name" placeholder="Как к вам обращаться?" /></label>
              <label>Телефон<input required name="phone" type="tel" placeholder="+7 999 000-00-00" /></label>
              <label>Дата события<input name="date" type="date" /></label>
              <label>Формат<select name="format"><option>Свадьба</option><option>Корпоратив</option><option>Юбилей</option><option>Выпускной</option><option>Другое</option></select></label>
              <button className="btn btn-gold wide" type="submit">Отправить заявку <Arrow /></button>
              <small>Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</small>
            </>
          )}
        </form>
      </section>

      <footer>
        <div className="brand footer-brand"><span>ДТ</span><strong>Дмитрий Тихомиров</strong></div>
        <p>Ведущий событий в Костроме и по всей России</p>
        <div className="socials"><a href={links.vk} target="_blank" rel="noreferrer">VK</a><a href={links.instagram} target="_blank" rel="noreferrer">Instagram*</a></div>
        <small>© {new Date().getFullYear()} · *Соцсеть принадлежит компании Meta, признанной экстремистской в РФ.</small>
      </footer>

      <a className="mobile-cta" href="#contact">Узнать свободную дату <Arrow /></a>
    </main>
  );
}
