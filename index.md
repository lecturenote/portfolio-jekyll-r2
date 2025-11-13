---
layout: default
title: Home
---

# Oheneba Aggrey
Sustainability Enthusiast

[Explore projects →](/portfolio-jekyll-r2/academic/)

<div class="home-categories">
  <a class="pill blue"  href="{{ '/academic/' | relative_url }}">Academic</a>
  <a class="pill purple" href="{{ '/work/' | relative_url }}">Work</a>
  <a class="pill lilac" href="{{ '/extras/' | relative_url }}">Extras</a>
</div>

## About Me

{% capture avatar %}{{ site.r2_base }}/profile.jpg{% endcapture %}
<div style="display:grid;grid-template-columns:120px 1fr;gap:1rem;align-items:start;margin-top:1rem">
  <img src="{{ avatar }}" alt="Oheneba Aggrey" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:1px solid var(--border)">
  <p>
    As an industrial mechanical engineering graduate with an MSc specialization in digital factory planning,
    I focus on applying simulation, automation, and analytics to boost operational efficiency. Experience includes
    FlexSim modeling, robotics (Arduino Braccio), DFMA, and renewable projects (affordable solar streetlights,
    residential/commercial PV). I enjoy turning messy processes into clean value streams.
  </p>
</div>

<p style="margin-top:.5rem">
  <a class="button" href="{{ site.r2_base }}/Academic%20CV.pdf">Download CV (PDF)</a>
  <a class="button" href="mailto:oheneba@example.com">Contact</a>
</p>

<div class="wrapper home-hero">
  <h1>Oheneba Aggrey</h1>
  <p class="lead">Sustainability Enthusiast • Industrial & analytics‑driven design. Selected projects below.</p>

  <div class="home-tiles">
    <a class="home-tile is-academic" href="/academic/">
      <h3>Academic</h3>
      <p>Research, CAD/FEA, simulations.</p>
      <span class="tile-icon">🎓</span>
    </a>

    <a class="home-tile is-work" href="/work/">
      <h3>Work</h3>
      <p>PV installs, process planning, deliverables.</p>
      <span class="tile-icon">🛠️</span>
    </a>

    <a class="home-tile is-extras" href="/extras/">
      <h3>Extras</h3>
      <p>Prototypes, awards, summer schools.</p>
      <span class="tile-icon">✨</span>
    </a>
  </div>
</div>
