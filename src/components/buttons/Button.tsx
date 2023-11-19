'use client';

export default function Button(props: any) {
	return <button {...props} />;
}

export function CopyCurrentUrlButton(props: any) {
	return (
		<button
			{...props}
			onClick={() =>
				window?.navigator?.clipboard?.writeText?.(document.URL)
			}
		/>
	);
}
