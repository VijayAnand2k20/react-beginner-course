export default function Button(props) {
    const clickHandler = () => {
        props.nameRef.current.focus();
        props.nameRef.current.value = 'Hello';
    }
    return (
        <button onClick={clickHandler}>Focus</button>
    );
}