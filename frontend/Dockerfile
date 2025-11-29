# INTENTIONALLY VULNERABLE: old base image
FROM node:14.0

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production || npm install --production --legacy-peer-deps
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
