const value = null;

export const AspectRatio = {
    type: 'twPropertyType',
    label: 'Aspect Ratio',
    id: 'twAspectRatio',
    property: 'aspect-ratio',
    twPrefixes: ['aspect-ratio'],
    cssPropertys: ['aspect-ratio'],
    valueTypes: ['s'],
    options: [
        {id: 'aspect-video', value: 'var(--aspect-ratio-video)' },
        {id: 'aspect-auto', value: 'auto' },
    ]
};

export const Columns = {
    type: 'twPropertyType',
    label: 'Columns',
    id: 'twColumns',
    property: 'columns',
    twPrefixes: ['columns'],
    cssPropertys: ['columns'],
    valueTypes: ['n', 's'],
    options: [
        {id: 'columns-3xs', value: 'var(--container-3xs)' },
        {id: 'columns-2xs', value: 'var(--container-2xs)' },
        {id: 'columns-xs', value: 'var(--container-xs)' },
        {id: 'columns-sm', value: 'var(--container-sm)' },
        {id: 'columns-md', value: 'var(--container-md)' },
        {id: 'columns-lg', value: 'var(--container-lg)' },
        {id: 'columns-xl', value: 'var(--container-xl)' },
        {id: 'columns-2xl', value: 'var(--container-2xl)' },
        {id: 'columns-3xl', value: 'var(--container-3xl)' },
        {id: 'columns-4xl', value: 'var(--container-4xl)' },
        {id: 'columns-5xl', value: 'var(--container-5xl)' },
        {id: 'columns-6xl', value: 'var(--container-6xl)' },
        {id: 'columns-7xl', value: 'var(--container-7xl)' },
        {id: 'columns-auto', value: 'auto' },
    ]
};

export const BreakAfter = {
    type: 'twPropertyType',
    label: 'Break After',
    id: 'twBreakAfter',
    property: 'break-after',
    twPrefixes: ['break-after'],
    cssPropertys: ['break-after'],
    valueTypes: ['s'],
    options: [
        {id: 'break-after-auto', value: 'auto' },
        {id: 'break-after-avoid', value: 'avoid' },
        {id: 'break-after-all', value: 'all' },
        {id: 'break-after-avoid-page', value: 'avoid-page' },
        {id: 'break-after-page', value: 'page' },
        {id: 'break-after-left', value: 'left' },
        {id: 'break-after-right', value: 'right' },
        {id: 'break-after-column', value: 'column' },
    ]
};

export const BreakBefore = {
    type: 'twPropertyType',
    label: 'Break Before',
    id: 'twBreakBefore',
    property: 'break-before',
    twPrefixes: ['break-before'],
    cssPropertys: ['break-before'],
    valueTypes: ['s'],
    options: [
        {id: 'break-before-auto', value: 'auto' },
        {id: 'break-before-avoid', value: 'avoid' },
        {id: 'break-before-all', value: 'all' },
        {id: 'break-before-avoid-page', value: 'avoid-page' },
        {id: 'break-before-page', value: 'page' },
        {id: 'break-before-left', value: 'left' },
        {id: 'break-before-right', value: 'right' },
        {id: 'break-before-column', value: 'column' },
    ]
};

export const BreakInside = {
    type: 'twPropertyType',
    label: 'Break Inside',
    id: 'twBreakInside',
    property: 'break-inside',
    twPrefixes: ['break-inside'],
    cssPropertys: ['break-inside'],
    valueTypes: ['s'],
    options: [
        {id: 'break-inside-auto', value: 'auto' },
        {id: 'break-inside-avoid', value: 'avoid' },
        {id: 'break-inside-avoid-page', value: 'avoid-page' },
        {id: 'break-inside-avoid-column', value: 'avoid-column' },
    ]
};

export const BoxDecorationBreak = {
    type: 'twPropertyType',
    label: 'Box Decoration Break',
    id: 'twBoxDecorationBreak',
    property: 'box-decoration-break',
    twPrefixes: ['box-decoration-break'],
    cssPropertys: ['box-decoration-break'],
    valueTypes: ['s'],
    options: [
        {id: 'box-decoration-clone', value: 'clone' },
        {id: 'box-decoration-slice', value: 'slice' },
    ]
};

export const BoxSizing = {
    type: 'twPropertyType',
    label: 'Box Sizing',
    id: 'twBoxSizing',
    property: 'box-sizing',
    twPrefixes: ['box-sizing'],
    cssPropertys: ['box-sizing'],
    valueTypes: ['s'],
    options: [
        {id: 'box-border', value: 'border-box' },
        {id: 'box-content', value: 'content-box' },
    ]
};

export const Display = {
    type: 'twPropertyType',
    label: 'Display',
    id: 'twDisplay',
    property: 'display',
    twPrefixes: ['display'],
    cssPropertys: ['display'],
    valueTypes: ['s'],
    options: [
        {id: 'inline', value: 'inline' },
        {id: 'block', value: 'block' },
        {id: 'inline-block', value: 'inline-block' },
        {id: 'flow-root', value: 'flow-root' },
        {id: 'flex', value: 'flex' },
        {id: 'inline-flex', value: 'inline-flex' },
        {id: 'grid', value: 'grid' },
        {id: 'inline-grid', value: 'inline-grid' },
        {id: 'contents', value: 'contents' },
        {id: 'table', value: 'table' },
        {id: 'inline-table', value: 'inline-table' },
        {id: 'table-caption', value: 'table-caption' },
        {id: 'table-cell', value: 'table-cell' },
        {id: 'table-column', value: 'table-column' },
        {id: 'table-column-group', value: 'table-column-group' },
        {id: 'table-footer-group', value: 'table-footer-group' },
        {id: 'table-header-group', value: 'table-header-group' },
        {id: 'table-row-group', value: 'table-row-group' },
        {id: 'table-row', value: 'table-row' },
        {id: 'list-item', value: 'list-item' },
        {id: 'hidden', value: 'none' },
    ]
};

export const Float = {
    type: 'twPropertyType',
    label: 'Float',
    id: 'twFloat',
    property: 'float',
    twPrefixes: ['float'],
    cssPropertys: ['float'],
    valueTypes: ['s'],
    options: [
        {id: 'float-right', value: 'right' },
        {id: 'float-left', value: 'left' },
        {id: 'float-start', value: 'inline-start' },
        {id: 'float-end', value: 'inline-end' },
        {id: 'float-none', value: 'none' },
    ]
};

export const Clear = {
    type: 'twPropertyType',
    label: 'Clear',
    id: 'twClear',
    property: 'clear',
    twPrefixes: ['clear'],
    cssPropertys: ['clear'],
    valueTypes: ['s'],
    options: [
        {id: 'clear-left', value: 'left' },
        {id: 'clear-right', value: 'right' },
        {id: 'clear-both', value: 'both' },
        {id: 'clear-start', value: 'inline-start' },
        {id: 'clear-end', value: 'inline-end' },
        {id: 'clear-none', value: 'none' },
    ]
};

export const Isolation = {
    type: 'twPropertyType',
    label: 'Isolation',
    id: 'twIsolation',
    property: 'isolation',
    twPrefixes: ['isolation'],
    cssPropertys: ['isolation'],
    valueTypes: ['s'],
    options: [
        {id: 'isolate', value: 'isolate' },
        {id: 'isolation-auto', value: 'auto' },
    ]
};

export const ObjectFit = {
    type: 'twPropertyType',
    label: 'Object Fit',
    id: 'twObjectFit',
    property: 'object-fit',
    twPrefixes: ['object-fit'],
    cssPropertys: ['object-fit'],
    valueTypes: ['s'],
    options: [
        {id: 'object-contain', value: 'contain' },
        {id: 'object-cover', value: 'cover' },
        {id: 'object-fill', value: 'fill' },
        {id: 'object-none', value: 'none' },
        {id: 'object-scale-down', value: 'scale-down' },
    ]
};

export const ObjectPosition = {
    type: 'twPropertyType',
    label: 'Object Position',
    id: 'twObjectPosition',
    property: 'object-position',
    twPrefixes: ['object-position'],
    cssPropertys: ['object-position'],
    valueTypes: ['s'],
    options: [
        {id: 'object-bottom', value: 'bottom' },
        {id: 'object-center', value: 'center' },
        {id: 'object-left', value: 'left' },
        {id: 'object-left-bottom', value: 'left bottom' },
        {id: 'object-left-top', value: 'left top' },
        {id: 'object-right', value: 'right' },
        {id: 'object-right-bottom', value: 'right bottom' },
        {id: 'object-right-top', value: 'right top' },
        {id: 'object-top', value: 'top' },
    ]
};

export const Overflow = {
    type: 'twPropertyType',
    label: 'Overflow',
    id: 'twOverflow',
    property: 'overflow',
    twPrefixes: ['overflow', 'overflow-x', 'overflow-y'],
    cssPropertys: ['overflow', 'overflow-x', 'overflow-y'],
    valueTypes: ['s'],
    options: [
        {id: 'overflow-auto', value: 'overflow: auto' },
        {id: 'overflow-hidden', value: 'overflow: hidden' },
        {id: 'overflow-clip', value: 'overflow: clip' },
        {id: 'overflow-visible', value: 'overflow: visible' },
        {id: 'overflow-scroll', value: 'overflow: scroll' },
        {id: 'overflow-x-auto', value: 'overflow-x: auto' },
        {id: 'overflow-x-hidden', value: 'overflow-x: hidden' },
        {id: 'overflow-x-clip', value: 'overflow-x: clip' },
        {id: 'overflow-x-visible', value: 'overflow-x: visible' },
        {id: 'overflow-x-scroll', value: 'overflow-x: scroll' },
        {id: 'overflow-y-auto', value: 'overflow-y: auto' },
        {id: 'overflow-y-hidden', value: 'overflow-y: hidden' },
        {id: 'overflow-y-clip', value: 'overflow-y: clip' },
        {id: 'overflow-y-visible', value: 'overflow-y: visible' },
        {id: 'overflow-y-scroll', value: 'overflow-y: scroll' },
    ]
};

export const OverscrollBehavior = {
    type: 'twPropertyType',
    label: 'Overscroll Behavior',
    id: 'twOverscrollBehavior',
    property: 'overscroll-behavior',
    twPrefixes: ['overscroll', 'overscroll-x', 'overscroll-y'],
    cssPropertys: ['overscroll-behavior', 'overscroll-behavior-x', 'overscroll-behavior-y'],
    valueTypes: ['s'],
    options: [
        {id: 'overscroll-auto', value: 'overscroll-behavior: auto' },
        {id: 'overscroll-contain', value: 'overscroll-behavior: contain' },
        {id: 'overscroll-none', value: 'overscroll-behavior: none' },
        {id: 'overscroll-x-auto', value: 'overscroll-behavior-x: auto' },
        {id: 'overscroll-x-contain', value: 'overscroll-behavior-x: contain' },
        {id: 'overscroll-x-none', value: 'overscroll-behavior-x: none' },
        {id: 'overscroll-y-auto', value: 'overscroll-behavior-y: auto' },
        {id: 'overscroll-y-contain', value: 'overscroll-behavior-y: contain' },
        {id: 'overscroll-y-none', value: 'overscroll-behavior-y: none' },
    ]
};

export const Position = {
    type: 'twPropertyType',
    label: 'Position',
    id: 'twPosition',
    property: 'position',
    twPrefixes: ['position'],
    cssPropertys: ['position'],
    valueTypes: ['s'],
    options: [
        {id: 'sr-only', value: 'absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0' },
        {id: 'not-sr-only', value: 'static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal' },
        {id: 'static', value: 'static' },
        {id: 'fixed', value: 'fixed' },
        {id: 'absolute', value: 'absolute' },
        {id: 'relative', value: 'relative' },
        {id: 'sticky', value: 'sticky' },
    ]
};

export const Inset = {
    type: 'twPropertyType',
    label: 'T/R/B/L',
    id: 'twInset',
    property: 'inset',
    twPrefixes: ['inset', 'inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
    cssPropertys: ['inset', 'inset-inline', 'inset-block', 'inset-inline-start', 'inset-inline-end', 'top', 'right', 'bottom', 'left'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'inset-px', value: 'inset: 1px;' },
        {id: '-inset-px', value: 'inset: -1px;' },
        {id: 'inset-full', value: 'inset: 100%;' },
        {id: '-inset-full', value: 'inset: -100%;' },
        {id: 'inset-auto', value: 'inset: auto;' },
        {id: 'inset-x-px', value: 'inset-inline: 1px;' },
        {id: '-inset-x-px', value: 'inset-inline: -1px;' },
        {id: 'inset-x-full', value: 'inset-inline: 100%;' },
        {id: '-inset-x-full', value: 'inset-inline: -100%;' },
        {id: 'inset-x-auto', value: 'inset-inline: auto;' },
        {id: 'inset-y-px', value: 'inset-block: 1px;' },
        {id: '-inset-y-px', value: 'inset-block: -1px;' },
        {id: 'inset-y-full', value: 'inset-block: 100%;' },
        {id: '-inset-y-full', value: 'inset-block: -100%;' },
        {id: 'inset-y-auto', value: 'inset-block: auto;' },
        {id: 'start-px', value: 'inset-inline-start: 1px;' },
        {id: '-start-px', value: 'inset-inline-start: -1px;' },
        {id: 'start-full', value: 'inset-inline-start: 100%;' },
        {id: '-start-full', value: 'inset-inline-start: -100%;' },
        {id: 'start-auto', value: 'inset-inline-start: auto;' },
        {id: 'end-px', value: 'inset-inline-end: 1px;' },
        {id: '-end-px', value: 'inset-inline-end: -1px;' },
        {id: 'end-full', value: 'inset-inline-end: 100%;' },
        {id: '-end-full', value: 'inset-inline-end: -100%;' },
        {id: 'end-auto', value: 'inset-inline-end: auto;' },
        {id: 'top-px', value: 'top: 1px;' },
        {id: '-top-px', value: 'top: -1px;' },
        {id: 'top-full', value: 'top: 100%;' },
        {id: '-top-full', value: 'top: -100%;' },
        {id: 'top-auto', value: 'top: auto;' },
        {id: 'right-px', value: 'right: 1px;' },
        {id: '-right-px', value: 'right: -1px;' },
        {id: 'right-full', value: 'right: 100%;' },
        {id: '-right-full', value: 'right: -100%;' },
        {id: 'right-auto', value: 'right: auto;' },
        {id: 'bottom-px', value: 'bottom: 1px;' },
        {id: '-bottom-px', value: 'bottom: -1px;' },
        {id: 'bottom-full', value: 'bottom: 100%;' },
        {id: '-bottom-full', value: 'bottom: -100%;' },
        {id: 'bottom-auto', value: 'bottom: auto;' },
        {id: 'left-px', value: 'left: 1px;' },
        {id: '-left-px', value: 'left: -1px;' },
        {id: 'left-full', value: 'left: 100%;' },
        {id: '-left-full', value: 'left: -100%;' },
        {id: 'left-auto', value: 'left: auto;' },
    ]
};

export const Visibility = {
    type: 'twPropertyType',
    label: 'Visibility',
    id: 'twVisibility',
    property: 'visibility',
    twPrefixes: ['visibility'],
    cssPropertys: ['visibility'],
    valueTypes: ['s'],
    options: [
        {id: 'visible', value: 'visible' },
        {id: 'invisible', value: 'hidden' },
        {id: 'collapse', value: 'collapse' },
    ]
};

export const ZIndex = {
    type: 'twPropertyType',
    label: 'Z-Index',
    id: 'twZIndex',
    property: 'z-index',
    twPrefixes: ['z'],
    cssPropertys: ['z-index'],
    valueTypes: ['n', 'v', 'c', 's'],
    options: [
        {id: 'z-auto', value: 'auto' },
    ]
};

export const FlexBasis = {
    type: 'twPropertyType',
    label: 'Flex Basis',
    id: 'twFlexBasis',
    property: 'flex-basis',
    // requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex-basis'],
    cssPropertys: ['flex-basis'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'basis-{value}', value: 'calc({value} * 100%)' },
        {id: 'basis-full', value: '100%' },
        {id: 'basis-auto', value: 'auto' },
        {id: 'basis-3xs', value: 'var(--container-3xs)' },
        {id: 'basis-2xs', value: 'var(--container-2xs)' },
        {id: 'basis-xs', value: 'var(--container-xs)' },
        {id: 'basis-sm', value: 'var(--container-sm)' },
        {id: 'basis-md', value: 'var(--container-md)' },
        {id: 'basis-lg', value: 'var(--container-lg)' },
        {id: 'basis-xl', value: 'var(--container-xl)' },
        {id: 'basis-2xl', value: 'var(--container-2xl)' },
        {id: 'basis-3xl', value: 'var(--container-3xl)' },
        {id: 'basis-4xl', value: 'var(--container-4xl)' },
        {id: 'basis-5xl', value: 'var(--container-5xl)' },
        {id: 'basis-6xl', value: 'var(--container-6xl)' },
        {id: 'basis-7xl', value: 'var(--container-7xl)' },
    ]
};

export const FlexDirection = {
    type: 'twPropertyType',
    label: 'Flex Direction',
    id: 'twFlexDirection',
    property: 'flex-direction',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex-direction'],
    cssPropertys: ['flex-direction'],
    valueTypes: ['s'],
    options: [
        {id: 'flex-row', value: 'row' },
        {id: 'flex-row-reverse', value: 'row-reverse' },
        {id: 'flex-col', value: 'column' },
        {id: 'flex-col-reverse', value: 'column-reverse' },
    ]
};

export const FlexWrap = {
    type: 'twPropertyType',
    label: 'Flex Wrap',
    id: 'twFlexWrap',
    property: 'flex-wrap',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex-wrap'],
    cssPropertys: ['flex-wrap'],
    valueTypes: ['s'],
    options: [
        {id: 'flex-nowrap', value: 'nowrap' },
        {id: 'flex-wrap', value: 'wrap' },
        {id: 'flex-wrap-reverse', value: 'wrap-reverse' },
    ]
};

export const Flex = {
    type: 'twPropertyType',
    label: 'Flex',
    id: 'twFlex',
    property: 'flex',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex'],
    cssPropertys: ['flex'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'flex-{value}', value: 'calc({value} * 100%)' },
        {id: 'flex-auto', value: '1 1 auto' },
        {id: 'flex-initial', value: '0 1 auto' },
        {id: 'flex-none', value: 'none' },
        {id: 'flex-[{value}]', value: 'var({value})' },
    ]
};

export const FlexGrow = {
    type: 'twPropertyType',
    label: 'Flex Grow',
    id: 'twFlexGrow',
    property: 'flex-grow',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex-grow'],
    cssPropertys: ['flex-grow'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'grow', value: '1' },
    ]
};

export const FlexShrink = {
    type: 'twPropertyType',
    label: 'Flex Shrink',
    id: 'twFlexShrink',
    property: 'flex-shrink',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['flex-shrink'],
    cssPropertys: ['flex-shrink'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'shrink', value: '1' },
    ]
};

export const JustifyContent = {
    type: 'twPropertyType',
    label: 'Justify Content',
    id: 'twJustifyContent',
    property: 'justify-content',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['justify-content'],
    cssPropertys: ['justify-content'],
    valueTypes: ['s'],
    options: [
        {id: 'justify-start', value: 'flex-start' },
        {id: 'justify-end', value: 'flex-end' },
        {id: 'justify-center', value: 'center' },
        {id: 'justify-between', value: 'space-between' },
        {id: 'justify-around', value: 'space-around' },
        {id: 'justify-evenly', value: 'space-evenly' },
        {id: 'justify-stretch', value: 'stretch' },
        {id: 'justify-baseline', value: 'baseline' },
        {id: 'justify-normal', value: 'normal' },
    ]
};

export const JustifyItems = {
    type: 'twPropertyType',
    label: 'Justify Items',
    id: 'twJustifyItems',
    property: 'justify-items',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['justify-items'],
    cssPropertys: ['justify-items'],
    valueTypes: ['s'],
    options: [
        {id: 'justify-items-start', value: 'start' },
        {id: 'justify-items-end', value: 'end' },
        {id: 'justify-items-center', value: 'center' },
        {id: 'justify-items-stretch', value: 'stretch' },
        {id: 'justify-items-normal', value: 'normal' },
    ]
};

export const JustifySelf = {
    type: 'twPropertyType',
    label: 'Justify Self',
    id: 'twJustifySelf',
    property: 'justify-self',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['justify-self'],
    cssPropertys: ['justify-self'],
    valueTypes: ['s'],
    options: [
        {id: 'justify-self-auto', value: 'auto' },
        {id: 'justify-self-start', value: 'start' },
        {id: 'justify-self-end', value: 'end' },
        {id: 'justify-self-center', value: 'center' },
        {id: 'justify-self-stretch', value: 'stretch' },
    ]
};

export const AlignContent = {
    type: 'twPropertyType',
    label: 'Align Content',
    id: 'twAlignContent',
    property: 'align-content',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['align-content'],
    cssPropertys: ['align-content'],
    valueTypes: ['s'],
    options: [
        {id: 'content-normal', value: 'normal' },
        {id: 'content-center', value: 'center' },
        {id: 'content-start', value: 'flex-start' },
        {id: 'content-end', value: 'flex-end' },
        {id: 'content-between', value: 'space-between' },
        {id: 'content-around', value: 'space-around' },
        {id: 'content-evenly', value: 'space-evenly' },
        {id: 'content-baseline', value: 'baseline' },
        {id: 'content-stretch', value: 'stretch' },
    ]
};

export const AlignItems = {
    type: 'twPropertyType',
    label: 'Align Items',
    id: 'twAlignItems',
    property: 'align-items',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['align-items'],
    cssPropertys: ['align-items'],
    valueTypes: ['s'],
    options: [
        {id: 'items-start', value: 'flex-start' },
        {id: 'items-end', value: 'flex-end' },
        {id: 'items-center', value: 'center' },
        {id: 'items-baseline', value: 'baseline' },
        {id: 'items-stretch', value: 'stretch' },
    ]
};

export const AlignSelf = {
    type: 'twPropertyType',
    label: 'Align Self',
    id: 'twAlignSelf',
    property: 'align-self',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['align-self'],
    cssPropertys: ['align-self'],
    valueTypes: ['s'],
    options: [
        {id: 'self-auto', value: 'auto' },
        {id: 'self-start', value: 'flex-start' },
        {id: 'self-end', value: 'flex-end' },
        {id: 'self-center', value: 'center' },
        {id: 'self-stretch', value: 'stretch' },
        {id: 'self-baseline', value: 'baseline' },
    ]
};

export const Order = {
    type: 'twPropertyType',
    label: 'Order',
    id: 'twOrder',
    property: 'order',
    //requires: { twDisplay: ['flex'] },
    twPrefixes: ['order'],
    cssPropertys: ['order'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'order-first', value: 'calc(-infinity)' },
        {id: 'order-last', value: 'calc(infinity)' },
        {id: 'order-none', value: '0' },
    ]
};

export const GridTemplateColumns = {
    type: 'twPropertyType',
    label: 'Grid Template Columns',
    id: 'twGridTemplateColumns',
    property: 'grid-template-columns',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['grid-template-columns'],
    cssPropertys: ['grid-template-columns'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'grid-cols-none', value: 'none' },
        {id: 'grid-cols-subgrid', value: 'subgrid' },
    ]
};

export const GridColumn = {
    type: 'twPropertyType',
    label: 'Grid Column',
    id: 'twGridColumn',
    property: 'grid-column',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['col-start', 'col-end', 'col'],
    cssPropertys: ['grid-column-start', 'grid-column-end', 'grid-column'],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': `{value}`,
            '-n': `calc({value} * -1)`,
        }
    ],
    options: [
        {id: 'col-auto', value: 'grid-column: auto' },
        {id: 'col-start-auto', value: 'grid-column-start: auto' },
        {id: 'col-end-auto', value: 'grid-column-end: auto' },
    ]
};

export const GridColumnSpan = {
    type: 'twPropertyType',
    label: 'Column Span',
    id: 'twGridColumnSpan',
    property: 'grid-column',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['col-span'],
    cssPropertys: ['grid-column'],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': `span {value} / span {value}`,
            'c': `span var({value}) / span var({value})`,
        }
    ],
    options: [
        {id: 'col-span-full', value: '1 / -1' },
    ]
};

export const GridTemplateRows = {
    type: 'twPropertyType',
    label: 'Grid Template Rows',
    id: 'twGridTemplateRows',
    property: 'grid-template-rows',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['grid-template-rows'],
    cssPropertys: ['grid-template-rows'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'grid-rows-none', value: 'none' },
        {id: 'grid-rows-subgrid', value: 'subgrid' },
    ]
};

export const GridRow = {
    type: 'twPropertyType',
    label: 'Grid Row',
    id: 'twGridRow',
    property: 'grid-row',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['row', 'row-start', 'row-end'],
    cssPropertys: ['grid-row', 'grid-row-start', 'grid-row-end'],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': `{value}`,
            '-n': `calc({value} * -1)`,
        }
    ],
    options: [
        {id: 'row-auto', value: 'grid-row: auto' },
        {id: 'row-start-auto', value: 'grid-row-start: auto' },
        {id: 'row-end-auto', value: 'grid-row-end: auto' },
    ]
};

export const GridRowSpan = {
    type: 'twPropertyType',
    label: 'Row Span',
    id: 'twGridRowSpan',
    property: 'grid-row',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['row-span'],
    cssPropertys: ['grid-row'],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': `span {value} / span {value}`,
            'c': `span var({value}) / span var({value})`,
            'v': `span {vValue} / span {vValue}`
        }
    ],
    options: [
        {id: 'row-span-full', value: '1 / -1' },
    ]
};

export const GridAutoFlow = {
    type: 'twPropertyType',
    label: 'Grid Auto Flow',
    id: 'twGridAutoFlow',
    property: 'grid-auto-flow',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['grid-auto-flow'],
    cssPropertys: ['grid-auto-flow'],
    valueTypes: ['s'],
    options: [
        {id: 'grid-flow-row', value: 'row' },
        {id: 'grid-flow-col', value: 'column' },
        {id: 'grid-flow-dense', value: 'dense' },
        {id: 'grid-flow-row-dense', value: 'row dense' },
        {id: 'grid-flow-col-dense', value: 'column dense' },
    ]
};

export const GridAutoColumns = {
    type: 'twPropertyType',
    label: 'Grid Auto Columns',
    id: 'twGridAutoColumns',
    property: 'grid-auto-columns',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['grid-auto-columns'],
    cssPropertys: ['grid-auto-columns'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'auto-cols-auto', value: 'auto' },
        {id: 'auto-cols-min', value: 'min-content' },
        {id: 'auto-cols-max', value: 'max-content' },
        {id: 'auto-cols-fr', value: 'minmax(0, 1fr)' },
    ]
};

export const GridAutoRows = {
    type: 'twPropertyType',
    label: 'Grid Auto Rows',
    id: 'twGridAutoRows',
    property: 'grid-auto-rows',
    // requires: { twDisplay: ['grid'] },
    twPrefixes: ['grid-auto-rows'],
    cssPropertys: ['grid-auto-rows'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'auto-rows-auto', value: 'auto' },
        {id: 'auto-rows-min', value: 'min-content' },
        {id: 'auto-rows-max', value: 'max-content' },
        {id: 'auto-rows-fr', value: 'minmax(0, 1fr)' },
    ]
};

export const Gap = {
    type: 'twPropertyType',
    label: 'Gap',
    id: 'twGap',
    property: 'gap',
    // requires: { twDisplay: ['flex', 'grid'] },
    twPrefixes: ['gap', 'gap-x', 'gap-y'],
    cssPropertys: ['gap', 'column-gap', 'row-gap'],
    valueTypes: ['n', 'c', 'v']
};

export const PlaceContent = {
    type: 'twPropertyType',
    label: 'Place Content',
    id: 'twPlaceContent',
    property: 'place-content',
    // requires: { twDisplay: ['flex', 'grid'] },
    twPrefixes: ['place-content'],
    cssPropertys: ['place-content'],
    valueTypes: ['s'],
    options: [
        {id: 'place-content-center', value: 'center' },
        {id: 'place-content-start', value: 'start' },
        {id: 'place-content-end', value: 'end' },
        {id: 'place-content-between', value: 'space-between' },
        {id: 'place-content-around', value: 'space-around' },
        {id: 'place-content-evenly', value: 'space-evenly' },
        {id: 'place-content-baseline', value: 'baseline' },
        {id: 'place-content-stretch', value: 'stretch' },
    ]
};

export const PlaceItems = {
    type: 'twPropertyType',
    label: 'Place Items',
    id: 'twPlaceItems',
    property: 'place-items',
    // requires: { twDisplay: ['flex', 'grid'] },
    twPrefixes: ['place-items'],
    cssPropertys: ['place-items'],
    valueTypes: ['s'],
    options: [
        {id: 'place-items-start', value: 'start' },
        {id: 'place-items-end', value: 'end' },
        {id: 'place-items-center', value: 'center' },
        {id: 'place-items-baseline', value: 'baseline' },
        {id: 'place-items-stretch', value: 'stretch' },
    ]
};

export const PlaceSelf = {
    type: 'twPropertyType',
    label: 'Place Self',
    id: 'twPlaceSelf',
    property: 'place-self',
    // requires: { twDisplay: ['flex', 'grid'] },
    twPrefixes: ['place-self'],
    cssPropertys: ['place-self'],
    valueTypes: ['s'],
    options: [
        {id: 'place-self-auto', value: 'auto' },
        {id: 'place-self-start', value: 'start' },
        {id: 'place-self-end', value: 'end' },
        {id: 'place-self-center', value: 'center' },
        {id: 'place-self-stretch', value: 'stretch' },
    ]
};

export const padding = {
    type: 'twPropertyType',
    label: 'Padding',
    id: 'twPadding',
    property: 'padding',
    twPrefixes: ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'ps', 'pe'],
    cssPropertys: ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding-inline', 'padding-block', 'padding-inline-start', 'padding-inline-end'],
    valueTypes: ['n', 'v', 'c'],
};

export const margin = {
    type: 'twPropertyType',
    label: 'Margin',
    id: 'twMargin',
    property: 'margin',
    twPrefixes: ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'ms', 'me'],
    cssPropertys: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'margin-inline', 'margin-block', 'margin-inline-start', 'margin-inline-end'],
    valueTypes: ['n', 'v', 'c'],
}

// Auto-generated property definitions
export const Width = {
    type: 'twPropertyType',
    label: 'Width',
    id: 'twWidth',
    property: 'width',
    twPrefixes: ['w'],
    cssPropertys: ['width'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'w-3xs', value: 'var(--container-3xs);' },
        {id: 'w-2xs', value: 'var(--container-2xs);' },
        {id: 'w-xs', value: 'var(--container-xs); ' },
        {id: 'w-sm', value: 'var(--container-sm); ' },
        {id: 'w-md', value: 'var(--container-md); ' },
        {id: 'w-lg', value: 'var(--container-lg); ' },
        {id: 'w-xl', value: 'var(--container-xl); ' },
        {id: 'w-2xl', value: 'var(--container-2xl); ' },
        {id: 'w-3xl', value: 'var(--container-3xl); ' },
        {id: 'w-4xl', value: 'var(--container-4xl); ' },
        {id: 'w-5xl', value: 'var(--container-5xl); ' },
        {id: 'w-6xl', value: 'var(--container-6xl); ' },
        {id: 'w-7xl', value: 'var(--container-7xl); ' },
        {id: 'w-auto', value: 'auto;' },
        {id: 'w-px', value: '1px;' },
        {id: 'w-full', value: '100%;' },
        {id: 'w-screen', value: '100vw;' },
        {id: 'w-dvw', value: '100dvw;' },
        {id: 'w-dvh', value: '100dvh;' },
        {id: 'w-lvw', value: '100lvw;' },
        {id: 'w-lvh', value: '100lvh;' },
        {id: 'w-svw', value: '100svw;' },
        {id: 'w-svh', value: '100svh;' },
        {id: 'w-min', value: 'min-content;' },
        {id: 'w-max', value: 'max-content;' },
        {id: 'w-fit', value: 'fit-content;' },
    ]
};

export const MinWidth = {
    type: 'twPropertyType',
    label: 'Min Width',
    id: 'twMinWidth',
    property: 'min-width',
    twPrefixes: ['min-w'],
    cssPropertys: ['min-width'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'min-w-3xs', value: 'var(--container-3xs);' },
        {id: 'min-w-2xs', value: 'var(--container-2xs); ' },
        {id: 'min-w-xs', value: 'var(--container-xs); ' },
        {id: 'min-w-sm', value: 'var(--container-sm); ' },
        {id: 'min-w-md', value: 'var(--container-md); ' },
        {id: 'min-w-lg', value: 'var(--container-lg);' },
        {id: 'min-w-xl', value: 'var(--container-xl); ' },
        {id: 'min-w-2xl', value: 'var(--container-2xl);' },
        {id: 'min-w-3xl', value: 'var(--container-3xl);' },
        {id: 'min-w-4xl', value: 'var(--container-4xl); ' },
        {id: 'min-w-5xl', value: 'var(--container-5xl); ' },
        {id: 'min-w-6xl', value: 'var(--container-6xl);' },
        {id: 'min-w-7xl', value: 'var(--container-7xl); ' },
        {id: 'min-w-auto', value: 'auto;' },
        {id: 'min-w-px', value: '1px;' },
        {id: 'min-w-full', value: '100%;' },
        {id: 'min-w-screen', value: '100vw;' },
        {id: 'min-w-dvw', value: '100dvw;' },
        {id: 'min-w-dvh', value: '100dvh;' },
        {id: 'min-w-lvw', value: '100lvw;' },
        {id: 'min-w-lvh', value: '100lvh;' },
        {id: 'min-w-svw', value: '100svw;' },
        {id: 'min-w-svh', value: '100svh;' },
        {id: 'min-w-min', value: 'min-content;' },
        {id: 'min-w-max', value: 'max-content;' },
        {id: 'min-w-fit', value: 'fit-content;' },
    ]
};

export const MaxWidth = {
    type: 'twPropertyType',
    label: 'Max Width',
    id: 'twMaxWidth',
    property: 'max-width',
    twPrefixes: ['max-w'],
    cssPropertys: ['max-width'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'max-w-3xs', value: 'var(--container-3xs);' },
        {id: 'max-w-2xs', value: 'var(--container-2xs);' },
        {id: 'max-w-xs', value: 'var(--container-xs);' },
        {id: 'max-w-sm', value: 'var(--container-sm);' },
        {id: 'max-w-md', value: 'var(--container-md);' },
        {id: 'max-w-lg', value: 'var(--container-lg); ' },
        {id: 'max-w-xl', value: 'var(--container-xl); ' },
        {id: 'max-w-2xl', value: 'var(--container-2xl);' },
        {id: 'max-w-3xl', value: 'var(--container-3xl);' },
        {id: 'max-w-4xl', value: 'var(--container-4xl);' },
        {id: 'max-w-5xl', value: 'var(--container-5xl);' },
        {id: 'max-w-6xl', value: 'var(--container-6xl);' },
        {id: 'max-w-7xl', value: 'var(--container-7xl); ' },
        {id: 'max-w-auto', value: 'auto;' },
        {id: 'max-w-none', value: 'none;' },
        {id: 'max-w-px', value: '1px;' },
        {id: 'max-w-full', value: '100%;' },
        {id: 'max-w-dvw', value: '100dvw;' },
        {id: 'max-w-dvh', value: '100dvh;' },
        {id: 'max-w-lvw', value: '100lvw;' },
        {id: 'max-w-lvh', value: '100lvh;' },
        {id: 'max-w-svw', value: '100svw;' },
        {id: 'max-w-svh', value: '100svh;' },
        {id: 'max-w-screen', value: '100vw;' },
        {id: 'max-w-min', value: 'min-content;' },
        {id: 'max-w-max', value: 'max-content;' },
        {id: 'max-w-fit', value: 'fit-content;' },
    ]
};

export const Height = {
    type: 'twPropertyType',
    label: 'Height',
    id: 'twHeight',
    property: 'height',
    twPrefixes: ['h'],
    cssPropertys: ['height'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'h-auto', value: 'auto;' },
        {id: 'h-px', value: '1px;' },
        {id: 'h-full', value: '100%;' },
        {id: 'h-screen', value: '100vh;' },
        {id: 'h-dvh', value: '100dvh;' },
        {id: 'h-dvw', value: '100dvw;' },
        {id: 'h-lvh', value: '100lvh;' },
        {id: 'h-lvw', value: '100lvw;' },
        {id: 'h-svh', value: '100svh;' },
        {id: 'h-svw', value: '100svw;' },
        {id: 'h-min', value: 'min-content;' },
        {id: 'h-max', value: 'max-content;' },
        {id: 'h-fit', value: 'fit-content;' },
    ]
};

export const MinHeight = {
    type: 'twPropertyType',
    label: 'Min Height',
    id: 'twMinHeight',
    property: 'min-height',
    twPrefixes: ['min-h'],
    cssPropertys: ['min-height'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'min-h-auto', value: 'auto;' },
        {id: 'min-h-px', value: '1px;' },
        {id: 'min-h-full', value: '100%;' },
        {id: 'min-h-screen', value: '100vh;' },
        {id: 'min-h-dvh', value: '100dvh;' },
        {id: 'min-h-dvw', value: '100dvw;' },
        {id: 'min-h-lvh', value: '100lvh;' },
        {id: 'min-h-lvw', value: '100lvw;' },
        {id: 'min-h-svw', value: '100svw;' },
        {id: 'min-h-svh', value: '100svh;' },
        {id: 'min-h-min', value: 'min-content;' },
        {id: 'min-h-max', value: 'max-content;' },
        {id: 'min-h-fit', value: 'fit-content;' },
    ]
};

export const MaxHeight = {
    type: 'twPropertyType',
    label: 'Max Height',
    id: 'twMaxHeight',
    property: 'max-height',
    twPrefixes: ['max-h'],
    cssPropertys: ['max-height'],
    valueTypes: ['n', 'f', 'c', 'v', 's'],
    options: [
        {id: 'max-h-auto', value: 'auto;' },
        {id: 'max-h-none', value: 'none;' },
        {id: 'max-h-px', value: '1px;' },
        {id: 'max-h-full', value: '100%;' },
        {id: 'max-h-screen', value: '100vh;' },
        {id: 'max-h-dvh', value: '100dvh;' },
        {id: 'max-h-dvw', value: '100dvw;' },
        {id: 'max-h-lvh', value: '100lvh;' },
        {id: 'max-h-lvw', value: '100lvw;' },
        {id: 'max-h-svh', value: '100svh;' },
        {id: 'max-h-svw', value: '100svw;' },
        {id: 'max-h-min', value: 'min-content;' },
        {id: 'max-h-max', value: 'max-content;' },
        {id: 'max-h-fit', value: 'fit-content;' },
    ]
};


export const FontFamily = {
    type: 'twPropertyType',
    label: 'Font Family',
    id: 'twFontFamily',
    property: 'font-family',
    twPrefixes: ['font'],
    cssPropertys: ['font-family'],
    valueTypes: ['v', 's'],
    options: [
        {id: 'font-sans', value: 'var(--font-sans)' },
        {id: 'font-serif', value: 'var(--font-serif)' },
        {id: 'font-mono', value: 'var(--font-mono)' },
    ]
};

export const FontSize = {
    type: 'twPropertyType',
    label: 'Font Size',
    id: 'twFontSize',
    property: 'font-size',
    twPrefixes: ['text'],
    cssPropertys: ['font-size'],
    valueTypes: ['v', 's'],
    options: [
        {id: 'text-xs', value: 'var(--text-xs); line-height: var(--text-xs--line-height)' },
        {id: 'text-sm', value: 'var(--text-sm);line-height: var(--text-sm--line-height)' },
        {id: 'text-base', value:'var(--text-base); line-height: var(--text-base--line-height)' },
        {id: 'text-lg', value: 'var(--text-lg); line-height: var(--text-lg--line-height)' },
        {id: 'text-xl', value: 'var(--text-xl);line-height: var(--text-xl--line-height)' },
        {id: 'text-2xl', value: 'var(--text-2xl);line-height: var(--text-2xl--line-height)' },
        {id: 'text-3xl', value: 'var(--text-3xl);line-height: var(--text-3xl--line-height)' },
        {id: 'text-4xl', value: 'var(--text-4xl); line-height: var(--text-4xl--line-height)' },
        {id: 'text-5xl', value: 'var(--text-5xl); line-height: var(--text-5xl--line-height)' },
        {id: 'text-6xl', value: 'var(--text-6xl); line-height: var(--text-6xl--line-height)' },
        {id: 'text-7xl', value: 'var(--text-7xl); line-height: var(--text-7xl--line-height)' },
        {id: 'text-8xl', value: 'var(--text-8xl); line-height: var(--text-8xl--line-height)' },
        {id: 'text-9xl', value: 'var(--text-9xl);line-height: var(--text-9xl--line-height)' },
    ]
};

export const WebkitFontSmoothing = {
    type: 'twPropertyType',
    label: ' Webkit Font Smoothing',
    id: 'twWebkitFontSmoothing',
    property: '-webkit-font-smoothing',
    twPrefixes: ['-webkit-font-smoothing'],
    cssPropertys: ['-webkit-font-smoothing'],
    valueTypes: ['s'],
    options: [
        {id: 'antialiased', value: 'antialiased; -moz-osx-font-smoothing: grayscale' },
        {id: 'subpixel-antialiased', value: 'auto; -moz-osx-font-smoothing: auto' },
    ]
};

export const FontStyle = {
    type: 'twPropertyType',
    label: 'Font Style',
    id: 'twFontStyle',
    property: 'font-style',
    twPrefixes: ['font-style'],
    cssPropertys: ['font-style'],
    valueTypes: ['s'],
    options: [
        {id: 'italic', value: 'italic' },
        {id: 'not-italic', value: 'normal' },
    ]
};

export const FontWeight = {
    type: 'twPropertyType',
    label: 'Font Weight',
    id: 'twFontWeight',
    property: 'font-weight',
    twPrefixes: ['font'],
    cssPropertys: ['font-weight'],
    valueTypes: ['v', 'c', 's'],
    options: [
        {id: 'font-thin', value: '100' },
        {id: 'font-extralight', value: '200' },
        {id: 'font-light', value: '300' },
        {id: 'font-normal', value: '400' },
        {id: 'font-medium', value: '500' },
        {id: 'font-semibold', value: '600' },
        {id: 'font-bold', value: '700' },
        {id: 'font-extrabold', value: '800' },
        {id: 'font-black', value: '900' },
    ]
};

export const FontStretch = {
    type: 'twPropertyType',
    label: 'Font Stretch',
    id: 'twFontStretch',
    property: 'font-stretch',
    twPrefixes: ['font-stretch'],
    cssPropertys: ['font-stretch'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'font-stretch-ultra-condensed', value: 'ultra-condensed' },
        {id: 'font-stretch-extra-condensed', value: 'extra-condensed' },
        {id: 'font-stretch-condensed', value: 'condensed' },
        {id: 'font-stretch-semi-condensed', value: 'semi-condensed' },
        {id: 'font-stretch-normal', value: 'normal' },
        {id: 'font-stretch-semi-expanded', value: 'semi-expanded' },
        {id: 'font-stretch-expanded', value: 'expanded' },
        {id: 'font-stretch-extra-expanded', value: 'extra-expanded' },
        {id: 'font-stretch-ultra-expanded', value: 'ultra-expanded' },
    ]
};

export const FontVariantNumeric = {
    type: 'twPropertyType',
    label: 'Font Variant Numeric',
    id: 'twFontVariantNumeric',
    property: 'font-variant-numeric',
    twPrefixes: ['font-variant-numeric'],
    cssPropertys: ['font-variant-numeric'],
    valueTypes: ['s'],
    options: [
        {id: 'normal-nums', value: 'normal' },
        {id: 'ordinal', value: 'ordinal' },
        {id: 'slashed-zero', value: 'slashed-zero' },
        {id: 'lining-nums', value: 'lining-nums' },
        {id: 'oldstyle-nums', value: 'oldstyle-nums' },
        {id: 'proportional-nums', value: 'proportional-nums' },
        {id: 'tabular-nums', value: 'tabular-nums' },
        {id: 'diagonal-fractions', value: 'diagonal-fractions' },
        {id: 'stacked-fractions', value: 'stacked-fractions' },
    ]
};

export const LetterSpacing = {
    type: 'twPropertyType',
    label: 'Letter Spacing',
    id: 'twLetterSpacing',
    property: 'letter-spacing',
    twPrefixes: ['tracking'],
    cssPropertys: ['letter-spacing'],
    valueTypes: ['v', 'c', 's'],
    options: [
        {id: 'tracking-tighter', value: 'var(--tracking-tighter)' },
        {id: 'tracking-tight', value: 'var(--tracking-tight)' },
        {id: 'tracking-normal', value: 'var(--tracking-normal)' },
        {id: 'tracking-wide', value: 'var(--tracking-wide)' },
        {id: 'tracking-wider', value: 'var(--tracking-wider)' },
        {id: 'tracking-widest', value: 'var(--tracking-widest)' },
    ]
};

export const LineClamp = {
    type: 'twPropertyType',
    label: 'Line Clamp',
    id: 'twLineClamp',
    property: 'line-clamp',
    twPrefixes: ['line-clamp'],
    cssPropertys: ['line-clamp'],
    valueTypes: ['n', 'v', 'c', 's'],
    arbitoryOptions: [
        {
            'n': `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: {value}`,
            'v': `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: {value}`,
            'c': `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: var({value});`,
        }
    ],
    options: [
        {id: 'line-clamp-none', 
        value: `overflow: visible;
            display: block;
            -webkit-box-orient: horizontal;
            -webkit-line-clamp: unset;`
        }
    ]
};

export const LineHeight = {
    type: 'twPropertyType',
    label: 'Line Height',
    id: 'twLineHeight',
    property: 'line-height',
    twPrefixes: ['leading'],
    cssPropertys: ['line-height'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'leading-none', value: '1' },
    ]
};

export const ListStyleImage = {
    type: 'twPropertyType',
    label: 'List Style Image',
    id: 'twListStyleImage',
    property: 'list-style-image',
    twPrefixes: ['list-style'],
    cssPropertys: ['list-style-image'],
    valueTypes: ['v', 'c', 's'],
    options: [
        {id: 'list-image-none', value: 'none' },
    ]
};

export const ListStylePosition = {
    type: 'twPropertyType',
    label: 'List Style Position',
    id: 'twListStylePosition',
    property: 'list-style-position',
    twPrefixes: ['list-style-position'],
    cssPropertys: ['list-style-position'],
    valueTypes: ['s'],
    options: [
        {id: 'list-inside', value: 'inside' },
        {id: 'list-outside', value: 'outside' },
    ]
};

export const ListStyleType = {
    type: 'twPropertyType',
    label: 'List Style Type',
    id: 'twListStyleType',
    property: 'list-style-type',
    twPrefixes: ['list'],
    cssPropertys: ['list-style-type'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'list-disc', value: 'disc' },
        {id: 'list-decimal', value: 'decimal' },
        {id: 'list-none', value: 'none' },
    ]
};

export const TextAlign = {
    type: 'twPropertyType',
    label: 'Text Align',
    id: 'twTextAlign',
    property: 'text-align',
    twPrefixes: ['text-align'],
    cssPropertys: ['text-align'],
    valueTypes: ['s'],
    options: [
        {id: 'text-left', value: 'left' },
        {id: 'text-center', value: 'center' },
        {id: 'text-right', value: 'right' },
        {id: 'text-justify', value: 'justify' },
        {id: 'text-start', value: 'start' },
        {id: 'text-end', value: 'end' },
    ]
};

export const TextDecorationLine = {
    type: 'twPropertyType',
    label: 'Text Decoration Line',
    id: 'twTextDecorationLine',
    property: 'text-decoration-line',
    twPrefixes: ['text-decoration-line'],
    cssPropertys: ['text-decoration-line'],
    valueTypes: ['s'],
    options: [
        {id: 'underline', value: 'underline' },
        {id: 'overline', value: 'overline' },
        {id: 'line-through', value: 'line-through' },
        {id: 'no-underline', value: 'none' },
    ]
};

export const TextDecorationStyle = {
    type: 'twPropertyType',
    label: 'Text Decoration Style',
    id: 'twTextDecorationStyle',
    property: 'text-decoration-style',
    twPrefixes: ['text-decoration-style'],
    cssPropertys: ['text-decoration-style'],
    valueTypes: ['s'],
    options: [
        {id: 'decoration-solid', value: 'solid' },
        {id: 'decoration-double', value: 'double' },
        {id: 'decoration-dotted', value: 'dotted' },
        {id: 'decoration-dashed', value: 'dashed' },
        {id: 'decoration-wavy', value: 'wavy' },
    ]
};

export const TextDecorationThickness = {
    type: 'twPropertyType',
    label: 'Text Decoration Thickness',
    id: 'twTextDecorationThickness',
    property: 'text-decoration-thickness',
    twPrefixes: ['decoration'],
    cssPropertys: ['text-decoration-thickness'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'decoration-from-font', value: 'from-font' },
        {id: 'decoration-auto', value: 'auto' },
    ]
};

export const TextUnderlineOffset = {
    type: 'twPropertyType',
    label: 'Text Underline Offset',
    id: 'twTextUnderlineOffset',
    property: 'text-underline-offset',
    twPrefixes: ['underline-offset'],
    cssPropertys: ['text-underline-offset'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'underline-offset-auto', value: 'auto' },
    ]
};

export const TextTransform = {
    type: 'twPropertyType',
    label: 'Text Transform',
    id: 'twTextTransform',
    property: 'text-transform',
    twPrefixes: ['text-transform'],
    cssPropertys: ['text-transform'],
    valueTypes: ['s'],
    options: [
        {id: 'uppercase', value: 'uppercase' },
        {id: 'lowercase', value: 'lowercase' },
        {id: 'capitalize', value: 'capitalize' },
        {id: 'normal-case', value: 'none' },
    ]
};

export const TextOverflow = {
    type: 'twPropertyType',
    label: 'Text Overflow',
    id: 'twTextOverflow',
    property: 'text-overflow',
    twPrefixes: ['text-overflow'],
    cssPropertys: ['text-overflow'],
    valueTypes: ['s'],
    options: [
        {id: 'truncate', value: 'overflow: hidden;text-overflow: ellipsis;white-space: nowrap;' },
        {id: 'text-ellipsis', value: 'ellipsis' },
        {id: 'text-clip', value: 'clip' },
    ]
};

export const TextWrap = {
    type: 'twPropertyType',
    label: 'Text Wrap',
    id: 'twTextWrap',
    property: 'text-wrap',
    twPrefixes: ['text-wrap'],
    cssPropertys: ['text-wrap'],
    valueTypes: ['s'],
    options: [
        {id: 'text-wrap', value: 'wrap' },
        {id: 'text-nowrap', value: 'nowrap' },
        {id: 'text-balance', value: 'balance' },
        {id: 'text-pretty', value: 'pretty' },
    ]
};

export const TextIndent = {
    type: 'twPropertyType',
    label: 'Text Indent',
    id: 'twTextIndent',
    property: 'text-indent',
    twPrefixes: ['indent'],
    cssPropertys: ['text-indent'],
    valueTypes: ['n', 'c', 'v', 's'],
    options: [
        {id: 'indent-px', value: '1px' },
        {id: '-indent-px', value: '-1px' },
    ]
};

export const VerticalAlign = {
    type: 'twPropertyType',
    label: 'Vertical Align',
    id: 'twVerticalAlign',
    property: 'vertical-align',
    twPrefixes: ['vertical-align'],
    cssPropertys: ['vertical-align'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'align-baseline', value: 'baseline' },
        {id: 'align-top', value: 'top' },
        {id: 'align-middle', value: 'middle' },
        {id: 'align-bottom', value: 'bottom' },
        {id: 'align-text-top', value: 'text-top' },
        {id: 'align-text-bottom', value: 'text-bottom' },
        {id: 'align-sub', value: 'sub' },
        {id: 'align-super', value: 'super' },
    ]
};

export const WhiteSpace = {
    type: 'twPropertyType',
    label: 'White Space',
    id: 'twWhiteSpace',
    property: 'white-space',
    twPrefixes: ['white-space'],
    cssPropertys: ['white-space'],
    valueTypes: ['s'],
    options: [
        {id: 'whitespace-normal', value: 'normal' },
        {id: 'whitespace-nowrap', value: 'nowrap' },
        {id: 'whitespace-pre', value: 'pre' },
        {id: 'whitespace-pre-line', value: 'pre-line' },
        {id: 'whitespace-pre-wrap', value: 'pre-wrap' },
        {id: 'whitespace-break-spaces', value: 'break-spaces' },
    ]
};

// export const OverflowWrap = {
//     type: 'twPropertyType',
//     label: 'Overflow Wrap',
//     id: 'twOverflowWrap',
//     property: 'overflow-wrap',
//     twPrefixes: ['overflow-wrap'],
//     cssPropertys: ['overflow-wrap'],
//     valueTypes: ['s'],
//     options: [
//         {id: 'break-normal', value: 'overflow-wrap: normal; word-break: normal' },
//         {id: 'break-words', value: 'overflow-wrap: break-word' },
//         {id: 'break-all', value: 'break-all' },
//         {id: 'break-keep', value: 'keep-all' },
//     ]
// };

export const Hyphens = {
    type: 'twPropertyType',
    label: 'Hyphens',
    id: 'twHyphens',
    property: 'hyphens',
    twPrefixes: ['hyphens'],
    cssPropertys: ['hyphens'],
    valueTypes: ['s'],
    options: [
        {id: 'hyphens-none', value: 'none' },
        {id: 'hyphens-manual', value: 'manual' },
        {id: 'hyphens-auto', value: 'auto' },
    ]
};

export const Content = {
    type: 'twPropertyType',
    label: 'Content',
    id: 'twContent',
    property: 'content',
    twPrefixes: ['content'],
    cssPropertys: ['content'],
    valueTypes: ['v', 'c', 's'],
    options: [
        {id: 'content-none', value: 'none' },
    ]
};

export const BackgroundAttachment = {
    type: 'twPropertyType',
    label: 'Background Attachment',
    id: 'twBackgroundAttachment',
    property: 'background-attachment',
    twPrefixes: ['background-attachment'],
    cssPropertys: ['background-attachment'],
    valueTypes: ['s'],
    options: [
        {id: 'bg-fixed', value: 'fixed' },
        {id: 'bg-local', value: 'local' },
        {id: 'bg-scroll', value: 'scroll' },
    ]
};

export const BackgroundClip = {
    type: 'twPropertyType',
    label: 'Background Clip',
    id: 'twBackgroundClip',
    property: 'background-clip',
    twPrefixes: ['background-clip'],
    cssPropertys: ['background-clip'],
    valueTypes: ['s'],
    options: [
        {id: 'bg-clip-border', value: 'border-box' },
        {id: 'bg-clip-padding', value: 'padding-box' },
        {id: 'bg-clip-content', value: 'content-box' },
        {id: 'bg-clip-text', value: 'text' },
    ]
};

export const BackgroundImage = {
    type: 'twPropertyType',
    label: 'Background Image',
    id: 'twBackgroundImage',
    property: 'background-image',
    twPrefixes: ['bg', 'bg-linear', 'bg-radial', 'bg-conic', 'from', 'via', 'to'],
    cssPropertys: [],
    valueTypes: ['s'],
    arbitoryOptions: [
        {
            'v': 'background-image: {value};',
            'c': 'background-image: var({value});'
        },
        {
            'n': 'background-image: linear-gradient({value} in oklab, var(--tw-gradient-stops));',
            '-n': 'background-image: linear-gradient(-{value} in oklab, var(--tw-gradient-stops));',
            'c': 'background-image: linear-gradient(var(--tw-gradient-stops, var({value})));',
            'v': 'background-image: linear-gradient(var(--tw-gradient-stops, {value}));'
        },
        {
            'v': 'background-image: radial-gradient(var(--tw-gradient-stops, {value}));',
            'c': 'background-image: radial-gradient(var(--tw-gradient-stops,  var({value})));'
        },
        {
            'n': 'background-image: conic-gradient(from {value} in oklab, var(--tw-gradient-stops));',
            '-n': 'background-image: conic-gradient(from -{value} in oklab, var(--tw-gradient-stops));',
        }
    ],
    options: [
        { id: 'bg-none', value: 'background-image: none;' },
        { id: 'bg-linear-to-t', value: 'background-image: linear-gradient(to top, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-tr', value: 'background-image: linear-gradient(to top right, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-r', value: 'background-image: linear-gradient(to right, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-br', value: 'background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-b', value: 'background-image: linear-gradient(to bottom, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-bl', value: 'background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-l', value: 'background-image: linear-gradient(to left, var(--tw-gradient-stops));' },
        { id: 'bg-linear-to-tl', value: 'background-image: linear-gradient(to top left, var(--tw-gradient-stops));' },
        { id: 'bg-radial', value: 'background-image: radial-gradient(in oklab, var(--tw-gradient-stops));' }
    ]
}

export const BackgroundOrigin = {
    type: 'twPropertyType',
    label: 'Background Origin',
    id: 'twBackgroundOrigin',
    property: 'background-origin',
    twPrefixes: ['background-origin'],
    cssPropertys: ['background-origin'],
    valueTypes: ['s'],
    options: [
        {id: 'bg-origin-border', value: 'border-box' },
        {id: 'bg-origin-padding', value: 'padding-box' },
        {id: 'bg-origin-content', value: 'content-box' },
    ]
};

export const BackgroundPosition = {
    type: 'twPropertyType',
    label: 'Background Position',
    id: 'twBackgroundPosition',
    property: 'background-position',
    twPrefixes: ['bg'],
    cssPropertys: ['background-position'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'bg-bottom', value: 'bottom' },
        {id: 'bg-center', value: 'center' },
        {id: 'bg-left', value: 'left' },
        {id: 'bg-left-bottom', value: 'left bottom' },
        {id: 'bg-left-top', value: 'left top' },
        {id: 'bg-right', value: 'right' },
        {id: 'bg-right-bottom', value: 'right bottom' },
        {id: 'bg-right-top', value: 'right top' },
        {id: 'bg-top', value: 'top' },
    ]
};

export const BackgroundRepeat = {
    type: 'twPropertyType',
    label: 'Background Repeat',
    id: 'twBackgroundRepeat',
    property: 'background-repeat',
    twPrefixes: ['background-repeat'],
    cssPropertys: ['background-repeat'],
    valueTypes: ['s'],
    options: [
        {id: 'bg-repeat', value: 'repeat' },
        {id: 'bg-repeat-x', value: 'repeat-x' },
        {id: 'bg-repeat-y', value: 'repeat-y' },
        {id: 'bg-repeat-space', value: 'space' },
        {id: 'bg-repeat-round', value: 'round' },
        {id: 'bg-no-repeat', value: 'no-repeat' },
    ]
};

export const BackgroundSize = {
    type: 'twPropertyType',
    label: 'Background Size',
    id: 'twBackgroundSize',
    property: 'background-size',
    twPrefixes: ['bg'],
    cssPropertys: ['background-size'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'bg-auto', value: 'auto' },
        {id: 'bg-cover', value: 'cover' },
        {id: 'bg-contain', value: 'contain' },
    ]
};

const borderRadiusOptions = () => {

    const directions = {
        "": ["border-radius"],
        "s": ["border-start-start-radius", "border-end-start-radius"],
        "e": ["border-start-end-radius", "border-end-end-radius"],
        "t": ["border-top-left-radius", "border-top-right-radius"],
        "r": ["border-top-right-radius", "border-bottom-right-radius"],
        "b": ["border-bottom-left-radius", "border-bottom-right-radius"],
        "l": ["border-top-left-radius", "border-bottom-left-radius"],
        "ss": ["border-start-start-radius"],
        "se": ["border-start-end-radius"],
        "es": ["border-end-start-radius"],
        "tl": ["border-top-left-radius"],
        "tr": ["border-top-right-radius"],
        "br": ["border-bottom-right-radius"],
        "bl": ["border-bottom-left-radius"],
    };
    
    let brOptions = [];
    Object.entries(directions).forEach( ([key, props]) => {
        brOptions.push(
            {
                'v': props.map(prop => `${prop}: {value};`).join(" "),
                'c': props.map(prop => `${prop}: var({value});`).join(" ")
            }
        );
    });
    return brOptions;
}

export const BorderRadius = {
    type: 'twPropertyType',
    label: 'Border Radius',
    id: 'twBorderRadius',
    property: 'border-radius',
    twPrefixes: ['rounded', 'rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
    cssPropertys: [],
    valueTypes: ['c', 'v', 's'],
    arbitoryOptions: borderRadiusOptions(),
    options: [
        {id: 'rounded-xs', value: 'border-radius: var(--radius-xs);' },
        {id: 'rounded-sm', value: 'border-radius: var(--radius-sm);' },
        {id: 'rounded-md', value: 'border-radius: var(--radius-md); ' },
        {id: 'rounded-lg', value: 'border-radius: var(--radius-lg);' },
        {id: 'rounded-xl', value: 'border-radius: var(--radius-xl); ' },
        {id: 'rounded-2xl', value: 'border-radius: var(--radius-2xl);' },
        {id: 'rounded-3xl', value: 'border-radius: var(--radius-3xl);' },
        {id: 'rounded-none', value: 'border-radius: 0;' },
        {id: 'rounded-full', value: 'border-radius: calc(infinity * 1px);' },
        {id: 'rounded-s-xs', value: 'border-start-start-radius: var(--radius-xs); border-end-start-radius: var(--radius-xs); ' },
        {id: 'rounded-s-sm', value: 'border-start-start-radius: var(--radius-sm); border-end-start-radius: var(--radius-sm);' },
        {id: 'rounded-s-md', value: 'border-start-start-radius: var(--radius-md); border-end-start-radius: var(--radius-md); ' },
        {id: 'rounded-s-lg', value: 'border-start-start-radius: var(--radius-lg); border-end-start-radius: var(--radius-lg);' },
        {id: 'rounded-s-xl', value: 'border-start-start-radius: var(--radius-xl); border-end-start-radius: var(--radius-xl); ' },
        {id: 'rounded-s-2xl', value: 'border-start-start-radius: var(--radius-2xl); border-end-start-radius: var(--radius-2xl); ' },
        {id: 'rounded-s-3xl', value: 'border-start-start-radius: var(--radius-3xl);  border-end-start-radius: var(--radius-3xl);' },
        {id: 'rounded-s-none', value: 'border-start-start-radius: 0; border-end-start-radius: 0;' },
        {id: 'rounded-s-full', value: 'border-start-start-radius: calc(infinity * 1px); border-end-start-radius: calc(infinity * 1px);' },
        {id: 'rounded-ss-xs', value: 'border-start-start-radius: var(--radius-xs); ' },
        {id: 'rounded-ss-sm', value: 'border-start-start-radius: var(--radius-sm);' },
        {id: 'rounded-ss-md', value: 'border-start-start-radius: var(--radius-md);' },
        {id: 'rounded-ss-lg', value: 'border-start-start-radius: var(--radius-lg); ' },
        {id: 'rounded-ss-xl', value: 'border-start-start-radius: var(--radius-xl); ' },
        {id: 'rounded-ss-2xl', value: 'border-start-start-radius: var(--radius-2xl); ' },
        {id: 'rounded-ss-3xl', value: 'border-start-start-radius: var(--radius-3xl);' },
        {id: 'rounded-ss-none', value: 'border-start-start-radius: 0;' },
        {id: 'rounded-ss-full', value: 'border-start-start-radius: calc(infinity * 1px);' },
        {id: 'rounded-e-xs', value: 'border-start-end-radius: var(--radius-xs); border-end-end-radius: var(--radius-xs); ' },
        {id: 'rounded-e-sm', value: 'border-start-end-radius: var(--radius-sm); border-end-end-radius: var(--radius-sm);' },
        {id: 'rounded-e-md', value: 'border-start-end-radius: var(--radius-md); border-end-end-radius: var(--radius-md); ' },
        {id: 'rounded-e-lg', value: 'border-start-end-radius: var(--radius-lg); border-end-end-radius: var(--radius-lg); ' },
        {id: 'rounded-e-xl', value: 'border-start-end-radius: var(--radius-xl);  border-end-end-radius: var(--radius-xl); ' },
        {id: 'rounded-e-2xl', value: 'border-start-end-radius: var(--radius-2xl); border-end-end-radius: var(--radius-2xl); ' },
        {id: 'rounded-e-3xl', value: 'border-start-end-radius: var(--radius-3xl); border-end-end-radius: var(--radius-3xl); ' },
        {id: 'rounded-e-none', value: 'border-start-end-radius: 0; border-end-end-radius: 0;' },
        {id: 'rounded-e-full', value: 'border-start-end-radius: calc(infinity * 1px); border-end-end-radius: calc(infinity * 1px);' },
        {id: 'rounded-se-xs', value: 'border-start-end-radius: var(--radius-xs);' },
        {id: 'rounded-se-sm', value: 'border-start-end-radius: var(--radius-sm); ' },
        {id: 'rounded-se-md', value: 'border-start-end-radius: var(--radius-md); ' },
        {id: 'rounded-se-lg', value: 'border-start-end-radius: var(--radius-lg); ' },
        {id: 'rounded-se-xl', value: 'border-start-end-radius: var(--radius-xl);' },
        {id: 'rounded-se-2xl', value: 'border-start-end-radius: var(--radius-2xl); ' },
        {id: 'rounded-se-3xl', value: 'border-start-end-radius: var(--radius-3xl); ' },
        {id: 'rounded-se-none', value: 'border-start-end-radius: 0;' },
        {id: 'rounded-se-full', value: 'border-start-end-radius: calc(infinity * 1px);' },
        {id: 'rounded-t-xs', value: 'border-top-left-radius: var(--radius-xs); border-top-right-radius: var(--radius-xs); ' },
        {id: 'rounded-t-sm', value: 'border-top-left-radius: var(--radius-sm);  border-top-right-radius: var(--radius-sm); ' },
        {id: 'rounded-t-md', value: 'border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md); ' },
        {id: 'rounded-t-lg', value: 'border-top-left-radius: var(--radius-lg);  border-top-right-radius: var(--radius-lg); ' },
        {id: 'rounded-t-xl', value: 'border-top-left-radius: var(--radius-xl); border-top-right-radius: var(--radius-xl); ' },
        {id: 'rounded-t-2xl', value: 'border-top-left-radius: var(--radius-2xl);border-top-right-radius: var(--radius-2xl);' },
        {id: 'rounded-t-3xl', value: 'border-top-left-radius: var(--radius-3xl); border-top-right-radius: var(--radius-3xl); ' },
        {id: 'rounded-t-none', value: 'border-top-left-radius: 0; border-top-right-radius: 0;' },
        {id: 'rounded-t-full', value: 'border-top-left-radius: calc(infinity * 1px); border-top-right-radius: calc(infinity * 1px);' },
        {id: 'rounded-l-xs', value: 'border-top-left-radius: var(--radius-xs); border-bottom-left-radius: var(--radius-xs); ' },
        {id: 'rounded-l-sm', value: 'border-top-left-radius: var(--radius-sm); border-bottom-left-radius: var(--radius-sm); ' },
        {id: 'rounded-l-md', value: 'border-top-left-radius: var(--radius-md);  border-bottom-left-radius: var(--radius-md); ' },
        {id: 'rounded-l-lg', value: 'border-top-left-radius: var(--radius-lg);  border-bottom-left-radius: var(--radius-lg); ' },
        {id: 'rounded-l-xl', value: 'border-top-left-radius: var(--radius-xl);  border-bottom-left-radius: var(--radius-xl);' },
        {id: 'rounded-l-2xl', value: 'border-top-left-radius: var(--radius-2xl); border-bottom-left-radius: var(--radius-2xl);' },
        {id: 'rounded-l-3xl', value: 'border-top-left-radius: var(--radius-3xl); border-bottom-left-radius: var(--radius-3xl);' },
        {id: 'rounded-l-none', value: 'border-top-left-radius: 0; border-bottom-left-radius: 0;' },
        {id: 'rounded-l-full', value: 'border-top-left-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);' },
        {id: 'rounded-tl-xs', value: 'border-top-left-radius: var(--radius-xs);' },
        {id: 'rounded-tl-sm', value: 'border-top-left-radius: var(--radius-sm); ' },
        {id: 'rounded-tl-md', value: 'border-top-left-radius: var(--radius-md); ' },
        {id: 'rounded-tl-lg', value: 'border-top-left-radius: var(--radius-lg); ' },
        {id: 'rounded-tl-xl', value: 'border-top-left-radius: var(--radius-xl);' },
        {id: 'rounded-tl-2xl', value: 'border-top-left-radius: var(--radius-2xl); ' },
        {id: 'rounded-tl-3xl', value: 'border-top-left-radius: var(--radius-3xl); ' },
        {id: 'rounded-tl-none', value: 'border-top-left-radius: 0;' },
        {id: 'rounded-tl-full', value: 'border-top-left-radius: calc(infinity * 1px);' },
        {id: 'rounded-r-xs', value: 'border-top-right-radius: var(--radius-xs); border-bottom-right-radius: var(--radius-xs);' },
        {id: 'rounded-r-sm', value: 'border-top-right-radius: var(--radius-sm);  border-bottom-right-radius: var(--radius-sm); ' },
        {id: 'rounded-r-md', value: 'border-top-right-radius: var(--radius-md);  border-bottom-right-radius: var(--radius-md); ' },
        {id: 'rounded-r-lg', value: 'border-top-right-radius: var(--radius-lg);  border-bottom-right-radius: var(--radius-lg); ' },
        {id: 'rounded-r-xl', value: 'border-top-right-radius: var(--radius-xl);  border-bottom-right-radius: var(--radius-xl); ' },
        {id: 'rounded-r-2xl', value: 'border-top-right-radius: var(--radius-2xl); border-bottom-right-radius: var(--radius-2xl); ' },
        {id: 'rounded-r-3xl', value: 'border-top-right-radius: var(--radius-3xl); border-bottom-right-radius: var(--radius-3xl); ' },
        {id: 'rounded-r-none', value: 'border-top-right-radius: 0; border-bottom-right-radius: 0;' },
        {id: 'rounded-r-full', value: 'border-top-right-radius: calc(infinity * 1px); border-bottom-right-radius: calc(infinity * 1px);' },
        {id: 'rounded-tr-xs', value: 'border-top-right-radius: var(--radius-xs);' },
        {id: 'rounded-tr-sm', value: 'border-top-right-radius: var(--radius-sm);' },
        {id: 'rounded-tr-md', value: 'border-top-right-radius: var(--radius-md);' },
        {id: 'rounded-tr-lg', value: 'border-top-right-radius: var(--radius-lg); ' },
        {id: 'rounded-tr-xl', value: 'border-top-right-radius: var(--radius-xl); ' },
        {id: 'rounded-tr-2xl', value: 'border-top-right-radius: var(--radius-2xl); ' },
        {id: 'rounded-tr-3xl', value: 'border-top-right-radius: var(--radius-3xl);' },
        {id: 'rounded-tr-none', value: 'border-top-right-radius: 0;' },
        {id: 'rounded-tr-full', value: 'border-top-right-radius: calc(infinity * 1px);' },
        {id: 'rounded-b-xs', value: 'border-bottom-right-radius: var(--radius-xs); border-bottom-left-radius: var(--radius-xs);' },
        {id: 'rounded-b-sm', value: 'border-bottom-right-radius: var(--radius-sm);  border-bottom-left-radius: var(--radius-sm); ' },
        {id: 'rounded-b-md', value: 'border-bottom-right-radius: var(--radius-md); border-bottom-left-radius: var(--radius-md); ' },
        {id: 'rounded-b-lg', value: 'border-bottom-right-radius: var(--radius-lg);  border-bottom-left-radius: var(--radius-lg);' },
        {id: 'rounded-b-xl', value: 'border-bottom-right-radius: var(--radius-xl);border-bottom-left-radius: var(--radius-xl);' },
        {id: 'rounded-b-2xl', value: 'border-bottom-right-radius: var(--radius-2xl); border-bottom-left-radius: var(--radius-2xl); ' },
        {id: 'rounded-b-3xl', value: 'border-bottom-right-radius: var(--radius-3xl);  border-bottom-left-radius: var(--radius-3xl);' },
        {id: 'rounded-b-none', value: 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;' },
        {id: 'rounded-b-full', value: 'border-bottom-right-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);' },
        {id: 'rounded-br-xs', value: 'border-bottom-right-radius: var(--radius-xs);' },
        {id: 'rounded-br-sm', value: 'border-bottom-right-radius: var(--radius-sm); ' },
        {id: 'rounded-br-md', value: 'border-bottom-right-radius: var(--radius-md);' },
        {id: 'rounded-br-lg', value: 'border-bottom-right-radius: var(--radius-lg); ' },
        {id: 'rounded-br-xl', value: 'border-bottom-right-radius: var(--radius-xl); ' },
        {id: 'rounded-br-2xl', value: 'border-bottom-right-radius: var(--radius-2xl); ' },
        {id: 'rounded-br-3xl', value: 'border-bottom-right-radius: var(--radius-3xl);' },
        {id: 'rounded-br-none', value: 'border-bottom-right-radius: 0;' },
        {id: 'rounded-br-full', value: 'border-bottom-right-radius: calc(infinity * 1px);' },
        {id: 'rounded-ee-xs', value: 'border-end-end-radius: var(--radius-xs);' },
        {id: 'rounded-ee-sm', value: 'border-end-end-radius: var(--radius-sm);' },
        {id: 'rounded-ee-md', value: 'border-end-end-radius: var(--radius-md); ' },
        {id: 'rounded-ee-lg', value: 'border-end-end-radius: var(--radius-lg);' },
        {id: 'rounded-ee-xl', value: 'border-end-end-radius: var(--radius-xl); ' },
        {id: 'rounded-ee-2xl', value: 'border-end-end-radius: var(--radius-2xl);' },
        {id: 'rounded-ee-3xl', value: 'border-end-end-radius: var(--radius-3xl); ' },
        {id: 'rounded-ee-none', value: 'border-end-end-radius: 0;' },
        {id: 'rounded-ee-full', value: 'border-end-end-radius: calc(infinity * 1px);' },
        {id: 'rounded-es-xs', value: 'border-end-start-radius: var(--radius-xs);' },
        {id: 'rounded-es-sm', value: 'border-end-start-radius: var(--radius-sm);' },
        {id: 'rounded-es-md', value: 'border-end-start-radius: var(--radius-md); ' },
        {id: 'rounded-es-lg', value: 'border-end-start-radius: var(--radius-lg); ' },
        {id: 'rounded-es-xl', value: 'border-end-start-radius: var(--radius-xl); ' },
        {id: 'rounded-es-2xl', value: 'border-end-start-radius: var(--radius-2xl); ' },
        {id: 'rounded-es-3xl', value: 'border-end-start-radius: var(--radius-3xl);' },
        {id: 'rounded-es-none', value: 'border-end-start-radius: 0;' },
        {id: 'rounded-es-full', value: 'border-end-start-radius: calc(infinity * 1px);' },
        {id: 'rounded-bl-xs', value: 'border-bottom-left-radius: var(--radius-xs);' },
        {id: 'rounded-bl-sm', value: 'border-bottom-left-radius: var(--radius-sm); ' },
        {id: 'rounded-bl-md', value: 'border-bottom-left-radius: var(--radius-md);' },
        {id: 'rounded-bl-lg', value: 'border-bottom-left-radius: var(--radius-lg);' },
        {id: 'rounded-bl-xl', value: 'border-bottom-left-radius: var(--radius-xl); ' },
        {id: 'rounded-bl-2xl', value: 'border-bottom-left-radius: var(--radius-2xl); ' },
        {id: 'rounded-bl-3xl', value: 'border-bottom-left-radius: var(--radius-3xl); ' },
        {id: 'rounded-bl-none', value: 'border-bottom-left-radius: 0;' },
        {id: 'rounded-bl-full', value: 'border-bottom-left-radius: calc(infinity * 1px);' },
    ]
};

const borderWidthOptions = () => {

    const directions = {
        "": ["border-radius"],
        "s": ["border-start-start-radius", "border-end-start-radius"],
        "e": ["border-start-end-radius", "border-end-end-radius"],
        "t": ["border-top-left-radius", "border-top-right-radius"],
        "r": ["border-top-right-radius", "border-bottom-right-radius"],
        "b": ["border-bottom-left-radius", "border-bottom-right-radius"],
        "l": ["border-top-left-radius", "border-bottom-left-radius"],
        "ss": ["border-start-start-radius"],
        "se": ["border-start-end-radius"],
        "es": ["border-end-start-radius"],
        "tl": ["border-top-left-radius"],
        "tr": ["border-top-right-radius"],
        "br": ["border-bottom-right-radius"],
        "bl": ["border-bottom-left-radius"],
    };
    
    let brOptions = [];
    Object.entries(directions).forEach( ([key, props]) => {
        brOptions.push(
            {
                'v': props.map(prop => `${prop}: {value};`).join(" "),
                'c': props.map(prop => `${prop}: var({value});`).join(" ")
            }
        );
    });
    return brOptions;
}

export const BorderWidth = {
    type: 'twPropertyType',
    label: 'Border Width',
    id: 'twBorderWidth',
    property: 'border-width',
    twPrefixes: ['border', 'border-x', 'border-y', 'border-s', 'border-e', 'border-t', 'border-r', 'border-b', 'border-l'],
    cssPropertys: ['border-width', 'border-inline-width', 'border-block-width', 'border-inline-start-width', 'border-inline-end-width', ],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': '{value}px'
        }
    ],
    options: [
        {id: 'border', value: 'border-width: 1px' },
        {id: 'border-x', value: 'border-inline-width: 1px' },
        {id: 'border-y', value: 'border-block-width: 1px' },
        {id: 'border-s', value: 'border-inline-start-width: 1px' },
        {id: 'border-e', value: 'border-inline-end-width: 1px' },
        {id: 'border-t', value: 'border-top-width: 1px' },
        {id: 'border-r', value: 'border-right-width: 1px' },
        {id: 'border-b', value: 'border-bottom-width: 1px' },
        {id: 'border-l', value: 'border-left-width: 1px' },
    ]
};

export const BorderStyle = {
    type: 'twPropertyType',
    label: 'Border Style',
    id: 'twBorderStyle',
    property: 'border-style',
    twPrefixes: ['border-style'],
    cssPropertys: ['border-style'],
    valueTypes: ['s'],
    options: [
        {id: 'border-solid', value: 'solid' },
        {id: 'border-dashed', value: 'dashed' },
        {id: 'border-dotted', value: 'dotted' },
        {id: 'border-double', value: 'double' },
        {id: 'border-hidden', value: 'hidden' },
        {id: 'border-none', value: 'none' },
    ]
};

export const OutlineWidth = {
    type: 'twPropertyType',
    label: 'Outline Width',
    id: 'twOutlineWidth',
    property: 'outline-width',
    twPrefixes: ['outline-width'],
    cssPropertys: ['outline-width'],
    valueTypes: ['n', 'c', 's'],
    options: [
        {id: 'outline', value: '1px' },
    ]
};

export const OutlineStyle = {
    type: 'twPropertyType',
    label: 'Outline Style',
    id: 'twOutlineStyle',
    property: 'outline-style',
    twPrefixes: ['outline-style'],
    cssPropertys: ['outline-style'],
    valueTypes: ['s'],
    options: [
        {id: 'outline-solid', value: 'solid' },
        {id: 'outline-dashed', value: 'dashed' },
        {id: 'outline-dotted', value: 'dotted' },
        {id: 'outline-double', value: 'double' },
        {id: 'outline-none', value: 'none' },
    ]
};

export const OutlineOffset = {
    type: 'twPropertyType',
    label: 'Outline Offset',
    id: 'twOutlineOffset',
    property: 'outline-offset',
    twPrefixes: ['outline-offset'],
    cssPropertys: ['outline-offset'],
    valueTypes: ['n', 'c', 'v'],
    arbitoryOptions: [
        {
            'n': '{value}px',
            '-n': 'calc({value}px * -1)',
        }
    ],
};

export const BoxShadow = {
    type: 'twPropertyType',
    label: 'Box Shadow',
    id: 'twBoxShadow',
    property: 'box-shadow',
    twPrefixes: ['shadow', 'inset', 'ring'],
    cssPropertys: ['box-shadow'],
    valueTypes: ['c', 'v', 's'],
    arbitoryOptions: [
        {},
        {},
        {
            'n': '--tw-ring-shadow: 0 0 0 {value}px',
            'c': '--tw-ring-shadow: 0 0 0 var({value})',
            'v': '--tw-ring-shadow: 0 0 0 {value}'
        }
    ],
    options: [
        {id: 'shadow-2xs', value: 'box-shadow: var(--shadow-2xs)' },
        {id: 'shadow-xs', value: 'box-shadow: var(--shadow-xs)' },
        {id: 'shadow-sm', value: 'box-shadow: var(--shadow-sm)' },
        {id: 'shadow-md', value: 'box-shadow: var(--shadow-md)' },
        {id: 'shadow-lg', value: 'box-shadow: var(--shadow-lg)' },
        {id: 'shadow-xl', value: 'box-shadow: var(--shadow-xl)' },
        {id: 'shadow-2xl', value: 'box-shadow: var(--shadow-2xl)' },
        {id: 'shadow-none', value: 'box-shadow: 0 0 #0000' },
        {id: 'inset-2xs', value: 'box-shadow: var(--shadow-2xs)' },
        {id: 'inset-xs', value: 'box-shadow: var(--shadow-xs)' },
        {id: 'inset-sm', value: 'box-shadow: var(--shadow-sm)' },
        {id: 'inset-none', value: 'box-shadow: 0 0 #0000' },
        {id: 'ring', value: '--tw-ring-shadow: 0 0 0 1px' }
    ]
}

let boxShadowColors = getColorOptions('shadow');
let InsetShadowColors = getColorOptions('inset');
let RingShadowColors = getColorOptions('ring');

export const InsetShadow = {
    type: 'twPropertyType',
    label: 'Shadow Color',
    id: 'twShadowColor',
    property: 'box-shadow',
    twPrefixes: ['shadow', 'inset', 'ring'],
    cssPropertys: [],
    valueTypes: ['c', 'v', 's'],
    options: boxShadowColors.concat(InsetShadowColors, RingShadowColors)
}  

export const MixBlendMode = {
    type: 'twPropertyType',
    label: 'Mix Blend Mode',
    id: 'twMixBlendMode',
    property: 'mix-blend-mode',
    twPrefixes: ['mix-blend-mode'],
    cssPropertys: ['mix-blend-mode'],
    valueTypes: ['s'],
    options: [
        {id: 'mix-blend-normal', value: 'normal' },
        {id: 'mix-blend-multiply', value: 'multiply' },
        {id: 'mix-blend-screen', value: 'screen' },
        {id: 'mix-blend-overlay', value: 'overlay' },
        {id: 'mix-blend-darken', value: 'darken' },
        {id: 'mix-blend-lighten', value: 'lighten' },
        {id: 'mix-blend-color-dodge', value: 'color-dodge' },
        {id: 'mix-blend-color-burn', value: 'color-burn' },
        {id: 'mix-blend-hard-light', value: 'hard-light' },
        {id: 'mix-blend-soft-light', value: 'soft-light' },
        {id: 'mix-blend-difference', value: 'difference' },
        {id: 'mix-blend-exclusion', value: 'exclusion' },
        {id: 'mix-blend-hue', value: 'hue' },
        {id: 'mix-blend-saturation', value: 'saturation' },
        {id: 'mix-blend-color', value: 'color' },
        {id: 'mix-blend-luminosity', value: 'luminosity' },
        {id: 'mix-blend-plus-darker', value: 'plus-darker' },
        {id: 'mix-blend-plus-lighter', value: 'plus-lighter' },
    ]
};

export const BackgroundBlendMode = {
    type: 'twPropertyType',
    label: 'Background Blend Mode',
    id: 'twBackgroundBlendMode',
    property: 'background-blend-mode',
    twPrefixes: ['background-blend-mode'],
    cssPropertys: ['background-blend-mode'],
    valueTypes: ['s'],
    options: [
        {id: 'bg-blend-normal', value: 'normal' },
        {id: 'bg-blend-multiply', value: 'multiply' },
        {id: 'bg-blend-screen', value: 'screen' },
        {id: 'bg-blend-overlay', value: 'overlay' },
        {id: 'bg-blend-darken', value: 'darken' },
        {id: 'bg-blend-lighten', value: 'lighten' },
        {id: 'bg-blend-color-dodge', value: 'color-dodge' },
        {id: 'bg-blend-color-burn', value: 'color-burn' },
        {id: 'bg-blend-hard-light', value: 'hard-light' },
        {id: 'bg-blend-soft-light', value: 'soft-light' },
        {id: 'bg-blend-difference', value: 'difference' },
        {id: 'bg-blend-exclusion', value: 'exclusion' },
        {id: 'bg-blend-hue', value: 'hue' },
        {id: 'bg-blend-saturation', value: 'saturation' },
        {id: 'bg-blend-color', value: 'color' },
        {id: 'bg-blend-luminosity', value: 'luminosity' },
    ]
};

export const Filter = {
    type: 'twPropertyType',
    label: 'Filter',
    id: 'twFilter',
    property: 'filter',
    twPrefixes: ['filter', 'blur', 'brightness', 'contrast', 'drop-shadow', 'grayscale', 'hue-rotate', 'invert', 'saturate', 'sepia'],
    cssPropertys: ['filter'],
    valueTypes: ['s'],
    arbitoryOptions: [
        {},
        {
            'c': 'blur(var({value}))',
            'v': 'blur({value})'
        },
        {
            'n': 'brightness({value}%)',
            'c': 'brightness(var({value}))',
            'v': 'brightness({value})'
        },
        {
            'n': 'contrast({value}%)',
            'c': 'contrast(var({value}))',
            'v': 'contrast({value})'
        },
        {
            'n': 'drop-shadow(var({value}))',
            'c': 'drop-shadow({value})'
        },
        {
            'n': 'grayscale({value}%)',
            'c': 'grayscale(var({value}))',
            'v': 'grayscale({value})'
        },
        {
            'n': 'hue-rotate({value}deg)',
            '-n': 'hue-rotate(calc({value}deg * -1))',
            'c': 'hue-rotate(var({value}))',
            'v': 'hue-rotate({value})'
        },
        {
            'n': 'invert({value}%)',
            'c': 'invert(var({value}))',
            'v': 'invert({value})'
        },
        {
            'n': 'saturate({value}%)',
            'c': 'saturate(var({value}))',
            'v': 'saturate({value})'
        },
        {
            'n': 'sepia({value}%)',
            'c': 'sepia(var({value}))',
            'v': 'sepia({value})'
        }
    ],
    options: [
        {id: 'filter-none', value: 'filter: none' },
        {id: 'blur-xs', value: 'filter: blur(var(--blur-xs))' },
        {id: 'blur-sm', value: 'filter: blur(var(--blur-sm))' },
        {id: 'blur-md', value: 'filter: blur(var(--blur-md))' },
        {id: 'blur-lg', value: 'filter: blur(var(--blur-lg))' },
        {id: 'blur-xl', value: 'filter: blur(var(--blur-xl))' },
        {id: 'blur-2xl', value: 'filter: blur(var(--blur-2xl))' },
        {id: 'blur-3xl', value: 'filter: blur(var(--blur-3xl))' },
        {id: 'blur-none', value: 'filter: none' },
        {id: 'drop-shadow-xs', value: drop_shadow('xs') },
        {id: 'drop-shadow-sm', value: drop_shadow('sm') },
        {id: 'drop-shadow-md', value: drop_shadow('md') },
        {id: 'drop-shadow-lg', value: drop_shadow('lg') },
        {id: 'drop-shadow-xl', value: drop_shadow('xl') },
        {id: 'drop-shadow-2xl', value: drop_shadow('2xl') },
        {id: 'drop-shadow-none', value: 'filter: drop-shadow(0 0 #0000)' },
        {id: 'grayscale', value: 'filter: grayscale(100%)'},
        {id: 'invert', value: 'filter: invert(100%)'},
        {id: 'sepia', value: 'filter: sepia(100%)'},
    ]
};

function drop_shadow(size){
    return `
        --tw-drop-shadow: drop-shadow(var(--drop-shadow-${size}));
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    `;
}

export const BackdropFilter = {
    type: 'twPropertyType',
    label: 'Backdrop Filter',
    id: 'twBackdropFilter',
    property: 'backdrop-filter',
    twPrefixes: ['backdrop-filter', 'backdrop-blur', 'backdrop-brightness', 'backdrop-contrast', 'backdrop-grayscale', 'backdrop-hue-rotate', 'backdrop-invert', 'backdrop-opacity', 'backdrop-saturate', 'backdrop-sepia'],
    cssPropertys: ['backdrop-filter'],
    valueTypes: ['s'],
    arbitoryOptions: [
        {},
        {
            'c': 'blur(var({value}))',
            'v': 'blur({value})'
        },
        {
            'n': 'brightness({value}%)',
            'c': 'brightness(var({value}))',
            'v': 'brightness({value})'
        },
        {
            'n': 'contrast({value}%)',
            'c': 'contrast(var({value}))',
            'v': 'contrast({value})'
        },
        {
            'n': 'grayscale({value}%)',
            'c': 'grayscale(var({value}))',
            'v': 'grayscale({value})'
        },
        {
            'n': 'hue-rotate({value}deg)',
            '-n': 'hue-rotate(calc({value}deg * -1))',
            'c': 'hue-rotate(var({value}))',
            'v': 'hue-rotate({value})'
        },
        {
            'n': 'invert({value}%)',
            'c': 'invert(var({value}))',
            'v': 'invert({value})'
        },
        {
            'n': 'opacity({value}%)',
            'c': 'opacity(var({value}))',
            'v': 'opacity({value})'
        },
        {
            'n': 'saturate({value}%)',
            'c': 'saturate(var({value}))',
            'v': 'saturate({value})'
        },
        {
            'n': 'sepia({value}%)',
            'c': 'sepia(var({value}))',
            'v': 'sepia({value})'
        }
    ],
    options: [
        {id: 'backdrop-blur-xs', value: 'backdrop-filter: blur(var(--blur-xs))' },
        {id: 'backdrop-blur-sm', value: 'backdrop-filter: blur(var(--blur-sm))' },
        {id: 'backdrop-blur-md', value: 'backdrop-filter: blur(var(--blur-md))' },
        {id: 'backdrop-blur-lg', value: 'backdrop-filter: blur(var(--blur-lg))' },
        {id: 'backdrop-blur-xl', value: 'backdrop-filter: blur(var(--blur-xl))' },
        {id: 'backdrop-blur-2xl', value: 'backdrop-filter: blur(var(--blur-2xl))' },
        {id: 'backdrop-blur-3xl', value: 'backdrop-filter: blur(var(--blur-3xl))' },
        {id: 'backdrop-blur-none', value: ' ' },
        {id: 'backdrop-grayscale', value: 'backdrop-filter: grayscale(100%)'},
        {id: 'backdrop-invert', value: 'backdrop-filter: invert(100%)'},
        {id: 'backdrop-sepia', value: 'backdrop-filter: sepia(100%)'},
    ]
};

export const BorderCollapse = {
    type: 'twPropertyType',
    label: 'Border Collapse',
    id: 'twBorderCollapse',
    property: 'border-collapse',
    twPrefixes: ['border-collapse'],
    cssPropertys: ['border-collapse'],
    valueTypes: ['s'],
    options: [
        {id: 'border-collapse', value: 'collapse' },
        {id: 'border-separate', value: 'separate' },
    ]
};

export const BorderSpacing = {
    type: 'twPropertyType',
    label: 'Border Spacing',
    id: 'twBorderSpacing',
    property: 'border-spacing',
    twPrefixes: ['border-spacing', 'border-spacing-x', 'border-spacing-y'],
    cssPropertys: ['border-spacing', 'border-spacing', 'border-spacing'],
    valueTypes: ['n', 'c', 'v'],
    arbitoryOptions: [
        {
            'n': 'calc(var(--spacing) * {value})',
        },
        {
            'n': 'calc(var(--spacing) * {value}) var(--tw-border-spacing-y)',
            'c': 'var({value}) var(--tw-border-spacing-y)',
            'v': '{value} var(--tw-border-spacing-y)'
        },
        {
            'n': 'var(--tw-border-spacing-x) calc(var(--spacing) * {value})',
            'c': 'var(--tw-border-spacing-x) var({value})',
            'v': 'var(--tw-border-spacing-x) {value}'
        }
    ]
};

export const TableLayout = {
    type: 'twPropertyType',
    label: 'Table Layout',
    id: 'twTableLayout',
    property: 'table-layout',
    twPrefixes: ['table-layout'],
    cssPropertys: ['table-layout'],
    valueTypes: ['s'],
    options: [
        {id: 'table-auto', value: 'auto' },
        {id: 'table-fixed', value: 'fixed' },
    ]
};

export const CaptionSide = {
    type: 'twPropertyType',
    label: 'Caption Side',
    id: 'twCaptionSide',
    property: 'caption-side',
    twPrefixes: ['caption-side'],
    cssPropertys: ['caption-side'],
    valueTypes: ['s'],
    options: [
        {id: 'caption-top', value: 'top' },
        {id: 'caption-bottom', value: 'bottom' },
    ]
};

export const TransitionBehaviour = {
    type: 'twPropertyType',
    label: 'Transition Behaviour',
    id: 'twTransitionBehaviour',
    property: 'transition-behavior',
    twPrefixes: ['transition-behavior'],
    cssPropertys: ['transition-behavior'],
    valueTypes: ['s'],
    options: [
        {id: 'transition-normal', value: 'normal' },
        {id: 'transition-discrete', value: 'allow-discrete' },
    ]
};

export const TransitionDuration = {
    type: 'twPropertyType',
    label: 'Transition Duration',
    id: 'twTransitionDuration',
    property: 'transition-duration',
    twPrefixes: ['transition-duration'],
    cssPropertys: ['duration'],
    valueTypes: ['n', 'c', 'v', 's'],
    arbitoryOptions: [
        {
            'n': '{value}ms'
        }
    ],
    options: [
        {id: 'duration-initial', value: 'initial' },
    ]
};

export const TransitionTimingFunction = {
    type: 'twPropertyType',
    label: 'Transition Timing Function',
    id: 'twTransitionTimingFunction',
    property: 'transition-timing-function',
    twPrefixes: ['transition-timing-function'],
    cssPropertys: ['ease'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'ease-linear', value: 'linear' },
        {id: 'ease-in', value: 'var(--ease-in)' },
        {id: 'ease-out', value: 'var(--ease-out)' },
        {id: 'ease-in-out', value: 'var(--ease-in-out)' },
        {id: 'ease-initial', value: 'initial' },
    ]
};

export const TransitionDelay = {
    type: 'twPropertyType',
    label: 'Transition Delay',
    id: 'twTransitionDelay',
    property: 'transition-delay',
    twPrefixes: ['delay'],
    cssPropertys: ['transition-delay'],
    valueTypes: ['n', 'c', 'v'],
    arbitoryOptions: [
        {
            'n': `{value}ms`
        }
    ]    
};

export const Animation = {
    type: 'twPropertyType',
    label: 'Animation',
    id: 'twAnimation',
    property: 'animation',
    twPrefixes: ['animation'],
    cssPropertys: ['animation'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'animate-none', value: 'none'},
        {id: 'animate-spin', value: 'var(--animate-spin)'},
        {id: 'animate-ping', value: 'var(--animate-ping)'},
        {id: 'animate-pulse', value: 'var(--animate-pulse)'},
        {id: 'animate-bounce', value: 'var(--animate-bounce)'},
    ]
};

// Transform Properties

export const BackfaceVisibility = {
    type: 'twPropertyType',
    label: 'Backface Visibility',
    id: 'twBackfaceVisibility',
    property: 'backface-visibility',
    twPrefixes: ['backface-visibility'],
    cssPropertys: ['backface-visibility'],
    valueTypes: ['s'],
    options: [
        {id: 'backface-hidden', value: 'backface-visibility: hidden;' },
        {id: 'backface-visible', value: 'backface-visibility: visible;' },
    ]
};

export const Perspective = {
    type: 'twPropertyType',
    label: 'Perspective',
    id: 'twPerspective',
    property: 'perspective',
    twPrefixes: ['perspective'],
    cssPropertys: ['perspective'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'perspective-dramatic', value: 'perspective: var(--perspective-dramatic);' },
        {id: 'perspective-near', value: 'perspective: var(--perspective-near);' },
        {id: 'perspective-normal', value: 'perspective: var(--perspective-normal);' },
        {id: 'perspective-midrange', value: 'perspective: var(--perspective-midrange);' },
        {id: 'perspective-distant', value: 'perspective: var(--perspective-distant);' },
        {id: 'perspective-none', value: 'perspective: none;' },
    ]
};

export const PerspectiveOrigin = {
    type: 'twPropertyType',
    label: 'Perspective Origin',
    id: 'twPerspectiveOrigin',
    property: 'perspective-origin',
    twPrefixes: ['perspective-origin'],
    cssPropertys: ['perspective-origin'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'perspective-origin-center', value: 'perspective-origin: center;' },
        {id: 'perspective-origin-top', value: 'perspective-origin: top;' },
        {id: 'perspective-origin-top-right', value: 'perspective-origin: top right;' },
        {id: 'perspective-origin-right', value: 'perspective-origin: right;' },
        {id: 'perspective-origin-bottom-right', value: 'perspective-origin: bottom right;' },
        {id: 'perspective-origin-bottom', value: 'perspective-origin: bottom;' },
        {id: 'perspective-origin-bottom-left', value: 'perspective-origin: bottom left;' },
        {id: 'perspective-origin-left', value: 'perspective-origin: left;' },
        {id: 'perspective-origin-top-left', value: 'perspective-origin: top left;' },
    ]
};

export const rotate = {
    type: 'twPropertyType',
    label: 'Rotate',
    id: 'twRotate',
    property: 'rotate',
    twPrefixes: ['rotate', 'rotate-x', 'rotate-y', 'rotate-z'],
    cssPropertys: ['rotate', 'transform', 'transform', 'transform'],
    valueTypes: ['n', 'v', 'c', 's'],
    arbitoryOptions: [
        {
            'n': '{value}deg',
            '-n': 'calc({value}deg * -1)',
        },
        {
            'n': 'rotateX({value}deg) var(--tw-rotate-y)',
            '-n': 'rotateX(-{value}deg) var(--tw-rotate-y)',
            'c': 'rotateX(var({value})) var(--tw-rotate-y)',
            'v': 'rotateX({value}) var(--tw-rotate-y)'
        },
        {
            'n': 'var(--tw-rotate-x) rotateY({value}deg)',
            '-n': 'var(--tw-rotate-x) rotateY(-{value}deg)',
            'c': 'var(--tw-rotate-x) rotateY(var({value}))',
            'v': 'var(--tw-rotate-x) rotateY({value})'
        },
        {
            'n': 'var(--tw-rotate-x) var(--tw-rotate-y) rotateZ({value}deg)',
            '-n': 'var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-{value}deg)',
            'c': 'var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var({value}))',
            'v': 'var(--tw-rotate-x) var(--tw-rotate-y) rotateZ({value})'
        }
    ],
    options: [
        {id: 'rotate-none', value: 'rotate: none'} 
    ]
};

export const scale = {
    type: 'twPropertyType',
    label: 'Scale',
    id: 'twScale',
    property: 'scale',
    twPrefixes: ['scale', 'scale-x', 'scale-y', 'scale-z'],
    cssPropertys: ['scale', 'scale', 'scale', 'scale'],
    valueTypes: ['n', 'v', 'c', 's'],
    arbitoryOptions: [
        {
            'n': '{value}% {value}%',
            '-n': 'calc({value}% * -1) calc({value}% * -1)',
            'c': 'var({value}) var({value})'
        },
        {
            'n': '{value}% var(--tw-scale-y)',
            '-n': 'calc({value}% * -1) var(--tw-scale-y)',
            'c': 'var({value}) var(--tw-scale-y)',
            'v': '{value} var(--tw-scale-y)'
        },
        {
            'n': 'var(--tw-scale-x) {value}%',
            '-n': 'var(--tw-scale-x) calc({value}% * -1)',
            'c': 'var(--tw-scale-x) var({value})',
            'v': 'var(--tw-scale-x) {value}'
        },
        {
            'n': 'var(--tw-scale-x) var(--tw-scale-y) {value}%',
            '-n': 'var(--tw-scale-x) var(--tw-scale-y) calc({value}% * -1)',
            'c': 'var(--tw-scale-x) var(--tw-scale-y) var({value})',
            'v': 'var(--tw-scale-x) var(--tw-scale-y) {value}'
        }
    ],
    options: [
        {id: 'scale-none', value: 'scale: none'}, 
        {id: 'scale-3d', value: 'scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)'} 
    ]
};

export const skew = {
    type: 'twPropertyType',
    label: 'Skew',
    id: 'twSkew',
    property: 'skew',
    twPrefixes: ['skew', 'skew-x', 'skew-y'],
    cssPropertys: ['transform', 'transform', 'transform'],
    valueTypes: ['n', 'v', 'c'],
    arbitoryOptions: [
        {
            'n': 'skewX({value}deg) skewY({value}deg)',
            '-n': 'skewX(-{value}deg) skewY(-{value}deg)',
            'c': 'skewX(var({value})) skewY(var({value}))',
            'v': 'skewX({value}) skewY({value})'
        },
        {
            'n': 'skewX({value}deg))',
            '-n': 'skewX(-{value}deg))',
            'c': 'skewX(var({value}))',
            'v': 'skewX({value}))'
        },
        {
            'n': 'skewY({value}deg)',
            '-n': 'skewY(-{value}deg)',
            'c': 'skewY(var({value}))',
            'v': 'skewY({value})'
        }
    ],
    options: [
        {id: 'scale-none', value: 'scale: none'}, 
        {id: 'scale-3d', value: 'scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)'} 
    ]
};

export const Transform = {
    type: 'twPropertyType',
    label: 'Transform',
    id: 'twTransform',
    property: 'transform',
    twPrefixes: ['transform'],
    cssPropertys: ['transform'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'transform-none', value: 'transform: none;' },
        {id: 'transform-gpu', value: 'transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);' },
        {id: 'transform-cpu', value: 'transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);' },
    ]
};

export const TransformOrigin = {
    type: 'twPropertyType',
    label: 'Transform Origin',
    id: 'twTransformOrigin',
    property: 'transform-origin',
    twPrefixes: ['transform-origin'],
    cssPropertys: ['transform-origin'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'origin-center', value: 'transform-origin: center;' },
        {id: 'origin-top', value: 'transform-origin: top;' },
        {id: 'origin-top-right', value: 'transform-origin: top right;' },
        {id: 'origin-right', value: 'transform-origin: right;' },
        {id: 'origin-bottom-right', value: 'transform-origin: bottom right;' },
        {id: 'origin-bottom', value: 'transform-origin: bottom;' },
        {id: 'origin-bottom-left', value: 'transform-origin: bottom left;' },
        {id: 'origin-left', value: 'transform-origin: left;' },
        {id: 'origin-top-left', value: 'transform-origin: top left;' },
    ]
};

export const TransformStyle = {
    type: 'twPropertyType',
    label: 'Transform Style',
    id: 'twTransformStyle',
    property: 'transform-style',
    twPrefixes: ['transform-style'],
    cssPropertys: ['transform-style'],
    valueTypes: ['n'],
    options: [
        {id: 'transform-3d', value: 'transform-style: preserve-3d;' },
        {id: 'transform-flat', value: 'transform-style: flat;' },
    ]
};

export const translate = {
    type: 'twPropertyType',
    label: 'Translate',
    id: 'twTranslate',
    property: 'translate',
    twPrefixes: ['translate', 'translate-x', 'translate-y', 'translate-z'],
    cssPropertys: ['translate', 'translate', 'translate'],
    valueTypes: ['n', 'v', 'c'],
    arbitoryOptions: [
        {
            'n': 'calc(var(--spacing) * {value}) calc(var(--spacing) * {value})',
            '-n': 'calc(var(--spacing) * -{value}) calc(var(--spacing) * -{value})',
            'f': 'calc({value} * 100%) calc({value} * 100%)',
            '-f': 'calc({value} * -100%) calc({value} * -100%)',
            'c': 'var({value}) var({value})',
            'v': '{value} {value}'
        },
        {
            'n': 'calc(var(--spacing) * {value}) var(--tw-translate-y)',
            '-n': 'calc(var(--spacing) * -{value}) var(--tw-translate-y)',
            'f': 'calc({value} * 100%) var(--tw-translate-y)',
            '-f': 'calc({value} * -100%) var(--tw-translate-y)',
            'c': 'var({value}) var(--tw-translate-y)',
            'v': '{value} var(--tw-translate-y)'
        },
        {
            'n': 'var(--tw-translate-x) calc(var(--spacing) * {value})',
            '-n': 'var(--tw-translate-x) calc(var(--spacing) * -{value})',
            'f': 'var(--tw-translate-x) calc({value} * 100%)',
            '-f': 'var(--tw-translate-x) calc({value} * -100%)',
            'c': 'var(--tw-translate-x) var({value})',
            'v': 'var(--tw-translate-x) {value}'
        },
        {
            'n': 'var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * {value})',
            '-n': 'var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -{value})',
            'f': 'var(--tw-translate-x) var(--tw-translate-y) var({value})',
            'v': 'var(--tw-translate-x) var(--tw-translate-y) {value}'
        }
    ],
    options: [
        {id: 'translate-full', value: 'translate: 100% 100%'}, 
        {id: '-translate-full', value: 'translate: -100% -100%'}, 
        {id: 'translate-px', value: 'translate: 1px 1px'}, 
        {id: '-translate-px', value: 'translate: -1px -1px'}, 
        {id: 'translate-x-full', value: 'translate: 100% var(--tw-translate-y)'}, 
        {id: '-translate-x-full', value: 'translate: -100% var(--tw-translate-y)'}, 
        {id: 'translate-x-px', value: 'translate: 1px var(--tw-translate-y)'}, 
        {id: '-translate-x-px', value: 'translate: -1px var(--tw-translate-y)'}, 
        {id: 'translate-y-full', value: 'translate: var(--tw-translate-x) 100%'}, 
        {id: '-translate-y-full', value: 'translate: var(--tw-translate-x) -100%'}, 
        {id: 'translate-y-px', value: 'translate: var(--tw-translate-x) 1px'}, 
        {id: '-translate-y-px', value: 'translate: var(--tw-translate-x) -1px'}, 
        {id: 'translate-z-px', value: 'translate: var(--tw-translate-x) var(--tw-translate-y) 1px'}, 
        {id: '-translate-z-px', value: 'translate: var(--tw-translate-x) var(--tw-translate-y) -1px'}, 
        {id: 'translate-none', value: 'translate: none'}, 
    ]
};

export const Appearance = {
    type: 'twPropertyType',
    label: 'Appearance',
    id: 'twAppearance',
    property: 'appearance',
    twPrefixes: ['appearance'],
    cssPropertys: ['appearance'],
    valueTypes: ['s'],
    options: [
        {id: 'appearance-none', value: 'appearance: none;' },
        {id: 'appearance-auto', value: 'appearance: auto;' },
    ]
};

export const ColorScheme = {
    type: 'twPropertyType',
    label: 'Color Scheme',
    id: 'twColorScheme',
    property: 'color-scheme',
    twPrefixes: ['color-scheme'],
    cssPropertys: ['color-scheme'],
    valueTypes: ['s'],
    options: [
        {id: 'scheme-normal', value: 'color-scheme: normal;' },
        {id: 'scheme-dark', value: 'color-scheme: dark;' },
        {id: 'scheme-light', value: 'color-scheme: light;' },
        {id: 'scheme-light-dark', value: 'color-scheme: light dark;' },
        {id: 'scheme-only-dark', value: 'color-scheme: only dark;' },
        {id: 'scheme-only-light', value: 'color-scheme: only light;' },
    ]
};

export const Cursor = {
    type: 'twPropertyType',
    label: 'Cursor',
    id: 'twCursor',
    property: 'cursor',
    twPrefixes: ['cursor'],
    cssPropertys: ['cursor'],
    valueTypes: ['c', 'v', 's'],
    options: [
        {id: 'cursor-auto', value: 'cursor: auto;' },
        {id: 'cursor-default', value: 'cursor: default;' },
        {id: 'cursor-pointer', value: 'cursor: pointer;' },
        {id: 'cursor-wait', value: 'cursor: wait;' },
        {id: 'cursor-text', value: 'cursor: text;' },
        {id: 'cursor-move', value: 'cursor: move;' },
        {id: 'cursor-help', value: 'cursor: help;' },
        {id: 'cursor-not-allowed', value: 'cursor: not-allowed;' },
        {id: 'cursor-none', value: 'cursor: none;' },
        {id: 'cursor-context-menu', value: 'cursor: context-menu;' },
        {id: 'cursor-progress', value: 'cursor: progress;' },
        {id: 'cursor-cell', value: 'cursor: cell;' },
        {id: 'cursor-crosshair', value: 'cursor: crosshair;' },
        {id: 'cursor-vertical-text', value: 'cursor: vertical-text;' },
        {id: 'cursor-alias', value: 'cursor: alias;' },
        {id: 'cursor-copy', value: 'cursor: copy;' },
        {id: 'cursor-no-drop', value: 'cursor: no-drop;' },
        {id: 'cursor-grab', value: 'cursor: grab;' },
        {id: 'cursor-grabbing', value: 'cursor: grabbing;' },
        {id: 'cursor-all-scroll', value: 'cursor: all-scroll;' },
        {id: 'cursor-col-resize', value: 'cursor: col-resize;' },
        {id: 'cursor-row-resize', value: 'cursor: row-resize;' },
        {id: 'cursor-n-resize', value: 'cursor: n-resize;' },
        {id: 'cursor-e-resize', value: 'cursor: e-resize;' },
        {id: 'cursor-s-resize', value: 'cursor: s-resize;' },
        {id: 'cursor-w-resize', value: 'cursor: w-resize;' },
        {id: 'cursor-ne-resize', value: 'cursor: ne-resize;' },
        {id: 'cursor-nw-resize', value: 'cursor: nw-resize;' },
        {id: 'cursor-se-resize', value: 'cursor: se-resize;' },
        {id: 'cursor-sw-resize', value: 'cursor: sw-resize;' },
        {id: 'cursor-ew-resize', value: 'cursor: ew-resize;' },
        {id: 'cursor-ns-resize', value: 'cursor: ns-resize;' },
        {id: 'cursor-nesw-resize', value: 'cursor: nesw-resize;' },
        {id: 'cursor-nwse-resize', value: 'cursor: nwse-resize;' },
        {id: 'cursor-zoom-in', value: 'cursor: zoom-in;' },
        {id: 'cursor-zoom-out', value: 'cursor: zoom-out;' },
    ]
};

export const FieldSizing = {
    type: 'twPropertyType',
    label: 'Field Sizing',
    id: 'twFieldSizing',
    property: 'field-sizing',
    twPrefixes: ['field-sizing'],
    cssPropertys: ['field-sizing'],
    valueTypes: ['s'],
    options: [
        {id: 'field-sizing-fixed', value: 'field-sizing: fixed;' },
        {id: 'field-sizing-content', value: 'field-sizing: content;' },
    ]
};

export const PointerEvents = {
    type: 'twPropertyType',
    label: 'Pointer Events',
    id: 'twPointerEvents',
    property: 'pointer-events',
    twPrefixes: ['pointer-events'],
    cssPropertys: ['pointer-events'],
    valueTypes: ['s'],
    options: [
        {id: 'pointer-events-auto', value: 'pointer-events: auto;' },
        {id: 'pointer-events-none', value: 'pointer-events: none;' },
    ]
};

export const Resize = {
    type: 'twPropertyType',
    label: 'Resize',
    id: 'twResize',
    property: 'resize',
    twPrefixes: ['resize'],
    cssPropertys: ['resize'],
    valueTypes: ['s'],
    options: [
        {id: 'resize-none', value: 'resize: none;' },
        {id: 'resize', value: 'resize: both;' },
        {id: 'resize-y', value: 'resize: vertical;' },
        {id: 'resize-x', value: 'resize: horizontal;' },
    ]
};

export const ScrollBehavior = {
    type: 'twPropertyType',
    label: 'Scroll Behavior',
    id: 'twScrollBehavior',
    property: 'scroll-behavior',
    twPrefixes: ['scroll-behavior'],
    cssPropertys: ['scroll-behavior'],
    valueTypes: ['s'],
    options: [
        {id: 'scroll-auto', value: 'scroll-behavior: auto;' },
        {id: 'scroll-smooth', value: 'scroll-behavior: smooth;' },
    ]
};

export const ScrollMargin = {
    type: 'twPropertyType',
    label: 'Scroll Margin',
    id: 'twScrollMargin',
    property: 'scroll-margin',
    twPrefixes: ['scroll-m', 'scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
    cssPropertys: ['scroll-margin', 'scroll-margin-inline', 'scroll-margin-block', 'scroll-margin-inline-start', 'scroll-margin-inline-end', 'scroll-margin-top', 'scroll-margin-right', 'scroll-margin-bottom', 'scroll-margin-left'],
    valueTypes: ['n', 'c', 'v'],
    arbitoryOptions: [
        {
            'n': 'calc(var(--spacing) * {value})',
            '-n': 'calc(var(--spacing) * -{value})'
        }
    ]
};

export const ScrollPadding = {
    type: 'twPropertyType',
    label: 'Scroll Padding',
    id: 'twScrollPadding',
    property: 'scroll-padding',
    twPrefixes: ['scroll-p', 'scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
    cssPropertys: ['scroll-padding', 'scroll-padding-inline', 'scroll-padding-block', 'scroll-padding-inline-start', 'scroll-padding-inline-end', 'scroll-padding-top', 'scroll-padding-right', 'scroll-padding-bottom', 'scroll-padding-left'],
    valueTypes: ['n', 'c', 'v'],
    arbitoryOptions: [
        {
            'n': 'calc(var(--spacing) * {value})',
            '-n': 'calc(var(--spacing) * -{value})'
        }
    ]
};

export const ScrollSnapAlign = {
    type: 'twPropertyType',
    label: 'Scroll Snap Align',
    id: 'twScrollSnapAlign',
    property: 'scroll-snap-align',
    twPrefixes: ['scroll-snap-align'],
    cssPropertys: ['scroll-snap-align'],
    valueTypes: ['s'],
    options: [
        {id: 'snap-start', value: 'scroll-snap-align: start;' },
        {id: 'snap-end', value: 'scroll-snap-align: end;' },
        {id: 'snap-center', value: 'scroll-snap-align: center;' },
        {id: 'snap-align-none', value: 'scroll-snap-align: none;' },
    ]
};

export const ScrollSnapStop = {
    type: 'twPropertyType',
    label: 'Scroll Snap Stop',
    id: 'twScrollSnapStop',
    property: 'scroll-snap-stop',
    twPrefixes: ['scroll-snap-stop'],
    cssPropertys: ['scroll-snap-stop'],
    valueTypes: ['s'],
    options: [
        {id: 'snap-normal', value: 'scroll-snap-stop: normal;' },
        {id: 'snap-always', value: 'scroll-snap-stop: always;' },
    ]
};

export const ScrollSnapType = {
    type: 'twPropertyType',
    label: 'Scroll Snap Type',
    id: 'twScrollSnapType',
    property: 'scroll-snap-type',
    twPrefixes: ['scroll-snap-type'],
    cssPropertys: ['scroll-snap-type'],
    valueTypes: ['s'],
    options: [
        {id: 'snap-none', value: 'scroll-snap-type: none;' },
        {id: 'snap-x', value: 'scroll-snap-type: x var(--tw-scroll-snap-strictness);' },
        {id: 'snap-y', value: 'scroll-snap-type: y var(--tw-scroll-snap-strictness);' },
        {id: 'snap-both', value: 'scroll-snap-type: both var(--tw-scroll-snap-strictness);' },
        {id: 'snap-mandatory', value: '--tw-scroll-snap-strictness: mandatory;' },
        {id: 'snap-proximity', value: '--tw-scroll-snap-strictness: proximity;' },
    ]
};

export const TouchAction = {
    type: 'twPropertyType',
    label: 'Touch Action',
    id: 'twTouchAction',
    property: 'touch-action',
    twPrefixes: ['touch-action'],
    cssPropertys: ['touch-action'],
    valueTypes: ['s'],
    options: [
        {id: 'touch-auto', value: 'touch-action: auto;' },
        {id: 'touch-none', value: 'touch-action: none;' },
        {id: 'touch-pan-x', value: 'touch-action: pan-x;' },
        {id: 'touch-pan-left', value: 'touch-action: pan-left;' },
        {id: 'touch-pan-right', value: 'touch-action: pan-right;' },
        {id: 'touch-pan-y', value: 'touch-action: pan-y;' },
        {id: 'touch-pan-up', value: 'touch-action: pan-up;' },
        {id: 'touch-pan-down', value: 'touch-action: pan-down;' },
        {id: 'touch-pinch-zoom', value: 'touch-action: pinch-zoom;' },
        {id: 'touch-manipulation', value: 'touch-action: manipulation;' },
    ]
};

export const UserSelect = {
    type: 'twPropertyType',
    label: 'User Select',
    id: 'twUserSelect',
    property: 'user-select',
    twPrefixes: ['user-select'],
    cssPropertys: ['user-select'],
    valueTypes: ['s'],
    options: [
        {id: 'select-none', value: 'user-select: none;' },
        {id: 'select-text', value: 'user-select: text;' },
        {id: 'select-all', value: 'user-select: all;' },
        {id: 'select-auto', value: 'user-select: auto;' },
    ]
};

export const WillChange = {
    type: 'twPropertyType',
    label: 'Will Change',
    id: 'twWillChange',
    property: 'will-change',
    twPrefixes: ['will-change'],
    cssPropertys: ['will-change'],
    valueTypes: ['s'],
    options: [
        {id: 'will-change-auto', value: 'will-change: auto;' },
        {id: 'will-change-scroll', value: 'will-change: scroll-position;' },
        {id: 'will-change-contents', value: 'will-change: contents;' },
        {id: 'will-change-transform', value: 'will-change: transform;' },
    ]
};

export const StrokeWidth = {
    type: 'twPropertyType',
    label: 'Stroke Width',
    id: 'twStrokeWidth',
    property: 'stroke-width',
    twPrefixes: ['stroke-width'],
    cssPropertys: ['stroke-width'],
    valueTypes: ['n', 'c', 'v']
};

export const ForcedColorAdjust = {
    type: 'twPropertyType',
    label: 'Forced Color Adjust',
    id: 'twForcedColorAdjust',
    property: 'forced-color-adjust',
    twPrefixes: ['forced-color-adjust'],
    cssPropertys: ['forced-color-adjust'],
    valueTypes: ['s'],
    options: [
        {id: 'forced-color-adjust-auto', value: 'forced-color-adjust: auto;' },
        {id: 'forced-color-adjust-none', value: 'forced-color-adjust: none;' },
    ]
};

export const Color = {
    type: 'twPropertyType',
    label: 'color',
    id: 'twColor',
    property: 'color',
    twPrefixes: ['text'],
    cssPropertys: ['color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('text')
};

export const TextDecorationColor = {
    type: 'twPropertyType',
    label: 'Text Decoration Color',
    id: 'twTextDecorationColor',
    property: 'text-decoration-color',
    twPrefixes: ['decoration'],
    cssPropertys: ['text-decoration-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('decoration')
};

export const BackgroundColor = {
    type: 'twPropertyType',
    label: 'Background Color',
    id: 'twBackgroundColor',
    property: 'background-color',
    twPrefixes: ['bg'],
    cssPropertys: ['background-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('bg')
};

export const BorderColor = {
    type: 'twPropertyType',
    label: 'Border Color',
    id: 'twBorderColor',
    property: 'border-color',
    twPrefixes: ['border'],
    cssPropertys: ['border-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('border')
};

export const OutlineColor = {
    type: 'twPropertyType',
    label: 'Outline Color',
    id: 'twOutlineColor',
    property: 'outline-color',
    twPrefixes: ['outline'],
    cssPropertys: ['outline-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('outline')
};

export const AccentColor = {
    type: 'twPropertyType',
    label: 'accent Color',
    id: 'twAccentcolor',
    property: 'accent-color',
    twPrefixes: ['accent'],
    cssPropertys: ['accent-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('accent')
};

export const CaretColor = {
    type: 'twPropertyType',
    label: 'Caret Color',
    id: 'twCaretcolor',
    property: 'caret-color',
    twPrefixes: ['caret'],
    cssPropertys: ['caret-color'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('caret')
};

export const FillColor = {
    type: 'twPropertyType',
    label: 'Fill Color',
    id: 'twFill',
    property: 'fill',
    twPrefixes: ['fill'],
    cssPropertys: ['fill'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('fill')
};

export const StrokeColor = {
    type: 'twPropertyType',
    label: 'Stroke Color',
    id: 'twStroke',
    property: 'stroke',
    twPrefixes: ['stroke'],
    cssPropertys: ['stroke'],
    valueTypes: ['c', 'v', 's'],
    options: getColorOptions('stroke')
};

function getColorOptions(property) {

    const colors = [
      "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", 
      "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", 
      "rose", "slate", "gray", "zinc", "neutral", "stone"
    ];
    
    const variations = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    let prefix = ''
    if(property === 'shadow'){
        prefix = '--tw-shadow-color: ';
    }
    if(property === 'inset-shadow'){
        prefix = '--tw-inset-shadow-color: ';
    }
    if(property === 'ring'){
        prefix = '--tw-ring-color: ';
    }

    let options = [
        {id: `${property}-inherit`, value: `${prefix}inherit`},
        {id: `${property}-current`, value: `${prefix}current`},
        {id: `${property}-transparent`, value: `${prefix}transparent`},
        {id: `${property}-black`, value: `${prefix}var(--color-black)`},
        {id: `${property}-white`, value: `${prefix}var(--color-white)`},
    ]
  
    colors.forEach(color => {
      variations.forEach(variation => {
        options.push({
          id: `${property}-${color}-${variation}`,
          value: `${prefix}var(--color-${color}-${variation})`
        });
      });
    });
  
    return options;

}