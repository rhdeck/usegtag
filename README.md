
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

Defined in: [index.ts:20](https://github.com/rhdeck/usegtag/blob/7f4ca69/src/index.ts#L20)

___

### setTrackingId

▸ **setTrackingId**(`trackingId`: *string*): *void*

Initialize the tracking code for later use by `install` or `useGtag`. Facilitates easy initializastion and lazy loading

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId` | *string* |

**Returns:** *void*

Defined in: [index.ts:57](https://github.com/rhdeck/usegtag/blob/7f4ca69/src/index.ts#L57)

___

### useGtag

▸ **useGtag**(`trackingId?`: *string*): Gtag

Fetch the gtag function, and  install it if not already set up.

#### Parameters:

Name | Type |
:------ | :------ |
`trackingId?` | *string* |

**Returns:** Gtag

New gtag function, runs when gtag is loaded if not ready, will die silently if in error situation

Defined in: [index.ts:65](https://github.com/rhdeck/usegtag/blob/7f4ca69/src/index.ts#L65)
