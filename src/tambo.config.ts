import { z } from "zod";
import { DiagnosticCard, SyncStatus } from "./components/HealthForms";

export const tamboConfig = {
  components: {
    DiagnosticForm: {
      component: DiagnosticCard,
      schema: z.object({
        patientName: z.string(),
        condition: z.string(),
        urgency: z.enum(["High", "Normal"]),
      }),
      description: "Generates a medical screening form for rural health workers.",
    },
    SyncModule: {
      component: SyncStatus,
      schema: z.object({
        count: z.number(),
        lastSync: z.string(),
      }),
      description: "Displays status of offline peer-to-peer synchronization.",
    }
  },
};