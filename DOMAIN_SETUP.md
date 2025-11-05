# Domain Configuration Guide

## Current Issue
Visiting `leibfriedclan.com` redirects to `leibfriedclan-main.vercel.app`, showing the Vercel subdomain instead of your custom domain.

## Solution: Configure Domain in Vercel

### Step 1: Add Domain in Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project: `leibfriedclan_main`
3. Navigate to **Settings** → **Domains**
4. Click **Add Domain** or **Add** button
5. Enter `leibfriedclan.com` and click **Add**
6. Enter `www.leibfriedclan.com` and click **Add** (optional, but recommended)

### Step 2: Configure DNS Records

Vercel will provide you with DNS instructions. You have two options:

#### Option A: Use Vercel Nameservers (Recommended - Easiest)

1. Vercel will provide you with nameservers (e.g., `ns1.vercel-dns.com`)
2. Go to your domain registrar (where you bought `leibfriedclan.com`)
3. Find **DNS Settings** or **Nameservers** section
4. Replace current nameservers with Vercel's nameservers
5. Save changes

**Pros:**
- Vercel manages all DNS automatically
- No need to configure individual records
- Easier to maintain

#### Option B: Configure DNS Records (Advanced)

If you want to keep your current nameservers:

1. In Vercel dashboard, select each domain
2. Vercel will show you the DNS records needed:
   - **A Record** for `leibfriedclan.com` → Vercel IP address
   - **CNAME Record** for `www.leibfriedclan.com` → `cname.vercel-dns.com`
3. Go to your domain registrar's DNS settings
4. Add these records exactly as Vercel specifies
5. Save changes

**Pros:**
- Keep your current DNS provider
- More control over DNS settings

### Step 3: Wait for DNS Propagation

- DNS changes can take **1-48 hours** to propagate
- Usually takes **1-2 hours** in most cases
- You can check status in Vercel dashboard → Domains

### Step 4: Verify Configuration

1. Check Vercel dashboard → Domains
   - Status should show: **Valid** ✅
   - SSL Certificate should show: **Ready** ✅
2. Test your domain:
   - Visit `https://leibfriedclan.com` (should show your site, not redirect)
   - Visit `https://www.leibfriedclan.com` (should redirect to non-www or show site)

## What's Already Configured

✅ **Redirect Configuration** (`vercel.json`)
- Automatically redirects `www.leibfriedclan.com` → `leibfriedclan.com`
- Ensures consistent URL (non-www)

## Troubleshooting

### Domain Still Redirecting?
- Wait for DNS propagation (can take up to 48 hours)
- Clear your browser cache
- Try in incognito/private mode
- Check Vercel dashboard → Domains for status

### SSL Certificate Not Ready?
- DNS must be configured correctly first
- Wait for DNS propagation
- Vercel automatically provisions SSL certificates

### Still Seeing Vercel Subdomain?
- Verify domain is added in Vercel dashboard
- Check DNS records are correct
- Ensure domain status shows "Valid" in Vercel

## Expected Result

After configuration:
- ✅ `leibfriedclan.com` → Shows your custom domain in URL bar
- ✅ `www.leibfriedclan.com` → Redirects to `leibfriedclan.com` (or shows site)
- ✅ SSL certificate automatically enabled (HTTPS)
- ✅ No redirect to `leibfriedclan-main.vercel.app`

