// import { PipelineToolbar } from './toolbar';
// import { PipelineUI } from './ui';
// import { SubmitButton } from './submit';
// import { ReactFlowProvider } from 'reactflow';

// // function App() {
// //   return (
// //     <div>
// //       <PipelineToolbar />
// //       <PipelineUI />
// //       <SubmitButton />
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       fontFamily: 'Arial, sans-serif',
//       background: '#f5f7fb'
//     }}>
      
//       {/* Toolbar */}
//       <div style={{
//         padding: '10px 20px',
//         background: '#ffffff',
//         borderBottom: '1px solid #ddd',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//       }}>
//         <PipelineToolbar />
//       </div>

//       {/* Main UI */}
//       <div style={{
//         flex: 1,
//         padding: '20px'
//       }}>
//         <PipelineUI />
//       </div>

//       {/* Submit Button */}
//       <div style={{
//         padding: '15px',
//         background: '#ffffff',
//         borderTop: '1px solid #ddd',
//         textAlign: 'center'
//       }}>
//         {/* <SubmitButton /> */}
//       </div>

//     </div>
//   );
// }

// export default App;


import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <ReactFlowProvider>   {/* ✅ ADD THIS */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f5f7fb'
      }}>
        
        {/* Toolbar */}
        <div style={{
          padding: '10px 20px',
          background: '#ffffff',
          borderBottom: '1px solid #ddd',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <PipelineToolbar />
        </div>

        {/* Main UI */}
        <div style={{
          flex: 1,
          padding: '20px'
        }}>
          <PipelineUI />
        </div>

      </div>
    </ReactFlowProvider>   
  );
}

export default App;