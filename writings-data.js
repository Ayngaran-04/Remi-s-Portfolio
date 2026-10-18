/**
 * Remi's Collected Writings, Essays, Poems & Studio Ephemera
 */

const WRITINGS_DATA = [
  {
    id: "writing-1",
    title: "Notes on the Color of Four P.M. Rain",
    subtitle: "On slate roofs, wet stone, and why certain twilights refuse to be named",
    genre: "Essay / Reflection",
    date: "October 12, 2026",
    readingTime: "4 min read",
    epigraph: "“To look at something until it becomes tender.” — Annie Dillard",
    excerpt: "There is a precise quarter of an hour in late autumn when the light does not fall so much as it dissolves into the damp air. You cannot draw it with a pencil; you have to let the paper get cold first.",
    contentHtml: `
      <p class="drop-cap">There is a precise quarter of an hour in late autumn when the light does not fall so much as it dissolves into the damp air. If you are standing at an east-facing window with a cup of tea going cold in your left hand and an unsharpened 3B pencil in your right, you will notice that the stone wall outside loses its individual joints. The mortar and the limestone fuse into a single matte wash the exact shade of diluted walnut ink.</p>

      <p>I have spent years trying to mix this particular dusk. In the paint box it is neither Prussian blue nor lamp black. If you add even a needlepoint of titanium white, the whole mixture goes chalky and dies on the palette like curdled milk. What it asks for is water: copious, cold rain water collected from the zinc downspout, mixed with a pinch of burnt umber and the faint purple sediment left at the bottom of a wild elderberry jar.</p>

      <blockquote>
        “A drawing does not begin when the graphite strikes the tooth of the paper; it begins three hours earlier, when you decide not to turn on the lamp.”
      </blockquote>

      <p>My grandmother kept a drawer filled with nothing but folded linen handkerchiefs and snippets of ribbon from packages she received in the 1970s. When I was seven, I asked her why she saved the faded lilac ones instead of the bright silk. She said, <em>‘Because bright things demand you look at them, Remi. Faded things wait for you to arrive.’</em></p>

      <p>Writing feels very much like that linen drawer today. In an era where images scream through glass screens at sixty frames per second, drawing an olive branch with a dip pen feels like a quiet defiance. You have to wait for the ink to absorb into the fibers. You have to breathe slowly so your pulse doesn't shake the nib on the upstroke. And when the rain finally hits the glass at four in the afternoon, you put the pen down and listen to the roof take the water in, drop by drop.</p>
    `
  },
  {
    id: "writing-2",
    title: "Three Epistles to an Olive Tree",
    subtitle: "A short cycle of verse on patience, wind, and bitter fruit",
    genre: "Poetry",
    date: "September 28, 2026",
    readingTime: "2 min read",
    epigraph: "“The olive tree is surely the richest gift of Heaven.” — Thomas Jefferson",
    excerpt: "I. You do not ask the hillside for permission / to grow crooked where the gale strikes hardest / but twist your silver spine into an answering knot.",
    contentHtml: `
      <div class="poem-body">
        <h4 class="poem-section-num">I.</h4>
        <p>You do not ask the hillside for permission<br>
        to grow crooked where the gale strikes hardest,<br>
        but twist your silver spine into an answering knot.<br>
        Underneath your bark, centuries of drought<br>
        are remembered as hard honey,<br>
        tight rings of quiet endurance.</p>

        <h4 class="poem-section-num">II.</h4>
        <p>I bring paper and ink to your roots at midday.<br>
        The cicadas are grinding the heat into dust.<br>
        A single leaf drops into my open box of watercolors,<br>
        greener on top, pale as an old mirror underneath.<br>
        How many storms did you have to drink<br>
        before you learned to reflect the sky<br>
        without drowning in it?</p>

        <h4 class="poem-section-num">III.</h4>
        <p>Winter will come and strip the vines bare,<br>
        leaving the terrace cold as cut slate.<br>
        Yet you will stand in your dusty mantle,<br>
        holding small bitter beads of dark oil,<br>
        proving that the deepest sweetness<br>
        is the kind that takes sixty years<br>
        to forgive the frost.</p>
      </div>
    `
  },
  {
    id: "writing-3",
    title: "On Learning to Leave the Sketch Unfinished",
    subtitle: "Notes from the studio desk on why perfection is the enemy of breath",
    genre: "Craft & Philosophy",
    date: "August 19, 2026",
    readingTime: "5 min read",
    epigraph: "“There is a crack in everything; that’s how the light gets in.” — Leonard Cohen",
    excerpt: "Every young artist is terrified of empty white space. We want to fill every corner, render every eyelash, prove that we were there. But the hand must learn courtesy.",
    contentHtml: `
      <p class="drop-cap">Every young artist begins with a ravenous terror of empty paper. We feel an urge to colonize every square inch: shade the corners, double the crosshatching, polish every contour until the drawing looks like a taxidermied bird. It looks complete, but it has ceased to breathe.</p>

      <p>I learned this from an old bookbinder named Monsieur Carl in Lyon. He had a scarred wooden workbench that smelled of bone glue and bees-wax. I watched him trim an edition of Rilke. When I asked why he left the fore-edges deckled and ragged instead of guillotining them smooth, he tapped his forehead with a bone folder: <em>‘If you make every border clean, the reader has nowhere to rest their thumb without feeling like a trespasser.’</em></p>

      <p>The human imagination is not an empty bucket to be poured into; it is a hearth that wants a spark. When you draw a hand with four quick strokes of vine charcoal and leave the wrist implied by a faint wash of lilac shadow, the viewer’s eye completes the tendon. They become your collaborator. They lean into the page.</p>

      <p>Now, when I work, my measure of a good morning in the studio is not how much I added, but how much I had the discipline to withhold. To leave the margin wide. To let the wash puddle where it will. To trust that the paper has its own quiet dignity, even when untouched.</p>
    `
  },
  {
    id: "writing-4",
    title: "Margins, Dust, and Lavender Water",
    subtitle: "Fragments from an unposted studio journal",
    genre: "Studio Journal",
    date: "July 04, 2026",
    readingTime: "3 min read",
    epigraph: "“What is kept in secret stays sweetest.”",
    excerpt: "A list of things noticed while waiting for tempera to set: the shadow of the window latch moving three inches across the floorboards; the swallow nesting above the sill...",
    contentHtml: `
      <p class="drop-cap">A catalog of small occurrences while waiting for wet glue and egg tempera to dry:</p>

      <ul class="journal-fragments">
        <li><strong>07:15 AM</strong> — The sunlight hits the blue glass jar on the shelf first. It casts an elongated violet oval on the whitewashed wall that looks like an egg of pure indigo.</li>
        <li><strong>10:40 AM</strong> — Found a recipe in a 1920s household manual for making ink from boiled walnut husks, vinegar, and iron nails. Put three rusty nails into a pickle jar behind the stove. We shall see in three weeks.</li>
        <li><strong>01:20 PM</strong> — Bread, goat curd, and three dark olives on a cracked plate. The oil on my fingertips left a grease mark on page 14 of the sketchbook. I drew a small laurel wreath around the smudge so it looks intentional.</li>
        <li><strong>04:50 PM</strong> — A sudden thunderstorm. The smell of hot stone drinking rain. There is no perfume on earth that can rival petrichor on dried thyme.</li>
        <li><strong>09:15 PM</strong> — The lamp goes off. The valley is silent except for the bells of Saint-Julien across the ridge. Good night to the paper, good night to the ink.</li>
      </ul>
    `
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WRITINGS_DATA };
}
