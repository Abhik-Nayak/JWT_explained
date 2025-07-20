1.=============================
mkdir node-express-ts-todo
cd node-express-ts-todo

# Initialize Node.js project
npm init -y

# Install core dependencies
npm install express jsonwebtoken bcryptjs prisma @prisma/client dotenv

# Install dev dependencies for TypeScript
npm install --save-dev typescript @types/node @types/express ts-node

# Install the required packages for validation
npm install joi

2.===============================
Set up TypeScript
npx tsc --init
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

3.================================
Set up Prisma ORM and PostgreSQL
npx prisma init

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String   @unique
  password  String
  todos     Todo[]
}

model Todo {
  id          Int      @id @default(autoincrement())
  title       String
  completed   Boolean  @default(false)
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
}

npx prisma migrate dev --name init
npx prisma generate



4.=================================
Directory Structure
src/
  controllers/
    authController.ts
    todoController.ts
  middleware/
    authMiddleware.ts
  models/
    user.ts
    todo.ts
  routes/
    authRoutes.ts
    todoRoutes.ts
  services/
    authService.ts
  utils/
    validate.ts
  app.ts
  server.ts
