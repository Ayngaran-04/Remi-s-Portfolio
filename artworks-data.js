/**
 * Remi's Curated Artworks Archive
 * Drawings, Botanical Studies, Nocturnes & Mixed Media
 */

const ARTWORKS_DATA = [
  {
    id: "art-1",
    title: "Olea Europaea at Dawn",
    series: "Botanical Solitudes",
    medium: "Pigment ink, olive wash & dusty lilac on 300gsm Arches paper",
    year: "2026",
    dimensions: "30 × 40 cm",
    category: "botanical",
    categoryLabel: "Botanical & Flora",
    image: "assets/images/art-botanical-olive.svg",
    status: "Original Available",
    featured: true,
    excerpt: "Drawn from a branch clipped along the terrace wall at 6 a.m., before the sun lifted the dew.",
    curatorNotes: "I drew this with a hand-carved reed pen dipped in walnut ink, then washed lightly with diluted lilac gouache. The leaves carry that silver-dusted green that only exists in Mediterranean autumns. It took three mornings to get the weight of the fruit right without making them look heavy."
  },
  {
    id: "art-2",
    title: "Nocturne: Glass, Starlight & Olive Sprig",
    series: "Window Studies",
    medium: "Dark blue gouache, vine charcoal & lilac wash on linen board",
    year: "2026",
    dimensions: "40 × 50 cm",
    category: "drawings",
    categoryLabel: "Drawings & Ink",
    image: "assets/images/art-night-window.svg",
    status: "Studio Archive",
    featured: true,
    excerpt: "Night through the studio casement. The way cobalt glass holds moonlight like cold water.",
    curatorNotes: "When you look out of an unlit room into the valley, the night isn't black; it's a deep, vibrating ink. The curtains were dyed with dried elderberries two summers ago, and in the dusk they reflect a muted mauve. The sprig in the bottle stayed on the sill for three weeks until every leaf curled into a prayer."
  },
  {
    id: "art-3",
    title: "The Reader at Half-Past Four",
    series: "Gestures & Solitudes",
    medium: "Raw vine charcoal & wild lavender tint on tinted rag paper",
    year: "2026",
    dimensions: "35 × 45 cm",
    category: "drawings",
    categoryLabel: "Drawings & Ink",
    image: "assets/images/art-figure-study.svg",
    status: "Private Collection",
    featured: true,
    excerpt: "A fifteen-minute study of someone absorbed entirely in the last chapter of a worn book.",
    curatorNotes: "Charcoal allows no deceit. A stroke either catches the tilt of a shoulder or it ruins the entire sheet. Here, I wanted to capture the posture of someone who has forgotten that their body exists because their mind has wandered three centuries into the past."
  },
  {
    id: "art-4",
    title: "Valley of the Quiet Bells (Twilight)",
    series: "Terraces & Ridges",
    medium: "Casein, crushed graphite & lilac mist wash on handmade deckle board",
    year: "2026",
    dimensions: "50 × 70 cm",
    category: "landscapes",
    categoryLabel: "Landscapes & Air",
    image: "assets/images/art-landscape-twilight.svg",
    status: "Original Available",
    featured: true,
    excerpt: "The terraced hills between twilight and complete darkness, where distant bell chimes dissolve into fog.",
    curatorNotes: "Painted plein-air on the upper ridge. The lilac band across the horizon lasted only eleven minutes before the indigo swallowed it. I had to grind the chalk right there on the stone wall and rub it in with the heel of my palm."
  },
  {
    id: "art-5",
    title: "The Practice of Writing in the Margin",
    series: "Epistles & Ephemera",
    medium: "Midnight blue fountain pen ink, pressed violets & archival vellum",
    year: "2026",
    dimensions: "28 × 38 cm",
    category: "writings-visual",
    categoryLabel: "Words & Ink",
    image: "assets/images/art-prose-ink.svg",
    status: "Studio Archive",
    featured: false,
    excerpt: "A visual meditation on the dialogue between ink, the dried petal, and the unfinished letter.",
    curatorNotes: "Words have a physical mass. When you write with a flexible steel nib, you can feel the paper give beneath your breath. The violets were pressed in an 1894 French grammar book I picked up at a flea market in Avignon."
  },
  {
    id: "art-6",
    title: "Three Vessels, Morning Light & Wild Fennel",
    series: "Still Lifes of Use",
    medium: "Earthy oil stick, dark blue tempera & dry lilac pigment on raw linen",
    year: "2026",
    dimensions: "40 × 50 cm",
    category: "still-life",
    categoryLabel: "Objects & Vessels",
    image: "assets/images/art-ceramic-vessels.svg",
    status: "Original Available",
    featured: true,
    excerpt: "Pottery turned on a slow wheel, carrying the faint fingerprint of the potter on the rim.",
    curatorNotes: "I have had these three pots in every studio I've occupied. The green one holds linseed oil; the lilac bottle holds dried stems; the low dark dish catches fallen charcoal dust. They are companions who know how to keep silence."
  },
  {
    id: "art-7",
    title: "Studio Desk Journal: October 14 Spread",
    series: "Living Sketchbooks",
    medium: "Graphite, olive pigment wash & lilac washi tape on 180gsm cotton paper",
    year: "2026",
    dimensions: "Open folio: 30 × 44 cm",
    category: "sketchbook",
    categoryLabel: "Sketchbooks & Scraps",
    image: "assets/images/art-sketchbook-spread.svg",
    status: "Living Object",
    featured: false,
    excerpt: "Two open pages recording hand movements, autumn swallow migrations, and trial pigment tests.",
    curatorNotes: "I never show finished work without also showing the sketchbook it grew from. A sketchbook is where the artist is allowed to be clumsy, curious, and honest. Nothing is precious here, which is why everything feels alive."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARTWORKS_DATA };
}
