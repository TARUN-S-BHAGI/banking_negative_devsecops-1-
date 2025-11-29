#!/usr/bin/env sh
set -e
url="$1"
echo "Waiting for $url ..."
for i in $(seq 1 60); do
  if wget -q -O- "$url" >/dev/null 2>&1; then
    echo "Service is up"
    exit 0
  fi
  sleep 2
done
echo "Timeout waiting for $url"
exit 1
