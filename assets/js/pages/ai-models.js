function renderPipeline() {
  document.getElementById('pipelineEl').innerHTML = PIPELINE.map(s => `
    <div class="tl-step">
      <div class="tl-dot">${s.n}</div>
      <div>
        <div class="tl-title">${s.title}</div>
        <div class="tl-desc">${s.desc}</div>
      </div>
    </div>
  `).join('');
}

function renderModels() {
  document.getElementById('modelGrid').innerHTML = PLANNED_MODELS.map(m => `
    <div class="model-placeholder">
      <div class="mp-label">${m.family}</div>
      <div class="mp-name">${m.name}</div>
      <div class="mp-desc">${m.desc}</div>
      <div class="mp-status">
        <div class="dot-soon"></div>
        <span style="font-size:.62rem;color:var(--amber)">${m.status}</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPipeline(); renderModels();
  initMobileNav(); initFade();
});
