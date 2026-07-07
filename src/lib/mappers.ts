import type { EventDetailAPI, EventListItem } from './api';
import type { EventDetail } from '../data/events';

function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('id-ID', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}

function formatDateShort(iso: string): string {
	return new Date(iso).toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
}

function formatRupiah(amount: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
	}).format(amount);
}

function isActiveStatus(status: EventListItem['status']): boolean {
	if (typeof status === 'string') {
		const normalized = status.trim().toLowerCase();
		if (!normalized) return false;
		return !['0', 'n', 'no', 'false', 'nonaktif', 'inactive', 'tutup', 'closed'].includes(normalized);
	}

	return Boolean(status);
}

function isSoldOut(item: EventListItem): boolean {
	return Boolean(item.is_sold_out) || !isActiveStatus(item.status) || item.sisa_tiket <= 0;
}

function deriveStatus(item: EventListItem): string {
	if (isSoldOut(item)) return 'Sold Out';
	return 'Tersedia';
}

export function mapToEventDetail(api: EventDetailAPI): EventDetail {
	const status = deriveStatus(api);
	const soldOut = isSoldOut(api);

	return {
		slug: api.slug,
		title: api.name,
		date: api.waktu_mulai ? formatDate(api.waktu_mulai) : 'Tanggal menyusul',
		location: [api.kota, api.alamat].filter(Boolean).join(', ') || 'Lokasi menyusul',
		venue: api.nama_tempat || 'Lokasi menyusul',
		directionUrl: api.direction_url ?? '',
		category: api.mitra || 'Event',
		status,
		isSoldOut: soldOut,
		image: api.image ?? '',
		imageAlt: `Banner event ${api.name}`,
		summary: api.deskripsi ?? '',
		impactNote: '',
		stats: [
			{ label: 'Tanggal', value: api.waktu_mulai ? formatDateShort(api.waktu_mulai) : 'Menyusul' },
			{ label: 'Lokasi', value: api.kota ?? 'Menyusul' },
			{ label: 'Status', value: status },
		],
		highlights: (api.benefits ?? []).filter(Boolean),
		tickets: [
			{
				name: 'Tiket Event',
				priceLabel: api.harga > 0 ? formatRupiah(api.harga) : 'Gratis',
				priceRaw: api.harga,
				description: soldOut ? 'Tiket habis' : `${api.sisa_tiket} tiket tersisa`,
				status,
			},
		],
		agenda: (api.agenda ?? [])
			.map((item) => ({
				timeLabel: item.time_label ?? '',
				title: item.title ?? '',
				description: item.description ?? '',
			}))
			.filter((item) => item.timeLabel || item.title || item.description),
		notes: soldOut ? ['Event ini sudah Sold Out.'] : [],
	};
}

export function mapListItemToEventDetail(api: EventListItem): EventDetail {
	const status = deriveStatus(api);
	const soldOut = isSoldOut(api);
	return {
		slug: api.slug,
		title: api.name,
		date: api.waktu_mulai ? formatDate(api.waktu_mulai) : 'Tanggal menyusul',
		location: api.kota ?? 'Lokasi menyusul',
		venue: '',
		directionUrl: '',
		category: api.mitra ?? 'Event',
		status,
		isSoldOut: soldOut,
		image: api.image ?? '',
		imageAlt: `Banner event ${api.name}`,
		summary: '',
		impactNote: '',
		stats: [],
		highlights: [],
		tickets: [
			{
				name: 'Tiket Event',
				priceLabel: api.harga > 0 ? formatRupiah(api.harga) : 'Gratis',
				priceRaw: api.harga,
				description: soldOut ? 'Tiket habis' : `${api.sisa_tiket} tiket tersisa`,
				status,
			},
		],
		agenda: [],
		notes: [],
	};
}
