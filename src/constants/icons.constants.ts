export type IconKey =
	| 'Email'
	| 'Phone'
	| 'Location'
	| 'Website'
	| 'LinkedIn'
	| 'Git'
	| 'GitLab'
	| 'Twitter'
	| 'VK'
	| 'X'
	| 'Check'
	| 'Star'
	| 'jQuery'
	| 'Kafka'
	| 'JavaScript'
	| 'TypeScript'
	| 'Firebase'
	| 'MongoDB'
	| 'NodeJS'
	| 'React'
	| 'Laravel'
	| 'NextJS'
	| 'Tailwind'
	| 'Vue'
	| 'HTML'
	| 'CSS'
	| 'SCSS'
	| 'REST'
	| 'JSON'
	| 'Webpack'
	| 'Design'
	| 'MySQL'
	| 'PostgreSQL'
	| 'Sass'
	| 'DotNet'
	| 'CSharp'
	| 'Cypress'
	| 'ReactTestingLibrary'
	| 'Redux'
	| 'Scrum'
	| 'Kubernetes'
	| 'ESLint'
	| 'AWS'
	| 'GraphQL'
	| 'Svelte'
	| 'tRPC'
	| 'Linux'
	| 'Docker'
	| 'Prisma'
	| 'Redis'
	| 'NPM'
	| 'Vite'
	| 'RubyOnRails'
	| 'ReactQuery'
	| 'Jest'
	| 'Angular'
	| 'NestJS'
	| 'SQL'
	| 'Java'
	| 'Gradle'
	| 'Jenkins'
	| 'Mocha'
	| 'StyledComponents'
	| 'Vercel'
	| 'Less'
	| 'Figma'
	| 'Link'
	| 'Cat';

export const iconKeywordsMap: { key: IconKey; partial: string[]; exact: string[] }[] = [
	{ key: 'Email', partial: ['email'], exact: [] },
	{ key: 'Phone', partial: ['phone'], exact: [] },
	{ key: 'Location', partial: ['address', 'location'], exact: ['state', 'country', 'city'] },
	{ key: 'Website', partial: [], exact: ['website'] },
	{ key: 'LinkedIn', partial: ['linkedin'], exact: [] },
	{ key: 'Git', partial: ['github', 'version control'], exact: ['git'] },
	{ key: 'GitLab', partial: ['gitlab'], exact: [] },
	{ key: 'Twitter', partial: [], exact: ['twitter'] },
	{ key: 'VK', partial: [], exact: ['vk'] },
	{ key: 'X', partial: [], exact: ['x'] },
	{ key: 'Check', partial: [], exact: ['check'] },
	{ key: 'Star', partial: [], exact: ['star'] },
	{ key: 'jQuery', partial: ['jquery'], exact: [] },
	{ key: 'Kafka', partial: [], exact: ['kafka'] },
	{ key: 'JavaScript', partial: ['javascript', 'ecmascript', 'es6', 'es5'], exact: ['js'] },
	{ key: 'TypeScript', partial: ['typescript'], exact: ['ts'] },
	{ key: 'Firebase', partial: ['firebase'], exact: [] },
	{ key: 'MongoDB', partial: ['mongo', 'mongoose'], exact: [] },
	{ key: 'NodeJS', partial: ['nodejs', 'node.js'], exact: [] },
	{ key: 'React', partial: ['reactjs', 'react.js', 'react native'], exact: ['react'] },
	{ key: 'Laravel', partial: [], exact: ['laravel'] },
	{ key: 'NextJS', partial: ['nextjs', 'next.js'], exact: [] },
	{ key: 'Tailwind', partial: ['tailwind', 'tailwindcss', 'tailwind css'], exact: [] },
	{ key: 'Vue', partial: ['vue.js', 'vue', 'vuejs'], exact: [] },
	{ key: 'HTML', partial: ['html5', 'html'], exact: [] },
	{ key: 'CSS', partial: [], exact: ['css3', 'css'] },
	{ key: 'SCSS', partial: ['scss'], exact: [] },
	{ key: 'REST', partial: ['RESTful APIs', 'REST API'], exact: [] },
	{ key: 'JSON', partial: [], exact: ['json'] },
	{ key: 'Webpack', partial: ['webpack'], exact: [] },
	{ key: 'Design', partial: [], exact: ['design'] },
	{ key: 'MySQL', partial: ['mysql'], exact: [] },
	{ key: 'PostgreSQL', partial: ['postgres'], exact: [] },
	{ key: 'Sass', partial: ['sass'], exact: [] },
	{ key: 'DotNet', partial: ['dotnet', '.net core'], exact: ['.net', 'dotnet'] },
	{ key: 'CSharp', partial: ['c#'], exact: [] },
	{ key: 'Cypress', partial: [], exact: ['cypress'] },
	{ key: 'ReactTestingLibrary', partial: ['react testing library'], exact: [] },
	{ key: 'Redux', partial: ['redux', 'redux toolkit'], exact: [] },
	{ key: 'Scrum', partial: ['scrum'], exact: [] },
	{ key: 'Kubernetes', partial: ['kubernetes'], exact: [] },
	{ key: 'ESLint', partial: ['eslint'], exact: [] },
	{ key: 'AWS', partial: ['aws'], exact: [] },
	{ key: 'GraphQL', partial: ['graphql'], exact: [] },
	{ key: 'Svelte', partial: ['svelte'], exact: [] },
	{ key: 'tRPC', partial: ['trpc'], exact: [] },
	{ key: 'Linux', partial: ['linux'], exact: [] },
	{ key: 'Docker', partial: ['docker'], exact: [] },
	{ key: 'Prisma', partial: [], exact: ['prisma', 'prisma orm'] },
	{ key: 'Redis', partial: [], exact: ['redis'] },
	{ key: 'NPM', partial: [], exact: ['npm'] },
	{ key: 'Vite', partial: [], exact: ['vite'] },
	{ key: 'RubyOnRails', partial: ['ruby on rails'], exact: [] },
	{ key: 'ReactQuery', partial: ['react query', 'reactquery', 'tanstack'], exact: [] },
	{ key: 'Jest', partial: ['jest'], exact: [] },
	{ key: 'Angular', partial: [], exact: ['angular', 'angular.js'] },
	{ key: 'NestJS', partial: [], exact: ['nestjs', 'nest.js'] },
	{ key: 'SQL', partial: [], exact: ['sql'] },
	{ key: 'Java', partial: [], exact: ['java'] },
	{ key: 'Gradle', partial: [], exact: ['gradle'] },
	{ key: 'Jenkins', partial: ['jenkins'], exact: [] },
	{ key: 'Mocha', partial: ['mocha'], exact: [] },
	{ key: 'StyledComponents', partial: ['styled-components'], exact: [] },
	{ key: 'Vercel', partial: ['vercel'], exact: [] },
	{ key: 'Less', partial: [], exact: ['less'] },
	{ key: 'Figma', partial: ['figma'], exact: [] },
	{ key: 'Link', partial: [], exact: ['link'] }
];

export const availableIcons = iconKeywordsMap.map((icon) => icon.key);
