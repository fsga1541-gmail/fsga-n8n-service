# Deployment Checklist

## GitHub

- [ ] Extract ZIP
- [ ] Upload files to new GitHub repo
- [ ] Confirm `Dockerfile` is at top level
- [ ] Commit changes

## Render

- [ ] New + → Web Service
- [ ] Connect GitHub repo
- [ ] Runtime: Docker
- [ ] Build Command: empty
- [ ] Start Command: empty
- [ ] Add environment variables
- [ ] Manual Deploy → Deploy latest commit

## n8n

- [ ] Open Render URL
- [ ] Create n8n owner account
- [ ] Import workflow JSON
- [ ] Test webhook URL
- [ ] Activate workflow
