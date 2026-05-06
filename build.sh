#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci

echo "Running build..."
npm run build

echo "Build completed successfully!"
