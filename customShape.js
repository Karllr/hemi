function drawHexagon(centerX, centerY, radius, numSides,rotation){
    beginShape();
    for(var a = rotation; a < TAU+rotation; a+=(TAU)/numSides){
      var x = centerX + radius * cos(a);
      var y = centerY + radius * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
  }