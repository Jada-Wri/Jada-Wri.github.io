$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(600,650,100,25, "red");
  createPlatform(800,550,100,25, "red");
  createBadPlatform(400,550,100,25,);
  createBadPlatform(200,450,100,25,);
  createPlatform(600,450,100,25, "red");
  createBadPlatform(1000,450,100,25);
  createBadPlatform(800,350,100,25);
  createPlatform(400,350,100,25,"red");
  createPlatform(200,250,100,25,"red");
  createBadPlatform(600,250,100,25);
  createBadPlatform(1000,250,100,25);
  createPlatform(400,150,100,25,"red");
  createBadPlatform(800,150,100,25);
  createPlatform(600,130,100,25,"red");
  createPlatform(0,690,1500,25);



    // TODO 3 - Create Collectables
  createCollectable("diamond",620,90,0,0);
  createCollectable("steve",420,300,0,0);
  createCollectable("steve",200,200,0,0);
  createCollectable("steve",620,610,0,0);



    
    // TODO 4 - Create Cannons
  createCannon("bottom",300,700);
  createCannon("bottom",500,750);
  createCannon("bottom",700,750);
  createCannon("bottom",900,700);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
