const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
let verifyTheme = localStorage.getItem('theme')

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const lightMode = {
    bg: getStyle(html, "--bg"),
    bg2: getStyle(html, "--bg2"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#0d0d0d",
    bg2: "#181717",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}




checkbox.addEventListener('change', ({ target }) => {

    target.checked
        ? (localStorage.setItem('theme', 'dark'), changeColors(darkMode))
        : (localStorage.setItem('theme', null), changeColors(lightMode))
})

if (verifyTheme === 'dark') {
    changeColors(darkMode)
    checkbox.checked = true
}







