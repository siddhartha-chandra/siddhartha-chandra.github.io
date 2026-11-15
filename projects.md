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
        <div class="project-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,2.5 21,7 12,11.5 3,7" fill="var(--accent)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <polygon points="12,11.5 21,7 21,16.5 12,21" fill="var(--rust)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <polygon points="3,7 12,11.5 12,21 3,16.5" fill="var(--soft)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <line x1="6" y1="5.5" x2="15" y2="10" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="9" y1="4" x2="18" y2="8.5" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="6" y1="8.5" x2="15" y2="4" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="9" y1="10" x2="18" y2="5.5" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="15" y1="10" x2="15" y2="19.5" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="18" y1="8.5" x2="18" y2="18" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="12" y1="14.67" x2="21" y2="10.17" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="12" y1="17.83" x2="21" y2="13.33" stroke="var(--card-bg)" stroke-width="0.8"/>
            <line x1="6" y1="8.5" x2="6" y2="18" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/>
            <line x1="9" y1="10" x2="9" y2="19.5" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/>
            <line x1="3" y1="10.17" x2="12" y2="14.67" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/>
            <line x1="3" y1="13.33" x2="12" y2="17.83" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.3"/>
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
