"use client";
import React from 'react';
import { DiagnosticCard, SyncStatus, RouteAlert, BhashiniTranslator } from "@/components/HealthForms";
import { Activity, Shield, Zap, Globe } from 'lucide-react';

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header: Mission Statement */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">ASHA Copilot: Vahak-Setu</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A Neural-Quantum Offline Grid designed to bridge the "Last-Mile" healthcare gap in rural India.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1: Generative Diagnostics */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-red-600 font-bold">
            <Activity size={20} /> <h2>Clinical Diagnostics</h2>
          </div>
          <DiagnosticCard 
            patientName="Himanshu Patil" 
            condition="High fever and chills" 
            urgency="High" 
          />
          <p className="text-[10px] text-slate-500">Generative UI handles data entry for workers with limited digital awareness.</p>
        </section>

        {/* Pillar 2: Offline Vault & Mesh Sync */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <Shield size={20} /> <h2>Vahak-Setu Mesh</h2>
          </div>
          <SyncStatus />
          <p className="text-[10px] text-slate-500">Peer-to-peer relay ensures 100% data integrity in "Shadow Zones".</p>
        </section>

        {/* Pillar 3: Neural Logistics (ST-GNN) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-orange-600 font-bold">
            <Zap size={20} /> <h2>Neural Routing</h2>
          </div>
          <RouteAlert roadName="N-24 Village Path" reliability={42} />
          <p className="text-[10px] text-slate-500">Predictive ST-GNN models bypass monsoon washouts and infrastructure gaps.</p>
        </section>

        {/* Pillar 4: Bhashini Inclusivity */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-purple-600 font-bold">
            <Globe size={20} /> <h2>Bhashini Bridge</h2>
          </div>
          <BhashiniTranslator 
            originalText="High risk of monsoon washout." 
            targetLang="Hindi" 
          />
          <p className="text-[10px] text-slate-500">Multi-lingual neural translation overcomes rural language barriers.</p>
        </section>

      </div>

     {/* Footer: Tech Stack & Credits */}
      {/* Footer: Tech Stack & Brand Credits */}
      <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        <div className="mb-3">
          Built with Tambo SDK • Next.js 15 • Dexie.js • Bhashini API • Lucide React
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-600 text-sm">
            {/* The Sapphire Corp Logo Icon */}
            <div className="p-1 bg-blue-100 rounded-md text-blue-600">
              <Activity size={14} strokeWidth={3} /> 
            </div>
            <span>Sapphire Corp</span>
          </div>
          <div className="text-slate-500 font-medium italic">
            Developed by Himanshu Patil
          </div>
          <div className="mt-2 text-[10px] text-slate-400 tracking-widest uppercase">
            © 2026 Global Tech Champion Build
          </div>
        </div>
      </footer>
    </div>
  );
}