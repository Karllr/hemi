function Block(x,y,type1,type2,type3,type4){
    this.x=x;
    this.y=y;
    this.designx=this.x+100;
    this.designy=this.y+50;
    this.type1=type1;
    this.type2=type2;
    this.type3=type3;
    this.type4=type4;
    this.Sz=50;
    this.BlocktoLeft=false;
    this.BlocktoRight=false;
    this.BlockAbove=false;
    this.BlockBelow=false;
    this.on=false;
    this.anticipatedy=this.y;
    this.anticipatedx=this.x;
    this.moving=false;
    this.active=false;
    this.touched=false;
    this.design3picker=round(random(1,2.25));
    this.updateTexture=function(blocks){
        
            for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(dist(this.x,this.y,b.x,b.y)===50){
                if(this.type1===b.type1){
                        if(this.x-b.x===-50){
                            this.BlocktoRight=true;
                        }
                        if(this.x-b.x===50){
                            this.BlocktoLeft=true;
                        }
                        if(this.y-b.y===50){
                            this.BlockAbove=true;
                        }
                        if(this.y-b.y===-50){
                            this.BlockBelow=true;
                        }
                        if(this.touched){
                            b.touched=true;
                        }
                }
                if(this.on){
                    b.on=true;
                }
                if(this.moving){
                    b.moving=true;
                }
                }
            //Cornering
            switch(this.type2){
                case 1:
                    if(!this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=1;
                    }
                    if(!this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=2;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=3;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=4;
                    }
                    //Pillaring
                    if(!this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                            this.type3=3;
                            this.type4=1;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=3;
                        this.type4=2;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=3;
                        this.type4=3;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3;
                        this.type4=4;
                    }
                    //Miscellaneous
                    //All around and Betweening
                    if(this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=4;
                    }
                    if(!this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                    }
                    //Three Waying
                    if(!this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                    }
                    if(this.BlockAbove&&!this.BlockBelow&&this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=4;
                    }
                    if(this.BlockAbove&&this.BlockBelow&&this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=4;
                    }
                break;  
                case 2:
                    if(this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=1;
                    }
                    if(!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=2;
                    }
                    if(this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3;
                        this.type4=1;
                    }
                break; 
                case 3:
                    if(this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3; 
                     }
                     if(!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=1; 
                     }
                     if(this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=2; 
                     }
                break; 
                case 4:
                    if(this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=3; 
                     }
                     if(!this.BlocktoLeft&&this.BlocktoRight){
                        this.type3=2;
                        this.type4=1; 
                     }
                     if(this.BlocktoLeft&&!this.BlocktoRight){
                        this.type3=2;
                        this.type4=2; 
                     }
                break; 
            }
            
            
        }
        
    
};
this.update=function(player,blocks){
    if(this.type2===3){
        this.designy=this.y;
    }
    if(this.type2!==3){
        this.designx=this.x;
    }
    //if(this.type1!==3){
        switch(this.type2){
            case 1:
                if(this.touched&&!this.on){
                    blocksTouched++;
                }
                if(dist(player.x,0,this.x,0)<250){
                    this.moving=true;
                }
                if(this.moving){
                    this.designy=lerp(this.designy,this.anticipatedy,0.05)
                }
                if(dist(this.designy,0,this.anticipatedy,0)<1){
                    this.designy=this.anticipatedy;
                    this.moving=false;
                }
            break;
            case 2:
                if(this.touched&&!this.on){
                    blocksTouched++;
                }
                if(dist(player.x,0,this.x,0)<250){
                    this.moving=true;
                }
                if(this.moving){
                    this.designy=lerp(this.designy,this.anticipatedy,0.05)
                }
                if(dist(this.designy,0,this.anticipatedy,0)<1){
                    this.designy=this.anticipatedy;
                    this.moving=false;
                }
            break;
            case 3:
                if(this.touched&&!this.on){
                    blocksTouched++;
                }
                if(dist(player.x,0,this.x,0)<250){
                    this.moving=true;
                }
                if(this.moving){
                    this.designx=lerp(this.designx,this.anticipatedx,0.05)
                }
                if(dist(this.designx,0,this.anticipatedx,0)<1){
                    this.designx=this.anticipatedx;
                    this.moving=false;
                }
            break;
        }
        
    };
    this.show=function(){
        //Type 1 will show which kind of block it is. Normal block, Death Block...
        switch(this.type1){
            case 1:
                //Normal Block
                //Type 2 will show which design it is in. For example, the first part is round, then the other is trapezoidal
                switch(this.type2){
                    case 1:
                        //First Part
                        //Type 3 explains which kind of block it is for the purpose of connective textures
                        switch(this.type3){
                            case 1:
                                //Self
                                if(this.on){
                                    fill(216, 200, 227);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                            break;
                            case 2:
                                //Corner
                                if(this.on){
                                    fill(216, 200, 227);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                //Finally, type 4 explains what rotation of the object you will see for the purpose of connective textures
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,0,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,0,20);
                                    break;
                                }
                            break;
                            case 3:
                                //Pillar
                                if(this.on){
                                    fill(216, 200, 227);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,20,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,20,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,20);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,20);
                                    break;
                                }
                            break;
                            case 4:
                                //Filler
                                if(this.on){
                                    fill(216, 200, 227);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                rect(this.designx,this.designy,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 2:
                        //Second Part
                        switch(this.type3){
                            case 1:
                                //Selfing
                                strokeWeight(5);
                                stroke(54,54,54)
                                strokeCap(PROJECT);
                                noFill();
                                triangle(this.designx,this.designy,this.designx+this.Sz,this.designy,this.designx,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                beginShape();
                                vertex(this.designx,this.designy+this.Sz+10);
                                vertex(this.designx+this.Sz,this.designy+10);
                                vertex(this.designx+this.Sz,height);
                                vertex(this.designx,height);
                                endShape(CLOSE);
                            break;
                            case 2:
                                //Ending
                                strokeWeight(5);
                                stroke(54,54,54)
                                strokeCap(PROJECT);
                                switch(this.type4){
                                    case 1:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,this.designy+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                    case 2:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+10);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                strokeWeight(5);
                                stroke(54,54,54)
                                strokeCap(PROJECT);
                                line(this.designx,this.designy,this.designx+this.Sz,this.designy);
                                line(this.designx,this.designy+this.Sz,this.designx+this.Sz,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                rect(this.designx,this.designy+this.Sz+10,this.Sz,height);
                            break;
                        }
                    break;
                    case 3:
                        switch(this.type3){
                            case 1:
                                //Self
                                if(this.design3picker===1){
                                    fill(255, 198, 99);
                                }
                                if(this.design3picker===2){
                                    fill(27, 29, 36);
                                }
                                noStroke();
                                rect(this.designx,this.designy,this.Sz,this.Sz,5,5,5,5)
                            break;
                            case 2:
                                //Siding
                                if(this.design3picker===1){
                                    fill(255, 198, 99);
                                }
                                if(this.design3picker===2){
                                    fill(27, 29, 36);
                                }
                                noStroke();
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,5,0,0,5);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,5,5,0);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                if(this.design3picker===1){
                                    fill(255, 198, 99);
                                }
                                if(this.design3picker===2){
                                    fill(27, 29, 36);
                                }
                                noStroke();
                                rect(this.designx,this.designy,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 4:
                        switch(this.type3){
                            case 1:
                                //Self
                                fill(0);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz,20,0,20,0);
                            break;
                            case 2:
                                //Corner
                                fill(0);
                                noStroke();
                                switch(this.type4){
                                    case 1:
                                        rect(this.x,this.y,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.x,this.y,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                fill(0);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                }
            break;
            case 2:
                //Death Block
                switch(this.type2){
                    case 1:
                        switch(this.type3){
                            case 1:
                                //Self
                                if(this.on){
                                    fill(233, 69, 96);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                            break;
                            case 2:
                                //Corner
                                if(this.on){
                                    fill(233, 69, 96);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                //Finally, type 4 explains what rotation of the object you will see for the purpose of connective textures
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,0,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,0,20);
                                    break;
                                }
                            break;
                            case 3:
                                //Pillar
                                if(this.on){
                                    fill(233, 69, 96);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,20,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,20,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,20);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,20);
                                    break;
                                }
                            break;
                            case 4:
                                //Filler
                                if(this.on){
                                    fill(233, 69, 96);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                rect(this.designx,this.designy,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    break;
                    case 2:
                        switch(this.type3){
                            case 1:
                                //Selfing
                                strokeWeight(5);
                                stroke(235,69,95);
                                strokeCap(PROJECT);
                                noFill();
                                triangle(this.designx,this.designy,this.designx+this.Sz,this.designy,this.designx,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                beginShape();
                                vertex(this.designx,this.designy+this.Sz+10);
                                vertex(this.designx+this.Sz,this.designy+10);
                                vertex(this.designx+this.Sz,height);
                                vertex(this.designx,height);
                                endShape(CLOSE);
                            break;
                            case 2:
                                //Ending
                                strokeWeight(5);
                                stroke(235,69,95);
                                strokeCap(PROJECT);
                                switch(this.type4){
                                    case 1:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,this.designy+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                    case 2:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+10);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                strokeWeight(5);
                                stroke(235,69,95);
                                strokeCap(PROJECT);
                                line(this.designx,this.designy,this.designx+this.Sz,this.designy);
                                line(this.designx,this.designy+this.Sz,this.designx+this.Sz,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                rect(this.designx,this.designy+this.Sz+10,this.Sz,height);
                            break;
                        }
                    break;
                    case 4:
                        switch(this.type3){
                            case 1:
                                //Self
                                fill(255,0,99);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz,20,0,20,0);
                            break;
                            case 2:
                                //Corner
                                fill(255,0,99);
                                noStroke();
                                switch(this.type4){
                                    case 1:
                                        rect(this.x,this.y,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.x,this.y,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                fill(255,0,99);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                }
            break;
            case 3:
                //Portal to next Level
                noStroke();
                fill(255, 212, 240);
                rect(this.designx,this.designy,this.Sz,this.Sz,10,10,10,10);
            break;
            case 4:
                //Jumpy block
                switch(this.type2){
                    case 1:
                        switch(this.type3){
                            case 1:
                                //Self
                                if(this.on){
                                    fill(255, 255, 208);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                    rect(this.designx,this.designy,this.Sz,this.Sz,20,20,20,20);
                                }
                            break;
                            case 2:
                                //Corner
                                if(this.on){
                                    fill(255, 255, 208);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                //Finally, type 4 explains what rotation of the object you will see for the purpose of connective textures
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,0,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,0,20);
                                    break;
                                }
                            break;
                            case 3:
                                //Pillar
                                if(this.on){
                                    fill(255, 255, 208);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                switch(this.type4){
                                    case 1:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,20,0,0);
                                    break;
                                    case 2:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,20,20,0);
                                    break;
                                    case 3:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,0,0,20,20);
                                    break;
                                    case 4:
                                        rect(this.designx,this.designy,this.Sz,this.Sz,20,0,0,20);
                                    break;
                                }
                            break;
                            case 4:
                                //Filler
                                if(this.on){
                                    fill(255, 255, 208);
                                    noStroke();
                                }
                                if(!this.on){
                                    fill(216, 200, 227,100);
                                    noStroke();
                                }
                                rect(this.designx,this.designy,this.Sz,this.Sz);
                            break;
                        }
                    break;
                    case 2:
                        switch(this.type3){
                            case 1:
                                //Selfing
                                strokeWeight(5);
                                stroke(241,247,181)
                                strokeCap(PROJECT);
                                noFill();
                                triangle(this.designx,this.designy,this.designx+this.Sz,this.designy,this.designx,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                beginShape();
                                vertex(this.designx,this.designy+this.Sz+10);
                                vertex(this.designx+this.Sz,this.designy+10);
                                vertex(this.designx+this.Sz,height);
                                vertex(this.designx,height);
                                endShape(CLOSE);
                            break;
                            case 2:
                                //Ending
                                strokeWeight(5);
                                stroke(241,247,181)
                                strokeCap(PROJECT);
                                switch(this.type4){
                                    case 1:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,this.designy+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                    case 2:
                                        noFill();
                                        beginShape();
                                        vertex(this.designx+this.Sz,this.designy);
                                        vertex(this.designx,this.designy);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz);
                                        endShape();
                                        fill(0,0,0,30);
                                        noStroke();
                                        beginShape();
                                        vertex(this.designx,this.designy+10);
                                        vertex(this.designx+this.Sz,this.designy+this.Sz+10);
                                        vertex(this.designx+this.Sz,height);
                                        vertex(this.designx,height);
                                        endShape(CLOSE);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                strokeWeight(5);
                                stroke(241,247,181)
                                strokeCap(PROJECT);
                                line(this.designx,this.designy,this.designx+this.Sz,this.designy);
                                line(this.designx,this.designy+this.Sz,this.designx+this.Sz,this.designy+this.Sz);
                                fill(0,0,0,30);
                                noStroke();
                                rect(this.designx,this.designy+this.Sz+10,this.Sz,height);
                            break;
                        }
                    break;
                    case 4:
                        switch(this.type3){
                            case 1:
                                //Self
                                fill(255,233,177);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz,20,0,20,0);
                            break;
                            case 2:
                                //Corner
                                fill(255,233,177);
                                noStroke();
                                switch(this.type4){
                                    case 1:
                                        rect(this.x,this.y,this.Sz,this.Sz,20,0,0,0);
                                    break;
                                    case 2:
                                        rect(this.x,this.y,this.Sz,this.Sz,0,0,20,0);
                                    break;
                                }
                            break;
                            case 3:
                                //Filler
                                fill(255,233,177);
                                noStroke();
                                rect(this.x,this.y,this.Sz,this.Sz);
                            break;
                        }
                    break;
                }
            break;
            
        }
    };
}