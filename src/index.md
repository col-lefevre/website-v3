---
layout: base.njk
navCategory: /
cssFile: "index.css"
title: Colin LeFevre
---

<!-- DESKTOP -->
<div class="row desktop">
    <div class="col-lg-4">
        <img src="{{ 'assets/images/headshot_2x3.jpg' | url }}" class="img-fluid">
    </div>
    <div class="col-lg-7 offset-1">
        {% include "index/intro.njk" %}
        {% include "index/links.njk" %}
        {% include "index/desc.njk" %}
    </div>
</div>

<!-- TABLET -->
<div class="row tablet">
    <div class="col-sm-5">
        <img src="{{ 'assets/images/headshot_1x1.jpg' | url }}" class="img-fluid">
    </div>
    <div class="col-sm-6 offset-1">
        <div class="intro-link-bundle">
            {% include "index/intro.njk" %}
            {% include "index/links.njk" %}
        </div>
    </div>
    <div class="col-sm-12">
        {% include "index/desc.njk" %}
    </div>
</div>

<!-- MOBILE -->
<div class="row mobile">
    <div class="col-12">
        <img src="{{ 'assets/images/headshot_16x9.jpg' | url }}" class="img-fluid">
    </div>
    <div class="col-12">
        {% include "index/intro.njk" %}
        {% include "index/links.njk" %}
        {% include "index/desc.njk" %}
    </div>
</div>
