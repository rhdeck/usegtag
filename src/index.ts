import { useEffect, useState } from "react";
let isReady = false;
let isError = false;
let isInstalling = false;
let _code: string | undefined;
const loadListeners: ((gtag: Gtag.Gtag) => void)[] = [];
//@ts-ignore
window.dataLayer = window.dataLayer || [];
//@ts-ignore
globalThis.gtag = () => {
  //@ts-ignore
  globalThis.dataLayer.push(arguments);
};
/**
 * Install the GA tracking code (gtag.js) on your page
 * @param trackingId Code for identifying the data stream/property in Google Analytics (G-XXXXXX or UA-XXXXXXX)
 * @returns
 *
 */
export function install(trackingId?: string) {
  if (!trackingId) trackingId = _code;
  if (!trackingId) throw new Error("Tracking ID is required to intall GTag");
  const scriptId = "ga-gtag";
  isInstalling = true;
  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement("script");
  script.id = scriptId;
  script.type = "text/javascript";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  script.onload = () => {
    isReady = true;
    isInstalling = false;
    loadListeners.map((l) => l(gtag));
  };
  script.onerror = () => {
    isReady = false;
    isError = true;
    isInstalling = false;
    while (loadListeners.length) loadListeners.shift();
  };
  try {
    gtag("js", new Date());
    gtag("config", trackingId);
  } catch (e) {
    console.warn("error in running gtag init scripts");
  }
}
/**
 * Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading
 * @param code Tracking code for Google Analytics (G-XXXXX or UA-XXXXX)
 */
export function setTrackingId(trackingId: string) {
  _code = trackingId;
}
/**
 * Fetch the gtag function, and  install it if not already set up.
 * @param code Tracking code for Google Analytics (G-XXXXX or UA-XXXXX)
 * @returns New gtag function, runs when gtag is loaded if not ready, will die silently if in error situation
 */
export function useGtag(trackingId?: string) {
  if (!isInstalling) {
    if (_code || trackingId) {
      if (trackingId) install(trackingId);
      if (_code) install(_code);
    }
  }
  return gtag;
}
export default useGtag;
