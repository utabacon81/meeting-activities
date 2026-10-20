# Meeting Activities

Quiet games for young kids and a note-taking page for older kids and teens, for congregation meetings and assemblies.

Live site: https://meeting-activities.pages.dev/ (served by Cloudflare Pages, which redeploys on every push to main)

A personal family project. Not an official jw.org site.

## How it is updated

Everything that changes week to week is in `content.js`: the midweek and weekend meetings (part titles, scripture references, song numbers) and the kid-level word lists for each part. The games read their words from that file, so a weekly update only edits `content.js`.

- `index.html`: the app (all games)
- `core.js`: shared pictures and the meeting selector
- `content.js`: this week's meetings and words
