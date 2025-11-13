---
layout: default
title: Home
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.tagline }}</p>
  <p><a href="{{ '/academic/' | relative_url }}">Explore projects →</a></p>
</section>

<hr>

<div class="pill-row">
  <a class="pill pill-academic" href="{{ '/academic/' | relative_url }}">Academic</a>
  <a class="pill pill-work"     href="{{ '/work/'     | relative_url }}">Work</a>
  <a class="pill pill-extras"   href="{{ '/extras/'   | relative_url }}">Extras</a>
</div>

<section class="about" style="margin-top:2rem">
  <h2>About Me</h2>
  <div style="display:grid;grid-template-columns:120px 1fr;gap:1rem;align-items:start">
    <img src="{{ site.r2_base }}/profile_edited.png" alt="Oheneba Aggrey"
         style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:1px solid var(--border)">
    <p>
      As an industrial mechanical engineering graduate with an MSc specialization in digital factory planning,
      I focus on applying simulation, automation, and analytics to boost operational efficiency. Experience includes
      FlexSim modeling, robotics (Arduino Braccio), DFMA, and renewable projects (affordable solar streetlights,
      residential/commercial PV). I enjoy turning messy processes into clean value streams.
    </p>
  </div>
  <p style="margin-top:0.75rem">
    <a class="button" href="{{ site.r2_base }}/{{ 'Academic CV.pdf' | uri_escape }}" target="_blank" rel="noopener">
      Download CV (PDF)
    </a>
  </p>
</section>

<a href="{{ site.r2_base }}/{{ 'Academic CV.pdf' | uri_escape }}" target="_blank" rel="noopener">CV (PDF)</a>
