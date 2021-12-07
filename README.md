# Lush Web Engineer Task: Jessica Kelsall

## Requirements

- Node.js
- `npm install` to install dependencies

## How to Use

| Action | Command |
| --- | --- |
| Run (in development) | `npm run dev` |
| Test | `npm run test` |
| Lint | `npm run lint` |

## Known Issues

The build command (`npm run build`) fails due to being unable to resolve `fs`. I have attempted to fix this issue by configuring Webpack to ignore the module but this didn't fix it. The error points to a test file (and points to a different test if I remove the file), suggesting it may be an issue with React Testing Library. This would be my avenue of investigation if I had more time.
