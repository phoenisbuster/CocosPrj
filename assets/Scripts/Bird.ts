import { _decorator, Component, EventTouch, Input, input, Node, Tween, tween, Vec3, EventTarget, Game, UITransform } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('Bird')
export class Bird extends Component {
    @property
    gravity: number = -10; // Lực rơi xuống của bird

    @property
    flyForce: number = 15; // Lực bay lên khi touch vào màn hình

    @property
    maxRotation: number = -45; // Góc xoay tối đa khi rơi xuống
    @property({ type: Node })
    public touchRange: Node;
    private velocity: number = 0; // Vận tốc của bird
    private isPlayDownTween: boolean = false; // Kiểm tra trạng thái touch
    @property
    private groundCollision: number;
    RestartBird() {
        this.touchRange.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchRange.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.position = new Vec3(0, 0, 0);
        this.groundCollision = (GameController.Instance().canvas.getComponent(UITransform).height / 2) - GameController.Instance().ground1.getComponent(UITransform).height - (this.node.getComponent(UITransform).height / 2);
    }
    onTouchEnd(event: EventTouch) {
    }
    onTouchStart(event: EventTouch) {
        const target = event.target as Node;
        this.Jump();

    }
    Jump() {
        // Khi người chơi chạm vào màn hình, set vận tốc lên giá trị của flyForce
        this.velocity = this.flyForce;
        this.isPlayDownTween = false;
        Tween.stopAllByTarget(this.node);
        tween(this.node).to(0.1, { angle: 25 }, { easing: 'linear' }).start();
    }
    update(deltaTime: number) {
        if(!GameController.Instance().isStartGame)
            return;
        // Cập nhật vận tốc theo trọng lực
        this.velocity += this.gravity * deltaTime;

        // Cập nhật vị trí bird theo vận tốc
        let newPosition: Vec3 = this.node.position;
        newPosition.y += this.velocity * deltaTime;
        this.node.setPosition(newPosition);
        // Xử lý xoay bird theo chiều rơi và bay

        if (this.velocity < 0) {
            if (!this.isPlayDownTween) {
                Tween.stopAllByTarget(this.node);
                tween(this.node).to(1.5, { angle: -75 }, { easing: 'linear' }).start();
                this.isPlayDownTween = true;
            }
        }
        if (this.node.position.y < -this.groundCollision)
            GameController.Instance().GameOver();

    }

    onDestroy() {
        // Hủy sự kiện touch khi node bị hủy
        this.node.scene.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
}


