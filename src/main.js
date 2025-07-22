import en from './locale/en';
import twPropertyType from './twPropertyType';
import * as properties from './tailwindProperties';

const selectors = [];

function grapesjs_tailwind_sm(editor, opts = {}){
  const options = { ...{
    i18n: {},
    // default options
  },  ...opts };
  
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
      en,
      ...options.i18n,
  });

  const styleManager = editor.StyleManager;

  twPropertyType(editor);

  const addTwProperties = [];

  Object.values(properties).forEach(property => {
    styleManager.addBuiltIn(property.id, property);
    addTwProperties.push(property);
  });

  document.addEventListener("click", function (event) {
    const label = event.target.closest(".gjs-sm-label");
    if (!label) return; // Exit if clicked outside
  
    const icon = label.querySelector(".gjs-sm-icon");
    if (!icon) return;
  
    let property = icon.innerText.trim();
  
    // Exception mapping for special cases
    const propertyMap = {
        "T/R/B/L": "top-right-bottom-left"
    };
  
    // Use mapped value if exists, otherwise apply default conversion
    let urlExtension = propertyMap[property] || property.toLowerCase().replace(/\s+/g, "-");
  
    // Open the Tailwind documentation link
    const link = `https://tailwindcss.com/docs/${urlExtension}`;
    window.open(link, "_blank");
  });


};

// Export for ES Modules & CommonJS
export default grapesjs_tailwind_sm;

// If running in browser without modules, attach to window
if (typeof window !== 'undefined') {
  window.GrapesjsTailwindSM = grapesjs_tailwind_sm;
}