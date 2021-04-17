
<a name="readmemd"></a>

# useGtag
Connect your React app to Google Analytics 4 and/or Universal Analytics with a simple hook 

<a name="_librarymd"></a>

usegtag - v1.2.1

# usegtag - v1.2.1

## Table of contents

### References

- [default](#default)

### Functions

- [Gtag](#gtag)
- [install](#install)
- [setTrackingId](#settrackingid)
- [useGtag](#usegtag)
- [useGtagBuiltInEvent](#usegtagbuiltinevent)
- [useGtagCustomEvent](#usegtagcustomevent)
- [usePageview](#usepageview)

## References

### default

Renames and exports: [useGtag](#usegtag)

## Functions

### Gtag

▸ **Gtag**(`__namedParameters`: { `children?`: ReactNode ; `sendPageView?`: *boolean* ; `trackingId`: *string* ; `transportUrl?`: *string*  }): *Element*

React component for setting the tracking ID and triggering the GA (gtag.js) initialization. Can be anywhere in the tree

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`__namedParameters` | *object* | - |
`__namedParameters.children?` | ReactNode | Children of the component (if any). Note that this component works where-ever you put it in the node tree   |
`__namedParameters.sendPageView?` | *boolean* | Whether to send initial page view on load (default: true)   |
`__namedParameters.trackingId` | *string* | Google Analytics ID: G-XXXXXX or UA-XXXXXX   |
`__namedParameters.transportUrl?` | *string* | URL to send events to, if you are running a custom server setup. (Defaults to the googla analytics server)   |

**Returns:** *Element*

React `<Gtag />` component

Defined in: [index.tsx:16](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L16)

___

### install

▸ **install**(`trackingId?`: *string*, `params?`: { `send_page_view?`: *boolean* ; `transport_url?`: *string*  } & Gtag.CustomParams): *void*

Install the GA tracking code (gtag.js) on your page. (Imperative alternative to using the `GA4` component)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`trackingId?` | *string* | Code for identifying the data stream/property in Google Analytics (G-XXXXXX or UA-XXXXXXX)   |
`params` | { `send_page_view?`: *boolean* ; `transport_url?`: *string*  } & Gtag.CustomParams | - |

**Returns:** *void*

Defined in: [index.tsx:45](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L45)

___

### setTrackingId

▸ **setTrackingId**(`trackingId`: *string*): *void*

Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId` | *string* |

**Returns:** *void*

Defined in: [index.tsx:97](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L97)

___

### useGtag

▸ **useGtag**(`trackingId?`: *string*): *object*

Fetch the gtag function, and  install it if not already set up.

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId?` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`builtInEvent` | (`action`: Gtag.EventNames, `params?`: Gtag.EventParams) => *void* |
`customEvent` | (`action`: *string*, `params?`: { [key: string]: *string* \| *number* \| *boolean*;  }) => *void* |
`gtag` | Gtag |
`pageview` | (`path?`: *string* \| Location, `location?`: *string* \| Location, `title?`: *string*) => *any* |

New gtag function, runs when gtag is loaded if not ready, will die silently if in error situation

Defined in: [index.tsx:105](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L105)

___

### useGtagBuiltInEvent

▸ **useGtagBuiltInEvent**(`action`: Gtag.EventNames, `params`: Gtag.EventParams, `deps?`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | Gtag.EventNames |
`params` | Gtag.EventParams |
`deps?` | *any*[] |

**Returns:** *void*

Defined in: [index.tsx:162](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L162)

___

### useGtagCustomEvent

▸ **useGtagCustomEvent**(`action`: *string*, `params`: { [key: string]: *string* \| *boolean* \| *number*;  }, `deps?`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`action` | *string* |
`params` | *object* |
`deps?` | *any*[] |

**Returns:** *void*

Defined in: [index.tsx:172](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L172)

___

### usePageview

▸ **usePageview**(`pathname?`: *string*, `deps?`: *any*[], `trackingId?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pathname?` | *string* |
`deps?` | *any*[] |
`trackingId?` | *string* |

**Returns:** *void*

Defined in: [index.tsx:182](https://github.com/rhdeck/usegtag/blob/052ec22/src/index.tsx#L182)
