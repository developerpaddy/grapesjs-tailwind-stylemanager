const spacing = [
  { name: "0", size: "0px", pixel: "0px" },
  { name: "px", size: "1px", pixel: "1px" },
  { name: "0.5", size: "0.125rem", pixel: "2px" },
  { name: "1", size: "0.25rem", pixel: "4px" },
  { name: "1.5", size: "0.375rem", pixel: "6px" },
  { name: "2", size: "0.5rem", pixel: "8px" },
  { name: "2.5", size: "0.625rem", pixel: "10px" },
  { name: "3", size: "0.75rem", pixel: "12px" },
  { name: "3.5", size: "0.875rem", pixel: "14px" },
  { name: "4", size: "1rem", pixel: "16px" },
  { name: "5", size: "1.25rem", pixel: "20px" },
  { name: "6", size: "1.5rem", pixel: "24px" },
  { name: "7", size: "1.75rem", pixel: "28px" },
  { name: "8", size: "2rem", pixel: "32px" },
  { name: "9", size: "2.25rem", pixel: "36px" },
  { name: "10", size: "2.5rem", pixel: "40px" },
  { name: "11", size: "2.75rem", pixel: "44px" },
  { name: "12", size: "3rem", pixel: "48px" },
  { name: "14", size: "3.5rem", pixel: "56px" },
  { name: "16", size: "4rem", pixel: "64px" },
  { name: "20", size: "5rem", pixel: "80px" },
  { name: "24", size: "6rem", pixel: "96px" },
  { name: "28", size: "7rem", pixel: "112px" },
  { name: "32", size: "8rem", pixel: "128px" },
  { name: "36", size: "9rem", pixel: "144px" },
  { name: "40", size: "10rem", pixel: "160px" },
  { name: "44", size: "11rem", pixel: "176px" },
  { name: "48", size: "12rem", pixel: "192px" },
  { name: "52", size: "13rem", pixel: "208px" },
  { name: "56", size: "14rem", pixel: "224px" },
  { name: "60", size: "15rem", pixel: "240px" },
  { name: "64", size: "16rem", pixel: "256px" },
  { name: "72", size: "18rem", pixel: "288px" },
  { name: "80", size: "20rem", pixel: "320px" },
  { name: "96", size: "24rem", pixel: "384px" },
];

export function tailwindClasses(property){
  
  if(property === 'padding'){
    const variations = [
      { prefix: 'p', styles: { 'padding': 'size' } },
      { prefix: 'pt', styles: { 'padding-top': 'size' } },
      { prefix: 'pl', styles: { 'padding-left': 'size' } },
      { prefix: 'pb', styles: { 'padding-bottom': 'size' } },
      { prefix: 'pr', styles: { 'padding-right': 'size' } },
      { prefix: 'px', styles: { 'padding-left': 'size', 'padding-right': 'size' } },
      { prefix: 'py', styles: { 'padding-top': 'size', 'padding-bottom': 'size' } },
      { prefix: 'ps', styles: { 'padding-inline-start': 'size' } },
      { prefix: 'pe', styles: { 'padding-inline-end': 'size' } },
    ];
    return getVariations(spacing, variations);
  }

  if(property === 'margin'){
    const variations = [
      { prefix: 'm', styles: { 'margin': 'size' } },
      { prefix: 'mt', styles: { 'margin-top': 'size' } },
      { prefix: 'ml', styles: { 'margin-left': 'size' } },
      { prefix: 'mb', styles: { 'margin-bottom': 'size' } },
      { prefix: 'mr', styles: { 'margin-right': 'size' } },
      { prefix: 'mx', styles: { 'margin-left': 'size', 'margin-right': 'size' } },
      { prefix: 'my', styles: { 'margin-top': 'size', 'margin-bottom': 'size' } },
      { prefix: 'ms', styles: { 'margin-inline-start': 'size' } },
      { prefix: 'me', styles: { 'margin-inline-end': 'size' } },
    ];
    const mSpacing = [...spacing];
    mSpacing.push({ name: "auto", size: "auto", pixel: "auto" });
    return getVariations(mSpacing, variations);
  }

  if(property === 'space-between'){
    const variations = [
      { prefix: 'space-x', styles: { 'margin-left': 'size' } },
      { prefix: 'space-y', styles: { 'margin-top': 'size' } },
    ];
    // const sSpacing = [...spacing];
    // sSpacing.push({ name: "reverse", size: "1", pixel: "1" });
    return getVariations(spacing, variations);
  }

  if(property === 'width'){
    const variations = [
      { prefix: 'w', styles: { 'width': 'size' } },
    ];
    const colSpacing = get_cols([2, 3, 4, 5, 6, 12]);
    const sWSpacings = get_sWSpacings(['svh', 'lvh', 'dvh', 'none'], 'ex');
    const wSpacing = [...spacing, ...colSpacing, ...sWSpacings];
    wSpacing.push({ name: "screen", size: "100vw", pixel: "" })
    return getVariations(wSpacing, variations);
  }

  if(property === 'min-width'){
    const variations = [
      { prefix: 'min-w', styles: { 'min-width': 'size' } },
    ];
    const sMxWSpacings = get_sWSpacings(["full", "min", "max", "fit"], 'in');
    const wSpacing = [...spacing, ...sMxWSpacings];
    return getVariations(wSpacing, variations);
  }

  if(property === 'max-width'){
    const variations = [
      { prefix: 'max-w', styles: { 'max-width': 'size' } },
    ];

    const wMnamed = get_named();
    const sMnWSpacings = get_sWSpacings(["full", "min", "max", "fit", "prose"], 'in');
    const wMScreen = get_screenSpacings();
    const wSpacing = [...spacing, ...wMnamed, ...sMnWSpacings, ...wMScreen];
    return getVariations(wSpacing, variations);
  }

  if(property === 'height'){
    const variations = [
      { prefix: 'h', styles: { 'height': 'size' } },
    ];
    const colSpacing = get_cols([2, 3, 4, 5, 6]);
    const sWSpacings = get_sWSpacings(['svw', 'lvw', 'dvw', 'none', "prose"], 'ex');
    const wSpacing = [...spacing, ...colSpacing, ...sWSpacings];
    wSpacing.push({ name: "screen", size: "100vh", pixel: "" })
    return getVariations(wSpacing, variations);
  }

  if(property === 'min-height'){
    const variations = [
      { prefix: 'min-h', styles: { 'min-height': 'size' } },
    ];
    const sMxWSpacings = get_sWSpacings(["svw", "lvw", "dvw", "none", "prose"], 'ex');
    const wSpacing = [...spacing, ...sMxWSpacings];
    wSpacing.push({ name: "screen", size: "100vh", pixel: "" })
    return getVariations(wSpacing, variations);
  }

  if(property === 'max-height'){
    const variations = [
      { prefix: 'max-h', styles: { 'max-height': 'size' } },
    ];

    const wMnamed = get_named();
    const sMnWSpacings = get_sWSpacings(["svw", "lvw", "dvw", "prose"], 'ex');
    const wMScreen = get_screenSpacings();
    const wSpacing = [...spacing, ...wMnamed, ...sMnWSpacings, ...wMScreen];
    wSpacing.push({ name: "screen", size: "100vh", pixel: "" })
    return getVariations(wSpacing, variations);
  }

  if(property === 'size'){
    const variations = [
      { prefix: 'size', styles: { 'width': 'size', 'height': 'size' } },
    ];
    const colSpacing = get_cols([2, 3, 4, 5, 6, 12]);
    const sWSpacings = get_sWSpacings(['full', 'min', 'max', 'fit'], 'in');
    const wSpacing = [...spacing, ...colSpacing, ...sWSpacings];
    wSpacing.push({ name: "screen", size: "100vw", pixel: "" })
    return getVariations(wSpacing, variations);
  }

}

function getVariations(pSpacing = [], variations){

  const propertyObj = [];
  // console.log(pSpacing);
  pSpacing.forEach((elem) => {
    variations.forEach(({ prefix, styles }) => {
      const styleObj = {};
      Object.entries(styles).forEach(([key, value]) => {
        styleObj[key] = elem[value];
      });
      propertyObj.push({ id: `${prefix}-${elem.name}`, styleObj });
    });
  });

  return propertyObj;
}

function get_cols(cols){

  const colSpacing = [];
  cols.forEach( col => {
    for(var i=1; i<col; i++){
      const sName = i + "/" + col;
      const perSize = i/col * 100;
      const isDecimal = perSize.toString().split(".")[1];
      if (isDecimal !== undefined && isDecimal.length > 5) {
          var percentage = perSize.toFixed(5);
      }
      colSpacing.push({ name: sName, size: percentage, pixel: ""});
    }
  })

  return colSpacing;
}

function get_named(named = []){

  const namedSpacing = [
    { name: "xs", size: "20rem", pixel: "320px" },
    { name: "sm", size: "24rem", pixel: "384px" },
    { name: "md", size: "28rem", pixel: "448px" },
    { name: "lg", size: "32rem", pixel: "512px" },
    { name: "xl", size: "36rem", pixel: "576px" },
    { name: "2xl", size: "42rem", pixel: "672px" },
    { name: "3xl", size: "48rem", pixel: "768px" },
    { name: "4xl", size: "56rem", pixel: "896px" },
    { name: "5xl", size: "64rem", pixel: "1024px" },
    { name: "6xl", size: "72rem", pixel: "1152px" },
    { name: "7xl", size: "80rem", pixel: "1280px" },
  ];

  return namedSpacing;

}

function get_screenSpacings(){

  const screenSpacings = [
    { name: "screen-sm", size: "640px", pixel: "640px" },
    { name: "screen-md", size: "768px", pixel: "768px" },
    { name: "screen-lg", size: "1024px", pixel: "1024px" },
    { name: "screen-xl", size: "1280px", pixel: "1280px" },
    { name: "screen-2xl", size: "1536px", pixel: "1536px" },
  ];

  return screenSpacings;
}

function get_sWSpacings(req_sWSpacings = [], in_ex = 'in'){
  const sWSpacings = [
    { name: "auto", size: "auto", pixel: "auto" },
    { name: "none", size: "none", pixel: "none" },
    { name: "full", size: "100%", pixel: "" },
    { name: "svw", size: "100svw", pixel: "" },
    { name: "svh", size: "100svh", pixel: "" },
    { name: "lvw", size: "100lvw", pixel: "" },
    { name: "lvh", size: "100lvh", pixel: "" },
    { name: "dvw", size: "100dvw", pixel: "" },
    { name: "dvh", size: "100dvh", pixel: "" },
    { name: "min", size: "min-content", pixel: "" },
    { name: "max", size: "max-content", pixel: "" },
    { name: "fit", size: "fit-content", pixel: "" },
    { name: "prose", size: "65ch", pixel: "" }
  ];

  if(req_sWSpacings.length > 0 && in_ex == 'in'){
    return sWSpacings.filter(item => req_sWSpacings.includes(item.name));
  }else if(req_sWSpacings.length > 0 && in_ex == 'ex'){
    return sWSpacings.filter(item => !req_sWSpacings.includes(item.name));
  }else{
    return sWSpacings;
  }
}