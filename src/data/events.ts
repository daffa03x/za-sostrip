export interface EventTicket {
	name: string;
	priceLabel: string;
	priceRaw?: number;
	description: string;
	status: string;
}

export interface EventAgendaItem {
	timeLabel: string;
	title: string;
	description: string;
}

export interface EventStat {
	label: string;
	value: string;
}

export interface EventDetail {
	slug: string;
	title: string;
	date: string;
	location: string;
	venue: string;
	directionUrl?: string;
	category: string;
	status: string;
	isSoldOut?: boolean;
	image: string;
	imageAlt: string;
	badgeLines?: [string, string];
	summary: string;
	impactNote: string;
	stats: EventStat[];
	highlights: string[];
	tickets: EventTicket[];
	agenda: EventAgendaItem[];
	notes: string[];
}

export const events: EventDetail[] = [
	{
		slug: 'run-and-rise-2026',
		title: 'Run & Rise 2026',
		date: 'Minggu, 30 Agustus 2026',
		location: 'Senayan Park, Jakarta',
		venue: 'Senayan Park',
		category: 'Running',
		status: 'Pendaftaran segera dibuka',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuD2uX8VeH-QdsGDGXyrec1TEJjx98MoF5TrfGD2q49DsKtP2-3ZFPZn9-TIIs-lVvHXhC_TOxYY91imerxwe_87_RAlKZiCSe6qkPtl22d7kfmt_QnLDJ7rlbu-_cGrHH5L6Pi8dONIgqudULG_5_oF-A-Qq1WWVeF5o1V86JzjKnVNUdnqSFaJSi4w5utKmFxDk4yVgDCoracRqXaoP20S8fIR047lmP4fJ7U-6JW-d6BR5hjrs42XlSm66gsj1Cl6s6fZURCWwnFZ',
		imageAlt: 'Banner event Run & Rise 2026',
		badgeLines: ['BEYOND', 'the miles'],
		summary:
			'Run & Rise 2026 adalah ruang temu komunitas olahraga untuk bergerak bersama dan merayakan dampak sosial lewat aktivitas yang mudah diikuti.',
		impactNote: 'Sebagian informasi program sosial dan mekanisme kontribusi akan dikonfirmasi oleh tim penyelenggara.',
		stats: [
			{ label: 'Tanggal', value: '30 Agu 2026' },
			{ label: 'Kategori', value: 'Running' },
			{ label: 'Status', value: 'Segera dibuka' },
		],
		highlights: [
			'Pengalaman event komunitas yang ramah untuk pemula.',
			'Area gathering untuk peserta, komunitas, dan partner.',
			'Konten dampak sosial yang mudah dibagikan setelah event.',
		],
		tickets: [
			{
				name: 'Community Pass',
				priceLabel: 'Harga menyusul',
				description: 'Akses peserta umum dengan detail benefit yang akan diumumkan saat pendaftaran dibuka.',
				status: 'Segera dibuka',
			},
			{
				name: 'Group Pass',
				priceLabel: 'Hubungi tim event',
				description: 'Opsi untuk komunitas atau grup yang ingin bergerak bersama dalam satu pendaftaran.',
				status: 'Coming soon',
			},
		],
		agenda: [
			{
				timeLabel: 'Pagi',
				title: 'Registrasi ulang',
				description: 'Peserta melakukan check-in dan mengambil kebutuhan event sesuai instruksi panitia.',
			},
			{
				timeLabel: 'Pagi',
				title: 'Warm up komunitas',
				description: 'Sesi pemanasan bersama sebelum aktivitas utama dimulai.',
			},
			{
				timeLabel: 'Setelah finish',
				title: 'Community gathering',
				description: 'Ruang temu peserta, komunitas, dan partner untuk berbagi cerita event.',
			},
		],
		notes: ['Rundown final, harga tiket, dan benefit peserta akan diperbarui setelah data resmi tersedia.'],
	},
	{
		slug: 'nobel-run-2026',
		title: 'Nobel Run 2026',
		date: 'Minggu, 9 Agustus 2026',
		location: 'Senayan Park, Jakarta',
		venue: 'Senayan Park',
		category: 'Running',
		status: 'Detail event segera hadir',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rjp0sOLtkTcpbT9LvLUFesFzI_zCYYjitJ6Qog9dqlRqVbGMQdPRxfj1HYbDYqjyPo9-LLQ5-uPSyM_eGm-qs2If5NWA2138NZx6jvgUlSPtFBjmL-n8e482Hls6nQ3Q6RwU1vk-HWxImSOM4MGaLxordGTp4nRduvcfDLgF5KjSp5zR9Jkpb4XVM2pIRPjB07gQHo8yaAb3uvNf5_rKO90CYMBB8bGZjwmMVIWMBp4u7B0lyTgKmc0JRMdmdWt2oDbtk2pIBpPu',
		imageAlt: 'Banner event Nobel Run 2026',
		summary:
			'Nobel Run 2026 menghadirkan pengalaman lari komunitas dengan format event yang akan diperbarui mengikuti informasi resmi penyelenggara.',
		impactNote: 'Detail program, benefit, dan aktivitas pendukung akan ditampilkan setelah materi resmi tersedia.',
		stats: [
			{ label: 'Tanggal', value: '9 Agu 2026' },
			{ label: 'Kategori', value: 'Running' },
			{ label: 'Status', value: 'Segera hadir' },
		],
		highlights: [
			'Konsep event komunitas dengan alur pendaftaran yang disiapkan bertahap.',
			'Area event publik yang mudah diakses peserta.',
			'Konten detail akan disinkronkan dengan backend saat API event tersedia.',
		],
		tickets: [
			{
				name: 'Participant Pass',
				priceLabel: 'Harga menyusul',
				description: 'Informasi harga dan benefit akan muncul setelah pendaftaran resmi dibuka.',
				status: 'Segera hadir',
			},
		],
		agenda: [
			{
				timeLabel: 'Akan dikonfirmasi',
				title: 'Rundown event',
				description: 'Agenda lengkap akan diperbarui setelah informasi resmi tersedia.',
			},
		],
		notes: ['Halaman ini siap menjadi template detail event saat data backend sudah terhubung.'],
	},
	{
		slug: 'community-move-day-2026',
		title: 'Community Move Day',
		date: 'Tanggal segera diumumkan',
		location: 'Jakarta',
		venue: 'Lokasi menyusul',
		category: 'Community',
		status: 'Detail segera hadir',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuCqzB0AkAB75E08MfOiX4ID43FNIpncTJyCVZnUg92YM7TyZS1jomncahc9rXyNATTfwHBfQ3EP5pFd42CIXLjHp9XFH8ZKfUO-AswbSvGkQhm3RME4nyECPxFovObrVEAf2IlYhkhE1dX5sJ17enKZUu2L9kj5_Vkl5oDDgwOG0o8OWGFqRq-1kQaWUlncewIo8OJhDnax4txaA9KltBPZbpojKpkwzCOhIPoqwZVc9Jz8AJr71xkh7h48xV69ncr-dNeISuph4RL5',
		imageAlt: 'Banner Community Move Day',
		summary: 'Community Move Day disiapkan sebagai agenda olahraga komunitas dengan format aktivitas yang akan diumumkan bertahap.',
		impactNote: 'Detail aktivitas, lokasi, dan kontribusi sosial akan diperbarui setelah informasi resmi tersedia.',
		stats: [
			{ label: 'Tanggal', value: 'Segera' },
			{ label: 'Kategori', value: 'Community' },
			{ label: 'Status', value: 'Segera hadir' },
		],
		highlights: [
			'Format event komunitas yang mudah diikuti.',
			'Informasi detail akan mengikuti materi resmi penyelenggara.',
			'Siap disambungkan ke data backend saat endpoint event tersedia.',
		],
		tickets: [
			{
				name: 'Community Pass',
				priceLabel: 'Harga menyusul',
				description: 'Detail benefit dan kuota akan diumumkan saat pendaftaran dibuka.',
				status: 'Segera hadir',
			},
		],
		agenda: [
			{
				timeLabel: 'Akan dikonfirmasi',
				title: 'Agenda komunitas',
				description: 'Rundown lengkap akan diperbarui setelah jadwal resmi tersedia.',
			},
		],
		notes: ['Data event ini masih placeholder sampai informasi resmi tersedia dari backend atau penyelenggara.'],
	},
	{
		slug: 'beyond-court-session-2026',
		title: 'Beyond Court Session',
		date: 'Tanggal segera diumumkan',
		location: 'Jakarta',
		venue: 'Lokasi menyusul',
		category: 'Padel',
		status: 'Detail segera hadir',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuD2uX8VeH-QdsGDGXyrec1TEJjx98MoF5TrfGD2q49DsKtP2-3ZFPZn9-TIIs-lVvHXhC_TOxYY91imerxwe_87_RAlKZiCSe6qkPtl22d7kfmt_QnLDJ7rlbu-_cGrHH5L6Pi8dONIgqudULG_5_oF-A-Qq1WWVeF5o1V86JzjKnVNUdnqSFaJSi4w5utKmFxDk4yVgDCoracRqXaoP20S8fIR047lmP4fJ7U-6JW-d6BR5hjrs42XlSm66gsj1Cl6s6fZURCWwnFZ',
		imageAlt: 'Banner Beyond Court Session',
		summary: 'Beyond Court Session adalah placeholder event court sport untuk menyiapkan alur daftar dan halaman detail yang konsisten.',
		impactNote: 'Detail partner venue, sesi permainan, dan kontribusi event akan diperbarui saat data resmi tersedia.',
		stats: [
			{ label: 'Tanggal', value: 'Segera' },
			{ label: 'Kategori', value: 'Padel' },
			{ label: 'Status', value: 'Segera hadir' },
		],
		highlights: [
			'Sesi olahraga komunitas dengan format yang akan diumumkan.',
			'Template detail event sudah siap untuk data final.',
			'CTA dan tiket tetap memakai format yang sama dengan event lain.',
		],
		tickets: [
			{
				name: 'Participant Pass',
				priceLabel: 'Harga menyusul',
				description: 'Benefit peserta akan diperbarui mengikuti informasi resmi.',
				status: 'Segera hadir',
			},
		],
		agenda: [
			{
				timeLabel: 'Akan dikonfirmasi',
				title: 'Court session',
				description: 'Detail sesi dan slot waktu akan disesuaikan dengan venue.',
			},
		],
		notes: ['Gunakan data backend final untuk mengganti placeholder ini.'],
	},
	{
		slug: 'sostrip-bike-gathering-2026',
		title: 'Sostrip Bike Gathering',
		date: 'Tanggal segera diumumkan',
		location: 'Jakarta',
		venue: 'Lokasi menyusul',
		category: 'Bike',
		status: 'Detail segera hadir',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuDxA0fXm5rlGmiDKdtAhboWX7AB0shhHtBTNq_THjSSLixvg301Q2KHKDaIHBaD-ir6FE8iF0YRXDZ02e9ED1MGzcSBHNo6wgoeTDnIlT4BRyHbXx9DmAK_K5GRRPNnrgpjp2MQCfmd4pRrFmF1wdnl7zJbFygUVtuS2uQNdYXDKMBUMTj06KMY0H3lI6Rr-L7qqcuyxRUrL2gHvesbeZs8G7GZBw8eVVjbFex-clEdmGg8dhmtjVe8TFbGHcnUzxJ69cUPhjNw1yGg',
		imageAlt: 'Banner Sostrip Bike Gathering',
		summary: 'Sostrip Bike Gathering disiapkan sebagai agenda bersepeda komunitas dengan informasi rute dan lokasi yang menyusul.',
		impactNote: 'Rute, titik kumpul, dan detail kontribusi sosial akan diperbarui setelah data resmi tersedia.',
		stats: [
			{ label: 'Tanggal', value: 'Segera' },
			{ label: 'Kategori', value: 'Bike' },
			{ label: 'Status', value: 'Segera hadir' },
		],
		highlights: [
			'Agenda komunitas untuk peserta yang ingin bergerak bersama.',
			'Rute dan titik kumpul akan diumumkan kemudian.',
			'Siap menjadi halaman detail saat data final masuk.',
		],
		tickets: [
			{
				name: 'Rider Pass',
				priceLabel: 'Harga menyusul',
				description: 'Detail akses peserta akan diperbarui saat pendaftaran resmi tersedia.',
				status: 'Segera hadir',
			},
		],
		agenda: [
			{
				timeLabel: 'Akan dikonfirmasi',
				title: 'Bike gathering',
				description: 'Rundown dan titik kumpul akan diperbarui dari informasi penyelenggara.',
			},
		],
		notes: ['Data rute dan lokasi masih placeholder.'],
	},
];

export const getEventBySlug = (slug: string) => events.find((event) => event.slug === slug);
