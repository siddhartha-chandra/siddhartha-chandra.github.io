---
layout: default
title: Projects
permalink: /projects/
description: Selected software systems, machine learning engineering, and algorithmic research projects.
---

<section class="section-grid" aria-labelledby="projects-heading">
  <h1 id="projects-heading">Projects</h1>
  <div class="signal-list">
    <article class="project-card">
      <div class="project-header">
        <div class="project-icon" aria-hidden="true" title="Rubik's Solver · Hover to solve">
          <svg class="rubik-cube-svg" width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="cube-slice-base">
              <polygon points="6.07,20.95 11.62,24.15 11.62,30.55 6.07,27.35" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="12.14,24.45 17.68,27.65 17.68,34.05 12.14,30.85" class="rubik-tile tile-left tile-jumbled-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="6.07,27.95 11.62,31.15 11.62,37.55 6.07,34.35" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="12.14,31.45 17.68,34.65 17.68,41.05 12.14,37.85" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
            </g>
            <g class="cube-slice-r">
              <polygon points="41.93,13.95 36.38,17.15 36.38,23.55 41.93,20.35" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="35.86,17.45 30.32,20.65 30.32,27.05 35.86,23.85" class="rubik-tile tile-right tile-jumbled-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="29.8,20.95 24.26,24.15 24.26,30.55 29.8,27.35" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="41.93,20.95 36.38,24.15 36.38,30.55 41.93,27.35" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="35.86,24.45 30.32,27.65 30.32,34.05 35.86,30.85" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="29.8,27.95 24.26,31.15 24.26,37.55 29.8,34.35" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="41.93,27.95 36.38,31.15 36.38,37.55 41.93,34.35" class="rubik-tile tile-right tile-jumbled-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="35.86,31.45 30.32,34.65 30.32,41.05 35.86,37.85" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="29.8,34.95 24.26,38.15 24.26,44.55 29.8,41.35" class="rubik-tile tile-right tile-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="18.2,27.95 23.74,31.15 23.74,37.55 18.2,34.35" class="rubik-tile tile-left tile-jumbled-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="18.2,34.95 23.74,38.15 23.74,44.55 18.2,41.35" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
            </g>
            <g class="cube-slice-u">
              <polygon points="24.0,3.3 29.54,6.5 24.0,9.7 18.46,6.5" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="30.06,6.8 35.6,10.0 30.06,13.2 24.52,10.0" class="rubik-tile tile-top tile-jumbled-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="36.12,10.3 41.67,13.5 36.12,16.7 30.58,13.5" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="17.94,6.8 23.48,10.0 17.94,13.2 12.4,10.0" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="24.0,10.3 29.54,13.5 24.0,16.7 18.46,13.5" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="30.06,13.8 35.6,17.0 30.06,20.2 24.52,17.0" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="11.88,10.3 17.42,13.5 11.88,16.7 6.33,13.5" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="17.94,13.8 23.48,17.0 17.94,20.2 12.4,17.0" class="rubik-tile tile-top tile-white" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="24.0,17.3 29.54,20.5 24.0,23.7 18.46,20.5" class="rubik-tile tile-top tile-jumbled-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="6.07,20.35 11.62,23.55 11.62,17.15 6.07,13.95" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="12.14,23.85 17.68,27.05 17.68,20.65 12.14,17.45" class="rubik-tile tile-left tile-jumbled-red" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
              <polygon points="18.2,27.35 23.74,30.55 23.74,24.15 18.2,20.95" class="rubik-tile tile-left tile-green" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
            </g>
          </svg>
        </div>
        <div class="project-meta">
          <p class="project-kicker">Reinforcement Learning · Decision Models</p>
          <h2 class="project-title"><a href="https://rubiks-solver.pro/" target="_blank" rel="noopener noreferrer">Rubik's Solver · RLCD</a></h2>
        </div>
      </div>
      <p class="project-desc">
        A Rubik's cube solver that treats move selection as calibrated decisions. Steers 4 classic algorithms (Beginner, CFOP, Kociemba, Optimal BFS) with open RLCD models (TypeSafe Jev &amp; Convai Laya), supporting custom face palettes, real-time PostgreSQL/SQLite graph synchronization, and an interactive 3D hemisphere state transition manifold.
      </p>
      <div class="project-footer">
        <div class="project-tags">
          <span class="project-tag">Python</span>
          <span class="project-tag">FastAPI</span>
          <span class="project-tag">Three.js</span>
          <span class="project-tag">RLCD</span>
          <span class="project-tag">PostgreSQL</span>
        </div>
        <div class="project-links">
          <a class="project-link" href="https://rubiks-solver.pro/" target="_blank" rel="noopener noreferrer">Launch app &rarr;</a>
        </div>
      </div>
    </article>
  </div>
</section>
