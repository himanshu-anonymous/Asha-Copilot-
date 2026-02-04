import { z } from "zod";
import { DiagnosticCard, SyncStatus, RouteAlert, BhashiniTranslator } from "./components/HealthForms";

export const tamboConfig = {
  components: {
    DiagnosticForm: {
      component: DiagnosticCard,
      propsSchema: z.object({
        patientName: z.string().optional().default("Unknown Patient"),
        condition: z.string().optional().default("General Assessment"),
        urgency: z.enum(["High", "Normal"]).optional().default("Normal"),
      }),
      description: "Generates a clinical screening form for rural health workers.",
    },
    SyncModule: {
      component: SyncStatus,
      propsSchema: z.object({}), 
      description: "Displays the offline synchronization grid status.",
    },
    RoadForecast: {
      component: RouteAlert,
      propsSchema: z.object({
        roadName: z.string().optional().default("N-24 Village Road"),
        reliability: z.number().min(0).max(100).optional().default(90),
      }),
      description: "Neural prediction of rural road stability for medical transport.",
    },
    LanguageBridge: {
      component: BhashiniTranslator,
      propsSchema: z.object({
        originalText: z.string().optional().default("Route stable for medical relay."),
        targetLang: z.string().optional().default("Hindi"),
      }),
      description: "Bhashini-powered neural translation for rural healthcare inclusivity.",
    }
  },
};