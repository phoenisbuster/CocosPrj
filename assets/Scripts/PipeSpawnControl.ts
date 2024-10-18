import { _decorator, Component, director, math, Node, random, UIRenderable, UITransform } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawnControl')
export class PipeSpawnControl extends Component {
    @property({ type: Node })
    public topPipe: Node;
    @property({ type: Node })
    public bottomPipe: Node;

    @property
    public screenHeight: number;
    @property
    public pipeHeightConfig: number;
    @property
    public birdHeight: number;
    SetPipeSize() {
        this.topPipe.getComponent(UITransform).height = (this.pipeHeightConfig/2) + (math.randomRange(0, this.pipeHeightConfig/2));
    }
    SetPipePostion() {

    }
    onLoad() {
        this.screenHeight = director.getScene().getComponent(UITransform).height;
        this.birdHeight = GameController.instace.bird.getComponent(UITransform).height;
        this.pipeHeightConfig = (this.screenHeight / 2 - this.birdHeight * 2);

        
    }

    update(deltaTime: number) {

    }
}


