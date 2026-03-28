import { Handle, Position } from 'reactflow';

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div style={{
      width: 220,
      minHeight: 100,
      border: '1px solid #ddd',
      padding: 12,
      borderRadius: 12,
      background : '#ffffff',
      boxShadow : '0 4px 10px rgba(0,0,0,0.08)',
      position: 'relative'
    }}>
      
      {/* Title */}
      <div>
        <strong style={{
        fontSize: '14px',
        color: '#333',
        marginBottom: '8px',
  display: 'block'
}}>
  {title}
</strong>
      </div>

      {/* Inputs (left side, auto spaced) */}
      {inputs.map((input, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: `${(index + 1) * 100 / (inputs.length + 1)}%` }}
        />
      ))}

      {/* Content */}
     <div style={{
  marginTop: '8px'
}}>
  {children}
</div>

      {/* Outputs (right side) */}
      {outputs.map((output, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: `${(index + 1) * 100 / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};