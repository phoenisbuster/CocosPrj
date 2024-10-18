import { _decorator, Canvas, Component, director, math, Node, random, UIRenderable, UITransform, Vec3 } from 'cc';
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
    private horizonPositionConfig: number;

    @property
    public birdHeight: number;
    public SetPipeSize() {
        this.topPipe.getComponent(UITransform).height = (this.pipeHeightConfig / 2) + (math.randomRange(0, this.pipeHeightConfig / 2));
        this.bottomPipe.getComponent(UITransform).height = (this.pipeHeightConfig / 2) + (math.randomRange(0, this.pipeHeightConfig / 2));
    }
    public SetPipePostion() {
        this.topPipe.setPosition(new Vec3(this.horizonPositionConfig, this.screenHeight, 0));
        this.bottomPipe.setPosition(new Vec3(this.horizonPositionConfig, 0, 0));
    }
    public ReSpawnPipe() {
        this.SetPipePostion();
        this.SetPipeSize();
    }
    start() {
        this.screenHeight = GameController.Instance().canvas.getComponent(UITransform).height;
        this.birdHeight = GameController.Instance().bird.getComponent(UITransform).height;
        this.pipeHeightConfig = (this.screenHeight / 2 - this.birdHeight);
        this.horizonPositionConfig = this.node.getComponent(UITransform).width / 2;

        this.SetPipeSize();
        this.SetPipePostion();
    }

}


