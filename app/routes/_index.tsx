import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
	return [{ title: 'Recipe Book' }]
}

export default function Index() {
	return (
		<div>
			<h1 className="text-blue-900">INDEX PAGE</h1>
		</div>
	)
}
