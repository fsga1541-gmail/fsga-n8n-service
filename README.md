# GitHub-ready n8n Deployment for Render

This repository contains the required files to run **n8n** from GitHub using **Render Docker Web Service**.

## Upload to GitHub

1. Extract the ZIP file.
2. Create a new GitHub repository.
3. Upload all files inside this folder to the top level of the repository.
4. Make sure `Dockerfile` is visible on the first page of the GitHub repo.

Correct layout:

```text
your-repo/
├── Dockerfile
├── .env.example
├── .gitignore
├── render.yaml
├── README.md
├── DEPLOYMENT_CHECKLIST.md
└── workflows/
```

## Deploy to Render

1. Go to Render.
2. Click **New +**.
3. Choose **Web Service**.
4. Select **Build and deploy from a Git repository**.
5. Connect this GitHub repository.
6. Use these settings:

```text
Runtime / Environment: Docker
Branch: main
Root Directory: leave empty
Build Command: leave empty
Start Command: leave empty
```

7. Click **Create Web Service**.

## Required Render Environment Variables

In Render, go to:

```text
Your Service → Environment
```

Add these variables:

```text
N8N_HOST=your-render-service-name.onrender.com
N8N_PORT=5678
PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://your-render-service-name.onrender.com/
GENERIC_TIMEZONE=Asia/Singapore
TZ=Asia/Singapore
N8N_PROXY_HOPS=1
N8N_ENCRYPTION_KEY=replace-with-a-long-random-secret-key
```

## Open n8n

After deployment is live, open:

```text
https://your-render-service-name.onrender.com
```

## Import Workflow JSON

After n8n is running:

```text
n8n → Workflows → Import from File
```

You can import workflow JSON files from the `workflows/` folder.

## Important Notes

- Do not use `npm install` or `npm start`.
- Use Docker runtime in Render.
- Render free services may sleep.
- Keep `N8N_ENCRYPTION_KEY` safe.
