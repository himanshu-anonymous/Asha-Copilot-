import { tamboConfig } from "../tambo.config";

// This exports your DiagnosticForm and SyncModule to the Interactables page
export const components = Object.entries(tamboConfig.components).map(([name, config]) => ({
  name,
  ...config,
}));

export const tools = []; // Add your ST-GNN or Bhashini tools here later