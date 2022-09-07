export type ComposeProvidersProps = {
  with: Array<React.ElementType>;
  children: React.ReactNode;
}

export function ComposeProviders({
  with: Providers,
  children,
}: ComposeProvidersProps) {
  return (
    <>
      {Providers.reduce(
        (AccProviders, Provider) => (
          <Provider>{AccProviders}</Provider>
        ),
        children,
      )}
    </>
  );
}
