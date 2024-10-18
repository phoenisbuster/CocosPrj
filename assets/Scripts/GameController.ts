import { _decorator, Component, Node, NodeEventType } from 'cc';
import { Bird } from './Bird';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    public static instace: GameController;

    @property({ type: Bird })
    public bird: Bird
    onLoad() {
        if (GameController.instace != null)
            GameController.instace = this;
        else
            this.destroy();
    }

}


