# INTENTIONALLY VULNERABLE: old base image for Trivy to flag
FROM node:14.0

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production || npm install --production --legacy-peer-deps
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
