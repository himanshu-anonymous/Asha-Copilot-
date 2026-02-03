# ASHA Copilot: Vahak-Setu 

**Empowering Last-Mile Healthcare with a Quantum-Neural Offline Grid.**

---

## 🌟 The Vision
Healthcare in rural India is often fragmented and inaccessible due to inadequate infrastructure, critical shortages of professionals, and long travel distances. **Vahak-Setu** (ASHA Copilot) bridges this gap by transforming every rural vehicle into a medical data carrier, ensuring that even "Shadow Zones" (no-internet areas) receive professional-grade diagnostic support.

##  Execution Guide: Running the Project
1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/your-username/asha-copilot.git](https://github.com/your-username/asha-copilot.git)
    cd asha-copilot
    ```
2.  **Install Dependencies**: Ensure you have the health-tech stack including Dexie.js and Lucide React:
    ```bash
    npm install
    ```
3.  **Initialize Tambo**: Link your local environment to the Tambo cloud orchestrator to generate your unique API key:
    ```bash
    npx tambo init
    ```
4.  **Launch the Engine**: Start the local development server:
    ```bash
    npm run dev
    ```
5.  **Access Dashboard**: Open [http://localhost:3000](http://localhost:3000) to view the active ASHA interface.

## 🧠 Technical Deep Dive
The ASHA Copilot is engineered as a **Digital Public Infrastructure (DPI)** for low-resource settings.

### 1. Generative UI Orchestration (Tambo SDK)
* **Dynamic Component Rendering**: Instead of a static app, the SDK uses natural language intent to decide which medical tools to render.
* **Intent Mapping**: Intent is matched against schemas in `tambo.config.ts` to stream the `DiagnosticCard` directly into the chat.

### 2. Resilient Data Layer (Dexie.js & IndexedDB)
* **Offline-First Architecture**: Addresses the "Shadow Zone" problem by managing an industrial-grade local database.
* **Data Integrity**: Every patient screening is stored locally in `db.ts`, ensuring zero data loss during network outages.

### 3. Hydra-Mesh: Decentralized Synchronization
* **Peer-to-Peer Relay**: Implements a protocol where medical data is "handed off" to passing vehicles (Vahaks) via Bluetooth/NFC.
* **Data Mule Logic**: Vehicles act as physical data carriers, transporting requests from offline villages to online PHCs.

### 4. Neural Logistics Engine (ST-GNN & Quantum Optimization)
* **Spatio-Temporal GNN**: Predicts road reliability by analyzing historical monsoon data and real-time weather nodes.
* **Quantum Routing**: Uses **Simulated Bifurcation** to solve complex multi-node routing for vaccine "Cold-Chain" stability.

### 5. Multi-Lingual Inclusivity (Bhashini API)
* **Voice-to-Intent**: Integrates India's Bhashini API for real-time translation and voice interaction in local dialects.

##  Impact & SDG Alignment
* **SDG 3.8**: Enables Universal Health Coverage by removing geographical barriers.
* **Efficiency**: Targeted 40% reduction in medical lead times through decentralized data syncing.

* ##  Tech Stack
* **Framework**: Next.js 15 (Standard Tambo + Tools + MCP Template).
* **UI/UX**: Tailwind CSS, Lucide React, and Tambo Generative UI.
* **Local DB**: Dexie.js (IndexedDB).
* **Voice/Neural**: Direct Bhashini API integration for multi-lingual rural outreach.

##  Impact & SDG Alignment
* **SDG 3.8**: Directly enables Universal Health Coverage in low-resource settings by removing geographical barriers.
* **Efficiency**: Targeted 40% reduction in medical lead times through proactive, decentralized data syncing.
* **Sustainability**: A cost-effective solution that leverages existing rural transportation infrastructure.

---

###  Getting Started
1.  **Clone the repo**: `git clone https://github.com/your-username/asha-copilot.git`
2.  **Install dependencies**: `npm install`
3.  **Initialize Tambo**: `npx tambo init`
4.  **Run Dev**: `npm run dev`
