# Vercel Deployment Guide

## Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed globally: `npm i -g vercel`
3. Git repository connected to Vercel

## Environment Variables Required

Set these in Vercel Dashboard → Project Settings → Environment Variables:

### Required for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NEXTAUTH_SECRET` | Random secret for NextAuth | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Your production URL | `https://your-domain.vercel.app` |

### Optional (for full functionality)

| Variable | Description | Example |
|----------|-------------|---------|
| `OPENAI_API_KEY` | For AI dent analysis | `sk-...` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob for images | `vercel_blob_rw_...` |
| `ADMIN_PASSWORD_HASH` | Hashed admin password | bcrypt hash |

## Database Setup

### Option 1: Vercel Postgres (Recommended)
1. In Vercel Dashboard, go to Storage → Create Database → Postgres
2. Choose region closest to your users (IAD1 for US East)
3. Copy connection string to `DATABASE_URL`

### Option 2: Neon (Serverless Postgres)
1. Create account at https://neon.tech
2. Create project and database
3. Copy connection string to `DATABASE_URL`

### Database Migration

After first deploy, run migrations:
```bash
# Using Vercel CLI
vercel --prod

# Then run migrations
vercel env pull .env.production.local
npx prisma migrate deploy
```

## Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```

### 2. Link Project (if not already linked)
```bash
cd ~/projects/hail-lions-pdr
vercel link
```

### 3. Set Environment Variables
```bash
# Set each required variable
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

### 4. Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Build Configuration

The project uses:
- **Build Command**: `prisma generate && next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Framework Preset**: Next.js

## Edge Functions

API routes in `/app/api` are automatically deployed as serverless functions.

## Post-Deploy Checklist

- [ ] Database connected and migrated
- [ ] Environment variables set
- [ ] Admin user created in database
- [ ] Image upload working (if using Vercel Blob)
- [ ] AI analysis working (if OpenAI key set)
- [ ] Custom domain configured (optional)

## Troubleshooting

### Build Failures
- Check that `prisma generate` runs before build
- Verify all environment variables are set
- Check build logs in Vercel Dashboard

### Database Connection Issues
- Ensure database allows connections from Vercel IPs
- Check connection string format
- Verify SSL settings for PostgreSQL

### Image Upload Issues
- Ensure `BLOB_READ_WRITE_TOKEN` is set
- Check Vercel Blob is enabled in project

## Custom Domain

1. In Vercel Dashboard → Domains
2. Add your domain
3. Update DNS records as instructed
4. Update `NEXTAUTH_URL` to match custom domain
