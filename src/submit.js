// // submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }

import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    console.log("📤 Sending data:", { nodes, edges });

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      console.log("📡 Response status:", response.status);

      // ❗ Handle non-200 responses
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Response data:", data);

      alert(`
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}
      `);

    } catch (error) {
      console.error("❌ FULL ERROR:", error);
      alert('Error connecting to backend');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={handleSubmit}
        style={{
          padding: '6px 12px',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </div>
  );
};