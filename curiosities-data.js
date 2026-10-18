/**
 * Remi's Cabinet of Curiosities ("And Everything")
 * Botanical specimens, studio ink formulas, desk shelf & miscellany
 */

const CURIOSITIES_DATA = {
  herbarium: [
    {
      name: "Wild Mountain Thyme",
      latin: "Thymus serpyllum",
      date: "August 2026",
      location: "Limestone terrace, South Ridge",
      notes: "Pressed between two heavy volumes of Greek poetry for 4 weeks. Leaves retained their resinous scent."
    },
    {
      name: "Silver Olive Leaf Specimen",
      latin: "Olea europaea var. sylvestris",
      date: "September 2026",
      location: "Lower orchard",
      notes: "The underside has microscopic peltate scales that shimmer like brushed pewter when turned toward lamp light."
    },
    {
      name: "Dusk Violet / Field Pansy",
      latin: "Viola tricolor",
      date: "May 2026",
      location: "Shadowed bank beside old well",
      notes: "Produces a fugitive mauve pigment when steeped in boiled rainwater with a drop of lemon juice."
    }
  ],

  inkFormulas: [
    {
      title: "Walnut Hull Ink No. 3",
      ingredients: "Green walnut hulls, distilled spring water, iron sulfate, gum arabic, whole clove",
      instructions: "Simmer hulls slowly for six hours until reduced by half. Add crushed clove to prevent mold. Settles to a luminous sepia with cool olive undertones that darkens upon contact with air."
    },
    {
      title: "Lavender & Lilac Wash",
      ingredients: "Dried French lavender florets, elderberry skins, grain alcohol, alum crystal",
      instructions: "Steep florets in alcohol for 14 days in dark glass. Filter through silk. Yields a delicate, whispering lilac tint that dries completely matte on cold-pressed paper."
    },
    {
      title: "Midnight Carbon Ink",
      ingredients: "Vine charcoal ground with mortar and pestle, gum senegal, bone black pigment",
      instructions: "Hand-mulled on a porphyry slab for 45 minutes until zero grit remains. Deepest midnight ink that will never fade in sunlight."
    }
  ],

  readingShelf: [
    {
      title: "The Poetics of Space",
      author: "Gaston Bachelard",
      annotation: "‘The house shelters daydreaming, the house protects the dreamer.’ Read every winter."
    },
    {
      title: "Pilgrim at Tinker Creek",
      author: "Annie Dillard",
      annotation: "Taught me how to look at water without trying to master it."
    },
    {
      title: "Duino Elegies",
      author: "Rainer Maria Rilke",
      annotation: "A worn bilingual pocket edition held together with linen tape."
    },
    {
      title: "Color: A Natural History of the Palette",
      author: "Victoria Finlay",
      annotation: "A treasure trove for anyone who cares where pigment comes from."
    }
  ],

  swatches: [
    { name: "Whispering Lilac", hex: "#B8A7C7", role: "Pressed florals, dusk sky, ribbon bookmark" },
    { name: "Olive Grove", hex: "#556345", role: "Foliage, studio apron, botanical annotations" },
    { name: "Midnight Ink", hex: "#182333", role: "Fountain pen linework, nocturnes, iron gall" },
    { name: "Bone Parchment", hex: "#FAF8F5", role: "Unbleached rag paper, morning studio light" },
    { name: "Aged Terracotta", hex: "#A8765A", role: "Studio pottery, warm deckle edges" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CURIOSITIES_DATA };
}
