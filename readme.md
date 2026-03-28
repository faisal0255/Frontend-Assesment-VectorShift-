# 🚀 VectorShift Frontend Technical Assessment

## 📌 Overview

This project is a **node-based pipeline builder** built using **React (Frontend)** and **FastAPI (Backend)**.

Users can visually create workflows by:

* Adding nodes
* Connecting them with edges
* Submitting the pipeline for analysis

The backend processes the pipeline and returns:

* Number of nodes
* Number of edges
* Whether the pipeline forms a **Directed Acyclic Graph (DAG)**

---

## 🧠 Key Features

### 🔹 1. Node Abstraction

* Created a reusable `BaseNode` component
* Reduced code duplication across all nodes
* Easily extendable for new node types

### 🔹 2. Multiple Node Types

Implemented:

* Input Node
* Output Node
* LLM Node
* Text Node
* Math Node
* Random Node
* Delay Node
* Filter Node
* API Node

---

### 🔹 3. Dynamic Text Node

* Auto-resizing input field
* Detects variables using `{{variable}}` syntax
* Dynamically creates input handles

---

### 🔹 4. Clean UI & Styling

* Consistent node design
* Improved layout and spacing
* Enhanced user experience

---

### 🔹 5. Drag & Drop Interface

* Users can drag nodes from toolbar
* Connect nodes visually using edges
* Interactive workflow creation

---

### 🔹 6. Backend Integration

* Frontend sends pipeline data via API
* Backend processes nodes and edges
* Returns structured response

---

### 🔹 7. DAG Validation

* Backend checks if pipeline is a Directed Acyclic Graph
* Detects cycles using DFS (Depth First Search)

---

## 🏗️ Project Structure

```
frontend/
  ├── src/
  │   ├── nodes/
  │   ├── ui.js
  │   ├── toolbar.js
  │   ├── submit.js

backend/
  ├── main.py
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```
git clone <your-repo-link>
cd project-folder
```

---

### 🔹 2. Run Frontend

```
cd frontend
npm install
npm start
```

---

### 🔹 3. Run Backend

```
cd backend
python -m pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

---

### 🔹 4. Access Application

* Frontend: http://localhost:3000
* Backend: http://127.0.0.1:8000
* API Docs: http://127.0.0.1:8000/docs

---

## 🔗 API Endpoint

### POST `/pipelines/parse`

#### Request:

```json
{
  "nodes": [...],
  "edges": [...]
}
```

#### Response:

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

---

## 🧪 How to Use

1. Drag nodes from toolbar
2. Connect nodes
3. Click **Submit**
4. View pipeline analysis in alert

---

## 🧠 Concepts Used

* ReactFlow (graph-based UI)
* Component abstraction
* State management (Zustand)
* FastAPI backend
* Graph theory (DAG, cycle detection)
* REST API integration

---

## 🎯 Objective of the Assessment

This project demonstrates:

* Clean code architecture
* Reusability and scalability
* Frontend-backend integration
* Problem-solving and debugging skills
* Understanding of graph-based systems

---

## 🏁 Conclusion

This project showcases a complete **full-stack workflow builder**, combining UI design, logic handling, and backend processing with real-world concepts like DAG validation.

---

## 🙌 Author

Faisal Raza

---
