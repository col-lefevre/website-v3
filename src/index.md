---
title: Hello World
layout: "base.njk"
---

Hello everyone

{% for project in collections.research %}

<a href="{{project.url}}">{{project.data.title}}</a>

{% endfor %}
