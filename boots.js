/* ============================================================
   BOOT LOCKER — your stock list
   This is the only file you need to edit to change what's for sale.

   TO ADD A BOOT
   Copy one block between { and }, paste it under the last one
   (keep the comma between blocks) and change the details:

     name      the boot's name as customers should see it
     size      UK size as a number, e.g. 7 or 8.5
                (one entry per size — a boot in two sizes = two entries)
     price     number in pounds, e.g. 99.99
     image     path to the photo, e.g. "images/my-boot.png"
                (leave "" to show a "photo coming soon" panel)
     stripe    your Stripe Payment Link for this boot + size
                (leave "" and the button opens your Instagram instead)
     inStock   true = can be bought, false = shows SOLD OUT

   TO REMOVE A BOOT: delete its block, or set inStock to false.
   ============================================================ */

window.SHOP = {
  name: "Boot Locker",
  instagram: "boot_locker__",
  tiktok: "boot_locker_",
  phone: "44+ 077879723660",
  phoneLink: "+44077879723660"
};

window.BOOTS = [
  {
    name: "Nike Mercurial Vapor XI Neymar FG football boot in the \"Blue Orbit\"",
    size: 7,
    price: 99.99,
    image: "images/nike-neymar-blue-orbit.png",
    stripe: "",
    inStock: true
  },
  {
    name: "Nike Mercurial Vapor XI FG Fire Pack",
    size: 7,
    price: 99.99,
    image: "images/nike-vapor-xi-fire-pack.png",
    stripe: "",
    inStock: true
  },
  {
    name: "Nike Mercurial Vapor XI Neymar FG football boot in the \"Blue Orbit\"",
    size: 8,
    price: 99.99,
    image: "images/nike-neymar-blue-orbit.png",
    stripe: "",
    inStock: true
  },
  {
    name: "Nike Mercurial Vapor XI FG Fire Pack",
    size: 8,
    price: 99.99,
    image: "images/nike-vapor-xi-fire-pack.png",
    stripe: "",
    inStock: true
  },
  {
    name: "Adidas Predator laceless firm ground Elite",
    size: 9,
    price: 99.99,
    image: "",
    stripe: "",
    inStock: true
  }
];
