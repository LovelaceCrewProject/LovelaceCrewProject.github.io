const maps = [
    //"maps/static_event.html",
    //"maps/static_mention.html",
    "./maps/dynamic_events.html",
    "./maps/dynamic_mentions.html",
];


function showMap(idx) {
    const i = parseInt(idx);
    d3.select(`#map${i}`)
        .append('object')
        .attr('data', maps[i])
        .attr('width', "60%")
        .attr('height', "900")
        .attr('class', 'center-block');

    //d3.select(`#button${i}`)
    //    .remove();
}