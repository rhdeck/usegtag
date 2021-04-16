
<a name="readmemd"></a>

# useGtag
Connect your React app to Google Analytics 4 and/or Universal Analytics with a simple hook 

<a name="_librarymd"></a>

usegtag - v1.2.0

# usegtag - v1.2.0

## Table of contents

### References

- [default](#default)

### Variables

- [Gtag](#gtag)

### Functions

- [install](#install)
- [setTrackingId](#settrackingid)
- [useGtag](#usegtag)
- [useGtagBuiltInEvent](#usegtagbuiltinevent)
- [useGtagCustomEvent](#usegtagcustomevent)
- [usePageview](#usepageview)

## References

### default

Renames and exports: [useGtag](#usegtag)

## Variables

### Gtag

• `Const` **Gtag**: *FC*<{ `trackingId`: *string*  }\>

React component for setting the tracking ID and triggering the GA (gtag.js) initialization. Can be anywhere in the tree

**`param`** 

**`returns`** 

Defined in: [index.tsx:23](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L23)

## Functions

### install

▸ **install**(`trackingId?`: *string*, `params?`: Gtag.CustomParams): *void*

Install the GA tracking code (gtag.js) on your page. (Imperative alternative to using the `GA4` component)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`trackingId?` | *string* | Code for identifying the data stream/property in Google Analytics (G-XXXXXX or UA-XXXXXXX)   |
`params` | Gtag.CustomParams | - |

**Returns:** *void*

Defined in: [index.tsx:35](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L35)

___

### setTrackingId

▸ **setTrackingId**(`trackingId`: *string*): *void*

Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId` | *string* |

**Returns:** *void*

Defined in: [index.tsx:83](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L83)

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

Defined in: [index.tsx:91](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L91)

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

Defined in: [index.tsx:148](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L148)

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

Defined in: [index.tsx:158](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L158)

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

Defined in: [index.tsx:168](https://github.com/rhdeck/usegtag/blob/3e9acaf/src/index.tsx#L168)
