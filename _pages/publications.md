---
layout: page
permalink: /publications/
title: publications
description: Publications organized by category in reverse chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Journal Papers</h2>

{% bibliography --query @article %}

<h2>Conference Papers</h2>

{% bibliography --query @inproceedings %}

</div>
