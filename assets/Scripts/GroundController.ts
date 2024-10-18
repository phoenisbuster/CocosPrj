import { _decorator, Canvas, Component, director, Node, UITransform, Vec3 } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;
enum EEndground {
    ground1,
    ground2,
    ground3,
}
@ccclass('GroundController')
export class GroundController extends Component {
    @property({ type: Node })
    public Ground1: Node;
    @property({ type: Node })
    public Ground2: Node;
    @property({ type: Node })
    public Ground3: Node;
    @property({ type: Number })
    public groundSpeed: number = 50;

    currentEndGround: EEndground;
    private groundWidth: number;
    private ground1Vec: Vec3;
    private ground2Vec: Vec3;
    private ground3Vec: Vec3;


    start() {
        this.groundWidth = this.Ground1.getComponent(UITransform).width;
        this.ground1Vec = new Vec3(0, 0, 0);
        this.ground2Vec = new Vec3(this.groundWidth, 0, 0);
        this.ground3Vec = new Vec3(this.groundWidth * 2, 0, 0);
        this.currentEndGround = EEndground.ground3;
        this.GroundPositionChanges();
    }

    update(deltaTime: number) {
        this.RunGround(deltaTime);
        this.CheckGroundReturn();
        this.GroundPositionChanges();

    }
    RunGround(deltaTime: number) {
        this.ground1Vec.x -= deltaTime * this.groundSpeed;
        this.ground2Vec.x -= deltaTime * this.groundSpeed;
        this.ground3Vec.x -= deltaTime * this.groundSpeed;
    }
    GroundPositionChanges() {
        this.Ground1.setPosition(this.ground1Vec);
        this.Ground2.setPosition(this.ground2Vec);
        this.Ground3.setPosition(this.ground3Vec);
    }
    CheckGroundReturn() {
        let getVec = this.GetEndGround();
        if (this.ground1Vec.x < -(0 + this.groundWidth)) {
            this.ground1Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground1;
            GameController.Instance().ground1.ReSpawnPipe();
        }
        if (this.ground2Vec.x < -(0 + this.groundWidth)) {
            this.ground2Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground2;
            GameController.Instance().ground2.ReSpawnPipe();
        }
        if (this.ground3Vec.x < -(0 + this.groundWidth)) {
            this.ground3Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground3;
            GameController.Instance().ground3.ReSpawnPipe();
        }


    }
    GetEndGround(): Vec3 {
        switch (this.currentEndGround) {
            case EEndground.ground1:
                return this.ground1Vec;
            case EEndground.ground2:
                return this.ground2Vec;
            case EEndground.ground3:
                return this.ground3Vec;
        }
    }
}


