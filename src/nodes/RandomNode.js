import { BaseNode } from './baseNode';

export const RandomNode = ({ id }) => {
  return (
    <BaseNode
      title="Random"
      inputs={[]}
      outputs={[`${id}-value`]}
    >
      <div>Generate random number</div>
    </BaseNode>
  );
};