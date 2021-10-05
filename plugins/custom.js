export default ({app}, inject) => {
    const isEmpty = array => array.length === 0;

    inject("amirFunction", isEmpty);
}