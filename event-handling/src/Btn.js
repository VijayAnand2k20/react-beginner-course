// export default function Btn() {
//     const clickHandler = () => {
//         console.log('Button clicked');
//     }
//     return (
//         <button onClick={clickHandler}>Click me</button>
//     );
// }

export default function Btn() {
    const clickHandler = () => {
        console.log('Mouse Hovered!');
    }
    return (
        <button onMouseOver={clickHandler}>Click me</button>
    );
}