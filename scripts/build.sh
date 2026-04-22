#!/bin/bash
set -e

echo "🔧 Building Hail Lions PDR..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Build Next.js
echo "🏗️ Building Next.js application..."
next build

echo "✅ Build complete!"
