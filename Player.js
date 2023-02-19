function Player(x,y){
    this.x=x;
    this.y=y;
    this.Sz=20;
    this.speed=5;
    this.accel=0;
    this.yvel=0;
    this.gravity=0.8;
    this.falling=true;
    this.jumpHeight=9.7;
    this.hitPortal=false;
    this.respawn={
      x:this.x,
      y:this.y
    };
    this.superJump=false;
    this.update=function(blocks){
        if(keys[LEFT_ARROW]){this.accel=-this.speed;}
        if(keys[RIGHT_ARROW]){this.accel=this.speed;}
        if(keys[UP_ARROW]&&!this.falling){
            this.yvel=-this.jumpHeight;
          }
          if(this.superJump){
            this.jumpHeight=14;
          }else{
            this.jumpHeight=9.7;
          }
        if(keys[82]){
          this.x=this.respawn.x;
          this.y=this.respawn.y;
          this.yvel=0;
          for(var i=0;i<blocks.length;i++){
            blocks[i].on=false;
          }
      }
        // if(keys[UP_ARROW]&&this.falling){
          // if(this.yvel>1){
            // this.yvel-=this.jumpHeight/18;
          // }
        // }
        if(!keys[LEFT_ARROW]&&!keys[RIGHT_ARROW]){
            this.accel=0;
        }
        this.x+=this.accel;
        this.yvel+=this.gravity;
        this.collideWith(this.accel,0,blocks);
        this.falling=true;
        this.y+=this.yvel;
        this.hitPortal=false;
        this.superJump=false;
        this.collideWith(0,this.yvel,blocks);
        if(this.y>height+levelHeight){
            this.yvel=0;
            this.x=this.respawn.x;
            this.y=this.respawn.y;
        }
    };
    this.collideWith=function(xv,yv,blocks){
      for(var i=0;i<blocks.length;i++){
        var b=blocks[i];
        if(this.y+this.Sz > b.y &&
          this.y        < b.y+b.Sz &&
          this.x+this.Sz > b.x &&
          this.x        < b.x+b.Sz){
            b.on=true;
            switch(b.type1){
              case 1:
                if(yv>0) {
                  this.yvel = 0;
                  this.falling = false;
                  this.y = b.y-this.Sz;
                }
                // TOP
                if(yv<0) {
                  this.yvel = 0;
                  this.falling = true;
                  this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.accel = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.accel = 0;
                    this.x = b.x+b.Sz;
                }
              break;
              case 2:
                this.x=this.respawn.x;
                this.y=this.respawn.y;
                this.yvel=0;

              break;
              case 3:
                this.hitPortal=true;
              break;
              case 4:
                if(yv>0) {
                  this.yvel = 0;
                  this.falling = false;
                  this.y = b.y-this.Sz;
                  this.superJump=true;
                }
                // TOP
                if(yv<0) {
                  this.yvel = 0;
                  this.falling = true;
                  this.y = b.y+b.Sz;
                }
                // RIGHT
                if(xv>0) {
                    this.accel = 0;
                    this.x = b.x-this.Sz;
                }
                // LEFT
                if(xv<0) {
                    this.accel = 0;
                    this.x = b.x+b.Sz;
                }
              break;
            }

        }
      }
    };
    this.show=function(){
      switch(level){
        case 0:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 1:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 2:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 3:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 4:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 5:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 6:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 7:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 8:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 9:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 10:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 11:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 12:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 13:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 14:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 15:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 16:
          fill(128,0,128);
        noStroke();
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 17:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 18:
          fill(128,0,128);
          noStroke();
          rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 19:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 20:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
        case 21:
          noFill();
        stroke(54,54,54);
        strokeWeight(2);
        rect(this.x,this.y,this.Sz,this.Sz,5);
        break;
      }
    };
}
