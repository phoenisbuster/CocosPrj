import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClientEventManager')
export class ClientEventManager 
{
    private static event_mapping: Map<string, Map<string, Function>> = new Map<string, Map<string, Function>>();

    public static on<T extends Component>(evt: string, cb: Function, obj: T ) 
    {
        if (this.event_mapping.has(evt)) 
        {
            let a = this.event_mapping.get(evt);
            a.set(obj.uuid,cb);
            this.event_mapping.set(evt, a);
        } 
        else 
        {
            let a = new Map<string, Function>();
            a.set(obj.uuid, cb);
            this.event_mapping.set(evt, a);
        }
    }

    public static off<T extends Component>(evt: string, callback: Function = null, obj: T) 
    {
        if (this.event_mapping.has(evt)) 
        {
            let a = this.event_mapping.get(evt);
            if (a.has(obj.uuid)) 
            {
                if (callback) a.delete(obj.uuid);
            }
            this.event_mapping.set(evt, a);
        }
    }

    public static fire(evt: string, args1 = null, args2 = null, args3 = null, args4 = null, args5 = null)
    {
        if (this.event_mapping.has(evt)) 
        {
            this.event_mapping.get(evt).forEach(cb => 
            {
                if(cb) cb(args1, args2, args3, args4, args5);
            });
        }
    }
}

