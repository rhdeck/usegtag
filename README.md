
<a name="readmemd"></a>

# useGtag
Connect your React app to Google Analytics with a simple hook 

## Strong Recommendation
Add `@types/gtag.js` as a dependency to a project that implements `useGtag`. This will give you much better type completion
```bash
npm i @types/gtag.js --development --save
```
or
```bash
yarn add -D @types/gtag.js
```

<a name="_librarymd"></a>

usegtag - v1.0.1

# usegtag - v1.0.1

## Table of contents

### References

- [default](#default)

### Variables

- [GA4](#ga4)

### Functions

- [install](#install)
- [setTrackingId](#settrackingid)
- [useGtag](#usegtag)
- [usePageview](#usepageview)

## References

### default

Renames and exports: [useGtag](#usegtag)

## Variables

### GA4

• `Const` **GA4**: *FC*<{ `trackingId`: *string*  }\>

React component for setting the tracking ID. Can be anywhere in the tree

**`param`** 

**`returns`** 

Defined in: index.tsx:13

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

Defined in: index.tsx:26

___

### setTrackingId

▸ **setTrackingId**(`trackingId`: *string*): *void*

Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId` | *string* |

**Returns:** *void*

Defined in: index.tsx:75

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
`customEvent` | (`action`: *string*, `params?`: Gtag.EventParams) => *void* |
`gtag` | Gtag |
`pageview` | (`path?`: *string* \| Location, `location?`: *string* \| Location, `title?`: *string*) => *any* |

New gtag function, runs when gtag is loaded if not ready, will die silently if in error situation

Defined in: index.tsx:83

___

### usePageview

▸ **usePageview**(`pathname?`: *string*, `trackingId?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pathname?` | *string* |
`trackingId?` | *string* |

**Returns:** *void*

Defined in: index.tsx:130
