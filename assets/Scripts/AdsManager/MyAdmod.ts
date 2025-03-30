import { _decorator, CCString, Component, Node } from 'cc';
import { AdsData } from './AdsData';
import { director } from 'cc';
import { InterstitialAdClient } from 'db://admob/ads/client/InterstitialAdClient';
import { RewardedAdClient } from 'db://admob/ads/client/RewardedAdClient';
import { BannerSize } from 'db://admob/misc/BannerSize';
import { BannerClient } from 'db://admob/ads/client/BannerClient';
import { AdError, LoadAdError } from 'db://admob/ads/alias/TypeAlias';
import { log, warn, error } from 'cc';
import { BannerSizeType } from 'db://admob/misc/BannerSizeType';
import { BottomCenter } from 'db://admob/misc/BannerAlignment';
import { native } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyAdmod')
export class MyAdmod extends Component 
{
    public static instance: MyAdmod;

    private interstitialAd: InterstitialAdClient;
    private rewardedAd: RewardedAdClient;
    private bannerView: BannerClient;

    @property({
        type: AdsData
    })
    private adsData: AdsData = new AdsData();

    protected onLoad(): void 
    {
        if(MyAdmod.instance != null && MyAdmod.instance != this)
        {
            this.destroy();
            return;
        }

        if(!director.isPersistRootNode(this.node))
            director.addPersistRootNode(this.node);
        MyAdmod.instance = this;
        this.adsData?.parseJson();
        
        log(`MyAdmob: onLoad`, this.adsData._appId, this.adsData._adUnitId_Rewarded, this.adsData._adUnitId_Banner);
    }

    protected start(): void 
    {
        this.initializeAdsComplete();
    }

    protected onEnable(): void 
    {
       
    }

    protected onDisable(): void 
    {
        
    }

    private initializeAdsComplete(initStatus: string = "") 
    {
       warn(`MyAdmob: initStatus = "${initStatus}" `);

       this.rewardedAd = new RewardedAdClient();
       this.bannerView = new BannerClient();
       this.loadRewardedAd();
    }

    //=================================================== RewardAd ===================================================//
    /*
        Load RewardedAd
    */
    public loadRewardedAd()
    {
        if(this.rewardedAd == null)
        {
            this.rewardedAd = new RewardedAdClient();
        }
        const self = this;
        this.rewardedAd.load(this.adsData._adUnitId_Rewarded, {
            // Raised when the ad is estimated to have earned money.
            onEarn(rewardType, amount) {
                warn(`MyAdmob: onEarn, rewardType = ${rewardType}, amount = ${amount}`);
            },
            // Raised when an impression is recorded for an ad.
            onAdImpression() {
                log(`MyAdmob: onAdImpression`);
            },
            // Raised when a click is recorded for an ad.
            onAdClicked() {
                log(`MyAdmob: onAdClicked`);
            },
            // Raised when an ad opened full screen content.
            onAdShowedFullScreenContent() {
                log(`MyAdmob: onAdShowedFullScreenContent`);
                /*
                    Ads is fully opened
                    TODO: What your game should do when the ad is fully opened
                    Ex: Turn off sound, pause the game, ...
                */
            },
            // Raised when the ad closed full screen content.
            onAdDismissedFullScreenContent() {
                warn(`MyAdmob: onAdDismissedFullScreenContent`);
                /*
                    Ads is closed
                    TODO: What your game should do when the ad is closed
                    Ex: Turn on sound, resume the game, load new ads, ...
                */
                self.loadRewardedAd();
            },
            // Raised when the ad failed to open full screen content.
            onAdFailedToShowFullScreenContent(adError: AdError) {
                error(`MyAdmob: onAdFailedToLoad = "${adError}" `);
                /*
                    Ads load failed
                    TODO: What your game should do when the ads load failed
                    Ex: Notify the user, load new ads, ...
                */
                self.loadRewardedAd();
            },
        });
    }

    /*
        Show RewardedAd
    */
    public showRewardedAd()
    {
        if(this.rewardedAd == null)
        {
            this.rewardedAd = new RewardedAdClient();
        }
        this.rewardedAd.show();
    }

    /*
        RewardedAd event listener
    */
    // Raised when the ad is estimated to have earned money.
    private onEarn(rewardType, amount) {
        warn(`MyAdmob: onEarn, rewardType = ${rewardType}, amount = ${amount}`);
    }
    // Raised when an impression is recorded for an ad.
    private onAdImpression() {
        log(`MyAdmob: onAdImpression`);
    }
    // Raised when a click is recorded for an ad.
    private onAdClicked() {
        log(`MyAdmob: onAdClicked`);
    }
    // Raised when an ad opened full screen content.
    private onAdShowedFullScreenContent() {
        log(`MyAdmob: onAdShowedFullScreenContent`);
        /*
            Ads is fully opened
            TODO: What your game should do when the ad is fully opened
            Ex: Turn off sound, pause the game, ...
        */
    }
    // Raised when the ad closed full screen content.
    private onAdDismissedFullScreenContent() {
        warn(`MyAdmob: onAdDismissedFullScreenContent`);
        /*
            Ads is closed
            TODO: What your game should do when the ad is closed
            Ex: Turn on sound, resume the game, load new ads, ...
        */
        this.loadRewardedAd();
    }
    // Raised when the ad failed to open full screen content.
    private onAdFailedToShowFullScreenContent(adError: AdError) {
        error(`MyAdmob: onAdFailedToLoad = "${adError}" `);
        /*
            Ads load failed
            TODO: What your game should do when the ads load failed
            Ex: Notify the user, load new ads, ...
        */
        this.loadRewardedAd();
    }

    //=================================================== BannerAd ===================================================//
    /*
        Load BannerAd
    */
    public loadBannerAd()
    {
        if(this.bannerView == null)
        {
            this.bannerView = new BannerClient();
        }
        const self = this;
        this.bannerView.load(this.adsData._adUnitId_Banner, 
        {
            onAdLoaded() {
                self.bannerView.show(true);
            },
            onAdFailedToLoad(loadError: LoadAdError) {
                error(`MyAdmob: onAdFailedToLoad = "${loadError}" `);
            },
            onAdClicked() {
                log(`MyAdmob: onAdClicked`);
            },
            onAdOpened() {
                log(`MyAdmob: onAdOpened`);
            },

        }, 
        {
            size: BannerSize.BANNER,
            alignments: BottomCenter
        });
    }
}

