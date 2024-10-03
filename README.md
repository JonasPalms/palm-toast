# Palm Toast

A simple toast notification library for your web applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Features

- Simple and easy-to-use API
- Customizable toast notifications
- Supports multiple toast notifications at once

## Installation

To install Palm Toast, run the following command in your terminal:

```bash
npm install palm-toast
```

## Usage

To use Palm Toast, import the library and create a new instance of the `Toast` class:

```javascript
import { Toast } from 'palm-toast'

const toast = new Toast()
```

You can then use the `showToast` method to display a toast notification:

```javascript
toast.showToast('Hello, world!')
```

## Customization

You can customize the appearance and behavior of the toast notifications by passing options to the `showToast` method:

```javascript
toast.showToast('Hello, world!', {
  duration: 3000, // display the toast for 3 seconds
  position: 'top-right', // display the toast in the top-right corner
  className: 'my-toast', // add a custom class to the toast element
})
```

## License

Palm Toast is licensed under the MIT License. See the [LICENSE file](LICENSE) for more information.
