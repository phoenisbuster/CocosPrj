import { _decorator, Canvas, Component, director, Label, Node, CCFloat, UITransform, Vec3 } from 'cc';
import { Bird } from './Bird';
import { PipeSpawnControl } from './PipeSpawnControl';
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

    @property(CCFloat)
    public timeCountStartGame: number = 5;
    @property(CCFloat)
    public screenHeight: number;
    @property(CCFloat)
    public screenWidth: number;

    @property({ type: Label })
    public overScoreLabel: Label;
    @property({ type: Label })
    public inGameScoreLabel: Label;
    @property({ type: Node })
    public gameOverPopup: Node;
    @property({ type: Node })
    public inGamePopup: Node;
    @property({ type: Node })
    public startGamePopup: Node;

    public currentScore: number;
    
    onLoad() 
    {
        if(GameController.instance != null && GameController.instance != this)  
        {
            this.destroy(); // Nếu đã có instance, hủy node mới
            return;    
        } 

        GameController.instance = this;
        this.screenHeight = this.canvas.getComponent(UITransform).height;
        this.screenWidth = this.canvas.getComponent(UITransform).width;
        this.groundController.node.position = new Vec3(0, -(GameController.Instance().screenHeight / 2), 0);
        this.groundController.node.position = new Vec3(-(GameController.Instance().screenWidth / 2), 0, 0);

    }

    public GameOver() 
    {
        this.bird.SetStartSignal(false, null);
        director.pause();
        this.gameOverPopup.active = true;
        this.overScoreLabel.string = this.currentScore.toString();
        this.inGamePopup.active = false;
    }

    public RestartGame() 
    {
        if (!this.gameOverPopup.active)
            return;

        director.resume();
        this.inGamePopup.active = true;

        this.groundController.RestartGround(true);

        this.ground1.RestartPipe();
        this.ground2.RestartPipe();
        this.ground3.RestartPipe();

        this.bird.SetStartSignal(true, this.GameOver.bind(this));
        this.bird.RestartBird(this.getGroundCollision());

        this.currentScore = 0;
        this.inGameScoreLabel.string = this.currentScore.toString();
        this.gameOverPopup.active = false;
    }

    public StartGame() 
    {
        this.startGamePopup.active = false;
        this.inGamePopup.active = true;
        this.gameOverPopup.active = false;

        this.groundController.RestartGround(true);

        this.ground1.RestartPipe();
        this.ground2.RestartPipe();
        this.ground3.RestartPipe();

        this.bird.SetStartSignal(true, this.GameOver.bind(this));
        this.bird.RestartBird(this.getGroundCollision());

        this.currentScore = 0;
        this.inGameScoreLabel.string = this.currentScore.toString();
        this.gameOverPopup.active = false;
    }

    private getGroundCollision(): number
    {
        const canvasUITransform = this.canvas.getComponent(UITransform);
        const groundUITransform = this.ground1.getComponent(UITransform);
        const birdUiTransform = this.bird.getComponent(UITransform);
        return (canvasUITransform.height / 2) - groundUITransform.height - (birdUiTransform.height / 2);
    }
}


