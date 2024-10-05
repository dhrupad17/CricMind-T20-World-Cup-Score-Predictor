function updateTeamImage(team, elementId) {
    const imgElement = document.getElementById(elementId);
    if (team) {
        imgElement.src = `/static/images/${team.toLowerCase().replace(' ', '_')}.png`;
        imgElement.alt = team;
    } else {
        imgElement.src = '/static/images/no_team.jpg'; // Placeholder image
        imgElement.alt = 'No Team Selected';
    }
}

$(document).ready(function() {
    // Initialize with no selection
    updateTeamImage('', 'batting_team_image');
    updateTeamImage('', 'bowling_team_image');

    // Update images on team selection change
    $('#batting_team').change(function() {
        updateTeamImage(this.value, 'batting_team_image');
    });
    $('#bowling_team').change(function() {
        updateTeamImage(this.value, 'bowling_team_image');
    });
});
