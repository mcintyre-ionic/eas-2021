// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const environment = {
  production: false
};

export const nativeIonicAuthOptions: IonicAuthOptions = {
  // The auth provider.
  authConfig: 'azure',
  // The platform which the app is running on
  platform: 'capacitor',
  // client or application id for provider
  clientID: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
  // the URI to redirect to after log in
  redirectUri: 'ionic.cs.appsummit://login',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'ionic.cs.appsummit://login',
  // The type of iOS webview to use. 'shared' will use a webview that can
  // share session/cookies on iOS to provide SSO across multiple apps but
  // will cause a prompt for the user which asks them to confirm they want
  // to share site data with the app. 'private' uses a webview which will
  // not prompt the user but will not be able to share session/cookie data
  // either for true SSO across multiple apps.
  iosWebView: 'private',
  webAuthFlow: 'PKCE'
};

export const webIonicAuthOptions: IonicAuthOptions = {
  // The auth provider.
  authConfig: 'azure',
  // The platform which the app is running on
  platform: 'web',
  // client or application id for provider
  clientID: '5a5ef942-0e44-46a8-bbac-6a8ba7654eb0',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://ioniccs.b2clogin.com/ioniccs.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_SignUp',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/auth-transition',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://ioniccs.onmicrosoft.com/5a5ef942-0e44-46a8-bbac-6a8ba7654eb0/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/auth-transition#logout',
  // The type of iOS webview to use. 'shared' will use a webview that can
  // share session/cookies on iOS to provide SSO across multiple apps but
  // will cause a prompt for the user which asks them to confirm they want
  // to share site data with the app. 'private' uses a webview which will
  // not prompt the user but will not be able to share session/cookie data
  // either for true SSO across multiple apps.
  iosWebView: 'private',
  implicitLogin: 'CURRENT',
  webAuthFlow: 'PKCE'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
