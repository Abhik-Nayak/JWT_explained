For server-side GraphQL: apollo-server-express and graphql
For PostgreSQL ORM: prisma
For JWT authentication: jsonwebtoken
For user authentication: bcryptjs
TypeScript and type definitions

npm install apollo-server-express express graphql prisma bcryptjs jsonwebtoken
npm install typescript ts-node @types/node @types/express @types/jsonwebtoken --save-dev

npx tsc --init

tsconfig.json
---------------
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"]
}
