import { BaseNode } from './baseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[`${id}-request`]}
      outputs={[`${id}-response`]}
    >
      <div>Call external API</div>
    </BaseNode>
  );
};