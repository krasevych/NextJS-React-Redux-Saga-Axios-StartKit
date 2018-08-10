## Quick start

1.  `yarn install`
2.  `yarn run dev`

## Deploy

1.  Clone rep: `git clone ...`
2.  Install dependencies: `yarn install`
3.  Add appropriate config: `./config/env`
4.  Deploy on different env:
    - Test:
      - Build: `yarn run build:test`
      - Run server: `yarn run test`
    - Prod:
      - Build: `yarn run build:prod`
      - Run server: `yarn run prod`
