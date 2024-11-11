import { JsonAsset } from 'cc';
import { _decorator, CCBoolean, CCString, Component, Enum, Node } from 'cc';
const { ccclass, property } = _decorator;

enum AdsPlatform
{
    NONE = 0,
    ANDROID = 1,
    IOS = 2
}

interface AdsJsonData
{
    appId: string;
    interstitialAdUnitId: string;
    rewardedAdUnitId: string;
    bannerAdUnitId: string;
}

@ccclass('AdsData')
export class AdsData
{
    @property({
        type: CCBoolean,
        displayName: "Using Json Asset",
    })
    usingJson: boolean = false;
    
    @property({
        type: JsonAsset,
        displayName: "Ads Data Json Format",
        visible: function() { return this.usingJson; }
    })
    adsDataJson: JsonAsset = null;
    
    @property({
        type: Enum(AdsPlatform),
        displayName: "Platform",
        visible: function() { return !this.usingJson; }
    })
    platform: AdsPlatform = AdsPlatform.NONE;
    
    @property({
        type: CCString,
        displayName: "App ID",
        visible: function() { return !this.usingJson; }
    })
    _appId: string = "";

    @property({
        type: CCString,
        displayName: "Interstitial Ad Unit ID",
        visible: function() { return !this.usingJson; }
    })
    _adUnitId_Interstitial: string = "";

    @property({
        type: CCString,
        displayName: "Rewarded Ad Unit ID",
        visible: function() { return !this.usingJson; }
    })
    _adUnitId_Rewarded: string = "";

    @property({
        type: CCString,
        displayName: "Banner Ad Unit ID",
        visible: function() { return !this.usingJson; }
    })
    _adUnitId_Banner: string = "";

    private _data: AdsJsonData = null;

    parseJson()
    {
        console.log("parseJson", this.adsDataJson.json);
        if(this.usingJson && this.adsDataJson)
        {
            this._data = this.adsDataJson.json as AdsJsonData;
            
            this._appId = this.adsDataJson.json.appId;
            this._adUnitId_Interstitial = this.adsDataJson.json.interstitialAdUnitId;
            this._adUnitId_Rewarded = this.adsDataJson.json.rewardedAdUnitId;
            this._adUnitId_Banner = this.adsDataJson.json.bannerAdUnitId;
        }
    }
}

