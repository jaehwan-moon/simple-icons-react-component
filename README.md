# Simple Icons React Component

React component for icons from [SimpleIcons.org](https://simpleicons.org)


## Install

```js
$ npm install simple-icons-react-component
```
or 
```js
$ yarn add simple-icons-react-component
```

## Usage

```js
import SimpleIcons from 'simple-icons-react-component';

function ReactIcon() {
  return <SimpleIcons name="React" />;
}

function BlackReactIcon() {
  return <SimpleIcons name="React" color="black" />;
}
```

## Props

* `name`(required) : The name of icons shown at [SimpleIcons.org](https://simpleicons.org). The name has to be matched exactly and it is case-sensitive. Otherwise, it will return `null`.
* `color`(optional) : Color of an icon. It needs to be valid for CSS color. If it is not set, it will fall back to the default color.
