#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Hail Lions PDR - Vercel Deployment Script${NC}"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi

# Check if user is logged in
echo -e "${YELLOW}🔐 Checking Vercel authentication...${NC}"
if ! vercel whoami &> /dev/null; then
    echo -e "${YELLOW}🔐 Please login to Vercel:${NC}"
    vercel login
fi

# Check if project is linked
if [ ! -f .vercel/project.json ]; then
    echo -e "${YELLOW}📁 Project not linked. Linking now...${NC}"
    vercel link
fi

# Check environment variables
echo ""
echo -e "${YELLOW}🔧 Checking environment variables...${NC}"
echo "Make sure these are set in Vercel:"
echo "  - DATABASE_URL"
echo "  - NEXTAUTH_SECRET"
echo "  - NEXTAUTH_URL"
echo "  - OPENAI_API_KEY (optional)"
echo "  - BLOB_READ_WRITE_TOKEN (optional)"
echo ""

read -p "Continue with deployment? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Deployment cancelled.${NC}"
    exit 1
fi

# Build locally first
echo ""
echo -e "${YELLOW}🛠️  Building project...${NC}"
npm run build

# Deploy
echo ""
echo -e "${YELLOW}🚀 Deploying to Vercel...${NC}"
vercel --prod

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Set up your database (Vercel Postgres or Neon)"
echo "2. Run migrations: npx prisma migrate deploy"
echo "3. Create an admin user in the database"
echo "4. Test the deployed application"
