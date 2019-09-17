#!/usr/bin/env bash

start_backend() {
  echo "**server running**"
  cd ../backend &&
  node src
}

start_backend