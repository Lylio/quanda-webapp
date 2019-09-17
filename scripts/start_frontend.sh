  #!/usr/bin/env bash

start_client() {
  echo "**client starting**"
  cd ../frontend &&
  npm install &&
  npm start
}

start_client