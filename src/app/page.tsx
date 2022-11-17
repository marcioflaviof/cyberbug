import RootLayout from "src/app/layout";
import HomePage from "./HomePage";

export default async function Page() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}
