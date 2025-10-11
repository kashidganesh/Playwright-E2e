# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Run Playwright install (to ensure browsers are available)
RUN npx playwright install --with-deps

# Default command (you can override in Jenkins)
CMD ["npx", "playwright", "test"]
