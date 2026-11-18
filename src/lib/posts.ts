export type LorePostTag = 'Hidden detail' | 'Guide' | 'Open question';

export type LorePost = {
	id: string;
	community: string;
	title: string;
	excerpt: string;
	author: string;
	initials: string;
	publishedAt: string;
	tags: LorePostTag[];
};

export const SAMPLE_LORE_POSTS: LorePost[] = [
	{
		id: 'starless-atlas',
		community: 'The Starless Atlas',
		title: 'The map in the endpapers changes after the storm',
		excerpt:
			'I compared the first and last editions side by side. There is a tiny inked doorway in the northern margin that only appears after chapter twelve.',
		author: 'Mara Vell',
		initials: 'MV',
		publishedAt: '18 minutes ago',
		tags: ['Hidden detail']
	},
	{
		id: 'glass-orchard',
		community: 'Glass Orchard Mysteries',
		title: 'A reading order for the letters beneath the observatory',
		excerpt:
			'The dates look out of sequence until you line them up with the lunar calendar. I made a clean timeline for anyone following along.',
		author: 'Elias North',
		initials: 'EN',
		publishedAt: '1 hour ago',
		tags: ['Guide']
	},
	{
		id: 'winter-court',
		community: 'The Winter Court',
		title: 'Who is leaving the pressed violets in the margins?',
		excerpt:
			'Three volumes, three different hands, and the same violet ink. I think the annotations are answering each other across the series.',
		author: 'June Wren',
		initials: 'JW',
		publishedAt: '3 hours ago',
		tags: ['Open question']
	}
];
