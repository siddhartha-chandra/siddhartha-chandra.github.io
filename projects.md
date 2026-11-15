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
        <div class="project-icon" aria-hidden="true" title="Rubik's Solver">
          <svg class="rubik-cube-svg" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Grounded lower 2 layers -->
            <g class="rubik-base">
              <polygon points="5,12.5 16,18 16,26 5,20.5" fill="var(--soft)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              <polygon points="16,18 27,12.5 27,20.5 16,26" fill="var(--rust)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              <line x1="5" y1="16.5" x2="16" y2="22" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
              <line x1="8.67" y1="14.33" x2="8.67" y2="22.33" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
              <line x1="12.33" y1="16.17" x2="12.33" y2="24.17" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
              <line x1="16" y1="22" x2="27" y2="16.5" stroke="var(--card-bg)" stroke-width="0.8"/>
              <line x1="19.67" y1="16.17" x2="19.67" y2="24.17" stroke="var(--card-bg)" stroke-width="0.8"/>
              <line x1="23.33" y1="14.33" x2="23.33" y2="22.33" stroke="var(--card-bg)" stroke-width="0.8"/>
            </g>
            <!-- Animated top U-slice (lifts and twists on hover) -->
            <g class="rubik-u-slice">
              <polygon points="16,3 27,8.5 16,14 5,8.5" fill="var(--accent)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              <polygon points="5,8.5 16,14 16,17.5 5,12" fill="var(--soft)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              <polygon points="16,14 27,8.5 27,12 16,17.5" fill="var(--rust)" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
              <line x1="8.67" y1="6.67" x2="19.67" y2="12.17" stroke="var(--card-bg)" stroke-width="0.85"/>
              <line x1="12.33" y1="4.83" x2="23.33" y2="10.33" stroke="var(--card-bg)" stroke-width="0.85"/>
              <line x1="8.67" y1="10.33" x2="19.67" y2="4.83" stroke="var(--card-bg)" stroke-width="0.85"/>
              <line x1="12.33" y1="12.17" x2="23.33" y2="6.67" stroke="var(--card-bg)" stroke-width="0.85"/>
              <line x1="8.67" y1="10.33" x2="8.67" y2="13.83" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
              <line x1="12.33" y1="12.17" x2="12.33" y2="15.67" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
              <line x1="19.67" y1="12.17" x2="19.67" y2="15.67" stroke="var(--card-bg)" stroke-width="0.85"/>
              <line x1="23.33" y1="10.33" x2="23.33" y2="13.83" stroke="var(--card-bg)" stroke-width="0.85"/>
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
