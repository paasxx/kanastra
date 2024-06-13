#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

#!/usr/bin/env bash

TIMEOUT=30
QUIET=0
HOST="$1"
PORT="$2"

echo "Waiting for $HOST:$PORT to be available..."

for i in `seq $TIMEOUT` ; do
    nc -z "$HOST" "$PORT" > /dev/null 2>&1
    result=$?
    if [ $result -eq 0 ] ; then
        echo "Connection to $HOST:$PORT succeeded."
        exit 0
    fi
    echo "Attempt $i: Connection to $HOST:$PORT failed."
    sleep 1
done

echo "Operation timed out after $TIMEOUT seconds" >&2
exit 1