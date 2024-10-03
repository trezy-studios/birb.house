// Module imports
import { type Node as ReactFlowNode } from '@xyflow/react'





export type Node = ReactFlowNode<{
	instances: any[],
	label: string,
}, 'default'>
