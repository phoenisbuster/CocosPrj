import { _decorator, Canvas, Component, Game, Node, NodeEventType } from 'cc';
import { Bird } from './Bird';
import { PipeSpawnControl } from './PipeSpawnControl';
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
    @property({ type: PipeSpawnControl })
    public ground1: PipeSpawnControl;
    @property({ type: PipeSpawnControl })
    public ground2: PipeSpawnControl;
    @property({ type: PipeSpawnControl })
    public ground3: PipeSpawnControl;
    onLoad() {
        if (GameController.instance == null) {
            GameController.instance = this;
        } else {
            this.destroy(); // Nếu đã có instance, hủy node mới
        }
    }

}


