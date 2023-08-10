/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

function buildAssertionMessage(elementSelector, reverse, aspect) {
    return !reverse ? `Element <${elementSelector}> is not ${aspect}.` : `Element <${elementSelector}> is ${aspect}.`;
  }

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    /**
   * Clears the given element (input or textarea).
   * @param {element} element
   */
  clear(element) {
    this.waitForEnabled(element).clearValue();
  }
  /**
   * Clicks on the given element.
   * @param {element} element
   * @param {number} delay: Adds a delay after clicking on the element
   */


  click(element, delay = 0) {
    this.waitForClickable(element).click();
    browser.pause(delay);
  }
  /**
   * Clicks on the given element without checking if element is clickeable.
   * @param {element} element
   * @param {number} delay: Adds a delay after clicking on the element
   */


  directClick(element, delay = 0) {
    element.click();
    browser.pause(delay);
  }
  /**
   * Clicks on the given element and Send a sequence of key strokes to an element(clears value before).
   * @param {element} element
   * @param {string} text
   * @param {number} delay: Adds a delay after clicking on the element
   * @param {boolean} enterKey
   */


  clickAndType(element, text, delay = 0, enterKey = false) {
    this.click(element, delay);
    this.type(element, text, enterKey);
  }
  /**
   * Gets the specified attribute from the given element.
   * @param {element} element
   * @param {string} attributeName
   * @return {string} Attribute value
   */


  getAttribute(element, attributeName) {
    return this.waitForExist(element).getAttribute(attributeName);
  }
  /**
   * Gets the text from the given element.
   * @param {element} element
   * @return {string} text of element
   */


  getText(element) {
    return this.waitForExist(element).getText();
  }
  /**
   * Gets the value from the given element.
   * @param {element} element
   * @return {string} Value of element.
   */


  getValue(element) {
    return this.waitForExist(element).getValue();
  }
  /**
   * Returns true if the given element is clickable
   * or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isClickable(element) {
    return this.waitForClickable(element).isClickable();
  }
  /**
   * Returns true if the given element is displayed or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isDisplayed(element) {
    return this.waitForDisplayed(element).isDisplayed();
  }
  /**
   * Returns true if the given element is enabled or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isEnabled(element) {
    return this.waitForEnabled(element).isEnabled();
  }
  /**
   * Returns true if the given element is existing or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isExisting(element) {
    return this.waitForExist(element).isExisting();
  }
  /**
   * Returns true if the given element is focused or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isFocused(element) {
    return this.waitForDisplayed(element).isFocused();
  }
  /**
   * Returns true if the given element is selected or false otherwise.
   * @param {element} element
   * @return {boolean}
   */


  isSelected(element) {
    return this.waitForDisplayed(element).isSelected();
  }
  /**
   * Moves cursor to the given element position.
   * @param {element} element
   * @param {integer} xOffset
   * @param {nteger} yOffset
   */


  moveToLocation(element, xOffset, yOffset) {
    element.moveTo(xOffset, yOffset);
  }
  /**
   * Scroll page/screen to the given element.
   * @param {element} element
   */


  scrollToElement(element) {
    element.scrollIntoView();
  }
  /**
   * Select option from the given element with a specific value.
   * @param {element} element
   * @param {string} attribute
   * @param {string} value
   */


  selectByAttribute(element, attribute, value) {
    this.waitForEnabled(element).selectByAttribute(attribute, value);
  }
  /**
   * Select option from the given element with a specific index.
   * @param {element} element
   * @param {integer} index
   */


  selectByIndex(element, index) {
    this.waitForEnabled(element).selectByIndex(index);
  }
  /**
   * Select option from the given element with displayed text matching the argument.
   * @param {element} element
   * @param {string} text
   */


  selectByText(element, text) {
    this.waitForEnabled(element).selectByVisibleText(text);
  }
  /**
   * Send a sequence of key strokes to an element(clears value before)
   * @param {element} element
   * @param {string} text
   * @param {boolean} enterKey
   */


  type(element, text, enterKey = false) {
    this.waitForEnabled(element).setValue(text);

    if (enterKey) {
      browser.keys('\uE007');
    }

    // if (browser.config.hideKeyboardWeb) {
    //   driver.hideKeyboard();
    // }
  }
  /**
   * Wait for the given element for the provided amount of milliseconds to be clickable or not clickable.
   * @param {element} element
   * @param {boolean} reverse
   * @return {element}
   */


  waitForClickable(element, reverse = false) {
    const msg = buildAssertionMessage(element.selector, reverse, 'clickable');
    element.waitForClickable(undefined, undefined, reverse, msg, undefined);
    return element;
  }
  /**
   * Wait for the given element for the provided amount of milliseconds to be displayed or not
   * displayed.
   * @param {element} element
   * @param {boolean} reverse
   * @return {element}
   */


  waitForDisplayed(element, reverse = false) {
    const msg = buildAssertionMessage(element.selector, reverse, 'displayed');
    element.waitForDisplayed(undefined, reverse, msg);
    return element;
  }
  /**
   * Wait for the given element for the provided amount of milliseconds to be enabled or
   * disabled.
   * @param {element} element
   * @param {boolean} reverse
   * @return {element}
   */


  waitForEnabled(element, reverse = false) {
    const msg = buildAssertionMessage(element.selector, reverse, 'enabled');
    element.waitForEnabled(undefined, reverse, msg);
    return element;
  }
  /**
   * Wait for the given element for the provided amount of milliseconds to be exist or not exist.
   * @param {element} element
   * @param {boolean} reverse
   * @return {element}
   */


  waitForExist(element, reverse = false) {
    const msg = buildAssertionMessage(element.selector, reverse, 'present');
    element.waitForExist(undefined, reverse, msg);
    return element;
  }
  /**
   * Wait for the given element has the expected text
   * @param {element} element
   * @param {text} text
   * @param {boolean} reverse
   * @return {element}
   */


//   waitForText(element, text, reverse = false) {
//     const msg = buildAssertionMessage(element.selector, reverse, 'text_present');
//     this.waitUntil(() => text === this.getText(element) || text === this.getValue(element), browser.config.mediumTimeout, msg, browser.config.defaultInterval);
//   }
  /**
   * Expects a condition and waits until that condition is fulfilled with a truthy value.
   * @param {Function} condition
   * @param {integer} timeout
   * @param {string} timeoutMsg
   * @param {integer} interval
   * @return {Promise}
   */


//   waitUntil(condition, timeout, timeoutMsg, interval) {
//     try {
//       browser.waitUntil(condition, timeout, timeoutMsg, interval);
//     } catch {
//       throw "An ERROR occurred waiting until condition to be successfully completed for element - '" + condition + "'";
//     }
//   }
  /**
   * Sends a sequence of characters one by one with delay and selects the first option
   * @param {element} element
   * @param {string} text
   * @param {boolean} isMobile
   */


//   typeAutoCompleteText(element, text, isMobile = false) {
//     browser.pause(browser.config.lowTimeout);
//     element.setValue(text);
//     browser.pause(browser.config.lowTimeout);

//     if (!isMobile) {
//       browser.keys('\uE015');
//       browser.keys('\uE007');
//     }
//   }
}
