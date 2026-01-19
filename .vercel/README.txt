> Why do I have a folder named ".vercel" in my project?
The ".vercel" folder is created when you link a directory to a Vercel project.

> What does the "project.json" file contain?
The "project.json" file contains:
- The ID of the Vercel project that you linked ("projectId")
- The ID of the user or team your Vercel project is owned by ("orgId")

> Should I commit the ".vercel" folder?
No, you should not share the ".vercel" folder with anyone.
Upon creation, it will be automatically added to your ".gitignore" file.


  ## Quick Start
  1. Run from ROOT folder
  2. `vercel dev`
  3. Open http://localhost:3000 - vercel dev - hosted CI development
  4. prisma studio - npx prisma studio - all links to database - postgresQL hosted on neon / prisma
  5. cloudinary - possibly needed for updates to media storage
  6. neon console - for connections and strings to the API 
  7. sometimes open a further split screen for VITE - npm run dev - localhost: 5173 - styling development - instant updates 