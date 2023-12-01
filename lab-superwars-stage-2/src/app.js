const PLAYERS = [
    'Spiderman', 'Captain America', 'Wonderwoman', 'Popcorn', 'Gemwoman',
    'Bolt', 'Antwoman', 'Mask', 'Tiger', 'Captain', 'Catwoman', 'Fish',
    'Hulk', 'Ninja', 'Black Cat', 'Volverine', 'Thor', 'Slayer', 'Vader', 'Slingo'
  ];
  
  const initPlayers = (players) => {
    let detailedPlayers = [];
  
    // Create detailed player objects with attributes
    players.forEach((playerName, index) => {
      detailedPlayers.push({
        name: playerName,
        strength: 2 + index,
        image: 'images/super-' + (index + 1) + '.png',
        type: index % 2 === 0 ? 'hero' : 'villain',
        id: index + 1,
      });
    });
  
    return detailedPlayers;
  };
  
  const getRandomStrength = () => {
    // Returns a random strength value between 1 and 100 (inclusive)
    return Math.ceil(Math.random() * 100);
  };
  
  const createPlayerElement = (playerObj) => {
    let player = document.createElement('div');
    player.classList.add('player');
  
    // Create elements for player image, name, and strength
    let image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt', '');
  
    let name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
  
    let strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
  
    // Append image, name, and strength elements to player container
    player.append(image, name, strength);
    return player;
  };
  
  const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
  
    // Filter and create player elements based on specified type
    players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(createPlayerElement(player)));
  
    return fragment.innerHTML;
  };
  
  const displayPlayers = (players) => {
    // Display players in their respective HTML sections
    document.getElementById('herosection').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villainsection').innerHTML = buildPlayers(
      players,
      'villain'
    );
  };
  
  window.onload = () => {
    // Display players when the window is loaded
    displayPlayers(initPlayers(PLAYERS));
  };
  