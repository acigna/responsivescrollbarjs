function linBar( params ) {
    var domEl = params.el,
        height = params.height,
        svgEl = '',
        gWrapper,
        barsObj = [];

    svgEl += '<svg xmlns="http://www.w3.org/2000/svg" class="progress" viewBox="0 0 1 ' + height + '"' +
            ' preserveAspectRatio="xMinYMin slice" width="100%" height="' + height + 'px" style="background-color: #555;"><g>';
    svgEl += '';


    svgEl += '</g></svg>';

    return {
        render: function () {
            var wrapperEl = document.createElement('div');
            wrapperEl.setAttribute("class", "progress-status-bar");
            wrapperEl.innerHTML = svgEl;
            domEl.appendChild( wrapperEl );
            gWrapper = domEl.querySelector('g');
        },

        addBar: function ( params ) {
            var style = params.style,
                percentage = params.percentage,
                offset = params.offset,
                style = params.style,  
                barEl = document.createElementNS( 'http://www.w3.org/2000/svg', 'rect' );
            barEl.setAttribute( "y", "0" );
            barEl.setAttribute( "x", (offset / 100).toString() );
            barEl.setAttribute( "width", (percentage / 100).toString() );
            barEl.setAttribute( "height", "1000" );
            barEl.setAttribute( "style", Object.keys( style ).map(function ( key ) { return key + ":" + style[key]; }).join() );
            gWrapper.appendChild( barEl );
            var barObj = {el: barEl};
            barsObj.push( barObj );
            return barObj;

        }
    };

}