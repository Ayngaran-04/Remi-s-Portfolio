# Studio Remi — Artist & Writer Portfolio

An editorial portfolio designed for an artist who creates multidisciplinary work across drawing, writing, and various tactile curiosities.

---

## ✦ Aesthetic Palette & Design Philosophy
This portfolio was intentionally crafted to feel **human, tactile, and editorial** — avoiding generic "AI website" tropes like synthetic purple gradients, cookie-cutter floating SaaS cards, and soulless stock templates.

- **Deep Midnight Blue (`#15202E`)**: Primary structure, editorial serif typography, nocturnal gouache, fountain pen linework.
- **Olive Green (`#536245`)**: Botanical studies, foliage accents, handwritten margin notes, studio tags.
- **Whispering Lilac (`#9683A6`)**: Muted mauve/lilac washes, ribbon highlights, pressed petals, delicate borders.
- **Unbleached Linen & Bone Parchment (`#FAF7F2`)**: Warm, textured paper ground with organic SVG tooth grain.

---

## ✦ Key Features

1. **Folio I: The Drawing Room (Visual Art Archive)**
   - Category filters: *Botanical & Flora*, *Drawings & Ink*, *Landscapes & Air*, *Objects & Vessels*, *Sketchbook Scraps*.
   - Interactive Lightbox: Shows high-res artwork, series info, physical dimensions, medium, status, and intimate curator's notes.

2. **Folio II: The Reading Room (Writings & Poetry)**
   - Formatted like a literary magazine.
   - Slide-out **Reading Drawer** with comfortable serif typography, customizable type size controls (`A-` / `A+`), date stamps, and epigraphs.

3. **Folio III: The Cabinet of Curiosities ("And Everything")**
   - **Terrace Herbarium**: Catalog of pressed botanicals with collection notes.
   - **Studio Ink Recipes**: Formulas for walnut hull ink, lavender washes, and charcoal mulling.
   - **Desk Bookshelf**: Influences and annotated readings.
   - **Palette Swatches**: Interactive swatches with one-click hex code copying.

4. **Folio IV: Interactive Studio Desk (Visitor Sketchbook)**
   - Interactive drawing canvas right on the website.
   - Visitors can draw using **Vine Charcoal**, **Midnight Ink**, **Olive Wash**, or **Lilac Glaze**.
   - Rotates contemplative drawing prompts (*"Draw an olive leaf from memory"*, etc.).
   - Includes **Save Sketch (PNG)** button to download doodles.

5. **Folio V: About & Studio Ethos**
   - Personal philosophy, studio ritual, materials list (Arches 300gsm paper, dip pens, typewriter).

6. **Folio VI: Correspondence & Community Pinboard**
   - **Inquiry Form**: For commissions and original art acquisitions.
   - **Studio Guestbook**: Visitors can leave a note that persists on the studio board (stored locally in `localStorage`).

7. **Sensory Studio Details**
   - **Ambient Studio Rain**: Built natively with the Web Audio API (zero external audio files needed; gentle rain against glass).
   - **Daylight Paper / Candlelight Studio**: Theme switcher for late-night reading.

---

## ✦ How to Run & View

There are **zero build steps** and **zero dependencies** needed!

1. **Instant local preview**: Double-click `index.html` in your file explorer. It will open directly in Google Chrome, Microsoft Edge, Safari, or Firefox.
2. **Hosting online**:
   - **GitHub Pages**: Push this folder to a GitHub repository and enable GitHub Pages in settings.
   - **Netlify / Vercel**: Simply drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for instant free hosting with a custom domain.

---

## ✦ How to Personalize for Your Sister

1. **Changing her name / bio**:
   - Open `index.html` in any text editor (like Notepad or VS Code).
   - Search for `Remi Vance` and replace it with her name.
   - Edit the paragraphs in the `<section id="hero">` and `<section id="about">` sections.

2. **Adding her own drawings / paintings**:
   - Place her image files (JPG, PNG, WebP) in `assets/images/`.
   - Open `js/artworks-data.js` and add or edit the entries in `ARTWORKS_DATA`:
     ```javascript
     {
       id: "my-art-1",
       title: "Her Title",
       series: "Series Name",
       medium: "Charcoal on paper",
       year: "2026",
       dimensions: "30 × 40 cm",
       category: "drawings", // botanical, drawings, landscapes, still-life, sketchbook
       categoryLabel: "Drawings & Ink",
       image: "assets/images/her-image.jpg",
       status: "Original Available",
       featured: true,
       excerpt: "A short quote about the piece.",
       curatorNotes: "Her story of making this artwork."
     }
     ```

3. **Adding her own essays & poetry**:
   - Open `js/writings-data.js` and edit `WRITINGS_DATA`. You can add essays, poems, or short thoughts formatted with clean HTML paragraphs.

4. **Updating the contact email**:
   - In `index.html`, search for `remi@quietstudio.art` and change it to her actual email or Instagram/social handle.
