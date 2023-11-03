---
title: Colin LeFevre
layout: "base.njk"
navCategory: /
---

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<subtitle>Subtitle</subtitle>

Welcome to my page

{% for project in collections.researchProjects %}

<a href="{{project.url}}">{{project.data.title}}</a>

{% endfor %}
