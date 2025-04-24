# Missing Logo Files

The following logo files need to be added to this directory:

1. `logo.webp` - The primary logo used when the header is scrolled down or the mobile menu is open (dark logo for light backgrounds)
2. `logo-white.webp` - The alternative logo used when the header is at the top and the menu is closed (light logo for dark/transparent backgrounds)

Both logos should be properly optimized in WebP format and sized appropriately (recommended height: 40-50px).

## Logo Usage

These logos are used by the Logo component in `src/components/Logo.js` which switches between them based on the scroll position and menu state via Alpine.js store.

## Implementation Notes

The header automatically toggles between transparent and white background based on scroll position, which is why two different logo versions are needed for proper contrast. 