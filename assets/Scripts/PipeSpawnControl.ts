import { _decorator, Canvas, Component, director, math, Node, random, UITransform, Vec3 } from 'cc';
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
    public topPipeCollision: number;
    @property
    public bottomPipeCollision: number;
    @property
    public birdHeight: number;
    public SetPipeSize() {
        let tempCount = (GameController.Instance().canvas.getComponent(UITransform).height / 2) - (GameController.Instance().bird.getComponent(UITransform).height / 2);
        this.topPipe.getComponent(UITransform).height = (this.pipeHeightConfig / 2) + (math.randomRange(0, this.pipeHeightConfig / 2));
        this.topPipeCollision = (tempCount - this.topPipe.getComponent(UITransform).height);
        this.bottomPipe.getComponent(UITransform).height = (this.pipeHeightConfig / 2) + (math.randomRange(0, this.pipeHeightConfig / 2));
        this.bottomPipeCollision = -(tempCount - this.bottomPipe.getComponent(UITransform).height);
    }
    public SetPipePostion() {
        this.topPipe.setPosition(new Vec3(this.horizonPositionConfig, this.screenHeight, 0));
        this.bottomPipe.setPosition(new Vec3(this.horizonPositionConfig, 0, 0));
    }
    public ReSpawnPipe() {
        if (GameController.Instance().groundController.currentTimeCount <= 0) {
            this.topPipe.active = true;
            this.bottomPipe.active = true;
        }
        if (!this.topPipe.active || !this.bottomPipe)
            return;
        this.SetPipePostion();
        this.SetPipeSize();
    }
    public RestartPipe() {
        this.topPipe.active = false;
        this.bottomPipe.active = false;
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


