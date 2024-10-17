import { _decorator, Component, Node, NodeEventType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({type:Node})
    public Ground1: Node;
    @property({type:Node})
    public Ground2: Node;
    @property({type:Node})
    public Ground3: Node;

    @property({type:Number})
    public GroundWidth: Number;
    start() {

    }

    update(deltaTime: number) {
        
    }
}


