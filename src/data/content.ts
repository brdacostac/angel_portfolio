// ╔══════════════════════════════════════════════════════════════╗
// ║   IMPORTANT: Lines that start with // are notes for you —   ║
// ║   the website ignores them completely.                       ║
// ║   Only change the text that is inside "quotes like these".  ║
// ╚══════════════════════════════════════════════════════════════╝


// ================================================================
//  GALLERY PHOTOS
//
//  To ADD a new photo:
//    1. Put the image file inside the  public/images/  folder
//    2. Copy the example block at the bottom of this section
//       (the 5 lines between the dashes) and paste it above the ];
//    3. Replace the text in quotes with your photo's info
//
//  Each photo has 3 required fields:
//    src       → the file name   (example: "/images/my-photo.jpg")
//    alt       → a short label   (example: "Hamlet - Act 3")
//    caption   → the title shown on the photo card on the website
//
//  And 1 optional field:
//    objectPosition → controls how the photo is cropped. Options:
//                     "center center"  (default, centered)
//                     "top center"     (shows more of the top)
//                     "left center"    (shows more of the left)
//                     "75% center"     (higher % = more to the right)
// ================================================================

export const galleryItems = [
  {
    src: "/images/work_photo3.png",
    alt: "The Foreigner - Act 2: Storytime",
    caption: "The Foreigner - Act 2: Storytime",
    objectPosition: "left center",
  },
  {
    src: "/images/work_photo1.png",
    alt: "The Moors – Act 1: Emile's Song",
    caption: "The Moors – Act 1: Emile's Song",
    objectPosition: "75% center",
  },
  {
    src: "/images/work_photo2.png",
    alt: "The Moors – Act 2: Exchange",
    caption: "The Moors – Act 2: Exchange",
  },

  // -- EXAMPLE: copy the 5 lines below whitout the "//" and paste above the }; --
  // {
  //   src: "/images/YOUR-FILE-NAME.jpg",
  //   alt: "Show Name – Scene description",
  //   caption: "Show Name – Scene description",
  // },
  // ------------------------------------------------------------
];


// ================================================================
//  PROJECTS
//
//  To ADD a new project:
//    1. Copy the example block at the bottom of this section
//       (the 7 lines between the dashes) and paste it right after
//       the [  at the top — this makes it show up first on the page
//    2. Replace the text in quotes with your project's info
//
//  Each project has 5 fields:
//    title  → full name of the project or show
//    role   → your character or job title
//    type   → "Voice Over", "Theater", "Film", or "Short Film"
//    year   → the year, or write "tbd" if not set yet
//    link   → paste the project URL here. If there isn't one, use "#"
// ================================================================

export const projects = [
  {
    title: "Avion Among the Serpents",
    role: "Avion",
    type: "Voice Over",
    year: "tbd",
    link: "https://www.youtube.com/@Avionamongtheserpents/featured",
  },

  // -- EXAMPLE: copy the 7 lines below and paste above the ]; --
  // {
  //   title: "Project Name",
  //   role: "Character Name",
  //   type: "Theater",
  //   year: "2025",
  //   link: "https://your-project-link.com",
  // },
  // ------------------------------------------------------------
];


// ================================================================
//  VIDEO REEL
//
//  When your video reel is ready on YouTube or Vimeo:
//    1. Open the video in your browser
//    2. Copy the link from the address bar
//       (example: https://www.youtube.com/watch?v=AbCd1234)
//    3. Paste it between the quotes below, replacing the ""
//
//  As long as the quotes are empty (""), the website will
//  automatically show "Video reel coming soon".
// ================================================================

export const videoReel = {
  title: "Acting Reel 2025",
  videoUrl: "",
  //          ↑ paste your YouTube or Vimeo link here, inside the quotes
};
