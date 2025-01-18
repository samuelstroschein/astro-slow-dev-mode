# Astro slow dev mode

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
