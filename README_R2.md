# Connect this site to Cloudflare R2 (public)

1. **Enable public access on your bucket**
   - Cloudflare Dashboard → R2 → your bucket → **Settings** → **Public access → Enable**.
   - You will see a public bucket domain like: `https://pub-XXXXXXXXXXXX.r2.dev/yourbucket`.

2. **(Optional) Keep a clean prefix**
   - If your files are under a folder with spaces (e.g., `Site Files/`), it still works.
   - The templates call `uri_escape` so filenames with spaces are OK.

3. **Set the base in `_config.yml`**
   ```yaml
   r2_base: "https://pub-XXXXXXXXXXXX.r2.dev/portfoliositefiles/Site Files"
   ```

4. **Edit project pages**
   - Each file in `_projects/` has fields like:
     ```yaml
     cover_file: "illuminate 101.png"     # uses r2_base + filename
     gallery_files:
       - "illuminate 101.png"
       - "Illuminate 102.png"
     video_file: "22 - Flexsim.mp4"       # streams directly from R2
     ```
   - If you prefer full URLs, you can use `cover:` / `gallery:` / `video:` with absolute links instead.

5. **Deploy**
   - Push to GitHub. In repo **Settings → Pages**, publish from the default branch.
   - Open your site URL and verify images & videos load from R2.

> Tip: In R2, ensure objects have the right **Content-Type** (`image/jpeg`, `image/png`, `video/mp4`) so browsers render/stream them.
