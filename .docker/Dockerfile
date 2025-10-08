FROM mcr.microsoft.com/playwright:v1.45.0-focal
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx playwright install --with-deps
CMD ["npm", "test"]
