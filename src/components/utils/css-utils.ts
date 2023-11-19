export function cn(...classNames: string[]) {
	const tmp: string[] = [];
	classNames.map((c) => (c ? tmp.push(c) : null));
	return tmp.join(' ');
}
