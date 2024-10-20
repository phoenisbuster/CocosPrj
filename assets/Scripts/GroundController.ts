import { _decorator, Canvas, Component, Details, director, Game, Node, UITransform, Vec3 } from 'cc';
import { GameController } from './GameController';
import { EventTarget } from 'cc';
const { ccclass, property } = _decorator;
enum EEndground {
    none,
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
    @property
    public currentTimeCount: number = 0;
    @property
    public lastGroundSccoreCheck: EEndground = EEndground.none;
    @property
    public currentGroundSccoreCheck: EEndground = EEndground.none;
    start() {
        this.RestartGround();
    }
    public RestartGround() {
        this.groundWidth = this.Ground1.getComponent(UITransform).width;
        this.ground1Vec = new Vec3(0, 0, 0);
        this.ground2Vec = new Vec3(this.groundWidth, 0, 0);
        this.ground3Vec = new Vec3(this.groundWidth * 2, 0, 0);
        this.currentEndGround = EEndground.ground3;
        this.positionDetectCollision = (GameController.Instance().canvas.getComponent(UITransform).width / 2) - (this.groundWidth / 2) + (GameController.Instance().bird.getComponent(UITransform).width);
        this.positionEndDetectCollision = this.positionDetectCollision - ((GameController.Instance().bird.getComponent(UITransform).width * 2) - 20);
        this.GroundPositionChanges();
        this.currentTimeCount = GameController.Instance().timeCountStartGame;

    }
    update(deltaTime: number) {
        if(!GameController.Instance().isStartGame)
            return;
        this.RunGround(deltaTime);
        if (this.currentTimeCount >= 0) {
            this.currentTimeCount -= deltaTime;
        }
        else {
            this.CheckBirdCollisionWidthPipe();
        }
        this.CheckScore();
        this.CheckGroundReturn();
        this.GroundPositionChanges();

    }
    CheckScore() {
        if (this.ground1Vec.x < this.positionDetectCollision - GameController.Instance().bird.getComponent(UITransform).width && this.ground1Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground1) {
            if (!GameController.Instance().ground1.topPipe.active)
                return;
            this.currentGroundSccoreCheck = EEndground.ground1;
            this.PlusSocre();
        }
        if (this.ground2Vec.x < this.positionDetectCollision - GameController.Instance().bird.getComponent(UITransform).width && this.ground2Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground2) {
            if (!GameController.Instance().ground2.topPipe.active)
                return;
            this.currentGroundSccoreCheck = EEndground.ground2;
            this.PlusSocre();
        }
        if (this.ground3Vec.x < this.positionDetectCollision - GameController.Instance().bird.getComponent(UITransform).width && this.ground3Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground3) {
            if (!GameController.Instance().ground3.topPipe.active)
                return;
            this.currentGroundSccoreCheck = EEndground.ground3;
            this.PlusSocre();
        }
    }
    CheckBirdCollisionWidthPipe() {
        if (this.ground1Vec.x < this.positionDetectCollision && this.ground1Vec.x > this.positionEndDetectCollision) {
            if (!GameController.Instance().ground1.topPipe.active)
                return;
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground1.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground1.bottomPipeCollision)
                GameController.Instance().GameOver();
        }

        if (this.ground2Vec.x < this.positionDetectCollision && this.ground2Vec.x > this.positionEndDetectCollision) {
            if (!GameController.Instance().ground2.topPipe.active)
                return;
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground2.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground2.bottomPipeCollision)
                GameController.Instance().GameOver();
        }

        if (this.ground3Vec.x < this.positionDetectCollision && this.ground3Vec.x > this.positionEndDetectCollision) {
            if (!GameController.Instance().ground3.topPipe.active)
                return;
            let currentBirdPosition = GameController.Instance().bird.node.position;
            if (currentBirdPosition.y > GameController.Instance().ground3.topPipeCollision || currentBirdPosition.y < GameController.Instance().ground3.bottomPipeCollision)
                GameController.Instance().GameOver();
        }
    }
    PlusSocre() {
        GameController.Instance().currentScore += 1;
        GameController.Instance().inGameScoreLabel.string = GameController.Instance().currentScore.toString();
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


