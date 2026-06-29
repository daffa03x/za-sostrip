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

function deriveStatus(item: EventListItem): string {
	if (!item.status) return 'Tutup';
	if (item.sisa_tiket <= 0) return 'Tiket Habis';
	return 'Tersedia';
}

export function mapToEventDetail(api: EventDetailAPI): EventDetail {
	const status = deriveStatus(api);

	return {
		slug: api.slug,
		title: api.name,
		date: api.waktu_mulai ? formatDate(api.waktu_mulai) : 'Tanggal menyusul',
		location: [api.kota, api.alamat].filter(Boolean).join(', ') || 'Lokasi menyusul',
		venue: api.nama_tempat || 'Lokasi menyusul',
		category: api.mitra || 'Event',
		status,
		image: api.image ?? '',
		imageAlt: `Banner event ${api.name}`,
		summary: api.deskripsi ?? '',
		impactNote: '',
		stats: [
			{ label: 'Tanggal', value: api.waktu_mulai ? formatDateShort(api.waktu_mulai) : 'Menyusul' },
			{ label: 'Lokasi', value: api.kota ?? 'Menyusul' },
			{ label: 'Status', value: status },
		],
		highlights: [],
		tickets: [
			{
				name: 'Tiket Event',
				priceLabel: api.harga > 0 ? formatRupiah(api.harga) : 'Gratis',
				priceRaw: api.harga,
				description: api.sisa_tiket > 0 ? `${api.sisa_tiket} tiket tersisa` : 'Tiket habis',
				status,
			},
		],
		agenda: [],
		notes: api.sisa_tiket <= 0 ? ['Tiket untuk event ini sudah habis.'] : [],
	};
}

export function mapListItemToEventDetail(api: EventListItem): EventDetail {
	const status = deriveStatus(api);
	return {
		slug: api.slug,
		title: api.name,
		date: api.waktu_mulai ? formatDate(api.waktu_mulai) : 'Tanggal menyusul',
		location: api.kota ?? 'Lokasi menyusul',
		venue: '',
		category: api.mitra ?? 'Event',
		status,
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
				description: '',
				status,
			},
		],
		agenda: [],
		notes: [],
	};
}
