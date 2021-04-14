
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

usegtag - v1.0.0

# usegtag - v1.0.0

## Table of contents

### References

- [default](#default)

### Functions

- [install](#install)
- [setTrackingId](#settrackingid)
- [useGtag](#usegtag)

## References

### default

Renames and exports: [useGtag](#usegtag)

## Functions

### install

▸ **install**(`trackingId?`: *string*): *void*

Install the GA tracking code (gtag.js) on your page

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`trackingId?` | *string* | Code for identifying the data stream/property in Google Analytics (G-XXXXXX or UA-XXXXXXX)   |

**Returns:** *void*

Defined in: [index.ts:13](https://github.com/rhdeck/usegtag/blob/fd2025a/src/index.ts#L13)

___

### setTrackingId

▸ **setTrackingId**(`trackingId`: *string*): *void*

Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId` | *string* |

**Returns:** *void*

Defined in: [index.ts:48](https://github.com/rhdeck/usegtag/blob/fd2025a/src/index.ts#L48)

___

### useGtag

▸ **useGtag**(`trackingId?`: *string*): *undefined* \| Gtag

Fetch the gtag function, and  install it if not already set up.

**`note`** For best results, combine with a `useEffect` to confirm the gtag function is in fact available for use

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId?` | *string* |

**Returns:** *undefined* \| Gtag

New gtag function or undefined if still loading

Defined in: [index.ts:57](https://github.com/rhdeck/usegtag/blob/fd2025a/src/index.ts#L57)
