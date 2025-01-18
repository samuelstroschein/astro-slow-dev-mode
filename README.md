# Astro slow dev mode

### Setup

- `astro` folder contains an astro project
- `vite` folder contains a vite project

Both projects are identical and load a JS function that returns a string from the `paraglide` folder.

### Reproduction:

```
npm i
```

_The astro dev mode times out_

```
npm run dev -w astro
```

_A plain vite project works fine_

```
npm run dev -w vite
```

### Observations:

- `astro build` && `astro preview` work as expected
