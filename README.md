# **Functions**

### **EventCards()**

<u>**Description:**</u>
This function asynchronously fetches event cards using getEventCards function and returns them as JSX elements by mapping over the events.

<u>**Parameters:**</u>
- **numOfCards**: Optional number of cards to fetch, default is 2

<u>**Usage:**</u>
To use the EventCards function, import it and call it with an optional parameter for the number of cards to fetch. It returns a Promise with JSX elements representing event cards.

### **async()**

<u>**Description:**</u>
This function performs an asynchronous operation to process the specified number of cards.

<u>**Parameters:**</u>
- **numOfCards**: Optional parameter specifying the number of cards to be processed

<u>**Usage:**</u>
To use this function, call it with the desired number of cards to process as an optional parameter. For example, async(10) will process 10 cards asynchronously.

# **Components**

### **EventCards**

<u>**Description:**</u>
The EventCards component displays a set of event cards with information about various events. Each card represents a single event with details like event title, date, location, and description.

<u>**Props:**</u>
- **events**: An array of objects representing different events to be displayed in the cards

<u>**Usage:**</u>
To use the EventCards component, pass an array of event objects as the 'events' prop. Each event object should contain properties like 'title', 'date', 'location', and 'description'.
