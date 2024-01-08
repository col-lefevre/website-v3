---
layout: base.njk
navCategory: /
cssFile: "about.css"
title: Colin LeFevre
---

<div class="row">
    <div class="four columns">
        <img src="{{ 'assets/images/headshot_2x3.jpg' | url }}" class="u-max-full-width">
    </div>
    <div class="seven columns offset-by-one">
        <intro>
            <p>Hello! I am</p>
            <head2>Colin LeFevre</head2>
            <subtitle>(he/him)</subtitle>
        </intro>
        <p>I am a Human-Computer Interaction (HCI) researcher at  <a href="https://prohealth.luddy.indiana.edu/">Proactive Health Informatics</a>. I recently graduated from Indiana University Bloomington with a B.S. in Informatics.  </p>
        <p>My research focuses on designing technologies which navigate cultural, social and personal factors to support health and wellbeing. At present, I am particularly interested in digital mental health and self-management.</p>
        <p>I am currently advised by <a href="http://cfchung.com">Dr. Christina Chung</a>, and am a prospective applicant for HCI-focused Ph.D. programs which begin Fall 2024.</p>
        <icons>
            <!-- <img src="/assets/images/envelope-solid.svg" alt="Envelope representing an email" class="svg-general">
            <img src="/assets/images/linkedin-in.svg" alt="LinkedIn logo" class="svg-general">
            <img src="/assets/images/github.svg" alt="Github logo" class="svg-general">
            <img src="/assets/images/orcid.svg" alt="ORCID logo" class="svg-general"> -->
            {% include "svg-email.njk" %}
            {% include "svg-linkedin.njk" %}
            {% include "svg-github.njk" %}
            {% include "svg-orcid.njk" %}
        </icons>
    </div>

</div>
