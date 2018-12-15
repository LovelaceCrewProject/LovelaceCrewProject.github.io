

const maps = [
    //"maps/static_event.html",
    //"maps/static_mention.html",
    "maps/dynamic_event.html",
    "maps/dynamic_mention.html",
];


function showMap(idx) {
    const i = parseInt(idx);
    d3.select(`#map${i}`)
        .append('object')
        .attr('data', maps[i])
        .attr('width', "60%")
        .attr('height', "900")
        .attr('class', 'center-block');

    d3.select(`#button${i}`)
        .remove();
}