import { useState, useEffect } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // 🔥 Extract variables like {{name}}
  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    const matches = [...currText.matchAll(regex)];
    
    const vars = matches.map(match => match[1].trim());
    setVariables(vars);
  }, [currText]);

  return (
    <BaseNode
      title="Text"
      inputs={variables}   // 👈 dynamic handles
      outputs={[`${id}-output`]}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={Math.max(1, currText.split('\n').length)}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
};