## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Nominatim API

- [Nominatim API Docs](https://nominatim.org/release-docs/develop/api/Overview/) - Nominatim geocoder for OpenStreetMap data.

#### Requirements

- No heavy uses (an absolute maximum of 1 request per second).
- Provide a valid HTTP Referer or User-Agent identifying the application (stock User-Agents as set by http libraries will not do).
  Clearly display attribution as suitable for your medium.
- Data is provided under the ODbL license which requires to share alike (although small extractions are likely to be covered by fair usage / fair dealing).

#### Parameters

The search API has the following format:

```
https://nominatim.openstreetmap.org/search?<params>
```

The search term may be specified with two different sets of parameters:

- q=<query>

Free-form query string to search for. Free-form queries are processed first left-to-right and then right-to-left if that fails. So you may search for pilkington avenue, birmingham as well as for birmingham, pilkington avenue. Commas are optional, but improve performance by reducing the complexity of the search.

- street=<housenumber> <streetname>
- city=<city>
- county=<county>
- state=<state>
- country=<country>
- postalcode=<postalcode>
- addressdetails=<addressdetails>

## Open-source alternatives for Nominatim API

- [Photon](https://photon.komoot.io/) - search-as-you-type with OpenStreetMap.

- [Pelias](https://pelias.io/) - A modular, open-source search engine for our world..
