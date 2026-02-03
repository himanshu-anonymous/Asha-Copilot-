import React from 'react';
import { AlertCircle, Truck } from 'lucide-react';

export const DiagnosticCard = ({ patientName, condition, urgency }: any) => (
  <div className="p-4 border-2 border-red-200 rounded-xl bg-white shadow-md">
    <div className="flex items-center gap-2 mb-2 text-red-600">
      <AlertCircle size={20} />
      <h3 className="font-bold">Urgent Screening: {patientName}</h3>
    </div>
    <p className="text-sm text-gray-700"><b>Condition:</b> {condition}</p>
    <p className={`mt-2 font-bold ${urgency === 'High' ? 'text-red-600' : 'text-orange-500'}`}>
      Priority: {urgency}
    </p>
    <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg">Notify PHC</button>
  </div>
);

export const SyncStatus = ({ count, lastSync }: any) => (
  <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
    <div className="flex items-center gap-2 mb-2 text-blue-700">
      <Truck size={20} />
      <h3 className="font-bold">Mesh Sync Active</h3>
    </div>
    <p className="text-sm">Pending Records: <b>{count}</b></p>
    <p className="text-xs text-gray-500 mt-1">Last Vahak: {lastSync}</p>
  </div>
);