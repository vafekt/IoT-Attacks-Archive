(function initHubDatabase(globalScope) {
  const existing = globalScope.HUB_DB || {};

  const hubDb = {
    datasets: existing.datasets || [],
    attacks: existing.attacks || [],
    attackDivisions: existing.attackDivisions || [],
    datasetIdByName: existing.datasetIdByName || {},
    protocols: existing.protocols || [],
    heatmap: existing.heatmap || null,
    tools: existing.tools || [],
    devices: existing.devices || [],
    pipeline: existing.pipeline || [],
    plannedModels: existing.plannedModels || [],
    register(key, value) {
      if (!key) return;
      this[key] = value;
    },
    get(key, fallbackValue = null) {
      if (!key) return fallbackValue;
      return Object.prototype.hasOwnProperty.call(this, key) ? this[key] : fallbackValue;
    }
  };

  globalScope.HUB_DB = hubDb;
})(window);
