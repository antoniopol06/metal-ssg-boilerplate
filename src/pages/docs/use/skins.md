---
description: Skins in AlloyEditor are a very powerful feature that allows you to seamlessly integrate the editor inside your app.
icon: "code-file"
layout: "guide"
title: Skins
weight: 5
---

###### Skins in AlloyEditor are a very powerful feature that allows you to seamlessly integrate the editor inside your app.

<article id="article1">

## Skin Architecture

<p>AlloyEditor skins are organized according to the following principles:</p>

<section class="guide-nested">
  <h4 class="guide-step">Variables</h4>

  <p>Style values are parameterized as much as possible. This allows skins to fully extend others just by changing a small set of variable values.</p>
</section>

<section class="guide-nested">
  <h4 class="guide-step">Components</h4>

  <p>A skin is created by combining one or more components together. Different skins may use different components, so irrelevant styling can be easily stripped out.</p>
</section>

<section class="guide-nested">
  <h4 class="guide-step">Structure vs Skin</h4>

  <p>All styling is separated into structure and skin. Structure represents everything that affects the sizing and position of the elements. Meanwhile, skin represents all the purely cosmetic changes.</p>
</section>

</article>

<article id="article2">

## Skins Overview

<p>At this moment, you can use any of the following skins out of the box:</p>

<section class="guide-nested">
  <h4 class="guide-step">Ocean (default)</h4>

  <div class="thumbnail">
    <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/skin_ocean.png">
  </div>
</section>

<section class="guide-nested">
  <h4 class="guide-step">Atlas</h4>

  <div class="thumbnail">
    <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/skin_atlas.png">
  </div>

  <span class="code-header">Add the following external stylesheet to use <b>Atlas Skin</b></span>

  ```html
  <link href="alloy-editor/assets/alloy-editor-atlas-min.css" rel="stylesheet">
  ```
</section>

<section class="guide-nested">
  <h4 class="guide-step">Moono</h4>

  <div class="thumbnail">
    <img class="img img-polaroid" src="<%= @getAssetsUrl() %>/img/guides/skin_moono.png">
  </div>

  <span class="code-header">
    Add the following external stylesheet to use <b>Moono Skin</b>
  </span>

  ```html
  <link href="alloy-editor/assets/alloy-editor-moono-min.css" rel="stylesheet">
  ```
</section>


<p class="guide-note">Check out <a href="/docs/create/create_skin.html">this guide</a> to know more about how to create your own skin.</p>

</article>

