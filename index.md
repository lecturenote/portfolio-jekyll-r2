---
layout: default
title: Home
---
<section class="hero">
  <div class="hero-inner">
    <div>
      <h1>{{ site.title }}</h1>
      <p class="lead">{{ site.tagline }}</p>
      <p><a class="btn" href="{{ '/academic/' | relative_url }}">Explore projects →</a></p>
    </div>
  </div>
</section>

<section class="category-strip">
  <a class="cat-card academic" href="{{ '/academic/' | relative_url }}"><span>Academic</span></a>
  <a class="cat-card work" href="{{ '/work/' | relative_url }}"><span>Work</span></a>
  <a class="cat-card extras" href="{{ '/extras/' | relative_url }}"><span>Extras</span></a>
</section>

<section class="about" style="margin-top:2rem">
  <h2>About Me</h2>

  {% assign avatar = nil %}
  {% comment %} If your avatar file in R2 is named "profile.jpg", set it here {% endcomment %}
  {% capture avatar %}{{ site.r2_base }}/profile.jpg{% endcapture %}

  <div style="display:grid;grid-template-columns:120px 1fr;gap:1rem;align-items:start">
    <img src="{{ avatar }}" alt="Oheneba Aggrey" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:1px solid var(--border)">
    <p>
      As an industrial mechanical engineering graduate with an MSc specialization in digital factory planning,
      I focus on applying simulation, automation, and analytics to boost operational efficiency. Experience includes
      FlexSim modeling, robotics (Arduino Braccio), DFMA, and renewable projects (affordable solar streetlights,
      residential/commercial PV). I enjoy turning messy processes into clean value streams.
    </p>
  </div>
</section>
