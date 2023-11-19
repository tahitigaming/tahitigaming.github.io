import { type ReactNode } from 'react';
import { CopyCurrentUrlButton } from '../buttons/Button';

export default function Article({
	title,
	tag,
	subtitle,
	date,
	children,
	coverImageUrl
}: {
	title: string;
	tag?: string;
	subtitle?: string;
	date: string;
	children: ReactNode;
	coverImageUrl?: string;
}) {
	return (
		<div className={`max-w-full`}>
			<p className={`h-32 w-full`} />
			<div className={`max-w-2xl px-3 md:px-0 mx-auto text-lg pb-6`}>
				<div
					className={`text-xs text-gray-400 uppercase font-semibold`}
				>
					{tag || `Update`}
				</div>
				<p className={`text-sm pt-2 text-gray-400 font-semibold pb-5`}>
					{date}
				</p>
				<ArticleHeading title={title} />
				{subtitle && (
					<p className={`pt-5 text-xl text-gray-300`}>{subtitle}</p>
				)}
				<ArticleShareButtons />
			</div>
			{coverImageUrl && <ArticleImageModule imageUrl={coverImageUrl} />}
			{children}
			<ArticleShareButtons title={`Share Article`} />
			<p className={`h-16 w-full`} />
		</div>
	);
}

export function ArticleTextModule({
	children,
	title
}: {
	children: ReactNode;
	title?: string;
}) {
	return (
		<div
			className={`max-w-2xl px-3 md:px-0 mx-auto text-lg pb-6 space-y-6`}
		>
			{title ? (
				<h2 className={`font-semibold text-2xl pt-14 mb-4`}>{title}</h2>
			) : (
				<p className={`w-full h-12`} />
			)}
			{children}
		</div>
	);
}

function ArticleHeading({ title }: { title: string }) {
	return <h1 className={`text-5xl text-white font-semibold`}>{title}</h1>;
}

export function ArticleImageModule({
	imageUrl,
	description,
	hidden
}: {
	imageUrl?: string;
	description?: string;
	hidden?: boolean;
}) {
	if (hidden || !imageUrl) return null;
	return (
		<div className={`my-11 mx-auto max-w-5xl`}>
			<div
				className={`max-w-full max-h-[95vh] min-h-[576px] lg:bg-gray-800 lg:rounded-xl overflow-hidden flex items-center justify-center`}
			>
				<img
					className='mx-auto max-h-[95vh] max-w-full w-fit h-fit'
					alt={`Image`}
					src={imageUrl}
				/>
			</div>
			{description && (
				<p
					className={`max-w-2xl px-3 md:px-0 mx-auto pt-4 text-xs font-semibold text-gray-400`}
				>
					{description}
				</p>
			)}
		</div>
	);
}

function ArticleShareButtons({ title }: { title?: string }) {
	return (
		<div className={`max-w-2xl mx-auto py-9 px-2 md:px-0 text-lg`}>
			{title && (
				<h3 className={`pb-4 pt-9 font-semibold text-gray-200`}>
					{title}
				</h3>
			)}
			<div className={`flex flex-row space-x-4 text-gray-400`}>
				<CopyCurrentUrlButton
					type={`button`}
					title={`Click to Copy Link to Article`}
					className={`text-gray-400 hover:text-gray-100 cursor-pointer`}
				>
					<i className={`fas fa-link`} />
				</CopyCurrentUrlButton>
			</div>
		</div>
	);
}
