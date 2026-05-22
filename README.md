# n8n GitHub + Render Deployment

This repository contains the minimum files required to deploy **n8n** from GitHub using Docker.

## Files Included

```text
Dockerfile
.env.example
.gitignore
README.md
render.yaml
sample-workflows/sample-webhook-test-workflow.json
```

## Deploy to Render

1. Upload all files in this folder to a new GitHub repository.
2. Go to Render.
3. Click **New +**.
4. Choose **Web Service**.
5. Select **Build and deploy from a Git repository**.
6. Connect your GitHub repository.
7. Choose **Docker** as the environment/runtime.
8. Leave Build Command and Start Command empty.
9. Add the environment variables listed below.
10. Click **Create Web Service**.

## Required Render Environment Variables

In Render, open your service:

```text
Environment → Add Environment Variable
```

Add these:

```text
N8N_HOST=your-render-service-name.onrender.com
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://your-render-service-name.onrender.com/
GENERIC_TIMEZONE=Asia/Singapore
TZ=Asia/Singapore
N8N_ENCRYPTION_KEY=replace-with-a-long-random-secret-key
```

## Optional Basic Login Protection

You can add these environment variables in Render:

```text
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=replace-with-strong-password
```

## After Deployment

Open:

```text
https://your-render-service-name.onrender.com
```

You should see the n8n setup page.

## Import Sample Workflow

Inside n8n:

```text
Workflows → Import from File
```

Import:

```text
sample-workflows/sample-webhook-test-workflow.json
```

## Important Notes

- Do not commit your real `.env` file.
- Keep `N8N_ENCRYPTION_KEY` safe. If you change it later, existing credentials may not decrypt.
- Render free services may sleep, so workflows may not run reliably on the free tier.
- For serious automation, use a paid instance or a VPS.
