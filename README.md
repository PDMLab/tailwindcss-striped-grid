# tailwindcss-striped-grid
A Tailwind CSS plugin to create striped rows for grids

## Install

Requires **Tailwind v3.0** or higher.

1. Install the plugin:

```bash
npm install tailwindcss-striped-grid --save-dev
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  //...
  plugins: [
    require('tailwindcss-striped-grid'),
  ]
}
```

3. Configure your theme:

```js
// tailwind.config.js
module.exports ={
    //...
    theme: {
        gridStriped: {
            color: 'gray',
            variant: '200'
        }
    }
}
```

## Usage

### Creating a grid with alternating rows using `grid-cols-<number>`

```html
<div class="grid grid-cols-3">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
    
    <div class="striped">
        <div>Row 1 - Col 1</div>
        <div>Row 1 - Col 2</div>
        <div>Row 1 - Col 3</div>

        <div>Row 2 - Col 1</div>
        <div>Row 2 - Col 2</div>
        <div>Row 2 - Col 3</div>

        <div>Row 3 - Col 1</div>
        <div>Row 3 - Col 2</div>
        <div>Row 3 - Col 3</div>
    </div>
</div>
```

The `div` with the `striped` class is a wrapper which is using `display:contents`, hence it's box is not rendered.

### Creating a grid with alternating rows using `grid-cols-[<numbers>]`

```html
<div class="grid grid-cols-[5em_7em_4em]">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
    
    <div class="striped-3">
        <div>Row 1 - Col 1</div>
        <div>Row 1 - Col 2</div>
        <div>Row 1 - Col 3</div>

        <div>Row 2 - Col 1</div>
        <div>Row 2 - Col 2</div>
        <div>Row 2 - Col 3</div>

        <div>Row 3 - Col 1</div>
        <div>Row 3 - Col 2</div>
        <div>Row 3 - Col 3</div>
    </div>
</div>
```

The wrapper `<div>` now has to specify the number of columns.

Both options support the default grid with up to 12 columns.

## Want to help?

This project is just getting off the ground and could use some help with cleaning things up and refactoring.

If you want to contribute - we'd love it! Just open an issue to work against so you get full credit for your fork. You can open the issue first so we can discuss and you can work your fork as we go along.

If you see a bug, please be so kind as to show how it's failing, and we'll do our best to get it fixed quickly.

Before sending a PR, please [create an issue](https://github.com/PDMLab/tailwindcss-striped-grid/issues/new) to introduce your idea and have a reference for your PR.

Also please add tests and make sure to run `yarn lint`.

### Discussions

If you want to discuss an `tailwindcss-striped-grid` issue or PR in more detail, feel free to [start a discussion](https://github.com/PDMLab/tailwindcss-striped-grid/discussions).

## License

MIT License

Copyright (c) PDMLab

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
