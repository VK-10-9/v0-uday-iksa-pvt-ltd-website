# Development Workflow & V0 Sync

This document explains the synchronization process between the v0.dev platform, GitHub, and the local development environment.

## The V0 Proxy Sync
This project is linked to [v0.dev](https://v0.dev). The synchronization flow is as follows:

1.  **AI Generation**: Modifications are proposed and textured within the v0.dev chat interface.
2.  **Deployment**: When a chat is "Deployed," v0.dev automatically pushes a commit to the GitHub repository.
3.  **Vercel Integration**: Vercel monitors the GitHub `main` branch and triggers a production build upon every push.
4.  **Local Sync**: To bring these changes into the local environment, you must run:
    ```powershell
    git pull origin main
    ```

## Local Development
To run the project locally for testing and refining:

1.  **Install Dependencies**:
    ```powershell
    npm install
    # or
    pnpm install
    ```
2.  **Start Dev Server**:
    ```powershell
    npm run dev
    ```
3.  **Access App**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Status
The live version is hosted on Vercel:
- **Production URL**: [https://v0-uday-iksa-pvt-ltd-website.vercel.app/](https://v0-uday-iksa-pvt-ltd-website.vercel.app/)

## Manual Pushing
When making manual documentation updates or code refinements locally:
```powershell
git add .
git commit -m "docs: describe update"
git push origin main
```
> [!IMPORTANT]
> Always pull before pushing to avoid conflicts with v0-generated commits.
