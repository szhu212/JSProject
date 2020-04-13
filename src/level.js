import { myCount, _overlap, CONSTANTS } from "./util"
import { LEVELS, colors } from "./util"

export default class Level {

    constructor(dimensions, currentLevel){
        this.dimensions = dimensions;
        this.level = JSON.parse(JSON.stringify(LEVELS))[currentLevel];
        this.currentLevel = currentLevel;
        // this.bricks = [];
        this.bricks = {};
        this.targetLength = 10;
        this.targets = {};
        this.numTargets = 0;
        this.color = '0,92,175';
        // debugger
    };
 
    drawLevel(ctx, player) {
        const wallWidth = this.dimensions.width / this.level[0].length
        const wallHeight = this.dimensions.height / this.level.length
        // debugger
        let numBricks = myCount(this.level.flat(), 1)
        this.numTargets = myCount(this.level.flat(), 2)
        // console.log("Level")
        // console.log(LEVELS[0])
        // ctx.save()
        for(let row = 0; row < this.level.length; row ++){
            for(let col= 0; col < this.level[0].length; col++){
                let leftStart = col * wallWidth;
                let upStart = row * wallHeight
                
                if(this.level[row][col] === 1){
                    // debugger
                    // const image = document.getElementById('ice-image');
                    const image = new Image();
                    image.src = './assets/brick.png';
                    // debugger
                    image.onload = function () {
                        ctx.drawImage(image, leftStart, upStart, wallWidth, wallHeight);
                    }
                    ctx.drawImage(image, leftStart, upStart, wallWidth, wallHeight);
                   this.bricks[[row, col]] = {left : leftStart, top:upStart, right : (leftStart + wallWidth), bottom : (upStart + wallHeight)}
                }
                else if(this.level[row][col] === 2){
                    // debugger
                    if(col === 0) {
                        leftStart += CONSTANTS.BOARDER_WIDTH
                    }
                    if(row === this.level.length){
                        upStart -= CONSTANTS.BOARDER_WIDTH
                    }
                    let targetColor
                    // debugger
                    let pos = row + ',' + col
                    if (Object.keys(this.targets).includes(pos)){
                        targetColor = this.targets[[row,col]]
                    } else {
                        targetColor = this.randomColor()
                    }
                    // ctx.shadowColor = 'white';
                    // ctx.shadowBlur = 5
                    ctx.fillStyle = `rgb(${targetColor})`
                    // debugger 
                    ctx.fillRect(leftStart, upStart, this.targetLength, this.targetLength)
                    // ctx.lineWidth = 1;
                    // ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
                    // ctx.strokeRect(leftStart, upStart, this.targetLength, this.targetLength)
                    // ctx.restore()
                    let currentTarget = {left : leftStart, top:upStart, right : (leftStart + this.targetLength), bottom : (upStart + this.targetLength), color: targetColor}
                    this.targets[[row, col]] = targetColor
                    // if (this.targets.length > this.numTargets){
                    //     this.targets = this.targets.slice(1)
                    // }
                    if(_overlap(player.bounds(), currentTarget)){
                        // debugger
                        this.level[row][col] = 0
                        this.color = currentTarget.color
                        const gamePage = document.getElementById('game-page')
                        // gamePage.style.transition = 'background-color 1s ease-in-out;'
                        gamePage.style.backgroundColor = `rgba(${this.color}, 0.6)`
                    }
                }
            }
        }
        // debugger
    }

    drawBackground(ctx){
        // debugger
        ctx.fillStyle = "rgba(255,255,255,0.4)"
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        // ctx.fillStyle = `rgba(${this.color}, 0.2)`;
        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
        
    }

    randomColor(){
        let num = Math.floor(Math.random() * 15)
        return colors[num]
    }

    animate(ctx, player) {
        this.drawBackground(ctx);
        this.drawLevel(ctx, player);    
    }
   

}