type LayoutProps = Readonly<{
	children: React.ReactNode;
	params: Record<string, string | string[] | undefined>;
}>;

type Param = string | string[] | undefined;

type PageProps<S = Param, P = Param> = Readonly<{
	searchParams: S;
	params: P;
}>;
