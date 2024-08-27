import { cookies, headers } from "next/headers";
import Image from "next/image";

export default function Home() {
  const headersList = headers();
  const keyList = [
    "X_MS_CLIENT_PRINCIPAL",
    "X-MS-CLIENT-PRINCIPAL-ID",
    "X-MS-CLIENT-PRINCIPAL-NAME",
    "X-MS-CLIENT-PRINCIPAL-IDP",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
      <h2>Headers</h2>
      {keyList.map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {headersList.get(key)}
        </p>
      ))}
    </main>
  );
}
