export type Intermediate<T extends Record<string, unknown>> = Omit<
	T,
	'id' | 'createdAt' | 'updatedAt' | 'cvId' | 'userId' | 'cvExperienceId' | 'userBulletPoints'
>;
