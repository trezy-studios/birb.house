// Module imports
import { type Edge } from '@xyflow/react'
import { v4 as uuid } from 'uuid'





// Local imports
import { getPalette } from '@/helpers/getPalette'
import { type Node } from '@/typedefs/Node'





export const initialState: {
	edges: Edge[],
	nodes: Node[],
	palette: Map<string, string>,
} = {
	edges: [
		{
			id: 'sf1-ht1',
			source: 'sf1',
			sourceHandle: 'right',
			target: 'ht1',
			targetHandle: 'top',
		},
		{
			id: 'ht1-ny1',
			source: 'ht1',
			sourceHandle: 'right',
			target: 'ny1',
			targetHandle: 'left',
		},
		{
			id: 'ny1-ln1',
			source: 'ny1',
			sourceHandle: 'right',
			target: 'ln1',
			targetHandle: 'left',
		},
	],
	nodes: [
		{
			data: {
				label: 'San Francisco, US',
				instances: Array(17).fill(true),
			},
			id: 'sf1',
			position: {
				x: 0,
				y: 0,
			},
		},
		{
			data: {
				label: 'Houston, US',
				instances: Array(9).fill(true),
			},
			id: 'ht1',
			position: {
				x: 0,
				y: 192,
			},
		},
		{
			data: {
				label: 'New York, US',
				instances: Array(15).fill(true),
			},
			id: 'ny1',
			position: {
				x: 0,
				y: 288,
			},
		},
		{
			data: {
				label: 'London, UK',
				instances: Array(2).fill(true),
			},
			id: 'ln1',
			position: {
				x: 0,
				y: 400,
			},
		},
	],
	palette: getPalette(),
}
