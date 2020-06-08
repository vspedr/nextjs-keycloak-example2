import Head from "next/head";

import { useAuth } from "../hooks";

export default function Home() {
  const { user, login, logout, keycloakInstance } = useAuth();

  console.info({ user, keycloakInstance });

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Keycloak Auth</h1>
      <h2>Hello {`${user?.name || "anonymous"}`}</h2>

      {user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}

      <br />
      <br />
      <code>{JSON.stringify({ user }, null, 2)}</code>
    </div>
  );
}
