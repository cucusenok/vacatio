import type { UserContactEntry, UserExperienceEntry } from '@/types/user.types';
import { typedEntries } from './object.helpers';
import { isDuplicate } from './string.helpers';
import { ContactsWeWant } from '@/constants/user.constants';

export const getMissingContacts = (contacts: UserContactEntry[]) => {
	const missingContacts = typedEntries(ContactsWeWant).filter(
		([_, value]) => !contacts.some((c) => isDuplicate(c.name!, value.label))
	);
	return missingContacts;
};

export const getOriginalEntryByDerivedFromExperienceId = (
	derivedFromExperienceId: string,
	experiences: UserExperienceEntry[]
) => {
	return experiences.find((experience) => experience?.id === derivedFromExperienceId)?.userBulletPoints;
};
