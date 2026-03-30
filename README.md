This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

demo url: https://showroom-kappa.vercel.app

### js to ts migration step

1. npm install --save-dev typescript@latest @types/react@latest @types/node@latest
2. 新增空白tsconfig.json
3. npm run dev 讓nextjs自動幫你填入需要的設定
4. 把原本jsconfig的設定貼過去

### jest config

1. install dep: npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
2. create config with official instruction: npx create-jest@latest
