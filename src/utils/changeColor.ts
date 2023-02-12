export default function ({color}:{color:string}): void {
    document.documentElement.style.setProperty('--bodyColor', color)
}