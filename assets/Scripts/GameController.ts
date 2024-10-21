import { _decorator, Canvas, Component, director, Game, Label, Node, NodeEventType, UITransform, Vec3 } from 'cc';
import { Bird } from './Bird';
import { PipeSpawnControl } from './PipeSpawnControl';
import { EventTarget } from 'cc';
import { GroundController } from './GroundController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    // Biến static lưu giữ instance duy nhất
    private static instance: GameController;
    public static Instance(): GameController {
        if (GameController.instance == null)
            GameController.instance = new GameController();
        return GameController.instance;
    }
    // // Phương thức để lấy instance của GameManager
    // public static getInstance(): GameController {
    //     if (!GameController._instance) {
    //         GameController._instance = new GameController();
    //     }
    //     return GameController._instance;
    // }
    @property({ type: Bird })
    public bird: Bird;
    @property({ type: Node })
    public canvas: Node;
    @property({ type: GroundController })
    public groundController: GroundController;
    @property({ type: PipeSpawnControl })
    public ground1: PipeSpawnControl;
    @property({ type: PipeSpawnControl })
    public ground2: PipeSpawnControl;
    @property({ type: PipeSpawnControl })
    public ground3: PipeSpawnControl;
    @property
    public timeCountStartGame: number = 5;
    @property
    public screenHeight: number;
    @property
    public screenWidth: number;
    @property({ type: Label })
    public overScoreLabel: Label;
    @property({ type: Label })
    public inGameScoreLabel: Label;
    public currentScore: number;
    @property({ type: Node })
    public gameOverPopup: Node;
    @property({ type: Node })
    public inGamePopup: Node;
    @property({ type: Node })
    public startGamePopup: Node;
    @property isStartGame: boolean;
    onLoad() {
        if (GameController.instance == null) {
            GameController.instance = this;
        } else {
            this.destroy(); // Nếu đã có instance, hủy node mới
        }
        this.screenHeight = this.canvas.getComponent(UITransform).height;
        this.screenWidth = this.canvas.getComponent(UITransform).width;
        this.groundController.node.position = new Vec3(0, -(GameController.Instance().screenHeight / 2), 0);
        this.groundController.node.position = new Vec3(-(GameController.Instance().screenWidth / 2), 0, 0);

    }
    public GameOver() {
        director.pause();
        this.gameOverPopup.active = true;
        this.overScoreLabel.string = this.currentScore.toString();
        this.inGamePopup.active = false;
    }
    public RestartGame() {
        if (!this.gameOverPopup.active)
            return;
        director.resume();
        this.inGamePopup.active = true;
        this.groundController.RestartGround();
        this.bird.RestartBird();
        this.ground1.RestartPipe();
        this.ground2.RestartPipe();
        this.ground3.RestartPipe();
        this.currentScore = 0;
        this.inGameScoreLabel.string = this.currentScore.toString();
        this.gameOverPopup.active = false;
    }
    public StartGame() {
        this.startGamePopup.active = false;
        this.inGamePopup.active = true;
        this.gameOverPopup.active = false;
        this.isStartGame = true;
        this.groundController.RestartGround();
        this.bird.RestartBird();
        this.ground1.RestartPipe();
        this.ground2.RestartPipe();
        this.ground3.RestartPipe();
        this.currentScore = 0;
        this.inGameScoreLabel.string = this.currentScore.toString();
        this.gameOverPopup.active = false;
    }
}


