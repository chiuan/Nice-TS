"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const GeneralModule_1 = require("../../framework/module/GeneralModule");
const Logger_1 = require("../../framework/logger/Logger");
const UIManager_1 = require("../../framework/manager/UIManager");
const ModuleDef_1 = require("../ModuleDef");
const game_1 = require("../../data/ui/game");
const GameSession_1 = require("../../framework/net/GameSession");
const GameConfig_1 = require("../../global/GameConfig");
const Opcode_1 = require("../../data/pb/Opcode");
const NetErrorCode_1 = require("../../framework/net/NetErrorCode");
const OuterMessage_1 = require("../../data/pb/OuterMessage");
const CS = require('csharp');
class LoginModule extends GeneralModule_1.GeneralModule {
    get playerID() {
        return this._playerID;
    }
    create(args) {
        this.messenger.addListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this, this.loginReamServer);
    }
    show(args) {
        UIManager_1.UIManager.Instance(UIManager_1.UIManager).openPageInScene(ModuleDef_1.SceneDef.LoginScene, game_1.gameUI.PackageName, game_1.gameUI.UILoginPage, args);
    }
    release() {
        this.messenger.removeListener(ModuleDef_1.ModuleMessage.LOGIN_REAMSERVER, this.loginReamServer);
    }
    loginReamServer(account, password) {
        this.account = account;
        this.password = password;
        //登录验证服
        this.sessionReam = GameSession_1.GameSession.Instance(GameSession_1.GameSession).connectChannel(GameConfig_1.GameConfig.realmServerIP + ":" + GameConfig_1.GameConfig.realmServerPort, (channel, code) => {
            this.onReamSocketErr(channel, code);
        });
    }
    onReamSocketErr(channel, code) {
        if (code == NetErrorCode_1.NetErrorCode.ERR_SocketConnSucc) {
            this.sessionReam.id = channel.Id;
            //发送登录指令
            let rpcID = this.sessionReam.rpcId;
            let msg = OuterMessage_1.NiceET.C2R_Login.create();
            msg.RpcId = rpcID;
            msg.Account = this.account;
            msg.Password = this.password;
            let buf = OuterMessage_1.NiceET.C2R_Login.encode(msg).finish();
            this.sessionReam.send(Opcode_1.Opcode.C2R_LOGIN, rpcID, buf, (response) => {
                //登录成功
                let msg = response;
                this.gateId = msg.GateId;
                this.gateKey = msg.Key;
                Logger_1.Logger.log("login ream succ, gate addr:" + msg.Address + ",key:" + msg.Key);
                //断开认证服
                this.sessionReam.disconnect();
                this.sessionReam = null;
                //登录网关服
                this.loginGateServer(msg.Address);
            });
        }
        else {
            Logger_1.Logger.logError("login reamserver err, code: " + code + ",id:" + channel.Id);
        }
    }
    //登录游戏服
    loginGateServer(address) {
        this.sessionGate = GameSession_1.GameSession.Instance(GameSession_1.GameSession).connectChannel(address, (channel, code) => {
            Logger_1.Logger.log("login Gate Server: " + code);
            this.onGateSocketErr(channel, code);
        });
    }
    onGateSocketErr(channel, code) {
        if (code == NetErrorCode_1.NetErrorCode.ERR_SocketConnSucc) {
            this.sessionGate.id = channel.Id;
            //发送登录请求
            let rpcId = this.sessionGate.rpcId;
            let msg = OuterMessage_1.NiceET.C2G_LoginGate.create();
            msg.RpcId = rpcId;
            msg.GateId = this.gateId;
            msg.Key = this.gateKey;
            let buf = OuterMessage_1.NiceET.C2G_LoginGate.encode(msg).finish();
            Logger_1.Logger.log("login gate succ ,key: " + msg.Key + ", rpcid:" + rpcId);
            this.sessionGate.send(Opcode_1.Opcode.C2G_LOGINGATE, rpcId, buf, (response) => {
                let msg = response;
                this._playerID = msg.PlayerId;
                Logger_1.Logger.log("login gate response.." + msg.PlayerId);
                UIManager_1.UIManager.Instance(UIManager_1.UIManager).enterMainPage();
            });
        }
        else {
            Logger_1.Logger.logError("gate server err, code: " + code + ",id:" + channel.Id);
        }
    }
}
exports.LoginModule = LoginModule;
//# sourceMappingURL=LoginModule.js.map