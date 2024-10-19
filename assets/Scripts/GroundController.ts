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

    /// bottom pipe = chiều cao màn hình / 2 sau đó "trừ" chiều cao của bottom height sau đó "trừ" (chiều cao của bird / 2) ====> là khoảng gới hạn dưới mà bird có thể bay ==> ví dụ giưới hạn là -45 thì khi bird > -45 sẽ là va chạm.
    /// top pipe tương tự như vậy nhưng là số dương
    @property
    public positionDetectCollision: number;
    @property
    public positionEndDetectCollision: number;
    start() {
        this.groundWidth = this.Ground1.getComponent(UITransform).width;
        this.ground1Vec = new Vec3(0, 0, 0);
        this.ground2Vec = new Vec3(this.groundWidth, 0, 0);
        this.ground3Vec = new Vec3(this.groundWidth * 2, 0, 0);
        this.currentEndGround = EEndground.ground3;
        this.positionDetectCollision = (GameController.Instance().canvas.getComponent(UITransform).width / 2) - (this.groundWidth / 2) + (GameController.Instance().bird.getComponent(UITransform).width);
        this.positionEndDetectCollision = this.positionDetectCollision - ((GameController.Instance().bird.getComponent(UITransform).width * 2) - 20);
        this.GroundPositionChanges();
    }

    update(deltaTime: number) {
        this.RunGround(deltaTime);
        this.CheckBirdCollisionWidthPipe();
        this.CheckGroundReturn();
        this.GroundPositionChanges();

    }
    CheckBirdCollisionWidthPipe() {
        if (this.ground1Vec.x < this.positionDetectCollision && this.ground1Vec.x > this.positionEndDetectCollision) {
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground1.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground1.bottomPipeCollision)
                director.pause();
        }
        if (this.ground2Vec.x < this.positionDetectCollision && this.ground2Vec.x > this.positionEndDetectCollision) {
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground2.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground2.bottomPipeCollision)
                director.pause();

        }
        if (this.ground3Vec.x < this.positionDetectCollision && this.ground3Vec.x > this.positionEndDetectCollision) {
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground3.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground3.bottomPipeCollision)
                director.pause();

        }
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


