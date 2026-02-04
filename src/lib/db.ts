import Dexie, { Table } from 'dexie';

export interface MedicalRecord {
  id?: number;
  patientName: string;
  condition: string;
  urgency: string; // Resolves the property mismatch error
  status: 'pending' | 'synced';
  timestamp: number;
}

export class AshaDatabase extends Dexie {
  records!: Table<MedicalRecord>;
  constructor() {
    super('AshaCopilotDB');
    this.version(1).stores({ records: '++id, status, timestamp' });
  }
}

export const db = new AshaDatabase();