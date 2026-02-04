"use client";
import React, { useState } from 'react';
import { AlertCircle, Truck, CheckCircle, MapPin, CloudRain, Languages, Volume2 } from 'lucide-react';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";

export const DiagnosticCard = ({ 
  patientName = "Unknown Patient", 
  condition = "General Screening", 
  urgency = "Normal" 
}: any) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleNotify = async () => {
    try {
      await db.records.add({
        patientName,
        condition,
        urgency,
        status: 'pending',
        timestamp: Date.now()
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Vault save failed:", error);
    }
  };

  return (
    <div className="p-4 border-2 border-red-200 rounded-xl bg-white shadow-md my-2">
      <div className="flex items-center gap-2 mb-2 text-red-600">
        <AlertCircle size={20} />
        <h3 className="font-bold">Urgent Screening: {patientName}</h3>
      </div>
      <p className="text-sm text-gray-700"><b>Condition:</b> {condition}</p>
      <button 
        onClick={handleNotify}
        disabled={isSaved}
        className={`w-full mt-4 py-2 rounded-lg text-white transition-all ${isSaved ? 'bg-green-600' : 'bg-red-600'}`}
      >
        {isSaved ? "Saved Offline" : "Notify PHC"}
      </button>
    </div>
  );
};

export const SyncStatus = () => {
  const pendingCount = useLiveQuery(() => db.records.where("status").equals("pending").count());

  const handleSyncSimulation = async () => {
    if (!pendingCount || pendingCount === 0) return;
    await db.records.where("status").equals("pending").modify({ status: 'synced' });
    alert(`${pendingCount} records successfully relayed to the PHC via Vahak-Setu!`);
  };

  return (
    <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50 my-2">
      <div className="flex items-center gap-2 mb-2 text-blue-700">
        <Truck size={20} className={pendingCount ? "animate-bounce" : ""} />
        <h3 className="font-bold">Vahak-Setu Mesh</h3>
      </div>
      <p className="text-sm">Pending Records: <b>{pendingCount ?? 0}</b></p>
      <button 
        onClick={handleSyncSimulation}
        disabled={!pendingCount}
        className={`w-full mt-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
          pendingCount ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-500"
        }`}
      >
        {pendingCount ? "Simulate Vehicle Sync" : "Grid Synchronized"}
      </button>
    </div>
  );
};

export const RouteAlert = ({ roadName = "Main Village Path", reliability = 85 }: any) => (
  <div className="p-4 border-2 border-orange-200 rounded-xl bg-orange-50 my-2">
    <div className="flex items-center gap-2 mb-2 text-orange-700">
      <CloudRain size={20} />
      <h3 className="font-bold">Neural Road Forecast</h3>
    </div>
    <p className="text-xs text-gray-600">Route: <b>{roadName}</b></p>
    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${reliability < 50 ? 'bg-red-500' : 'bg-green-500'}`} 
        style={{ width: `${reliability}%` }}
      ></div>
    </div>
    <p className="text-[10px] mt-1 text-orange-800 italic">
      {reliability < 50 ? "ST-GNN Warning: High risk of monsoon washout." : "Route stable for medical relay."}
    </p>
  </div>
);

// New Bhashini Translation Component
export const BhashiniTranslator = ({ originalText = "Stay safe.", targetLang = "Hindi" }: any) => {
  const [isTranslated, setIsTranslated] = useState(false);
  const translations: Record<string, string> = {
    "Route stable for medical relay.": "चिकित्सा रिले के लिए मार्ग स्थिर है।",
    "High risk of monsoon washout.": "मानसून में सड़क बहने का उच्च जोखिम है।",
    "Stay safe.": "सुरक्षित रहें।"
  };

  return (
    <div className="p-4 border-2 border-purple-200 rounded-xl bg-purple-50 my-2 shadow-sm">
      <div className="flex items-center justify-between mb-2 text-purple-700">
        <div className="flex items-center gap-2">
          <Languages size={20} />
          <h3 className="font-bold text-sm">Bhashini Neural Bridge</h3>
        </div>
        <span className="text-[10px] bg-purple-200 px-2 py-0.5 rounded-full uppercase font-bold">{isTranslated ? targetLang : "English"}</span>
      </div>
      <p className="text-sm text-gray-800 italic bg-white p-2 rounded border border-purple-100">
        "{isTranslated ? (translations[originalText] || "अनुवाद उपलब्ध नहीं है।") : originalText}"
      </p>
      <div className="flex gap-2 mt-3">
        <button onClick={() => setIsTranslated(!isTranslated)} className="flex-1 text-[10px] bg-purple-600 text-white py-1 rounded hover:bg-purple-700">
          {isTranslated ? "Show English" : `Translate to ${targetLang}`}
        </button>
        <button className="px-2 bg-purple-100 text-purple-700 rounded"><Volume2 size={14} /></button>
      </div>
    </div>
  );
};