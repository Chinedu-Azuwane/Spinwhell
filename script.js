// Initialize the spin wheel
var theWheel = new Winwheel({
    'canvasId': 'myWheel',
    'numSegments': 4,
    'segments': [
        {'fillStyle': '#eae56f', 'text': 'User1'},
        {'fillStyle': '#89f26e', 'text': 'User2'},
        {'fillStyle': '#7de6ef', 'text': 'User3'},
        {'fillStyle': '#e7706f', 'text': 'User4'}
    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8
    }
});

// Function to spin the wheel to a specific user
function spinWheel() {
    var userName = document.getElementById('userInput').value;
    var segmentIndex = getSegmentIndex(userName);
    
    if (segmentIndex !== -1) {
        var stopAngle = (360 / theWheel.numSegments) * segmentIndex;
        theWheel.animation.stopAngle = stopAngle;
        theWheel.startAnimation();
    } else {
        alert('User not found!');
    }
}

// Get the index of the segment based on user name
function getSegmentIndex(userName) {
    var segments = theWheel.segments;
    for (var i = 0; i < segments.length; i++) {
        if (segments[i].text === userName) {
            return i;
        }
    }
    return -1; // User not found
}
