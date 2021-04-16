import React, {
  FC,
  Fragment,
  useEffect,
  useState,
  FunctionComponent,
} from "react";
let isReady = false;
let isError = false;
let isInstalling = false;
let _code: string | undefined;
const gtagContainer: { gtag: Gtag.Gtag } = { gtag: globalThis.gtag };
const loadListeners: ((gtag: Gtag.Gtag) => void)[] = [
  (gtag) => {
    gtagContainer.gtag = gtag;
  },
];
/**
 * React component for setting the tracking ID and triggering the GA (gtag.js) initialization. Can be anywhere in the tree
 * @param param0
 * @returns
 */
export const Gtag: FC<{ trackingId: string }> = ({ children, trackingId }) => {
  useEffect(() => {
    install(trackingId);
  }, [trackingId]);
  return <Fragment>{children}</Fragment>;
};
/**
 * Install the GA tracking code (gtag.js) on your page. (Imperative alternative to using the `GA4` component)
 * @param trackingId Code for identifying the data stream/property in Google Analytics (G-XXXXXX or UA-XXXXXXX)
 * @returns
 *
 */
export function install(
  trackingId?: string,
  params: Gtag.CustomParams = { send_page_view: true }
) {
  if (!trackingId) trackingId = _code;
  if (!trackingId) throw new Error("Tracking ID is required to intall GTag");
  if (isInstalling || isReady) return;
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
  const script2 = document.createElement("script");
  const code = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", "${trackingId}", ${JSON.stringify(params)});`;
  script2.innerHTML = code;
  head.insertBefore(script2, head.firstChild);
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
  } catch (e) {
    console.error("useGtag", "error in running gtag init scripts", e);
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
  /**
   * @desc send pageview event to gtag
   * @param path
   */
  function pageview(
    path?: string | Location,
    location?: string | Location,
    title?: string
  ): any {
    return gtagContainer.gtag("event", "page_view", {
      page_path: path,
      page_location: location || window.location,
      page_title: title || document.title,
    } as Gtag.EventParams);
  }

  /**
   * @desc set event and send to gtag
   * @param action
   * @param label
   * @param category
   * @param nonInteraction
   */
  function customEvent(
    action: string,
    params?: { [key: string]: string | number | boolean }
  ) {
    gtagContainer.gtag("event", action, params);
  }
  /**
   * @desc set event and send to gtag
   * @param action
   * @param label
   * @param category
   * @param nonInteraction
   */
  function builtInEvent(action: Gtag.EventNames, params?: Gtag.EventParams) {
    gtagContainer.gtag("event", action, params);
  }
  const [container, setGtag] = useState({
    customEvent,
    builtInEvent,
    pageview,
    gtag: gtagContainer.gtag,
  });
  loadListeners.push((gtag) => {
    setGtag({ customEvent, builtInEvent, pageview, gtag });
  });
  return container;
}
export function useGtagBuiltInEvent(
  action: Gtag.EventNames,
  params: Gtag.EventParams,
  deps?: any[]
) {
  const { builtInEvent } = useGtag();
  useEffect(() => {
    builtInEvent(action, params);
  }, [builtInEvent, ...(deps ? deps : [])]);
}
export function useGtagCustomEvent(
  action: string,
  params: { [key: string]: string | boolean | number },
  deps?: any[]
) {
  const { customEvent } = useGtag();
  useEffect(() => {
    customEvent(action, params);
  }, [customEvent, ...(deps ? deps : [])]);
}
export function usePageview(
  pathname?: string,
  deps?: any[],
  trackingId?: string
) {
  const { pageview } = useGtag(trackingId);
  useEffect(() => {
    if (!pathname) pathname = window.location.pathname;
    pageview(pathname);
  }, [pageview, pathname, ...(deps ? deps : [])]);
}
export default useGtag;
