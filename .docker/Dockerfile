# Dockerfile
FROM mcr.microsoft.com/playwright:focal

# set workdir
WORKDIR /usr/src/app

# copy package files first for caching
COPY package.json package-lock.json ./
RUN npm ci --unsafe-perm

# copy code
COPY . .

# build if any build step (ts)
RUN npm run build || echo "no build script"

# default command runs tests
CMD ["npx", "playwright", "test", "--reporter=html"]
