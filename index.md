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
