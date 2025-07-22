export default function twPropertyType(editor) {

    const styleManager = editor.StyleManager;
    const sm = editor.Selectors;
    const selectedClasses = {};

    styleManager.addType('twPropertyType', {

        create({ props, change }) {

            const wrapper = createWrapper();
            const textField = createTextField();
            const selectArrow = createSelectArrow();
            const dropdown = createDropdown();

            // Add elements to the wrapper
            wrapper.appendChild(textField);
            if(props.valueTypes.includes('s')){
                wrapper.appendChild(selectArrow);
            }
            wrapper.appendChild(dropdown);

            // Hide dropdown when focus is lost
            textField.addEventListener("blur", () => {
                setTimeout(() => {
                    dropdown.style.display = "none";
                }, 200); // Small delay to allow clicks on dropdown items
            });
                     
            // Handle input logic
            textField.addEventListener('input', (event) => handleInput(event, textField, dropdown, props));
            selectArrow.addEventListener('click', (event) => {
                let className = 'active';
                if(!dropdown.classList.contains(className)){
                    dropdown.classList.add(className);
                    handleInput(event, textField, dropdown, props);
                }else{
                    dropdown.classList.remove(className);
                    dropdown.style.display = 'none';
                }
            });
            textField.addEventListener('change', event => change({ event }));
            return wrapper;
        },

        // // Propagate UI changes up to the targets
        emit({ props, updateStyle }, { event, partial }) {
            const { value } = event.target;
            // updateStyle(`${value}px`, { partial });
        },

        // Update UI (eg. when the target is changed)
        update({ value, el }) {
            // console.log(value);
            el.querySelector('.twPropertyInput').value = '';
        },
    }); // addType end

    /**
     * Detect the value type based on input and supported types.
     * @param {string} value - The user's input value.
     * @param {Array} supportedTypes - Supported value types from property definition.
     * @returns {string|null} - The detected value type or null if unsupported.
     */
    function createWrapper() {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.className = "twPropertyWrapper";
        return wrapper;
    }

    function createTextField() {
        const textField = document.createElement('input');
        textField.className = 'twPropertyInput';
        textField.type = 'text';
        return textField;
    }

    function createSelectArrow(){
        const selectArrowWrapper = document.createElement('div');
        selectArrowWrapper.className = 'selectArrowWrapper';
        const selectArrow = document.createElement('span');
        selectArrow.className = 'selectArrow';
        selectArrowWrapper.appendChild(selectArrow);
        return selectArrowWrapper;
    }

    function createDropdown() {
        const dropdown = document.createElement('ul');
        dropdown.className = 'valuesDropDown';
        dropdown.style.display = 'none';
        return dropdown;
    }

    function handleInput(event, textField, dropdown, props) {
        let value, isNegative, valueType;

        if(event.target.className === 'selectArrowWrapper' || event.target.className === 'selectArrow'){
            value = '';
            isNegative = false;
            valueType = 's';
        }else{
            value = event.target.value.trim();
            ({ isNegative, valueType } = detectValueType(value, props.valueTypes));
        }
        // console.log({isNegative, valueType});
        //!valueType || 
        if (!props.valueTypes.includes(valueType)) {
            showError(dropdown, props.valueTypes);
        } else {
            removeError(dropdown);
            textField.dataset.type = valueType;
            updateDropdownOptions(event, dropdown, value, valueType, isNegative, props);
            dropdown.style.display = dropdown.childNodes.length > 0 ? 'block' : 'none';
        }
    }

    /**
     * Detect the value type based on user input.
     * @param {string} value - The user's input value.
     * @returns {string|null} - The detected value type ('n', 'v', 'c', 'f', 'r', 's') or null if invalid.
     */
    function detectValueType(value) {
        const isNegative = value.startsWith('-');
        const rawValue = isNegative ? value.slice(1) : value; // Remove '-' for type detection
        
        let valueType = null;
        if (/^\d+$/.test(rawValue)) valueType = 'n'; // Number
        else if (/^\[.+\]$/.test(rawValue) || rawValue.startsWith('[')) valueType = 'v'; // Bracket value
        else if (/^\(.+\)$/.test(rawValue) || rawValue.startsWith('(')) valueType = 'c'; // Custom property
        else if (/^\d+\/\d+$/.test(rawValue)) valueType = 'f'; // Fraction
        else if (/^\d+\/\d+$/.test(rawValue) && /aspect/.test(rawValue)) valueType = 'r'; // Ratio
        else if (rawValue) valueType = 's'; // Default type
        console.log(valueType);
        return { isNegative, valueType };
    }

    function showError(dropdown, supportedTypes) {
        const existingError = dropdown.querySelector('.error-message');
        if (!existingError) {
            const errorItem = document.createElement('li');
            errorItem.textContent = `Invalid value type. Supported types: ${supportedTypes.toString()}`;
            errorItem.style.color = 'red';
            errorItem.className = 'error-message';
            dropdown.appendChild(errorItem);
        }
        dropdown.style.display = 'block';
    }

    function removeError(dropdown) {
        const existingError = dropdown.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    /**
     * Populate the dropdown with options based on value type.
     * @param {HTMLElement} dropdown - The dropdown element.
     * @param {string} value - The user's input value.
     * @param {string} valueType - The detected value type.
     * @param {Object} property - The property definition object.
     */
    function updateDropdownOptions(event, dropdown, value, valueType, isNegative=false, props) {
        dropdown.innerHTML = ''; // Clear existing options
        var styleValue = '';
        var cssProperty;
        const { twPrefixes, options, name, arbitoryOptions} = props;
        let nVe = (isNegative) ? '-' : '';
        const rawValue = isNegative ? value.slice(1) : value;
        if(valueType === 'v' || valueType === 'c' || valueType === 'f'){
            value = extractValue(rawValue);
        }else{
            value = rawValue;
        }

        if(valueType !== 's'){

            // Square bracket or custom property suggestions
            twPrefixes.forEach((prefix, index) => {

                if(typeof props.cssPropertys == Object){
                    cssProperty = props.cssPropertys[index];
                }else{
                    cssProperty = props.cssPropertys[0];
                }
                let aOptions = '';
                // check if special case handled at property object
                if(props.arbitoryOptions){
                    if(props.arbitoryOptions.length == 1){
                        aOptions = props.arbitoryOptions[0];
                    }else{
                        aOptions = props.arbitoryOptions[index];
                    }
                }

                if (aOptions && nVe+valueType in aOptions) {

                    if(cssProperty){
                        styleValue = {[cssProperty]: aOptions[nVe+valueType].replace(/{value}/g, value)}
                    }else{
                        styleValue = aOptions[nVe+valueType].replace(/{value}/g, value);
                    }

                }else{

                    if(['v', 'f'].includes(valueType)){

                        var vExceptions = [
                            'twOutlineOffset',
                            'twGridColumnSpan',
                        ]
                        if( vExceptions.includes(props.id) ){
                            value = value.replace('_', '');
                        }

                        styleValue = {[cssProperty]: nVe+value};

                    }else{
                        switch(valueType){
                            case 'n':
                                styleValue = {[cssProperty]: `calc(var(--spacing) * ${nVe+value})`};
                                break;
                            case 'c':
                                styleValue = {[cssProperty]: `var(${value})`};
                                break;
                        }
                    }

                }

                let twClass = '';
                if(valueType === 'c' && props.id(twBorderWidth)){
                    twClass = `${nVe}${prefix}-(length:${value})`;
                }else{
                    twClass = `${nVe}${prefix}-${rawValue}`;
                }
                const listItem = createDropdownItem(event, twClass, styleValue, cssProperty, valueType, isNegative, props);
                dropdown.appendChild(listItem);
            });

        } else if (valueType === 's') {

            const filteredOptions = options.filter(option => option.value.includes(rawValue));

            // Predefined list fallback
            filteredOptions.forEach((option) => {
                // console.log(property.twPrefixes.length);
                if(props.twPrefixes.length == 1){
                    var cssProperty = props.cssPropertys[0];
                    styleValue = {[cssProperty]: nVe+option.value}
                }else{
                    var property = props.cssPropertys;
                    styleValue = option.value;
                }
                var twClass = option.id;
                var listItem = createDropdownItem(event, twClass, styleValue, property);
                dropdown.appendChild(listItem);
            });
        }
    }

    /**
     * Create a dropdown item element.
     * @param {string} twClass - tailwind class.
     * @param {string} value - value submitted by user.
     * @param {string} cssProperty - associated cssProperty if has variations.
     * @param {string} valueType - type of value submitted by user for twClass.
     * @returns {HTMLElement} - The dropdown item element.
     */
    function createDropdownItem(event, twClass, styleValue, property) {
        
        const listItem = document.createElement('li');
        listItem.textContent = twClass;
        listItem.addEventListener('click', () => {
            updateClass(twClass, styleValue, property);
            event.target.parentNode.parentNode.querySelector(`.valuesDropDown`).style.display = 'none';
        });
        return listItem;
    }

    /**
     * Extracts the value from bracketed or parenthesized inputs.
     * @param {string} value - The input value (e.g., "[20px]", "(--spacing)").
     * @returns {string|null} - The extracted value or null if the format is invalid.
     */
    function extractValue(value) {
        const bracketMatch = value.match(/^\[(.+)\]$/); // Matches [content]
        const parenthesisMatch = value.match(/^\((.+)\)$/); // Matches (content)
        const fractionMatch = value.match(/^(\d+)\/(\d+)$/); // Match fraction (e.g., 2/3)

        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]);
            const denominator = parseFloat(fractionMatch[2]);

            // Avoid division by zero and calculate the percentage
            if (denominator !== 0) {
            const percentage = (numerator / denominator) * 100;
            const isDecimal = percentage.toString().split(".")[1];

            // Ensure up to 5 decimal places for precision
            return isDecimal && isDecimal.length > 5
                ? `${percentage.toFixed(5)}%`
                : `${percentage}%`;
            }
            return null; // Invalid fraction (e.g., denominator = 0)
        }
        if (bracketMatch) return bracketMatch[1]; // Extract content inside []
        if (parenthesisMatch) return parenthesisMatch[1]; // Extract content inside ()
        return null; // Return null if the format doesn't match
    }

    function updateClass(twClass, styleValue, property){

        var device_prefix = get_device(true);
        var state_prefix = get_state(true);
        var twClasses = sm.getAll().map(selector => selector.get('name'));
        var twClass = `${device_prefix}${state_prefix}${twClass}`; 
        const sClasses = editor.getSelected().getClasses();
        console.log('StyleValue : ', styleValue);
        var editorStyle = {
          selectors: [twClass],
          style: styleValue, 
          atRuleType: '',
          mediaText: '',
          state: ''
        };
        var deviceManager = editor.Devices;
        var selectedDevice = deviceManager.getSelected();
        var widthMedia = selectedDevice.attributes.widthMedia.slice(0, -2);
      
        if(widthMedia){
          editorStyle.atRuleType = 'media';
          editorStyle.mediaText = `(min-width:${widthMedia}px)`;
        }
      
        if(state_prefix){
          editorStyle.state = get_state();
        }

        editor.getSelected().addClass(twClass);
        // addClassToSelected(twClass, property);
        if(!twClasses.includes(twClass)){
            // console.log('added style : ', twClass);
            editor.addStyle(editorStyle);
        }
        
    }
      
    function get_selComp(){
        return editor.getSelected();
    }
      
    function get_device(forClass = false){
      
        var cssMediaPrefix = getMediaPrefix();
      
        if(cssMediaPrefix){
          return (forClass) ? cssMediaPrefix+':' : cssMediaPrefix;
        }else{
          return (forClass) ? '' : 'xs';
        }
      
    }
      
    function get_state(forClass = false){
      
        const sm = editor.Selectors;
        var statePrefix = sm.getState();
        // console.log(statePrefix);
      
        if(statePrefix){
          return (forClass) ? statePrefix+':' : statePrefix;
        }else{
          return (forClass) ? '' : 'default';
        }
        
    }
      
    function getMediaPrefix(){
        var deviceManager = editor.Devices;
        var selectedDevice = deviceManager.getSelected();
        var widthMedia = selectedDevice.attributes.widthMedia.slice(0, -2);
        var cssMediaPrefix = '';
        if (widthMedia >= 640) cssMediaPrefix = 'sm';
        if (widthMedia >= 768) cssMediaPrefix = 'md';
        if (widthMedia >= 1024) cssMediaPrefix = 'lg';
        if (widthMedia >= 1280) cssMediaPrefix = 'xl';
        if (widthMedia >= 1536) cssMediaPrefix = '2xl';
        return cssMediaPrefix;
    }
    
    function addClassToSelected(twClass, property) {

        if (!property.selectedClasses){
            property.selectedClasses = [];
        }
        if(!property.selectedClasses.includes(twClass)){
            property.selectedClasses.push(twClass);
        }
        console.log('createDropDownItem---------------');
        console.log(JSON.stringify(property.selectedClasses));
    }

    function removeClassFromSelected(property, className) {
        if (selectedClasses[property]) {
            selectedClasses[property] = selectedClasses[property].filter(c => c !== className);
    
            // If no classes left, delete the property
            if (selectedClasses[property].length === 0) {
                delete selectedClasses[property];
            }
        }
    }

    function sortDropdown() {
        const dropdown = document.getElementById("dropdown"); // Dropdown container
        const items = Array.from(dropdown.children); // Convert NodeList to Array
    
        // Sort items: 'selected' ones come first
        items.sort((a, b) => {
            const aSelected = a.classList.contains("selected") ? 1 : 0;
            const bSelected = b.classList.contains("selected") ? 1 : 0;
            return bSelected - aSelected; // Move selected items to the top
        });
    
        // Re-append sorted items back to dropdown
        dropdown.innerHTML = ""; // Clear dropdown
        items.forEach(item => dropdown.appendChild(item)); // Append sorted items
    }

}
