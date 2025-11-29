# INTENTIONALLY VULNERABLE: old base image for Trivy to flag
FROM node:14.0

WORKDIR /app
COPY package.json package-lock.json* ./
# Install vulnerable dependencies — do NOT fix
RUN npm install --production || npm install --production --legacy-peer-deps
COPY . .

# Backdoor: API intentionally exposed on 10000
ENV PORT=10000

# Expose API port for ZAP/Compose scanning
EXPOSE 10000

CMD ["npm", "start"]
