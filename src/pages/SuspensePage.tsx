import SuspenseUseCase from "../Suspense/Demo";

export default function SuspensePage() {
  return (
    <SuspenseUseCase
      artist={{
        id: "the-beatles",
        name: "The Beatles",
      }}
    />
  );
}
