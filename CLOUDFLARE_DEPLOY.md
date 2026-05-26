# Cloudflare Pages Deployment Guide

To fix the deployment failure, please ensure the following settings are configured in your Cloudflare Pages dashboard:

## 1. Build Settings
- **Framework preset:** `Next.js (App Router)`
- **Build command:** `npm run build`
- **Build output directory:** `.next`

## 2. Environment Variables
Add these in **Settings > Functions > Compatibility flags** or **Settings > Environment variables**:
- `NODE_VERSION`: `20` (Important: Next.js 15/16 requires Node 18+)
- `NEXT_PUBLIC_SUPABASE_URL`: (Your Supabase URL)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Your Supabase Key)

## 3. Compatibility Flags
In **Settings > Functions > Compatibility flags**, add:
- `nodejs_compat` (Required for many Next.js libraries)

## 4. Potential Build Errors
If the build still fails, check the "Build logs" in Cloudflare. Common issues include:
- **Module not found:** Ensure all files are pushed to GitHub (check `.gitignore`).
- **Memory Limit:** If the build is too large, it might hit memory limits.
