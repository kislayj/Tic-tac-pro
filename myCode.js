		var sketchProc=function(processingInstance){ with (processingInstance){




size(400,400);
frameRate(30);
background(255, 129, 66);
var Tile = function(x, y,opi) {
    this.x = x+20;
    this.y = y+20;
    this.open= true;
    this.width = 40;
    this.able=true;
     this.op=opi+10;
};
var state=1;
Tile.prototype.draw= function(x,y) {
    
    fill(90, 173, 189);
  rect(this.x,this.y,this.width,this.width);
    
};
Tile.prototype.drawo= function() {
    
  ellipse(this.x+20,this.y+20,20,20);
  state=0;
            this.open=false;
    
};
Tile.prototype.drawx= function() {
    fill(29, 31, 31);
    textSize(35);
  text("X",this.x+7,this.y+33);
    fill(90, 173, 189);
     state=1;
          this.open=false;
};
Tile.prototype.isUnderMouse = function(x, y) {
    return x > this.x && x < this.x + this.width  &&
        y > this.y && y < this.y + this.width;
};
Tile.prototype.boxi= function() {
    strokeWeight(4);
  stroke(87, 207, 12);
    line(this.x,this.y,this.x+120,this.y);
    line(this.x,this.y,this.x,this.y+120);
    line(this.x+120,this.y,this.x+120,this.y+120);
    line(this.x,this.y+120,this.x+120,this.y+120);
    stroke(0, 0, 0);
};
Tile.prototype.boxo= function() {
    
  stroke(255, 255, 255);
    line(this.x,this.y,this.x+120,this.y);
    line(this.x,this.y,this.x,this.y+120);
    line(this.x+120,this.y,this.x+120,this.y+120);
    line(this.x,this.y+120,this.x+120,this.y+120);
    stroke(0, 0, 0);
};
Tile.prototype.wer= function() {
    
  stroke(245, 8, 8);
    line(this.x,this.y,this.x+120,this.y);
    line(this.x,this.y,this.x,this.y+120);
    line(this.x+120,this.y,this.x+120,this.y+120);
    line(this.x,this.y+120,this.x+120,this.y+120);
    stroke(0, 0, 0);
};
strokeWeight(2);
var fin=[];
var k=0;
var p=0;
var arrx=[];
var arro=[];
var tiles =[];
for(var a=0;a<3;a++)
 {   
   for(var b=0;b<3;b++)
   { tiles[k]=[];
    for(var c=0;c<3;c++)
    {
     for(var d=0;d<3;d++)
       {  
           tiles[k].push(new Tile(120*a+40*c,120*b+40*d,p));
          p++;
       }
    } k++;
   }
 }

for(var i=0;i<9;i++)
{
    for(var j=0;j<9;j++)
    {
      tiles[i][j].draw();
    }
} //fill(242, 197, 159);

stroke(255, 255, 255);
strokeWeight(4);
line(20,20,20,380);
line(20,20,377,20);
line(380,20,380,380);
line(20,380,380,380);

line(20+120,20,20+120,380);
line(20,20+120,380,20+120);
line(380-120,20,380-120,380);
line(20,380-120,380,380-120);
strokeWeight(4);
stroke(0, 0, 0);
j=0;
var z=0;
mouseClicked = function() 
{  // tiles[][0].boxo();
    for (var i = 0; i < 9; i++)
    {   
        for(var j=0;j<9;j++)
        {
        if (tiles[i][j].isUnderMouse(mouseX, mouseY) && tiles[i][j].open && tiles[i][j].able )
        {  
           
                tiles[z][0].boxo();
            
          if(state===1)
           {
            tiles[i][j].drawo();
            tiles[i][j].op=0;
           }
         else
          {
          tiles[i][j].drawx();
          tiles[i][j].op=1;
          } 
          for(var t=0;t<9;t++)
         {
           println(tiles[i][t].op);
         }
              if(((tiles[i][0].op === tiles[i][1].op) &&                          (tiles[i][2].op===tiles[i][0].op))||                         ((tiles[i][3].op === tiles[i][4].op) &&                          (tiles[i][3].op===tiles[i][5].op))||                         ((tiles[i][6].op === tiles[i][7].op) &&                          (tiles[i][6].op===tiles[i][8].op))||
                  ((tiles[i][0].op === tiles[i][3].op) &&                          (tiles[i][0].op===tiles[i][6].op))||                         ((tiles[i][1].op === tiles[i][4].op) &&                          (tiles[i][4].op===tiles[i][7].op))||                         ((tiles[i][2].op === tiles[i][5].op) &&                          (tiles[i][2].op===tiles[i][8].op))||
                    ((tiles[i][0].op === tiles[i][4].op) &&                          (tiles[i][0].op===tiles[i][8].op))||                         ((tiles[i][2].op === tiles[i][4].op) &&                          (tiles[i][2].op===tiles[i][6].op))) 
          { fin.push(i);
           for(k=0;k<9;k++)
           {
             tiles[i][k].open=false;
           }fill(255, 255, 255);
           //rect(tiles[i][0].x,tiles[i][0].y,120,120);
           if(state===0)
            {  
               textSize(140);
               text("O",tiles[i][0].x+7,tiles[i][0].y+110);
              // tiles[i][0].wer();
               arro.push(i);
            }
           else
           { 
               textSize(140);
               text("X",tiles[i][0].x+7,tiles[i][0].y+110);
               arrx.push(i);
            } fill(90, 173, 189);
        }
          
          for(a=0;a<9;a++)
           {
             for(b=0;b<9;b++)
             {
                
                 tiles[a][b].able =true;
                
             }
           }
           z=j;
            if(fin.indexOf(j)===-1)
                {
                tiles[j][0].boxi(); 
                }
          /*  else{
                for(var w=0;w<9;w++)
                 { if(fin.indexOf(w)===-1)
                    {
                        tiles[w][0].boxi();
                    }
                 }
            }  */  
          for(a=0;a<9;a++)
           {
             for(b=0;b<9;b++)
             {
               if( fin.indexOf(j)===-1 )
               { if(a!==j)
                 {
                 tiles[a][b].able =false;
                 }
               }
               //else
               //{
               // tiles[a][b].able=true;
              // }
             }
           }
        }
        
        }
        
    }
};

draw = function() {
    arro.sort();
    for(i=0;i<arro.length;i++)
    {
      if(arro.indexOf(4)!==-1)
        {
         if((arro.indexOf(1)!==-1 && arro.indexOf(7)!==-1) ||              (arro.indexOf(3)!==-1 && arro.indexOf(5)!==-1) ||
            (arro.indexOf(0)!==-1 && arro.indexOf(8)!==-1) ||              (arro.indexOf(2)!==-1 && arro.indexOf(6)!==-1))
           {background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("O WIN",60,233);
           }
           
        }
        if(arro.indexOf(0)!==-1)
        {
         if((arro.indexOf(1)!==-1 && arro.indexOf(2)!==-1) ||              (arro.indexOf(3)!==-1 && arro.indexOf(6)!==-1))
           {
            background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("O WIN",60,233);
           }
           
        }
        if(arro.indexOf(8)!==-1)
        {
         if((arro.indexOf(6)!==-1 && arro.indexOf(7)!==-1) ||              (arro.indexOf(2)!==-1 && arro.indexOf(5)!==-1))
           {
            background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("O WIN",60,233);
           }
           
        }
    }
    arrx.sort();
    for(j=0;j<arrx.length;j++)
    {
       if(arrx.indexOf(4)!==-1)
        {
         if((arrx.indexOf(1)!==-1 && arrx.indexOf(7)!==-1) ||              (arrx.indexOf(3)!==-1 && arrx.indexOf(5)!==-1) ||
            (arrx.indexOf(0)!==-1 && arrx.indexOf(8)!==-1) ||              (arrx.indexOf(2)!==-1 && arrx.indexOf(6)!==-1))
           {
            background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("X WIN",60,233);
           }
           
        }
        if(arrx.indexOf(0)!==-1)
        {
         if((arrx.indexOf(1)!==-1 && arrx.indexOf(2)!==-1) ||              (arrx.indexOf(3)!==-1 && arrx.indexOf(6)!==-1))
           {
            background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("X WIN",60,233);
           }
           
        }
        if(arrx.indexOf(8)!==-1)
        {
         if((arrx.indexOf(6)!==-1 && arrx.indexOf(7)!==-1) ||              (arrx.indexOf(2)!==-1 && arrx.indexOf(5)!==-1))
           {
            background(78, 224, 102);
            textSize(100);
            fill(186, 26, 26);
            text("X WIN",60,233);
           }
           
        }
    }
    
};







}};