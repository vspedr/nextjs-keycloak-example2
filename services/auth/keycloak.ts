const Keycloak = typeof window !== "undefined" ? require("keycloak-js") : null;
export let keycloakInstance;

if (Keycloak && !keycloakInstance) {
  console.warn("[auth] creating keycloak instance");
  keycloakInstance = Keycloak({
    realm: "DemoRealm",
    url: "http://localhost:8080/auth",
    clientId: "react-client",
  });
  console.warn("[auth] created keycloak instance", keycloakInstance);
}

export const authenticate = async (): Promise<any> => {
  console.warn("[keycloak] calling init");
  const authenticated = await keycloakInstance.init({
    enableLogging: true,
    checkLoginIframe: false,
    // without this, "authenticated" always returns false
    onLoad: "check-sso",
    // without this, automatic login detection works every other time
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso",
  });
  console.warn("[keycloak] init finished, authenticated:", authenticated);

  return {
    authenticated,
    token: keycloakInstance?.idToken,
    user: keycloakInstance?.idTokenParsed,
  };
};
