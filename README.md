# dropdown-menu-package

A simple, reusable dropdown menu utility for web projects.

## Installation

```bash
npm install @mdot2x3/dropdown-menu-package
```

## Usage

For use with build tools like Webpack, Vite, Create React App, etc.

1. **Import the JavaScript and CSS:**

   ```js
   import { attachDropdownMenu } from "@mdot2x3/dropdown-menu-package";
   import "@mdot2x3/dropdown-menu-package/style.css";
   ```

2. **Add HTML:**

   ```html
   <button class="dropdown-toggle">Menu</button>
   <nav class="dropdown-menu hidden">
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
   </nav>
   ```

3. **Initialize the dropdown:**

   ```js
   attachDropdownMenu({
     buttonSelector: ".dropdown-toggle",
     menuSelector: ".dropdown-menu",
   });
   ```

## Customization

- Change selectors in the JS options (see 3. above) to match your alternate HTML class names.
- You can override the default styles by targeting these classes in your own CSS:
  - For menu/toggle button appearance:
    - `.dropdown-menu`
    - `.dropdown-toggle`
  - For menu show/hide behavior and transitions:
    - `.hidden`
    - `.visible`

## License

MIT
