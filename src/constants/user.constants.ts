import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import type { UserRelations, UserWithoutRelations } from '@/types/user.types';
import { typedKeys } from '@/helpers/object.helpers';

export const UserWithoutRelationsPicker: Record<keyof UserWithoutRelations, true> = {
	id: true,
	name: true,
	email: true,
	image: true,
	createdAt: true,
	updatedAt: true,
	summary: true,
	jobTitle: true
};

export const UserRelationsPicker: Record<keyof UserRelations, true | { with: Record<string, true> }> = {
	experiences: {
		with: { userBulletPoints: true }
	},
	educations: true,
	skills: true,
	languages: true,
	contacts: true
};

export const UserWithoutRelationsKeysArray = typedKeys(UserWithoutRelationsPicker);
export const UserRelationsKeysArray = typedKeys(UserRelationsPicker);

export const ContactsWeWant = {
	email: {
		label: 'Email',
		Icon: MdOutlineAlternateEmail
	},
	github: {
		label: 'GitHub',
		Icon: SiGithub
	},
	phone: {
		label: 'Phone',
		Icon: FaPhone
	},
	linkedin: {
		label: 'LinkedIn',
		Icon: GrLinkedin
	},
	address: {
		label: 'Address',
		Icon: FaMapMarkerAlt
	},
	country: {
		label: 'Country',
		Icon: FaMapMarkerAlt
	},
	city: {
		label: 'City',
		Icon: FaMapMarkerAlt
	},
	state: {
		label: 'State',
		Icon: FaMapMarkerAlt
	},
	location: {
		label: 'Location',
		Icon: FaMapMarkerAlt
	}
};
