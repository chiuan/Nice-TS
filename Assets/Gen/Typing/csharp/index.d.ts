﻿
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    type $Task<T> = System.Threading.Tasks.Task$1<T>
    
    namespace FairyGUI {
        
        class EventContext extends System.Object {
            
            public type: string;
            
            public data: any;
            
            public get sender(): FairyGUI.EventDispatcher;
            
            public get initiator(): any;
            
            public get inputEvent(): FairyGUI.InputEvent;
            
            public get isDefaultPrevented(): boolean;
            
            public constructor();
            
            public StopPropagation():void;
            
            public PreventDefault():void;
            
            public CaptureTouch():void;
            
        }
        
        class EventDispatcher extends System.Object {
            
            public constructor();
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public AddEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListener($strType: string, $callback: FairyGUI.EventCallback0):void;
            
            public AddCapture($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveCapture($strType: string, $callback: FairyGUI.EventCallback1):void;
            
            public RemoveEventListeners():void;
            
            public RemoveEventListeners($strType: string):void;
            
            public hasEventListeners($strType: string):boolean;
            
            public isDispatching($strType: string):boolean;
            
            public DispatchEvent($strType: string):boolean;
            
            public DispatchEvent($strType: string, $data: any):boolean;
            
            public DispatchEvent($strType: string, $data: any, $initiator: any):boolean;
            
            public DispatchEvent($context: FairyGUI.EventContext):boolean;
            
            public BubbleEvent($strType: string, $data: any):boolean;
            
            public BroadcastEvent($strType: string, $data: any):boolean;
            
        }
        
        class InputEvent extends System.Object {
            
            public get x(): number;
            
            public get y(): number;
            
            public get keyCode(): UnityEngine.KeyCode;
            
            public get character(): number;
            
            public get modifiers(): UnityEngine.EventModifiers;
            
            public get mouseWheelDelta(): number;
            
            public get touchId(): number;
            
            public get button(): number;
            
            public get clickCount(): number;
            
            public get holdTime(): number;
            
            public get position(): UnityEngine.Vector2;
            
            public get isDoubleClick(): boolean;
            
            public get ctrlOrCmd(): boolean;
            
            public get ctrl(): boolean;
            
            public get shift(): boolean;
            
            public get alt(): boolean;
            
            public get command(): boolean;
            
            public constructor();
            
        }
        
        type EventCallback1 = (context: FairyGUI.EventContext) => void;
        var EventCallback1: {new (func: (context: FairyGUI.EventContext) => void): EventCallback1;}
        
        type EventCallback0 = () => void;
        var EventCallback0: {new (func: () => void): EventCallback0;}
        
        class EventListener extends System.Object {
            
            public get type(): string;
            
            public get isEmpty(): boolean;
            
            public get isDispatching(): boolean;
            
            public constructor($owner: FairyGUI.EventDispatcher, $type: string);
            
            public AddCapture($callback: FairyGUI.EventCallback1):void;
            
            public RemoveCapture($callback: FairyGUI.EventCallback1):void;
            
            public Add($callback: FairyGUI.EventCallback1):void;
            
            public Remove($callback: FairyGUI.EventCallback1):void;
            
            public Add($callback: FairyGUI.EventCallback0):void;
            
            public Remove($callback: FairyGUI.EventCallback0):void;
            
            public Set($callback: FairyGUI.EventCallback1):void;
            
            public Set($callback: FairyGUI.EventCallback0):void;
            
            public Clear():void;
            
            public Call():boolean;
            
            public Call($data: any):boolean;
            
            public BubbleCall($data: any):boolean;
            
            public BubbleCall():boolean;
            
            public BroadcastCall($data: any):boolean;
            
            public BroadcastCall():boolean;
            
            public constructor();
            
        }
        
        class DisplayObject extends FairyGUI.EventDispatcher {
            
            public name: string;
            
            public gOwner: FairyGUI.GObject;
            
            public id: number;
            
            public get parent(): FairyGUI.Container;
            
            public get gameObject(): UnityEngine.GameObject;
            
            public get cachedTransform(): UnityEngine.Transform;
            
            public get graphics(): FairyGUI.NGraphics;
            
            public get paintingGraphics(): FairyGUI.NGraphics;
            
            public get onClick(): FairyGUI.EventListener;
            
            public get onRightClick(): FairyGUI.EventListener;
            
            public get onTouchBegin(): FairyGUI.EventListener;
            
            public get onTouchMove(): FairyGUI.EventListener;
            
            public get onTouchEnd(): FairyGUI.EventListener;
            
            public get onRollOver(): FairyGUI.EventListener;
            
            public get onRollOut(): FairyGUI.EventListener;
            
            public get onMouseWheel(): FairyGUI.EventListener;
            
            public get onAddedToStage(): FairyGUI.EventListener;
            
            public get onRemovedFromStage(): FairyGUI.EventListener;
            
            public get onKeyDown(): FairyGUI.EventListener;
            
            public get onClickLink(): FairyGUI.EventListener;
            
            public get onFocusIn(): FairyGUI.EventListener;
            
            public get onFocusOut(): FairyGUI.EventListener;
            
            public get alpha(): number;
            public set alpha(value: number);
            
            public get grayed(): boolean;
            public set grayed(value: boolean);
            
            public get visible(): boolean;
            public set visible(value: boolean);
            
            public get x(): number;
            public set x(value: number);
            
            public get y(): number;
            public set y(value: number);
            
            public get z(): number;
            public set z(value: number);
            
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            
            public get width(): number;
            public set width(value: number);
            
            public get height(): number;
            public set height(value: number);
            
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            
            public get scaleX(): number;
            public set scaleX(value: number);
            
            public get scaleY(): number;
            public set scaleY(value: number);
            
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            
            public get rotation(): number;
            public set rotation(value: number);
            
            public get rotationX(): number;
            public set rotationX(value: number);
            
            public get rotationY(): number;
            public set rotationY(value: number);
            
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            
            public get perspective(): boolean;
            public set perspective(value: boolean);
            
            public get focalLength(): number;
            public set focalLength(value: number);
            
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            
            public get location(): UnityEngine.Vector3;
            public set location(value: UnityEngine.Vector3);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get renderingOrder(): number;
            public set renderingOrder(value: number);
            
            public get layer(): number;
            public set layer(value: number);
            
            public get focusable(): boolean;
            public set focusable(value: boolean);
            
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            
            public get focused(): boolean;
            
            public get cursor(): string;
            public set cursor(value: string);
            
            public get isDisposed(): boolean;
            
            public get topmost(): FairyGUI.Container;
            
            public get stage(): FairyGUI.Stage;
            
            public get worldSpaceContainer(): FairyGUI.Container;
            
            public get touchable(): boolean;
            public set touchable(value: boolean);
            
            public get touchDisabled(): boolean;
            
            public get paintingMode(): boolean;
            
            public get cacheAsBitmap(): boolean;
            public set cacheAsBitmap(value: boolean);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            public get home(): UnityEngine.Transform;
            public set home(value: UnityEngine.Transform);
            
            public constructor();
            
            public add_onPaint($value: System.Action):void;
            
            public remove_onPaint($value: System.Action):void;
            
            public SetXY($xv: number, $yv: number):void;
            
            public SetPosition($xv: number, $yv: number, $zv: number):void;
            
            public SetSize($wv: number, $hv: number):void;
            
            public EnsureSizeCorrect():void;
            
            public SetScale($xv: number, $yv: number):void;
            
            public EnterPaintingMode():void;
            
            public EnterPaintingMode($requestorId: number, $extend: System.Nullable$1<FairyGUI.Margin>):void;
            
            public EnterPaintingMode($requestorId: number, $extend: System.Nullable$1<FairyGUI.Margin>, $scale: number):void;
            
            public LeavePaintingMode($requestorId: number):void;
            
            public GetScreenShot($extend: System.Nullable$1<FairyGUI.Margin>, $scale: number):UnityEngine.Texture2D;
            
            public GetBounds($targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            
            public GlobalToLocal($point: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public LocalToGlobal($point: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public WorldToLocal($worldPoint: UnityEngine.Vector3, $direction: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public LocalToWorld($localPoint: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public TransformPoint($point: UnityEngine.Vector2, $targetSpace: FairyGUI.DisplayObject):UnityEngine.Vector2;
            
            public TransformRect($rect: UnityEngine.Rect, $targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            
            public RemoveFromParent():void;
            
            public InvalidateBatchingState():void;
            
            public Update($context: FairyGUI.UpdateContext):void;
            
            public Dispose():void;
            
        }
        
        class GObject extends FairyGUI.EventDispatcher {
            
            public name: string;
            
            public data: any;
            
            public sourceWidth: number;
            
            public sourceHeight: number;
            
            public initWidth: number;
            
            public initHeight: number;
            
            public minWidth: number;
            
            public maxWidth: number;
            
            public minHeight: number;
            
            public maxHeight: number;
            
            public dragBounds: System.Nullable$1<UnityEngine.Rect>;
            
            public packageItem: FairyGUI.PackageItem;
            
            public get id(): string;
            
            public get relations(): FairyGUI.Relations;
            
            public get parent(): FairyGUI.GComponent;
            
            public get displayObject(): FairyGUI.DisplayObject;
            
            public static get draggingObject(): FairyGUI.GObject;
            
            public get onClick(): FairyGUI.EventListener;
            
            public get onRightClick(): FairyGUI.EventListener;
            
            public get onTouchBegin(): FairyGUI.EventListener;
            
            public get onTouchMove(): FairyGUI.EventListener;
            
            public get onTouchEnd(): FairyGUI.EventListener;
            
            public get onRollOver(): FairyGUI.EventListener;
            
            public get onRollOut(): FairyGUI.EventListener;
            
            public get onAddedToStage(): FairyGUI.EventListener;
            
            public get onRemovedFromStage(): FairyGUI.EventListener;
            
            public get onKeyDown(): FairyGUI.EventListener;
            
            public get onClickLink(): FairyGUI.EventListener;
            
            public get onPositionChanged(): FairyGUI.EventListener;
            
            public get onSizeChanged(): FairyGUI.EventListener;
            
            public get onDragStart(): FairyGUI.EventListener;
            
            public get onDragMove(): FairyGUI.EventListener;
            
            public get onDragEnd(): FairyGUI.EventListener;
            
            public get onGearStop(): FairyGUI.EventListener;
            
            public get onFocusIn(): FairyGUI.EventListener;
            
            public get onFocusOut(): FairyGUI.EventListener;
            
            public get x(): number;
            public set x(value: number);
            
            public get y(): number;
            public set y(value: number);
            
            public get z(): number;
            public set z(value: number);
            
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            
            public get width(): number;
            public set width(value: number);
            
            public get height(): number;
            public set height(value: number);
            
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            
            public get actualWidth(): number;
            
            public get actualHeight(): number;
            
            public get xMin(): number;
            public set xMin(value: number);
            
            public get yMin(): number;
            public set yMin(value: number);
            
            public get scaleX(): number;
            public set scaleX(value: number);
            
            public get scaleY(): number;
            public set scaleY(value: number);
            
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            
            public get pivotX(): number;
            public set pivotX(value: number);
            
            public get pivotY(): number;
            public set pivotY(value: number);
            
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            
            public get pivotAsAnchor(): boolean;
            public set pivotAsAnchor(value: boolean);
            
            public get touchable(): boolean;
            public set touchable(value: boolean);
            
            public get grayed(): boolean;
            public set grayed(value: boolean);
            
            public get enabled(): boolean;
            public set enabled(value: boolean);
            
            public get rotation(): number;
            public set rotation(value: number);
            
            public get rotationX(): number;
            public set rotationX(value: number);
            
            public get rotationY(): number;
            public set rotationY(value: number);
            
            public get alpha(): number;
            public set alpha(value: number);
            
            public get visible(): boolean;
            public set visible(value: boolean);
            
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            
            public get focusable(): boolean;
            public set focusable(value: boolean);
            
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            
            public get focused(): boolean;
            
            public get tooltips(): string;
            public set tooltips(value: string);
            
            public get cursor(): string;
            public set cursor(value: string);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            public get gameObjectName(): string;
            public set gameObjectName(value: string);
            
            public get inContainer(): boolean;
            
            public get onStage(): boolean;
            
            public get resourceURL(): string;
            
            public get gearXY(): FairyGUI.GearXY;
            
            public get gearSize(): FairyGUI.GearSize;
            
            public get gearLook(): FairyGUI.GearLook;
            
            public get group(): FairyGUI.GGroup;
            public set group(value: FairyGUI.GGroup);
            
            public get root(): FairyGUI.GRoot;
            
            public get text(): string;
            public set text(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get draggable(): boolean;
            public set draggable(value: boolean);
            
            public get dragging(): boolean;
            
            public get isDisposed(): boolean;
            
            public get asImage(): FairyGUI.GImage;
            
            public get asCom(): FairyGUI.GComponent;
            
            public get asButton(): FairyGUI.GButton;
            
            public get asLabel(): FairyGUI.GLabel;
            
            public get asProgress(): FairyGUI.GProgressBar;
            
            public get asSlider(): FairyGUI.GSlider;
            
            public get asComboBox(): FairyGUI.GComboBox;
            
            public get asTextField(): FairyGUI.GTextField;
            
            public get asRichTextField(): FairyGUI.GRichTextField;
            
            public get asTextInput(): FairyGUI.GTextInput;
            
            public get asLoader(): FairyGUI.GLoader;
            
            public get asLoader3D(): FairyGUI.GLoader3D;
            
            public get asList(): FairyGUI.GList;
            
            public get asGraph(): FairyGUI.GGraph;
            
            public get asGroup(): FairyGUI.GGroup;
            
            public get asMovieClip(): FairyGUI.GMovieClip;
            
            public get asTree(): FairyGUI.GTree;
            
            public get treeNode(): FairyGUI.GTreeNode;
            
            public constructor();
            
            public SetXY($xv: number, $yv: number):void;
            
            public SetXY($xv: number, $yv: number, $topLeftValue: boolean):void;
            
            public SetPosition($xv: number, $yv: number, $zv: number):void;
            
            public Center():void;
            
            public Center($restraint: boolean):void;
            
            public MakeFullScreen():void;
            
            public SetSize($wv: number, $hv: number):void;
            
            public SetSize($wv: number, $hv: number, $ignorePivot: boolean):void;
            
            public SetScale($wv: number, $hv: number):void;
            
            public SetPivot($xv: number, $yv: number):void;
            
            public SetPivot($xv: number, $yv: number, $asAnchor: boolean):void;
            
            public RequestFocus():void;
            
            public RequestFocus($byKey: boolean):void;
            
            public SetHome($obj: FairyGUI.GObject):void;
            
            public GetGear($index: number):FairyGUI.GearBase;
            
            public InvalidateBatchingState():void;
            
            public HandleControllerChanged($c: FairyGUI.Controller):void;
            
            public AddRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public AddRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean):void;
            
            public RemoveRelation($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public RemoveFromParent():void;
            
            public StartDrag():void;
            
            public StartDrag($touchId: number):void;
            
            public StopDrag():void;
            
            public LocalToGlobal($pt: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public GlobalToLocal($pt: UnityEngine.Vector2):UnityEngine.Vector2;
            
            public LocalToGlobal($rect: UnityEngine.Rect):UnityEngine.Rect;
            
            public GlobalToLocal($rect: UnityEngine.Rect):UnityEngine.Rect;
            
            public LocalToRoot($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot):UnityEngine.Vector2;
            
            public RootToLocal($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot):UnityEngine.Vector2;
            
            public WorldToLocal($pt: UnityEngine.Vector3):UnityEngine.Vector2;
            
            public WorldToLocal($pt: UnityEngine.Vector3, $camera: UnityEngine.Camera):UnityEngine.Vector2;
            
            public TransformPoint($pt: UnityEngine.Vector2, $targetSpace: FairyGUI.GObject):UnityEngine.Vector2;
            
            public TransformRect($rect: UnityEngine.Rect, $targetSpace: FairyGUI.GObject):UnityEngine.Rect;
            
            public Dispose():void;
            
            public ConstructFromResource():void;
            
            public Setup_BeforeAdd($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number):void;
            
            public Setup_AfterAdd($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number):void;
            
            public TweenMove($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenMoveX($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenMoveY($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenScale($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenScaleX($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenScaleY($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenResize($endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public TweenFade($endValue: number, $duration: number):FairyGUI.GTweener;
            
            public TweenRotate($endValue: number, $duration: number):FairyGUI.GTweener;
            
        }
        
        class Container extends FairyGUI.DisplayObject {
            
            public renderMode: UnityEngine.RenderMode;
            
            public renderCamera: UnityEngine.Camera;
            
            public opaque: boolean;
            
            public clipSoftness: System.Nullable$1<UnityEngine.Vector4>;
            
            public hitArea: FairyGUI.IHitTest;
            
            public touchChildren: boolean;
            
            public reversedMask: boolean;
            
            public get numChildren(): number;
            
            public get clipRect(): System.Nullable$1<UnityEngine.Rect>;
            public set clipRect(value: System.Nullable$1<UnityEngine.Rect>);
            
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            
            public constructor();
            
            public constructor($gameObjectName: string);
            
            public constructor($attachTarget: UnityEngine.GameObject);
            
            public add_onUpdate($value: System.Action):void;
            
            public remove_onUpdate($value: System.Action):void;
            
            public AddChild($child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            
            public AddChildAt($child: FairyGUI.DisplayObject, $index: number):FairyGUI.DisplayObject;
            
            public Contains($child: FairyGUI.DisplayObject):boolean;
            
            public GetChildAt($index: number):FairyGUI.DisplayObject;
            
            public GetChild($name: string):FairyGUI.DisplayObject;
            
            public GetChildren():System.Array$1<FairyGUI.DisplayObject>;
            
            public GetChildIndex($child: FairyGUI.DisplayObject):number;
            
            public RemoveChild($child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            
            public RemoveChild($child: FairyGUI.DisplayObject, $dispose: boolean):FairyGUI.DisplayObject;
            
            public RemoveChildAt($index: number):FairyGUI.DisplayObject;
            
            public RemoveChildAt($index: number, $dispose: boolean):FairyGUI.DisplayObject;
            
            public RemoveChildren():void;
            
            public RemoveChildren($beginIndex: number, $endIndex: number, $dispose: boolean):void;
            
            public SetChildIndex($child: FairyGUI.DisplayObject, $index: number):void;
            
            public SwapChildren($child1: FairyGUI.DisplayObject, $child2: FairyGUI.DisplayObject):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public ChangeChildrenOrder($indice: System.Collections.Generic.IList$1<number>, $objs: System.Collections.Generic.IList$1<FairyGUI.DisplayObject>):void;
            
            public GetDescendants($backward: boolean):System.Collections.Generic.IEnumerator$1<FairyGUI.DisplayObject>;
            
            public CreateGraphics():void;
            
            public GetRenderCamera():UnityEngine.Camera;
            
            public HitTest($stagePoint: UnityEngine.Vector2, $forTouch: boolean):FairyGUI.DisplayObject;
            
            public IsAncestorOf($obj: FairyGUI.DisplayObject):boolean;
            
            public InvalidateBatchingState($childrenChanged: boolean):void;
            
            public SetChildrenLayer($value: number):void;
            
            public InvalidateBatchingState():void;
            
        }
        
        class NGraphics extends System.Object {
            
        }
        
        class Stage extends FairyGUI.Container {
            
            public get soundVolume(): number;
            public set soundVolume(value: number);
            
            public static get inst(): FairyGUI.Stage;
            
            public static get touchScreen(): boolean;
            public static set touchScreen(value: boolean);
            
            public static get keyboardInput(): boolean;
            public static set keyboardInput(value: boolean);
            
            public static get isTouchOnUI(): boolean;
            
            public static get devicePixelRatio(): number;
            public static set devicePixelRatio(value: number);
            
            public get onStageResized(): FairyGUI.EventListener;
            
            public get touchTarget(): FairyGUI.DisplayObject;
            
            public get focus(): FairyGUI.DisplayObject;
            public set focus(value: FairyGUI.DisplayObject);
            
            public get touchPosition(): UnityEngine.Vector2;
            
            public get touchCount(): number;
            
            public get keyboard(): FairyGUI.IKeyboard;
            public set keyboard(value: FairyGUI.IKeyboard);
            
            public get activeCursor(): string;
            
            public constructor();
            
            public add_beforeUpdate($value: System.Action):void;
            
            public remove_beforeUpdate($value: System.Action):void;
            
            public add_afterUpdate($value: System.Action):void;
            
            public remove_afterUpdate($value: System.Action):void;
            
            public static Instantiate():void;
            
            public SetFous($newFocus: FairyGUI.DisplayObject, $byKey?: boolean):void;
            
            public DoKeyNavigate($backward: boolean):void;
            
            public GetTouchPosition($touchId: number):UnityEngine.Vector2;
            
            public GetTouchTarget($touchId: number):FairyGUI.DisplayObject;
            
            public GetAllTouch($result: System.Array$1<number>):System.Array$1<number>;
            
            public ResetInputState():void;
            
            public CancelClick($touchId: number):void;
            
            public EnableSound():void;
            
            public DisableSound():void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip):void;
            
            public OpenKeyboard($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean):void;
            
            public CloseKeyboard():void;
            
            public InputString($value: string):void;
            
            public SetCustomInput($screenPos: UnityEngine.Vector2, $buttonDown: boolean):void;
            
            public SetCustomInput($screenPos: UnityEngine.Vector2, $buttonDown: boolean, $buttonUp: boolean):void;
            
            public SetCustomInput($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean):void;
            
            public SetCustomInput($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean, $buttonUp: boolean):void;
            
            public ForceUpdate():void;
            
            public ApplyPanelOrder($target: FairyGUI.Container):void;
            
            public SortWorldSpacePanelsByZOrder($panelSortingOrder: number):void;
            
            public MonitorTexture($texture: FairyGUI.NTexture):void;
            
            public AddTouchMonitor($touchId: number, $target: FairyGUI.EventDispatcher):void;
            
            public RemoveTouchMonitor($target: FairyGUI.EventDispatcher):void;
            
            public IsTouchMonitoring($target: FairyGUI.EventDispatcher):boolean;
            
            public RegisterCursor($cursorName: string, $texture: UnityEngine.Texture2D, $hotspot: UnityEngine.Vector2):void;
            
        }
        
        class Margin extends System.ValueType {
            
        }
        
        interface IFilter {
            
        }
        
        enum BlendMode { Normal = 0, None = 1, Add = 2, Multiply = 3, Screen = 4, Erase = 5, Mask = 6, Below = 7, Off = 8, One_OneMinusSrcAlpha = 9, Custom1 = 10, Custom2 = 11, Custom3 = 12 }
        
        class UpdateContext extends System.Object {
            
        }
        
        interface IHitTest {
            
        }
        
        interface IKeyboard {
            
        }
        
        class NTexture extends System.Object {
            
        }
        
        class Controller extends FairyGUI.EventDispatcher {
            
            public name: string;
            
            public get onChanged(): FairyGUI.EventListener;
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectedPage(): string;
            public set selectedPage(value: string);
            
            public get previsousIndex(): number;
            
            public get previousPage(): string;
            
            public get pageCount(): number;
            
            public constructor();
            
            public Dispose():void;
            
            public SetSelectedIndex($value: number):void;
            
            public SetSelectedPage($value: string):void;
            
            public GetPageName($index: number):string;
            
            public GetPageId($index: number):string;
            
            public GetPageIdByName($aName: string):string;
            
            public AddPage($name: string):void;
            
            public AddPageAt($name: string, $index: number):void;
            
            public RemovePage($name: string):void;
            
            public RemovePageAt($index: number):void;
            
            public ClearPages():void;
            
            public HasPage($aName: string):boolean;
            
            public RunActions():void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
        }
        
        class PackageItem extends System.Object {
            
        }
        
        class Relations extends System.Object {
            
            public handling: FairyGUI.GObject;
            
            public get isEmpty(): boolean;
            
            public constructor($owner: FairyGUI.GObject);
            
            public Add($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public Add($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean):void;
            
            public Remove($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType):void;
            
            public Contains($target: FairyGUI.GObject):boolean;
            
            public ClearFor($target: FairyGUI.GObject):void;
            
            public ClearAll():void;
            
            public CopyFrom($source: FairyGUI.Relations):void;
            
            public Dispose():void;
            
            public OnOwnerSizeChanged($dWidth: number, $dHeight: number, $applyPivot: boolean):void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer, $parentToChild: boolean):void;
            
            public constructor();
            
        }
        
        class GComponent extends FairyGUI.GObject {
            
            public get rootContainer(): FairyGUI.Container;
            
            public get container(): FairyGUI.Container;
            
            public get scrollPane(): FairyGUI.ScrollPane;
            
            public get onDrop(): FairyGUI.EventListener;
            
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            
            public get opaque(): boolean;
            public set opaque(value: boolean);
            
            public get margin(): FairyGUI.Margin;
            public set margin(value: FairyGUI.Margin);
            
            public get childrenRenderOrder(): FairyGUI.ChildrenRenderOrder;
            public set childrenRenderOrder(value: FairyGUI.ChildrenRenderOrder);
            
            public get apexIndex(): number;
            public set apexIndex(value: number);
            
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            
            public get numChildren(): number;
            
            public get Controllers(): System.Collections.Generic.List$1<FairyGUI.Controller>;
            
            public get clipSoftness(): UnityEngine.Vector2;
            public set clipSoftness(value: UnityEngine.Vector2);
            
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            
            public get reversedMask(): boolean;
            public set reversedMask(value: boolean);
            
            public get baseUserData(): string;
            
            public get viewWidth(): number;
            public set viewWidth(value: number);
            
            public get viewHeight(): number;
            public set viewHeight(value: number);
            
            public constructor();
            
            public InvalidateBatchingState($childChanged: boolean):void;
            
            public AddChild($child: FairyGUI.GObject):FairyGUI.GObject;
            
            public AddChildAt($child: FairyGUI.GObject, $index: number):FairyGUI.GObject;
            
            public RemoveChild($child: FairyGUI.GObject):FairyGUI.GObject;
            
            public RemoveChild($child: FairyGUI.GObject, $dispose: boolean):FairyGUI.GObject;
            
            public RemoveChildAt($index: number):FairyGUI.GObject;
            
            public RemoveChildAt($index: number, $dispose: boolean):FairyGUI.GObject;
            
            public RemoveChildren():void;
            
            public RemoveChildren($beginIndex: number, $endIndex: number, $dispose: boolean):void;
            
            public GetChildAt($index: number):FairyGUI.GObject;
            
            public GetChild($name: string):FairyGUI.GObject;
            
            public GetChildByPath($path: string):FairyGUI.GObject;
            
            public GetVisibleChild($name: string):FairyGUI.GObject;
            
            public GetChildInGroup($group: FairyGUI.GGroup, $name: string):FairyGUI.GObject;
            
            public GetChildren():System.Array$1<FairyGUI.GObject>;
            
            public GetChildIndex($child: FairyGUI.GObject):number;
            
            public SetChildIndex($child: FairyGUI.GObject, $index: number):void;
            
            public SetChildIndexBefore($child: FairyGUI.GObject, $index: number):number;
            
            public SwapChildren($child1: FairyGUI.GObject, $child2: FairyGUI.GObject):void;
            
            public SwapChildrenAt($index1: number, $index2: number):void;
            
            public IsAncestorOf($obj: FairyGUI.GObject):boolean;
            
            public ChangeChildrenOrder($objs: System.Collections.Generic.IList$1<FairyGUI.GObject>):void;
            
            public AddController($controller: FairyGUI.Controller):void;
            
            public GetControllerAt($index: number):FairyGUI.Controller;
            
            public GetController($name: string):FairyGUI.Controller;
            
            public RemoveController($c: FairyGUI.Controller):void;
            
            public GetTransitionAt($index: number):FairyGUI.Transition;
            
            public GetTransition($name: string):FairyGUI.Transition;
            
            public IsChildInView($child: FairyGUI.GObject):boolean;
            
            public GetFirstChildInView():number;
            
            public SetBoundsChangedFlag():void;
            
            public EnsureBoundsCorrect():void;
            
            public ConstructFromXML($xml: FairyGUI.Utils.XML):void;
            
            public InvalidateBatchingState():void;
            
        }
        
        class GearXY extends FairyGUI.GearBase {
            
        }
        
        class GearBase extends System.Object {
            
        }
        
        class GearSize extends FairyGUI.GearBase {
            
        }
        
        class GearLook extends FairyGUI.GearBase {
            
        }
        
        enum RelationType { Left_Left = 0, Left_Center = 1, Left_Right = 2, Center_Center = 3, Right_Left = 4, Right_Center = 5, Right_Right = 6, Top_Top = 7, Top_Middle = 8, Top_Bottom = 9, Middle_Middle = 10, Bottom_Top = 11, Bottom_Middle = 12, Bottom_Bottom = 13, Width = 14, Height = 15, LeftExt_Left = 16, LeftExt_Right = 17, RightExt_Left = 18, RightExt_Right = 19, TopExt_Top = 20, TopExt_Bottom = 21, BottomExt_Top = 22, BottomExt_Bottom = 23, Size = 24 }
        
        class GGroup extends FairyGUI.GObject {
            
            public get layout(): FairyGUI.GroupLayoutType;
            public set layout(value: FairyGUI.GroupLayoutType);
            
            public get lineGap(): number;
            public set lineGap(value: number);
            
            public get columnGap(): number;
            public set columnGap(value: number);
            
            public get excludeInvisibles(): boolean;
            public set excludeInvisibles(value: boolean);
            
            public get autoSizeDisabled(): boolean;
            public set autoSizeDisabled(value: boolean);
            
            public get mainGridMinSize(): number;
            public set mainGridMinSize(value: number);
            
            public get mainGridIndex(): number;
            public set mainGridIndex(value: number);
            
            public constructor();
            
            public SetBoundsChangedFlag($positionChangedOnly?: boolean):void;
            
            public EnsureBoundsCorrect():void;
            
        }
        
        class GRoot extends FairyGUI.GComponent {
            
            public static get contentScaleFactor(): number;
            
            public static get contentScaleLevel(): number;
            
            public static get inst(): FairyGUI.GRoot;
            
            public get modalLayer(): FairyGUI.GGraph;
            
            public get hasModalWindow(): boolean;
            
            public get modalWaiting(): boolean;
            
            public get touchTarget(): FairyGUI.GObject;
            
            public get hasAnyPopup(): boolean;
            
            public get focus(): FairyGUI.GObject;
            public set focus(value: FairyGUI.GObject);
            
            public get soundVolume(): number;
            public set soundVolume(value: number);
            
            public constructor();
            
            public SetContentScaleFactor($designResolutionX: number, $designResolutionY: number):void;
            
            public SetContentScaleFactor($designResolutionX: number, $designResolutionY: number, $screenMatchMode: FairyGUI.UIContentScaler.ScreenMatchMode):void;
            
            public SetContentScaleFactor($constantScaleFactor: number):void;
            
            public ApplyContentScaleFactor():void;
            
            public ShowWindow($win: FairyGUI.Window):void;
            
            public HideWindow($win: FairyGUI.Window):void;
            
            public HideWindowImmediately($win: FairyGUI.Window):void;
            
            public HideWindowImmediately($win: FairyGUI.Window, $dispose: boolean):void;
            
            public BringToFront($win: FairyGUI.Window):void;
            
            public ShowModalWait():void;
            
            public CloseModalWait():void;
            
            public CloseAllExceptModals():void;
            
            public CloseAllWindows():void;
            
            public GetTopWindow():FairyGUI.Window;
            
            public DisplayObjectToGObject($obj: FairyGUI.DisplayObject):FairyGUI.GObject;
            
            public ShowPopup($popup: FairyGUI.GObject):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public ShowPopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean):void;
            
            public GetPoupPosition($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):UnityEngine.Vector2;
            
            public TogglePopup($popup: FairyGUI.GObject):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public TogglePopup($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean):void;
            
            public HidePopup():void;
            
            public HidePopup($popup: FairyGUI.GObject):void;
            
            public ShowTooltips($msg: string):void;
            
            public ShowTooltips($msg: string, $delay: number):void;
            
            public ShowTooltipsWin($tooltipWin: FairyGUI.GObject):void;
            
            public ShowTooltipsWin($tooltipWin: FairyGUI.GObject, $delay: number):void;
            
            public HideTooltips():void;
            
            public EnableSound():void;
            
            public DisableSound():void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            
            public PlayOneShotSound($clip: UnityEngine.AudioClip):void;
            
        }
        
        class GImage extends FairyGUI.GObject {
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            
            public get fillAmount(): number;
            public set fillAmount(value: number);
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public constructor();
            
        }
        
        class GButton extends FairyGUI.GComponent {
            
            public sound: FairyGUI.NAudioClip;
            
            public soundVolumeScale: number;
            
            public changeStateOnClick: boolean;
            
            public linkedPopup: FairyGUI.GObject;
            
            public static UP: string;
            
            public static DOWN: string;
            
            public static OVER: string;
            
            public static SELECTED_OVER: string;
            
            public static DISABLED: string;
            
            public static SELECTED_DISABLED: string;
            
            public get onChanged(): FairyGUI.EventListener;
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get selectedIcon(): string;
            public set selectedIcon(value: string);
            
            public get selectedTitle(): string;
            public set selectedTitle(value: string);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get selected(): boolean;
            public set selected(value: boolean);
            
            public get mode(): FairyGUI.ButtonMode;
            public set mode(value: FairyGUI.ButtonMode);
            
            public get relatedController(): FairyGUI.Controller;
            public set relatedController(value: FairyGUI.Controller);
            
            public get relatedPageId(): string;
            public set relatedPageId(value: string);
            
            public constructor();
            
            public FireClick($downEffect: boolean, $clickCall?: boolean):void;
            
            public GetTextField():FairyGUI.GTextField;
            
        }
        
        class GLabel extends FairyGUI.GComponent {
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get editable(): boolean;
            public set editable(value: boolean);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public constructor();
            
            public GetTextField():FairyGUI.GTextField;
            
        }
        
        class GProgressBar extends FairyGUI.GComponent {
            
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            
            public get min(): number;
            public set min(value: number);
            
            public get max(): number;
            public set max(value: number);
            
            public get value(): number;
            public set value(value: number);
            
            public get reverse(): boolean;
            public set reverse(value: boolean);
            
            public constructor();
            
            public TweenValue($value: number, $duration: number):FairyGUI.GTweener;
            
            public Update($newValue: number):void;
            
        }
        
        class GSlider extends FairyGUI.GComponent {
            
            public changeOnClick: boolean;
            
            public canDrag: boolean;
            
            public get onChanged(): FairyGUI.EventListener;
            
            public get onGripTouchEnd(): FairyGUI.EventListener;
            
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            
            public get min(): number;
            public set min(value: number);
            
            public get max(): number;
            public set max(value: number);
            
            public get value(): number;
            public set value(value: number);
            
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            
            public constructor();
            
        }
        
        class GComboBox extends FairyGUI.GComponent {
            
            public visibleItemCount: number;
            
            public dropdown: FairyGUI.GComponent;
            
            public get onChanged(): FairyGUI.EventListener;
            
            public get icon(): string;
            public set icon(value: string);
            
            public get title(): string;
            public set title(value: string);
            
            public get text(): string;
            public set text(value: string);
            
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            
            public get items(): System.Array$1<string>;
            public set items(value: System.Array$1<string>);
            
            public get icons(): System.Array$1<string>;
            public set icons(value: System.Array$1<string>);
            
            public get values(): System.Array$1<string>;
            public set values(value: System.Array$1<string>);
            
            public get itemList(): System.Collections.Generic.List$1<string>;
            
            public get valueList(): System.Collections.Generic.List$1<string>;
            
            public get iconList(): System.Collections.Generic.List$1<string>;
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            
            public get value(): string;
            public set value(value: string);
            
            public get popupDirection(): FairyGUI.PopupDirection;
            public set popupDirection(value: FairyGUI.PopupDirection);
            
            public constructor();
            
            public ApplyListChange():void;
            
            public GetTextField():FairyGUI.GTextField;
            
            public UpdateDropdownList():void;
            
        }
        
        class GTextField extends FairyGUI.GObject {
            
            public get text(): string;
            public set text(value: string);
            
            public get templateVars(): System.Collections.Generic.Dictionary$2<string, string>;
            public set templateVars(value: System.Collections.Generic.Dictionary$2<string, string>);
            
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get singleLine(): boolean;
            public set singleLine(value: boolean);
            
            public get stroke(): number;
            public set stroke(value: number);
            
            public get strokeColor(): UnityEngine.Color;
            public set strokeColor(value: UnityEngine.Color);
            
            public get shadowOffset(): UnityEngine.Vector2;
            public set shadowOffset(value: UnityEngine.Vector2);
            
            public get UBBEnabled(): boolean;
            public set UBBEnabled(value: boolean);
            
            public get autoSize(): FairyGUI.AutoSizeType;
            public set autoSize(value: FairyGUI.AutoSizeType);
            
            public get textWidth(): number;
            
            public get textHeight(): number;
            
            public constructor();
            
            public SetVar($name: string, $value: string):FairyGUI.GTextField;
            
            public FlushVars():void;
            
            public HasCharacter($ch: number):boolean;
            
        }
        
        class GRichTextField extends FairyGUI.GTextField {
            
            public get richTextField(): FairyGUI.RichTextField;
            
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            
            public constructor();
            
        }
        
        class GTextInput extends FairyGUI.GTextField {
            
            public get inputTextField(): FairyGUI.InputTextField;
            
            public get onChanged(): FairyGUI.EventListener;
            
            public get onSubmit(): FairyGUI.EventListener;
            
            public get editable(): boolean;
            public set editable(value: boolean);
            
            public get hideInput(): boolean;
            public set hideInput(value: boolean);
            
            public get maxLength(): number;
            public set maxLength(value: number);
            
            public get restrict(): string;
            public set restrict(value: string);
            
            public get displayAsPassword(): boolean;
            public set displayAsPassword(value: boolean);
            
            public get caretPosition(): number;
            public set caretPosition(value: number);
            
            public get promptText(): string;
            public set promptText(value: string);
            
            public get keyboardInput(): boolean;
            public set keyboardInput(value: boolean);
            
            public get keyboardType(): number;
            public set keyboardType(value: number);
            
            public get disableIME(): boolean;
            public set disableIME(value: boolean);
            
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            
            public get border(): number;
            public set border(value: number);
            
            public get corner(): number;
            public set corner(value: number);
            
            public get borderColor(): UnityEngine.Color;
            public set borderColor(value: UnityEngine.Color);
            
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            
            public constructor();
            
            public SetSelection($start: number, $length: number):void;
            
            public ReplaceSelection($value: string):void;
            
        }
        
        class GLoader extends FairyGUI.GObject {
            
            public showErrorSign: boolean;
            
            public get url(): string;
            public set url(value: string);
            
            public get icon(): string;
            public set icon(value: string);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get fill(): FairyGUI.FillType;
            public set fill(value: FairyGUI.FillType);
            
            public get shrinkOnly(): boolean;
            public set shrinkOnly(value: boolean);
            
            public get autoSize(): boolean;
            public set autoSize(value: boolean);
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            
            public get fillAmount(): number;
            public set fillAmount(value: number);
            
            public get image(): FairyGUI.Image;
            
            public get movieClip(): FairyGUI.MovieClip;
            
            public get component(): FairyGUI.GComponent;
            
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            
            public constructor();
            
            public Advance($time: number):void;
            
        }
        
        class GLoader3D extends FairyGUI.GObject {
            
        }
        
        class GList extends FairyGUI.GComponent {
            
            public defaultItem: string;
            
            public foldInvisibleItems: boolean;
            
            public selectionMode: FairyGUI.ListSelectionMode;
            
            public itemRenderer: FairyGUI.ListItemRenderer;
            
            public itemProvider: FairyGUI.ListItemProvider;
            
            public scrollItemToViewOnClick: boolean;
            
            public get onClickItem(): FairyGUI.EventListener;
            
            public get onRightClickItem(): FairyGUI.EventListener;
            
            public get layout(): FairyGUI.ListLayoutType;
            public set layout(value: FairyGUI.ListLayoutType);
            
            public get lineCount(): number;
            public set lineCount(value: number);
            
            public get columnCount(): number;
            public set columnCount(value: number);
            
            public get lineGap(): number;
            public set lineGap(value: number);
            
            public get columnGap(): number;
            public set columnGap(value: number);
            
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            
            public get autoResizeItem(): boolean;
            public set autoResizeItem(value: boolean);
            
            public get defaultItemSize(): UnityEngine.Vector2;
            public set defaultItemSize(value: UnityEngine.Vector2);
            
            public get itemPool(): FairyGUI.GObjectPool;
            
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            
            public get touchItem(): FairyGUI.GObject;
            
            public get isVirtual(): boolean;
            
            public get numItems(): number;
            public set numItems(value: number);
            
            public constructor();
            
            public GetFromPool($url: string):FairyGUI.GObject;
            
            public AddItemFromPool():FairyGUI.GObject;
            
            public AddItemFromPool($url: string):FairyGUI.GObject;
            
            public RemoveChildToPoolAt($index: number):void;
            
            public RemoveChildToPool($child: FairyGUI.GObject):void;
            
            public RemoveChildrenToPool():void;
            
            public RemoveChildrenToPool($beginIndex: number, $endIndex: number):void;
            
            public GetSelection():System.Collections.Generic.List$1<number>;
            
            public GetSelection($result: System.Collections.Generic.List$1<number>):System.Collections.Generic.List$1<number>;
            
            public AddSelection($index: number, $scrollItToView: boolean):void;
            
            public RemoveSelection($index: number):void;
            
            public ClearSelection():void;
            
            public SelectAll():void;
            
            public SelectNone():void;
            
            public SelectReverse():void;
            
            public EnableSelectionFocusEvents($enabled: boolean):void;
            
            public EnableArrowKeyNavigation($enabled: boolean):void;
            
            public HandleArrowKey($dir: number):number;
            
            public ResizeToFit():void;
            
            public ResizeToFit($itemCount: number):void;
            
            public ResizeToFit($itemCount: number, $minSize: number):void;
            
            public ScrollToView($index: number):void;
            
            public ScrollToView($index: number, $ani: boolean):void;
            
            public ScrollToView($index: number, $ani: boolean, $setFirst: boolean):void;
            
            public ChildIndexToItemIndex($index: number):number;
            
            public ItemIndexToChildIndex($index: number):number;
            
            public SetVirtual():void;
            
            public SetVirtualAndLoop():void;
            
            public RefreshVirtualList():void;
            
        }
        
        class GGraph extends FairyGUI.GObject {
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get shape(): FairyGUI.Shape;
            
            public constructor();
            
            public ReplaceMe($target: FairyGUI.GObject):void;
            
            public AddBeforeMe($target: FairyGUI.GObject):void;
            
            public AddAfterMe($target: FairyGUI.GObject):void;
            
            public SetNativeObject($obj: FairyGUI.DisplayObject):void;
            
            public DrawRect($aWidth: number, $aHeight: number, $lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color):void;
            
            public DrawRoundRect($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color, $corner: System.Array$1<number>):void;
            
            public DrawEllipse($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color):void;
            
            public DrawPolygon($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color):void;
            
            public DrawPolygon($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color, $lineSize: number, $lineColor: UnityEngine.Color):void;
            
        }
        
        class GMovieClip extends FairyGUI.GObject {
            
            public get onPlayEnd(): FairyGUI.EventListener;
            
            public get playing(): boolean;
            public set playing(value: boolean);
            
            public get frame(): number;
            public set frame(value: number);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            
            public get shader(): string;
            public set shader(value: string);
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            public constructor();
            
            public Rewind():void;
            
            public SyncStatus($anotherMc: FairyGUI.GMovieClip):void;
            
            public Advance($time: number):void;
            
            public SetPlaySettings($start: number, $end: number, $times: number, $endAt: number):void;
            
        }
        
        class GTree extends FairyGUI.GList {
            
        }
        
        class GTreeNode extends System.Object {
            
        }
        
        class GTweener extends System.Object {
            
            public get delay(): number;
            
            public get duration(): number;
            
            public get repeat(): number;
            
            public get target(): any;
            
            public get userData(): any;
            
            public get startValue(): FairyGUI.TweenValue;
            
            public get endValue(): FairyGUI.TweenValue;
            
            public get value(): FairyGUI.TweenValue;
            
            public get deltaValue(): FairyGUI.TweenValue;
            
            public get normalizedTime(): number;
            
            public get completed(): boolean;
            
            public get allCompleted(): boolean;
            
            public constructor();
            
            public SetDelay($value: number):FairyGUI.GTweener;
            
            public SetDuration($value: number):FairyGUI.GTweener;
            
            public SetBreakpoint($value: number):FairyGUI.GTweener;
            
            public SetEase($value: FairyGUI.EaseType):FairyGUI.GTweener;
            
            public SetEase($value: FairyGUI.EaseType, $customEase: FairyGUI.CustomEase):FairyGUI.GTweener;
            
            public SetEasePeriod($value: number):FairyGUI.GTweener;
            
            public SetEaseOvershootOrAmplitude($value: number):FairyGUI.GTweener;
            
            public SetRepeat($times: number, $yoyo?: boolean):FairyGUI.GTweener;
            
            public SetTimeScale($value: number):FairyGUI.GTweener;
            
            public SetIgnoreEngineTimeScale($value: boolean):FairyGUI.GTweener;
            
            public SetSnapping($value: boolean):FairyGUI.GTweener;
            
            public SetPath($value: FairyGUI.GPath):FairyGUI.GTweener;
            
            public SetTarget($value: any):FairyGUI.GTweener;
            
            public SetTarget($value: any, $propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            
            public SetUserData($value: any):FairyGUI.GTweener;
            
            public OnUpdate($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnStart($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnComplete($callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            
            public OnUpdate($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public OnStart($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public OnComplete($callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            
            public SetListener($value: FairyGUI.ITweenListener):FairyGUI.GTweener;
            
            public SetPaused($paused: boolean):FairyGUI.GTweener;
            
            public Seek($time: number):void;
            
            public Kill($complete?: boolean):void;
            
        }
        
        class Shape extends FairyGUI.DisplayObject {
            
        }
        
        enum GroupLayoutType { None = 0, Horizontal = 1, Vertical = 2 }
        
        enum FlipType { None = 0, Horizontal = 1, Vertical = 2, Both = 3 }
        
        enum FillMethod { None = 0, Horizontal = 1, Vertical = 2, Radial90 = 3, Radial180 = 4, Radial360 = 5 }
        
        enum AlignType { Left = 0, Center = 1, Right = 2 }
        
        enum VertAlignType { Top = 0, Middle = 1, Bottom = 2 }
        
        enum FillType { None = 0, Scale = 1, ScaleMatchHeight = 2, ScaleMatchWidth = 3, ScaleFree = 4, ScaleNoBorder = 5 }
        
        class Image extends FairyGUI.DisplayObject {
            
        }
        
        class MovieClip extends FairyGUI.Image {
            
        }
        
        class TextFormat extends System.Object {
            
            public size: number;
            
            public font: string;
            
            public color: UnityEngine.Color;
            
            public lineSpacing: number;
            
            public letterSpacing: number;
            
            public bold: boolean;
            
            public underline: boolean;
            
            public italic: boolean;
            
            public strikethrough: boolean;
            
            public gradientColor: System.Array$1<UnityEngine.Color32>;
            
            public align: FairyGUI.AlignType;
            
            public specialStyle: FairyGUI.TextFormat.SpecialStyle;
            
            public outline: number;
            
            public outlineColor: UnityEngine.Color;
            
            public shadowOffset: UnityEngine.Vector2;
            
            public shadowColor: UnityEngine.Color;
            
            public constructor();
            
            public SetColor($value: number):void;
            
            public EqualStyle($aFormat: FairyGUI.TextFormat):boolean;
            
            public CopyFrom($source: FairyGUI.TextFormat):void;
            
            public FillVertexColors($vertexColors: System.Array$1<UnityEngine.Color32>):void;
            
        }
        
        enum AutoSizeType { None = 0, Both = 1, Height = 2, Shrink = 3 }
        
        class RichTextField extends FairyGUI.Container {
            
        }
        
        class Emoji extends System.Object {
            
        }
        
        class InputTextField extends FairyGUI.RichTextField {
            
        }
        
        class ScrollPane extends FairyGUI.EventDispatcher {
            
            public static TWEEN_TIME_GO: number;
            
            public static TWEEN_TIME_DEFAULT: number;
            
            public static PULL_RATIO: number;
            
            public static get draggingPane(): FairyGUI.ScrollPane;
            
            public get onScroll(): FairyGUI.EventListener;
            
            public get onScrollEnd(): FairyGUI.EventListener;
            
            public get onPullDownRelease(): FairyGUI.EventListener;
            
            public get onPullUpRelease(): FairyGUI.EventListener;
            
            public get owner(): FairyGUI.GComponent;
            
            public get hzScrollBar(): FairyGUI.GScrollBar;
            
            public get vtScrollBar(): FairyGUI.GScrollBar;
            
            public get header(): FairyGUI.GComponent;
            
            public get footer(): FairyGUI.GComponent;
            
            public get bouncebackEffect(): boolean;
            public set bouncebackEffect(value: boolean);
            
            public get touchEffect(): boolean;
            public set touchEffect(value: boolean);
            
            public get inertiaDisabled(): boolean;
            public set inertiaDisabled(value: boolean);
            
            public get softnessOnTopOrLeftSide(): boolean;
            public set softnessOnTopOrLeftSide(value: boolean);
            
            public get scrollStep(): number;
            public set scrollStep(value: number);
            
            public get snapToItem(): boolean;
            public set snapToItem(value: boolean);
            
            public get pageMode(): boolean;
            public set pageMode(value: boolean);
            
            public get pageController(): FairyGUI.Controller;
            public set pageController(value: FairyGUI.Controller);
            
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            
            public get decelerationRate(): number;
            public set decelerationRate(value: number);
            
            public get isDragged(): boolean;
            
            public get percX(): number;
            public set percX(value: number);
            
            public get percY(): number;
            public set percY(value: number);
            
            public get posX(): number;
            public set posX(value: number);
            
            public get posY(): number;
            public set posY(value: number);
            
            public get isBottomMost(): boolean;
            
            public get isRightMost(): boolean;
            
            public get currentPageX(): number;
            public set currentPageX(value: number);
            
            public get currentPageY(): number;
            public set currentPageY(value: number);
            
            public get scrollingPosX(): number;
            
            public get scrollingPosY(): number;
            
            public get contentWidth(): number;
            
            public get contentHeight(): number;
            
            public get viewWidth(): number;
            public set viewWidth(value: number);
            
            public get viewHeight(): number;
            public set viewHeight(value: number);
            
            public constructor($owner: FairyGUI.GComponent);
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public Dispose():void;
            
            public SetPercX($value: number, $ani: boolean):void;
            
            public SetPercY($value: number, $ani: boolean):void;
            
            public SetPosX($value: number, $ani: boolean):void;
            
            public SetPosY($value: number, $ani: boolean):void;
            
            public SetCurrentPageX($value: number, $ani: boolean):void;
            
            public SetCurrentPageY($value: number, $ani: boolean):void;
            
            public ScrollTop():void;
            
            public ScrollTop($ani: boolean):void;
            
            public ScrollBottom():void;
            
            public ScrollBottom($ani: boolean):void;
            
            public ScrollUp():void;
            
            public ScrollUp($ratio: number, $ani: boolean):void;
            
            public ScrollDown():void;
            
            public ScrollDown($ratio: number, $ani: boolean):void;
            
            public ScrollLeft():void;
            
            public ScrollLeft($ratio: number, $ani: boolean):void;
            
            public ScrollRight():void;
            
            public ScrollRight($ratio: number, $ani: boolean):void;
            
            public ScrollToView($obj: FairyGUI.GObject):void;
            
            public ScrollToView($obj: FairyGUI.GObject, $ani: boolean):void;
            
            public ScrollToView($obj: FairyGUI.GObject, $ani: boolean, $setFirst: boolean):void;
            
            public ScrollToView($rect: UnityEngine.Rect, $ani: boolean, $setFirst: boolean):void;
            
            public IsChildInView($obj: FairyGUI.GObject):boolean;
            
            public CancelDragging():void;
            
            public LockHeader($size: number):void;
            
            public LockFooter($size: number):void;
            
            public UpdateScrollBarVisible():void;
            
            public constructor();
            
        }
        
        enum ChildrenRenderOrder { Ascent = 0, Descent = 1, Arch = 2 }
        
        class Transition extends System.Object {
            
            public invalidateBatchingEveryFrame: boolean;
            
            public get name(): string;
            
            public get playing(): boolean;
            
            public get timeScale(): number;
            public set timeScale(value: number);
            
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            
            public constructor($owner: FairyGUI.GComponent);
            
            public Play():void;
            
            public Play($onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public Play($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public Play($times: number, $delay: number, $startTime: number, $endTime: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public PlayReverse():void;
            
            public PlayReverse($onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public PlayReverse($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback):void;
            
            public ChangePlayTimes($value: number):void;
            
            public SetAutoPlay($autoPlay: boolean, $times: number, $delay: number):void;
            
            public Stop():void;
            
            public Stop($setToComplete: boolean, $processCallback: boolean):void;
            
            public SetPaused($paused: boolean):void;
            
            public Dispose():void;
            
            public SetValue($label: string, ...aParams: any[]):void;
            
            public SetHook($label: string, $callback: FairyGUI.TransitionHook):void;
            
            public ClearHooks():void;
            
            public SetTarget($label: string, $newTarget: FairyGUI.GObject):void;
            
            public SetDuration($label: string, $value: number):void;
            
            public GetLabelTime($label: string):number;
            
            public OnTweenStart($tweener: FairyGUI.GTweener):void;
            
            public OnTweenUpdate($tweener: FairyGUI.GTweener):void;
            
            public OnTweenComplete($tweener: FairyGUI.GTweener):void;
            
            public Setup($buffer: FairyGUI.Utils.ByteBuffer):void;
            
            public constructor();
            
        }
        
        enum ListSelectionMode { Single = 0, Multiple = 1, Multiple_SingleClick = 2, None = 3 }
        
        type ListItemRenderer = (index: number, item: FairyGUI.GObject) => void;
        var ListItemRenderer: {new (func: (index: number, item: FairyGUI.GObject) => void): ListItemRenderer;}
        
        type ListItemProvider = (index: number) => string;
        var ListItemProvider: {new (func: (index: number) => string): ListItemProvider;}
        
        enum ListLayoutType { SingleColumn = 0, SingleRow = 1, FlowHorizontal = 2, FlowVertical = 3, Pagination = 4 }
        
        class GObjectPool extends System.Object {
            
            public initCallback: FairyGUI.GObjectPool.InitCallbackDelegate;
            
            public get count(): number;
            
            public constructor($manager: UnityEngine.Transform);
            
            public Clear():void;
            
            public GetObject($url: string):FairyGUI.GObject;
            
            public ReturnObject($obj: FairyGUI.GObject):void;
            
            public constructor();
            
        }
        
        class Window extends FairyGUI.GComponent {
            
            public bringToFontOnClick: boolean;
            
            public get contentPane(): FairyGUI.GComponent;
            public set contentPane(value: FairyGUI.GComponent);
            
            public get frame(): FairyGUI.GComponent;
            
            public get closeButton(): FairyGUI.GObject;
            public set closeButton(value: FairyGUI.GObject);
            
            public get dragArea(): FairyGUI.GObject;
            public set dragArea(value: FairyGUI.GObject);
            
            public get contentArea(): FairyGUI.GObject;
            public set contentArea(value: FairyGUI.GObject);
            
            public get modalWaitingPane(): FairyGUI.GObject;
            
            public get isShowing(): boolean;
            
            public get isTop(): boolean;
            
            public get modal(): boolean;
            public set modal(value: boolean);
            
            public get modalWaiting(): boolean;
            
            public constructor();
            
            public AddUISource($source: FairyGUI.IUISource):void;
            
            public Show():void;
            
            public ShowOn($r: FairyGUI.GRoot):void;
            
            public Hide():void;
            
            public HideImmediately():void;
            
            public CenterOn($r: FairyGUI.GRoot, $restraint: boolean):void;
            
            public ToggleStatus():void;
            
            public BringToFront():void;
            
            public ShowModalWait():void;
            
            public ShowModalWait($requestingCmd: number):void;
            
            public CloseModalWait():boolean;
            
            public CloseModalWait($requestingCmd: number):boolean;
            
            public Init():void;
            
        }
        
        enum PopupDirection { Auto = 0, Up = 1, Down = 2 }
        
        class NAudioClip extends System.Object {
            
        }
        
        enum ButtonMode { Common = 0, Check = 1, Radio = 2 }
        
        enum ProgressTitleType { Percent = 0, ValueAndMax = 1, Value = 2, Max = 3 }
        
        class PopupMenu extends FairyGUI.EventDispatcher {
            
            public visibleItemCount: number;
            
            public hideOnClickItem: boolean;
            
            public autoSize: boolean;
            
            public get onPopup(): FairyGUI.EventListener;
            
            public get onClose(): FairyGUI.EventListener;
            
            public get itemCount(): number;
            
            public get contentPane(): FairyGUI.GComponent;
            
            public get list(): FairyGUI.GList;
            
            public constructor();
            
            public constructor($resourceURL: string);
            
            public AddItem($caption: string, $callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            
            public AddItem($caption: string, $callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            
            public AddItemAt($caption: string, $index: number, $callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            
            public AddItemAt($caption: string, $index: number, $callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            
            public AddSeperator():void;
            
            public AddSeperator($index: number):void;
            
            public GetItemName($index: number):string;
            
            public SetItemText($name: string, $caption: string):void;
            
            public SetItemVisible($name: string, $visible: boolean):void;
            
            public SetItemGrayed($name: string, $grayed: boolean):void;
            
            public SetItemCheckable($name: string, $checkable: boolean):void;
            
            public SetItemChecked($name: string, $check: boolean):void;
            
            public IsItemChecked($name: string):boolean;
            
            public RemoveItem($name: string):void;
            
            public ClearItems():void;
            
            public Dispose():void;
            
            public Show():void;
            
            public Show($target: FairyGUI.GObject):void;
            
            public Show($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection):void;
            
            public Show($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $parentMenu: FairyGUI.PopupMenu):void;
            
            public Hide():void;
            
        }
        
        class GScrollBar extends FairyGUI.GComponent {
            
        }
        
        type PlayCompleteCallback = () => void;
        var PlayCompleteCallback: {new (func: () => void): PlayCompleteCallback;}
        
        type TransitionHook = () => void;
        var TransitionHook: {new (func: () => void): TransitionHook;}
        
        class UIPackage extends System.Object {
            
            public static unloadBundleByFGUI: boolean;
            
            public static URL_PREFIX: string;
            
            public get id(): string;
            
            public get name(): string;
            
            public static get branch(): string;
            public static set branch(value: string);
            
            public get assetPath(): string;
            
            public get customId(): string;
            public set customId(value: string);
            
            public get resBundle(): UnityEngine.AssetBundle;
            
            public get dependencies(): System.Array$1<System.Collections.Generic.Dictionary$2<string, string>>;
            
            public constructor();
            
            public static add_onReleaseResource($value: System.Action$1<FairyGUI.PackageItem>):void;
            
            public static remove_onReleaseResource($value: System.Action$1<FairyGUI.PackageItem>):void;
            
            public static GetVar($key: string):string;
            
            public static SetVar($key: string, $value: string):void;
            
            public static GetById($id: string):FairyGUI.UIPackage;
            
            public static GetByName($name: string):FairyGUI.UIPackage;
            
            public static AddPackage($bundle: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            
            public static AddPackage($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            
            public static AddPackage($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle, $mainAssetName: string):FairyGUI.UIPackage;
            
            public static AddPackage($descFilePath: string):FairyGUI.UIPackage;
            
            public static AddPackage($assetPath: string, $loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            
            public static AddPackage($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            
            public static AddPackage($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResourceAsync):FairyGUI.UIPackage;
            
            public static RemovePackage($packageIdOrName: string):void;
            
            public static RemoveAllPackages():void;
            
            public static GetPackages():System.Collections.Generic.List$1<FairyGUI.UIPackage>;
            
            public static CreateObject($pkgName: string, $resName: string):FairyGUI.GObject;
            
            public static CreateObject($pkgName: string, $resName: string, $userClass: System.Type):FairyGUI.GObject;
            
            public static CreateObjectFromURL($url: string):FairyGUI.GObject;
            
            public static CreateObjectFromURL($url: string, $userClass: System.Type):FairyGUI.GObject;
            
            public static CreateObjectAsync($pkgName: string, $resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public static CreateObjectFromURL($url: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public static GetItemAsset($pkgName: string, $resName: string):any;
            
            public static GetItemAssetByURL($url: string):any;
            
            public static GetItemURL($pkgName: string, $resName: string):string;
            
            public static GetItemByURL($url: string):FairyGUI.PackageItem;
            
            public static NormalizeURL($url: string):string;
            
            public static SetStringsSource($source: FairyGUI.Utils.XML):void;
            
            public LoadAllAssets():void;
            
            public UnloadAssets():void;
            
            public ReloadAssets():void;
            
            public ReloadAssets($resBundle: UnityEngine.AssetBundle):void;
            
            public CreateObject($resName: string):FairyGUI.GObject;
            
            public CreateObject($resName: string, $userClass: System.Type):FairyGUI.GObject;
            
            public CreateObjectAsync($resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            
            public GetItemAsset($resName: string):any;
            
            public GetItems():System.Collections.Generic.List$1<FairyGUI.PackageItem>;
            
            public GetItem($itemId: string):FairyGUI.PackageItem;
            
            public GetItemByName($itemName: string):FairyGUI.PackageItem;
            
            public GetItemAsset($item: FairyGUI.PackageItem):any;
            
            public SetItemAsset($item: FairyGUI.PackageItem, $asset: any, $destroyMethod: FairyGUI.DestroyMethod):void;
            
        }
        
        enum DestroyMethod { Destroy = 0, Unload = 1, None = 2, ReleaseTemp = 3, Custom = 4 }
        
        interface IUISource {
            
        }
        
        class Timers extends System.Object {
            
            public static repeat: number;
            
            public static time: number;
            
            public static catchCallbackExceptions: boolean;
            
            public static get inst(): FairyGUI.Timers;
            
            public constructor();
            
            public Add($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback):void;
            
            public Add($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public CallLater($callback: FairyGUI.TimerCallback):void;
            
            public CallLater($callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public AddUpdate($callback: FairyGUI.TimerCallback):void;
            
            public AddUpdate($callback: FairyGUI.TimerCallback, $callbackParam: any):void;
            
            public StartCoroutine($routine: System.Collections.IEnumerator):void;
            
            public Exists($callback: FairyGUI.TimerCallback):boolean;
            
            public Remove($callback: FairyGUI.TimerCallback):void;
            
            public Update():void;
            
        }
        
        type TimerCallback = (param: any) => void;
        var TimerCallback: {new (func: (param: any) => void): TimerCallback;}
        
        class GTween extends System.Object {
            
            public static catchCallbackExceptions: boolean;
            
            public constructor();
            
            public static To($startValue: number, $endValue: number, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector2, $endValue: UnityEngine.Vector2, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector3, $endValue: UnityEngine.Vector3, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Vector4, $endValue: UnityEngine.Vector4, $duration: number):FairyGUI.GTweener;
            
            public static To($startValue: UnityEngine.Color, $endValue: UnityEngine.Color, $duration: number):FairyGUI.GTweener;
            
            public static ToDouble($startValue: number, $endValue: number, $duration: number):FairyGUI.GTweener;
            
            public static DelayedCall($delay: number):FairyGUI.GTweener;
            
            public static Shake($startValue: UnityEngine.Vector3, $amplitude: number, $duration: number):FairyGUI.GTweener;
            
            public static IsTweening($target: any):boolean;
            
            public static IsTweening($target: any, $propType: FairyGUI.TweenPropType):boolean;
            
            public static Kill($target: any):void;
            
            public static Kill($target: any, $complete: boolean):void;
            
            public static Kill($target: any, $propType: FairyGUI.TweenPropType, $complete: boolean):void;
            
            public static GetTween($target: any):FairyGUI.GTweener;
            
            public static GetTween($target: any, $propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            
            public static Clean():void;
            
        }
        
        enum TweenPropType { None = 0, X = 1, Y = 2, Z = 3, XY = 4, Position = 5, Width = 6, Height = 7, Size = 8, ScaleX = 9, ScaleY = 10, Scale = 11, Rotation = 12, RotationX = 13, RotationY = 14, Alpha = 15, Progress = 16 }
        
        enum EaseType { Linear = 0, SineIn = 1, SineOut = 2, SineInOut = 3, QuadIn = 4, QuadOut = 5, QuadInOut = 6, CubicIn = 7, CubicOut = 8, CubicInOut = 9, QuartIn = 10, QuartOut = 11, QuartInOut = 12, QuintIn = 13, QuintOut = 14, QuintInOut = 15, ExpoIn = 16, ExpoOut = 17, ExpoInOut = 18, CircIn = 19, CircOut = 20, CircInOut = 21, ElasticIn = 22, ElasticOut = 23, ElasticInOut = 24, BackIn = 25, BackOut = 26, BackInOut = 27, BounceIn = 28, BounceOut = 29, BounceInOut = 30, Custom = 31 }
        
        class CustomEase extends System.Object {
            
        }
        
        class GPath extends System.Object {
            
        }
        
        type GTweenCallback = () => void;
        var GTweenCallback: {new (func: () => void): GTweenCallback;}
        
        type GTweenCallback1 = (tweener: FairyGUI.GTweener) => void;
        var GTweenCallback1: {new (func: (tweener: FairyGUI.GTweener) => void): GTweenCallback1;}
        
        interface ITweenListener {
            
        }
        
        class TweenValue extends System.Object {
            
            public x: number;
            
            public y: number;
            
            public z: number;
            
            public w: number;
            
            public d: number;
            
            public get vec2(): UnityEngine.Vector2;
            public set vec2(value: UnityEngine.Vector2);
            
            public get vec3(): UnityEngine.Vector3;
            public set vec3(value: UnityEngine.Vector3);
            
            public get vec4(): UnityEngine.Vector4;
            public set vec4(value: UnityEngine.Vector4);
            
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            
            public constructor();
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            
            public SetZero():void;
            
        }
        
        class UIObjectFactory extends System.Object {
            
            public constructor();
            
            public static SetPackageItemExtension($url: string, $type: System.Type):void;
            
            public static SetPackageItemExtension($url: string, $creator: FairyGUI.UIObjectFactory.GComponentCreator):void;
            
            public static SetLoaderExtension($type: System.Type):void;
            
            public static SetLoaderExtension($creator: FairyGUI.UIObjectFactory.GLoaderCreator):void;
            
            public static Clear():void;
            
            public static NewObject($pi: FairyGUI.PackageItem, $userClass?: System.Type):FairyGUI.GObject;
            
            public static NewObject($type: FairyGUI.ObjectType):FairyGUI.GObject;
            
        }
        
        enum ObjectType { Image = 0, MovieClip = 1, Swf = 2, Graph = 3, Loader = 4, Group = 5, Text = 6, RichText = 7, InputText = 8, Component = 9, List = 10, Label = 11, Button = 12, ComboBox = 13, ProgressBar = 14, Slider = 15, ScrollBar = 16, Tree = 17, Loader3D = 18 }
        
    }
    namespace System {
        
        class Object {
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
            public GetHashCode():number;
            
            public GetType():System.Type;
            
            public ToString():string;
            
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
        }
        
        class String extends System.Object {
            
        }
        
        class Void extends System.ValueType {
            
        }
        
        class ValueType extends System.Object {
            
        }
        
        class Boolean extends System.ValueType {
            
        }
        
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        
        class Delegate extends System.Object {
            
            public get Method(): System.Reflection.MethodInfo;
            
            public get Target(): any;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean):Function;
            
            public DynamicInvoke(...args: any[]):any;
            
            public Clone():any;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
            public GetInvocationList():System.Array$1<Function>;
            
            public static Combine($a: Function, $b: Function):Function;
            
            public static Combine(...delegates: Function[]):Function;
            
            public static Remove($source: Function, $value: Function):Function;
            
            public static RemoveAll($source: Function, $value: Function):Function;
            
            public static op_Equality($d1: Function, $d2: Function):boolean;
            
            public static op_Inequality($d1: Function, $d2: Function):boolean;
            
        }
        
        class Single extends System.ValueType {
            
        }
        
        class Enum extends System.ValueType {
            
        }
        
        class Char extends System.ValueType {
            
        }
        
        class Int32 extends System.ValueType {
            
        }
        
        class UInt32 extends System.ValueType {
            
        }
        
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
        class Nullable$1<T> extends System.ValueType {
            
        }
        
        class Array extends System.Object {
            
        }
        
        class Double extends System.ValueType {
            
        }
        
        type Action$1<T> = (obj: T) => void;
        
        class Type extends System.Reflection.MemberInfo {
            
            public static FilterAttribute: System.Reflection.MemberFilter;
            
            public static FilterName: System.Reflection.MemberFilter;
            
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            
            public static Missing: any;
            
            public static Delimiter: number;
            
            public static EmptyTypes: System.Array$1<System.Type>;
            
            public get MemberType(): System.Reflection.MemberTypes;
            
            public get DeclaringType(): System.Type;
            
            public get DeclaringMethod(): System.Reflection.MethodBase;
            
            public get ReflectedType(): System.Type;
            
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            
            public get GUID(): System.Guid;
            
            public static get DefaultBinder(): System.Reflection.Binder;
            
            public get Module(): System.Reflection.Module;
            
            public get Assembly(): System.Reflection.Assembly;
            
            public get TypeHandle(): System.RuntimeTypeHandle;
            
            public get FullName(): string;
            
            public get Namespace(): string;
            
            public get AssemblyQualifiedName(): string;
            
            public get BaseType(): System.Type;
            
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            
            public get IsNested(): boolean;
            
            public get Attributes(): System.Reflection.TypeAttributes;
            
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            
            public get IsVisible(): boolean;
            
            public get IsNotPublic(): boolean;
            
            public get IsPublic(): boolean;
            
            public get IsNestedPublic(): boolean;
            
            public get IsNestedPrivate(): boolean;
            
            public get IsNestedFamily(): boolean;
            
            public get IsNestedAssembly(): boolean;
            
            public get IsNestedFamANDAssem(): boolean;
            
            public get IsNestedFamORAssem(): boolean;
            
            public get IsAutoLayout(): boolean;
            
            public get IsLayoutSequential(): boolean;
            
            public get IsExplicitLayout(): boolean;
            
            public get IsClass(): boolean;
            
            public get IsInterface(): boolean;
            
            public get IsValueType(): boolean;
            
            public get IsAbstract(): boolean;
            
            public get IsSealed(): boolean;
            
            public get IsEnum(): boolean;
            
            public get IsSpecialName(): boolean;
            
            public get IsImport(): boolean;
            
            public get IsSerializable(): boolean;
            
            public get IsAnsiClass(): boolean;
            
            public get IsUnicodeClass(): boolean;
            
            public get IsAutoClass(): boolean;
            
            public get IsArray(): boolean;
            
            public get IsGenericType(): boolean;
            
            public get IsGenericTypeDefinition(): boolean;
            
            public get IsConstructedGenericType(): boolean;
            
            public get IsGenericParameter(): boolean;
            
            public get GenericParameterPosition(): number;
            
            public get ContainsGenericParameters(): boolean;
            
            public get IsByRef(): boolean;
            
            public get IsPointer(): boolean;
            
            public get IsPrimitive(): boolean;
            
            public get IsCOMObject(): boolean;
            
            public get HasElementType(): boolean;
            
            public get IsContextful(): boolean;
            
            public get IsMarshalByRef(): boolean;
            
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            
            public get IsSecurityCritical(): boolean;
            
            public get IsSecuritySafeCritical(): boolean;
            
            public get IsSecurityTransparent(): boolean;
            
            public get UnderlyingSystemType(): System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public MakePointerType():System.Type;
            
            public MakeByRefType():System.Type;
            
            public MakeArrayType():System.Type;
            
            public MakeArrayType($rank: number):System.Type;
            
            public static GetTypeFromProgID($progID: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeCode($type: System.Type):System.TypeCode;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            
            public GetArrayRank():number;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            
            public GetMethod($name: string):System.Reflection.MethodInfo;
            
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            
            public GetField($name: string):System.Reflection.FieldInfo;
            
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            
            public GetInterface($name: string):System.Type;
            
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            
            public GetInterfaces():System.Array$1<System.Type>;
            
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            
            public GetEvent($name: string):System.Reflection.EventInfo;
            
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetNestedTypes():System.Array$1<System.Type>;
            
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            
            public GetNestedType($name: string):System.Type;
            
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            
            public GetElementType():System.Type;
            
            public GetGenericArguments():System.Array$1<System.Type>;
            
            public GetGenericTypeDefinition():System.Type;
            
            public GetEnumNames():System.Array$1<string>;
            
            public GetEnumValues():System.Array;
            
            public GetEnumUnderlyingType():System.Type;
            
            public IsEnumDefined($value: any):boolean;
            
            public GetEnumName($value: any):string;
            
            public IsSubclassOf($c: System.Type):boolean;
            
            public IsInstanceOfType($o: any):boolean;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
            public IsEquivalentTo($other: System.Type):boolean;
            
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            
            public Equals($o: any):boolean;
            
            public Equals($o: System.Type):boolean;
            
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            
            public GetType():System.Type;
            
            public static GetType($typeName: string):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            
            public GetType():System.Type;
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        
        class Byte extends System.ValueType {
            
        }
        
        interface IAsyncResult {
            
        }
        
        type AsyncCallback = (ar: System.IAsyncResult) => void;
        var AsyncCallback: {new (func: (ar: System.IAsyncResult) => void): AsyncCallback;}
        
        class IntPtr extends System.ValueType {
            
        }
        
        class Exception extends System.Object {
            
        }
        
        interface IFormatProvider {
            
        }
        
        type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
        
        type Predicate$1<T> = (obj: T) => boolean;
        
        type Comparison$1<T> = (x: T, y: T) => number;
        
        class UInt64 extends System.ValueType {
            
        }
        
        type Func$2<T,TResult> = (arg: T) => TResult;
        
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        
        class Attribute extends System.Object {
            
        }
        
        class Guid extends System.ValueType {
            
        }
        
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        
        type Func$1<TResult> = () => TResult;
        
        type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
        
        class Int64 extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine {
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
        enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Types of modifier key that can be active during a keystroke event. */
        enum EventModifiers { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType {
            
        }
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object {
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            
            public get gameObject(): UnityEngine.GameObject;
            
            public constructor($name: string);
            
            public constructor();
            
            public constructor($name: string, ...components: System.Type[]);
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
             */
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: string):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
             */
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
             */
            public SetActive($value: boolean):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
             */
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string):void;
            /** Finds a GameObject by name and returns it. */
            public static Find($name: string):UnityEngine.GameObject;
            
        }
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object {
            /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            
            public constructor();
            
            public GetInstanceID():number;
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Gets a list of all loaded objects of Type type.
             * @param type The type of object to find.
             * @param includeInactive If true, components attached to inactive GameObjects are also included.
             * @returns The array of objects found matching the type specified. 
             */
            public static FindObjectsOfType($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            /** Returns the first active loaded object of Type type.
             * @param type The type of object to find.
             * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
             */
            public static FindObjectOfType($type: System.Type, $includeInactive: boolean):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
        }
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component {
            /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($p: UnityEngine.Transform):void;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            /** Transforms direction from local space to world space. */
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms vector from local space to world space. */
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from local space to world space. */
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from world space to local space. */
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            
            public DetachChildren():void;
            
            public SetAsFirstSibling():void;
            
            public SetAsLastSibling():void;
            /** Sets the sibling index. * @param index Index to set.
             */
            public SetSiblingIndex($index: number):void;
            
            public GetSiblingIndex():number;
            /** Finds a child by n and returns it.
             * @param n Name of child to be found.
             * @returns The returned child transform or null if no child is found. 
             */
            public Find($n: string):UnityEngine.Transform;
            /** Is this transform a child of parent? */
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            
            public GetEnumerator():System.Collections.IEnumerator;
            /** Returns a transform child by index.
             * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
             * @returns Transform child by index. 
             */
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object {
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            
            public constructor();
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't. Will also return disabled components. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless.
             */
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns the component of Type type in the GameObject or any of its parents.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
        }
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType {
            
            public static kEpsilon: number;
            
            public static kEpsilonNormalSqrt: number;
            /** X component of the vector. */
            public x: number;
            /** Y component of the vector. */
            public y: number;
            /** Z component of the vector. */
            public z: number;
            /** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0). */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1). */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1). */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1). */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0). */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0). */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0). */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0). */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector3;
            
            public constructor($x: number, $y: number, $z: number);
            
            public constructor($x: number, $y: number);
            /** Spherically interpolates between two vectors. */
            public static Slerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Spherically interpolates between two vectors. */
            public static SlerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>):void;
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>):void;
            /** Rotates a vector current towards target.
             * @param current The vector being managed.
             * @param target The vector.
             * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
             * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
             * @returns The location that RotateTowards generates. 
             */
            public static RotateTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number):UnityEngine.Vector3;
            /** Linearly interpolates between two points. */
            public static Lerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
             * @param current The position to move from.
             * @param target The position to move towards.
             * @param maxDistanceDelta Distance to move current per call.
             * @returns The new position. 
             */
            public static MoveTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number):UnityEngine.Vector3;
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
             * @param target The position we are trying to reach.
             * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
             * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
             * @param maxSpeed Optionally allows you to clamp the maximum speed.
             * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
             */
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector3;
            
            public get_Item($index: number):number;
            
            public set_Item($index: number, $value: number):void;
            /** Set x, y and z components of an existing Vector3. */
            public Set($newX: number, $newY: number, $newZ: number):void;
            /** Multiplies two vectors component-wise. */
            public static Scale($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale($scale: UnityEngine.Vector3):void;
            /** Cross Product of two vectors. */
            public static Cross($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals($other: any):boolean;
            
            public Equals($other: UnityEngine.Vector3):boolean;
            /** Reflects a vector off the plane defined by a normal. */
            public static Reflect($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Makes this vector have a magnitude of 1. */
            public static Normalize($value: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public Normalize():void;
            /** Dot Product of two vectors. */
            public static Dot($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):number;
            /** Projects a vector onto another vector. */
            public static Project($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
             * @param planeNormal The direction from the vector towards the plane.
             * @param vector The location of the vector above the plane.
             * @returns The location of the vector on the plane. 
             */
            public static ProjectOnPlane($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns the angle in degrees between from and to.
             * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @returns The angle in degrees between the two vectors. 
             */
            public static Angle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3):number;
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
             * @param to The vector to which the angular difference is measured.
             * @param axis A vector around which the other vectors are rotated.
             */
            public static SignedAngle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3):number;
            /** Returns the distance between a and b. */
            public static Distance($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):number;
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude($vector: UnityEngine.Vector3, $maxLength: number):UnityEngine.Vector3;
            
            public static Magnitude($vector: UnityEngine.Vector3):number;
            
            public static SqrMagnitude($vector: UnityEngine.Vector3):number;
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Addition($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Subtraction($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_UnaryNegation($a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Multiply($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Multiply($d: number, $a: UnityEngine.Vector3):UnityEngine.Vector3;
            
            public static op_Division($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            
            public static op_Equality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public static op_Inequality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            
            public ToString():string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string):string;
            /** Returns a formatted string for this vector. * @param format A numeric format string.
             * @param formatProvider An object that specifies culture-specific formatting.
             */
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            
            public constructor();
            
            public Equals($obj: any):boolean;
            
            public static Equals($objA: any, $objB: any):boolean;
            
        }
        /** The material class. */
        class Material extends UnityEngine.Object {
            
        }
        /** Class for texture handling. */
        class Texture2D extends UnityEngine.Texture {
            
        }
        /** Base class for texture handling. Contains functionality that is common to both Texture2D and RenderTexture classes. */
        class Texture extends UnityEngine.Object {
            
        }
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType {
            
        }
        /** RenderMode for the Canvas. */
        enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        /** A Camera is a device through which the player views the world. */
        class Camera extends UnityEngine.Behaviour {
            
        }
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component {
            /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            
            public constructor();
            
        }
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType {
            
        }
        /** A container for audio data. */
        class AudioClip extends UnityEngine.Object {
            
        }
        /** Structure used to get information back from a raycast. */
        class RaycastHit extends System.ValueType {
            
        }
        /** Representation of RGBA colors. */
        class Color extends System.ValueType {
            
        }
        /** Representation of RGBA colors in 32 bit format. */
        class Color32 extends System.ValueType {
            
        }
        /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
        class AssetBundle extends UnityEngine.Object {
            
        }
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object {
            /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            
            public constructor();
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            
            public static Break():void;
            
            public static DebugBreak():void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any):void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($format: string, ...args: any[]):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public static ClearDeveloperConsole():void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($format: string, ...args: any[]):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $context: UnityEngine.Object):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any):void;
            
            public static Assert($condition: boolean, $message: string):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any, $context: UnityEngine.Object):void;
            
            public static Assert($condition: boolean, $message: string, $context: UnityEngine.Object):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $format: string, ...args: any[]):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($format: string, ...args: any[]):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
        }
        
        interface ILogger {
            
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption { None = 0, NoStacktrace = 1 }
        /** The interface to get time information from Unity. */
        class Time extends System.Object {
            /** The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get time(): number;
            /** The time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get timeAsDouble(): number;
            /** The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded. */
            public static get timeSinceLevelLoad(): number;
            /** The time this frame has started (Read Only). This is the time in seconds since the last level has been loaded. */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The completion time in seconds since the last frame (Read Only). */
            public static get deltaTime(): number;
            /** The time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            /** The time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independant time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            /** The timeScale-independant time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTimeAsDouble(): number;
            /** The TimeScale-independant time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            /** The TimeScale-independant time the latest MonoBehaviour.FixedUpdate has started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last fixed frame to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum time a frame can take. Physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) will be performed only for this duration of time per frame. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. This can be used for slow motion effects. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames that have passed (Read Only). */
            public static get frameCount(): number;
            
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup. This offers more precision than a float or single value, particularly over extended periods of real-world time. In almost all cases, choose the Time.realtimeSinceStartupAsDouble equivalent over Time.realtimeSinceStartup. */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows game playback time to allow screenshots to be saved between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            
            public constructor();
            
        }
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType {
            
        }
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType {
            
        }
        /** The coordinate space in which to operate. */
        enum Space { World = 0, Self = 1 }
        /** Options for how to send a message. */
        enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
        class ParticleSystem extends UnityEngine.Component {
            /** Determines whether the Particle System is playing. */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state. */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused. */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). */
            public get particleCount(): number;
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Override the random seed used for the Particle System emission. */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation? */
            public get proceduralSimulationSupported(): boolean;
            /** Access the main Particle System settings. */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System. */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System.  */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System. */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module. */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System. */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System. */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System. */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System. */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System. */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System. */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System. */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System. */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System. */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System. */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System. */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System. */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System. */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System. */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System. */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            
            public constructor();
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            
            public SetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            
            public GetParticles($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):number;
            
            public SetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):void;
            
            public GetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):number;
            
            public GetPlaybackState():UnityEngine.ParticleSystem.PlaybackState;
            
            public SetPlaybackState($playbackState: UnityEngine.ParticleSystem.PlaybackState):void;
            
            public GetTrails():UnityEngine.ParticleSystem.Trails;
            
            public SetTrails($trailData: UnityEngine.ParticleSystem.Trails):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean, $restart: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number, $withChildren: boolean):void;
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
             * @param withChildren Fast-forward all child Particle Systems as well.
             * @param restart Restart and start from the beginning.
             * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
             */
            public Simulate($t: number):void;
            /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
             */
            public Play($withChildren: boolean):void;
            
            public Play():void;
            /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
             */
            public Pause($withChildren: boolean):void;
            
            public Pause():void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
             * @param stopBehavior Stop emitting or stop emitting and clear the system.
             */
            public Stop($withChildren: boolean):void;
            
            public Stop():void;
            /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
             */
            public Clear($withChildren: boolean):void;
            
            public Clear():void;
            /** Does the Particle System contain any live particles, or will it produce more?
             * @param withChildren Check all child Particle Systems as well.
             * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
             */
            public IsAlive($withChildren: boolean):boolean;
            
            public IsAlive():boolean;
            /** Emit count particles immediately. * @param count Number of particles to emit.
             */
            public Emit($count: number):void;
            
            public Emit($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number):void;
            /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
             */
            public TriggerSubEmitter($subEmitterIndex: number):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            
            public TriggerSubEmitter($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            
            public static ResetPreMappedBufferMemory():void;
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
             * @param indexBuffersCount The maximum number of cached index buffers.
             */
            public static SetMaximumPreMappedBufferCounts($vertexBuffersCount: number, $indexBuffersCount: number):void;
            
        }
        /** The space to simulate particles in. */
        enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale. */
        enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Which stream of custom particle data to set. */
        enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
        enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
        /** Element that can be used for screen rendering. */
        class Canvas extends UnityEngine.Behaviour {
            /** Is the Canvas in World or Overlay mode? */
            public get renderMode(): UnityEngine.RenderMode;
            public set renderMode(value: UnityEngine.RenderMode);
            /** Is this the root Canvas? */
            public get isRootCanvas(): boolean;
            /** Get the render rect for the Canvas. */
            public get pixelRect(): UnityEngine.Rect;
            /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space. */
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            /** The number of pixels per unit that is considered the default. */
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases. */
            public get overridePixelPerfect(): boolean;
            public set overridePixelPerfect(value: boolean);
            /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space. */
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            /** How far away from the camera is the Canvas generated. */
            public get planeDistance(): number;
            public set planeDistance(value: number);
            /** The render order in which the canvas is being emitted to the Scene. (Read Only) */
            public get renderOrder(): number;
            /** Override the sorting of canvas. */
            public get overrideSorting(): boolean;
            public set overrideSorting(value: boolean);
            /** Canvas' order within a sorting layer. */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** For Overlay mode, display index on which the UI canvas will appear. */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Unique ID of the Canvas' sorting layer. */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Cached calculated value based upon SortingLayerID. */
            public get cachedSortingLayerValue(): number;
            /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh. */
            public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
            public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
            /** Name of the Canvas' sorting layer. */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself. */
            public get rootCanvas(): UnityEngine.Canvas;
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into. */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            
            public constructor();
            
            public static add_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static remove_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            
            public static ForceUpdateCanvases():void;
            
        }
        /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created. */
        enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour {
            /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            
            public constructor();
            
            public IsInvoking():boolean;
            
            public CancelInvoke():void;
            /** Invokes the method methodName in time seconds. */
            public Invoke($methodName: string, $time: number):void;
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke($methodName: string):void;
            /** Is any invoke on methodName pending? */
            public IsInvoking($methodName: string):boolean;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string):UnityEngine.Coroutine;
            /** Starts a coroutine named methodName. */
            public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
            /** Starts a Coroutine. */
            public StartCoroutine($routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: System.Collections.IEnumerator):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($routine: UnityEngine.Coroutine):void;
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
             * @param routine Name of the function in code, including coroutines.
             */
            public StopCoroutine($methodName: string):void;
            
            public StopAllCoroutines():void;
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print($message: any):void;
            
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction {
            
        }
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object {
            
        }
        /** Interface to control the Mecanim animation system. */
        class Animator extends UnityEngine.Behaviour {
            
        }
        /** Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported. */
        class TouchScreenKeyboard extends System.Object {
            
        }
        /** Enumeration of the different types of supported touchscreen keyboards. */
        enum TouchScreenKeyboardType { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
        /** A UnityGUI event. */
        class Event extends System.Object {
            
        }
        /** Access to application run-time data. */
        class Application extends System.Object {
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            /** Contains the path to a persistent data directory (Read Only). */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            /** Instructs the game to try to render at a specified frame rate. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            
            public constructor();
            
            public static Quit($exitCode: number):void;
            
            public static Quit():void;
            
            public static Unload():void;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelIndex: number):boolean;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelName: string):boolean;
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
             * @param obj The object to test.
             * @returns True if the object is part of the playing world. 
             */
            public static IsPlaying($obj: UnityEngine.Object):boolean;
            
            public static GetBuildTags():System.Array$1<string>;
            /** Set an array of feature tags for this build. */
            public static SetBuildTags($buildTags: System.Array$1<string>):void;
            
            public static HasProLicense():boolean;
            
            public static RequestAdvertisingIdentifierAsync($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
             */
            public static OpenURL($url: string):void;
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType($logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType):void;
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization($mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization($mode: UnityEngine.UserAuthorization):boolean;
            
            public static add_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static remove_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static add_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static add_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static add_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static remove_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static add_focusChanged($value: System.Action$1<boolean>):void;
            
            public static remove_focusChanged($value: System.Action$1<boolean>):void;
            
            public static add_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static remove_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static add_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static remove_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static add_quitting($value: System.Action):void;
            
            public static remove_quitting($value: System.Action):void;
            
            public static add_unloading($value: System.Action):void;
            
            public static remove_unloading($value: System.Action):void;
            
        }
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type. */
        enum ApplicationSandboxType { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options. */
        enum StackTraceLogType { None = 0, ScriptOnly = 1, Full = 2 }
        /** Priority of a thread. */
        enum ThreadPriority { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction {
            /** Has the operation finished? (Read Only) */
            public get isDone(): boolean;
            /** What's the operation's progress. (Read Only) */
            public get progress(): number;
            /** Priority lets you tweak in which order async operation calls will be performed. */
            public get priority(): number;
            public set priority(value: number);
            /** Allow Scenes to be activated as soon as it is ready. */
            public get allowSceneActivation(): boolean;
            public set allowSceneActivation(value: boolean);
            
            public constructor();
            
            public add_completed($value: System.Action$1<UnityEngine.AsyncOperation>):void;
            
            public remove_completed($value: System.Action$1<UnityEngine.AsyncOperation>):void;
            
        }
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxOne = 37 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        /** Describes network reachability options. */
        enum NetworkReachability { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object {
            /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            /** The text contents of the .txt file as a string. (Read Only) */
            public get text(): string;
            
            public constructor();
            
            public constructor($text: string);
            
        }
        /** Initializes a new instance of the Logger. */
        class Logger extends System.Object {
            /** Set  Logger.ILogHandler. */
            public get logHandler(): UnityEngine.ILogHandler;
            public set logHandler(value: UnityEngine.ILogHandler);
            /** To runtime toggle debug logging [ON/OFF]. */
            public get logEnabled(): boolean;
            public set logEnabled(value: boolean);
            /** To selective enable debug log message. */
            public get filterLogType(): UnityEngine.LogType;
            public set filterLogType(value: UnityEngine.LogType);
            
            public constructor($logHandler: UnityEngine.ILogHandler);
            /** Check logging is enabled based on the LogType.
             * @param logType The type of the log message.
             * @returns Retrun true in case logs of LogType will be logged otherwise returns false. 
             */
            public IsLogTypeAllowed($logType: UnityEngine.LogType):boolean;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($logType: UnityEngine.LogType, $message: any):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($logType: UnityEngine.LogType, $message: any, $context: UnityEngine.Object):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($logType: UnityEngine.LogType, $tag: string, $message: any):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($logType: UnityEngine.LogType, $tag: string, $message: any, $context: UnityEngine.Object):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($message: any):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($tag: string, $message: any):void;
            /** Logs message to the Unity Console using default logger. * @param logType The type of the log message.
             * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public Log($tag: string, $message: any, $context: UnityEngine.Object):void;
            /** A variant of Logger.Log that logs an warning message. * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public LogWarning($tag: string, $message: any):void;
            /** A variant of Logger.Log that logs an warning message. * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public LogWarning($tag: string, $message: any, $context: UnityEngine.Object):void;
            /** A variant of Logger.Log that logs an error message. * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public LogError($tag: string, $message: any):void;
            /** A variant of Logger.Log that logs an error message. * @param tag Used to identify the source of a log message. It usually identifies the class where the log call occurs.
             * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public LogError($tag: string, $message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted message. * @param logType The type of the log message.
             * @param context Object to which the message applies.
             * @param format A composite format string.
             * @param args Format arguments.
             */
            public LogFormat($logType: UnityEngine.LogType, $format: string, ...args: any[]):void;
            /** A variant of Logger.Log that logs an exception message. * @param exception Runtime Exception.
             * @param context Object to which the message applies.
             */
            public LogException($exception: System.Exception):void;
            /** Logs a formatted message. * @param logType The type of the log message.
             * @param context Object to which the message applies.
             * @param format A composite format string.
             * @param args Format arguments.
             */
            public LogFormat($logType: UnityEngine.LogType, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Logger.Log that logs an exception message. * @param exception Runtime Exception.
             * @param context Object to which the message applies.
             */
            public LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            
            public constructor();
            
        }
        
        interface ILogHandler {
            
        }
        /** Represents a Sprite object for use in 2D gameplay. */
        class Sprite extends UnityEngine.Object {
            
        }
        
    }
    namespace System.Collections.Generic {
        
        interface IList$1<T> {
            
        }
        
        interface IEnumerator$1<T> {
            
        }
        
        class Dictionary$2<TKey,TValue> extends System.Object {
            
        }
        
        class List$1<T> extends System.Object {
            
            public get Capacity(): number;
            public set Capacity(value: number);
            
            public get Count(): number;
            
            public constructor();
            
            public constructor($capacity: number);
            
            public constructor($collection: System.Collections.Generic.IEnumerable$1<T>);
            
            public get_Item($index: number):T;
            
            public set_Item($index: number, $value: T):void;
            
            public Add($item: T):void;
            
            public AddRange($collection: System.Collections.Generic.IEnumerable$1<T>):void;
            
            public AsReadOnly():System.Collections.ObjectModel.ReadOnlyCollection$1<T>;
            
            public BinarySearch($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            
            public BinarySearch($item: T):number;
            
            public BinarySearch($item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            
            public Clear():void;
            
            public Contains($item: T):boolean;
            
            public CopyTo($array: System.Array$1<T>):void;
            
            public CopyTo($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number):void;
            
            public CopyTo($array: System.Array$1<T>, $arrayIndex: number):void;
            
            public Exists($match: System.Predicate$1<T>):boolean;
            
            public Find($match: System.Predicate$1<T>):T;
            
            public FindAll($match: System.Predicate$1<T>):System.Collections.Generic.List$1<T>;
            
            public FindIndex($match: System.Predicate$1<T>):number;
            
            public FindIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            
            public FindIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            
            public FindLast($match: System.Predicate$1<T>):T;
            
            public FindLastIndex($match: System.Predicate$1<T>):number;
            
            public FindLastIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            
            public FindLastIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            
            public ForEach($action: System.Action$1<T>):void;
            
            public GetEnumerator():System.Collections.Generic.List$1.Enumerator<T>;
            
            public GetRange($index: number, $count: number):System.Collections.Generic.List$1<T>;
            
            public IndexOf($item: T):number;
            
            public IndexOf($item: T, $index: number):number;
            
            public IndexOf($item: T, $index: number, $count: number):number;
            
            public Insert($index: number, $item: T):void;
            
            public InsertRange($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>):void;
            
            public LastIndexOf($item: T):number;
            
            public LastIndexOf($item: T, $index: number):number;
            
            public LastIndexOf($item: T, $index: number, $count: number):number;
            
            public Remove($item: T):boolean;
            
            public RemoveAll($match: System.Predicate$1<T>):number;
            
            public RemoveAt($index: number):void;
            
            public RemoveRange($index: number, $count: number):void;
            
            public Reverse():void;
            
            public Reverse($index: number, $count: number):void;
            
            public Sort():void;
            
            public Sort($comparer: System.Collections.Generic.IComparer$1<T>):void;
            
            public Sort($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>):void;
            
            public Sort($comparison: System.Comparison$1<T>):void;
            
            public ToArray():System.Array$1<T>;
            
            public TrimExcess():void;
            
            public TrueForAll($match: System.Predicate$1<T>):boolean;
            
        }
        
        interface IEnumerable$1<T> {
            
        }
        
        interface IComparer$1<T> {
            
        }
        
    }
    namespace FairyGUI.Utils {
        
        class ByteBuffer extends System.Object {
            
        }
        
        class XML extends System.Object {
            
        }
        
    }
    namespace FairyGUI.TextFormat {
        
        enum SpecialStyle { None = 0, Superscript = 1, Subscript = 2 }
        
    }
    namespace FairyGUI.UIContentScaler {
        
        enum ScreenMatchMode { MatchWidthOrHeight = 0, MatchWidth = 1, MatchHeight = 2 }
        
    }
    namespace FairyGUI.UIPackage {
        
        type LoadResource = (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any;
        var LoadResource: {new (func: (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any): LoadResource;}
        
        type LoadResourceAsync = (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void;
        var LoadResourceAsync: {new (func: (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void): LoadResourceAsync;}
        
        type CreateObjectCallback = (result: FairyGUI.GObject) => void;
        var CreateObjectCallback: {new (func: (result: FairyGUI.GObject) => void): CreateObjectCallback;}
        
    }
    namespace System.Reflection {
        
        class MemberInfo extends System.Object {
            
        }
        
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        
        class AssemblyName extends System.Object {
            
        }
        
        class Assembly extends System.Object {
            
        }
        
        class Binder extends System.Object {
            
        }
        
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        
        class ParameterModifier extends System.ValueType {
            
        }
        
        class Module extends System.Object {
            
        }
        
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace FairyGUI.GObjectPool {
        
        type InitCallbackDelegate = (obj: FairyGUI.GObject) => void;
        var InitCallbackDelegate: {new (func: (obj: FairyGUI.GObject) => void): InitCallbackDelegate;}
        
    }
    namespace System.Collections {
        
        interface IEnumerator {
            
        }
        
    }
    namespace FairyGUI.UIObjectFactory {
        
        type GComponentCreator = () => FairyGUI.GComponent;
        var GComponentCreator: {new (func: () => FairyGUI.GComponent): GComponentCreator;}
        
        type GLoaderCreator = () => FairyGUI.GLoader;
        var GLoaderCreator: {new (func: () => FairyGUI.GLoader): GLoaderCreator;}
        
    }
    namespace System.Collections.ObjectModel {
        
        class ReadOnlyCollection$1<T> extends System.Object {
            
        }
        
    }
    namespace System.Collections.Generic.List$1 {
        
        class Enumerator<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType {
            
            public get handle(): number;
            /** Returns the relative path of the Scene. Like: "AssetsMyScenesMyScene.unity". */
            public get path(): string;
            /** Returns the name of the Scene that is currently active in the game or app. */
            public get name(): string;
            public set name(value: string);
            /** Returns true if the Scene is loaded. */
            public get isLoaded(): boolean;
            /** Return the index of the Scene in the Build Settings. */
            public get buildIndex(): number;
            /** Returns true if the Scene is modifed. */
            public get isDirty(): boolean;
            /** The number of root transforms of this Scene. */
            public get rootCount(): number;
            
            public get isSubScene(): boolean;
            public set isSubScene(value: boolean);
            
            public IsValid():boolean;
            
            public GetRootGameObjects():System.Array$1<UnityEngine.GameObject>;
            
            public GetRootGameObjects($rootGameObjects: System.Collections.Generic.List$1<UnityEngine.GameObject>):void;
            
            public static op_Equality($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene):boolean;
            
            public static op_Inequality($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene):boolean;
            
        }
        /** Scene management at run-time. */
        class SceneManager extends System.Object {
            /** The total number of currently loaded Scenes. */
            public static get sceneCount(): number;
            /** Number of Scenes in Build Settings. */
            public static get sceneCountInBuildSettings(): number;
            
            public constructor();
            
            public static GetActiveScene():UnityEngine.SceneManagement.Scene;
            /** Set the Scene to be active.
             * @param scene The Scene to be set.
             * @returns Returns false if the Scene is not loaded yet. 
             */
            public static SetActiveScene($scene: UnityEngine.SceneManagement.Scene):boolean;
            /** Searches all Scenes loaded for a Scene that has the given asset path.
             * @param scenePath Path of the Scene. Should be relative to the project folder. Like: "AssetsMyScenesMyScene.unity".
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByPath($scenePath: string):UnityEngine.SceneManagement.Scene;
            /** Searches through the Scenes loaded for a Scene with the given name.
             * @param name Name of Scene to find.
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByName($name: string):UnityEngine.SceneManagement.Scene;
            /** Get a Scene struct from a build index.
             * @param buildIndex Build index as shown in the Build Settings window.
             * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
             */
            public static GetSceneByBuildIndex($buildIndex: number):UnityEngine.SceneManagement.Scene;
            /** Get the Scene at index in the SceneManager's list of loaded Scenes.
             * @param index Index of the Scene to get. Index must be greater than or equal to 0 and less than SceneManager.sceneCount.
             * @returns A reference to the Scene at the index specified. 
             */
            public static GetSceneAt($index: number):UnityEngine.SceneManagement.Scene;
            /** Create an empty new Scene at runtime with the given name.
             * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
             * @param parameters Various parameters used to create the Scene.
             * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
             */
            public static CreateScene($sceneName: string, $parameters: UnityEngine.SceneManagement.CreateSceneParameters):UnityEngine.SceneManagement.Scene;
            /** This will merge the source Scene into the destinationScene. * @param sourceScene The Scene that will be merged into the destination Scene.
             * @param destinationScene Existing Scene to merge the source Scene into.
             */
            public static MergeScenes($sourceScene: UnityEngine.SceneManagement.Scene, $destinationScene: UnityEngine.SceneManagement.Scene):void;
            /** Move a GameObject from its current Scene to a new Scene. * @param go GameObject to move.
             * @param scene Scene to move into.
             */
            public static MoveGameObjectToScene($go: UnityEngine.GameObject, $scene: UnityEngine.SceneManagement.Scene):void;
            
            public static add_sceneLoaded($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            
            public static remove_sceneLoaded($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            
            public static add_sceneUnloaded($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            
            public static remove_sceneUnloaded($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            
            public static add_activeSceneChanged($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            
            public static remove_activeSceneChanged($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            /** Create an empty new Scene at runtime with the given name.
             * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
             * @param parameters Various parameters used to create the Scene.
             * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
             */
            public static CreateScene($sceneName: string):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
             */
            public static LoadScene($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            
            public static LoadScene($sceneName: string):void;
            /** Loads the Scene by its name or index in Build Settings.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param parameters Various parameters used to load the Scene.
             * @returns A handle to the Scene being loaded. 
             */
            public static LoadScene($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
             */
            public static LoadScene($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            
            public static LoadScene($sceneBuildIndex: number):void;
            /** Loads the Scene by its name or index in Build Settings.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param parameters Various parameters used to load the Scene.
             * @returns A handle to the Scene being loaded. 
             */
            public static LoadScene($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            
            public static LoadSceneAsync($sceneBuildIndex: number):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            
            public static LoadSceneAsync($sceneName: string):UnityEngine.AsyncOperation;
            /** Loads the Scene asynchronously in the background.
             * @param sceneName Name or path of the Scene to load.
             * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
             * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
             * @param parameters Struct that collects the various parameters into a single place except for the name and index.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static LoadSceneAsync($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneBuildIndex: number):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneName: string):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($scene: UnityEngine.SceneManagement.Scene):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneBuildIndex: number, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($sceneName: string, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
             * @param sceneBuildIndex Index of the Scene in BuildSettings.
             * @param sceneName Name or path of the Scene to unload.
             * @param scene Scene to unload.
             * @param options Scene unloading options.
             * @returns Use the AsyncOperation to determine if the operation has completed. 
             */
            public static UnloadSceneAsync($scene: UnityEngine.SceneManagement.Scene, $options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            
        }
        /** This struct collects all the CreateScene parameters in to a single place. */
        class CreateSceneParameters extends System.ValueType {
            
        }
        /** Used when loading a Scene in a player. */
        enum LoadSceneMode { Single = 0, Additive = 1 }
        /** This struct collects all the LoadScene parameters in to a single place. */
        class LoadSceneParameters extends System.ValueType {
            
        }
        /** Scene unloading options passed to SceneManager.UnloadScene. */
        enum UnloadSceneOptions { None = 0, UnloadAllEmbeddedSceneObjects = 1 }
        
    }
    namespace System.Runtime.Serialization {
        
        class SerializationInfo extends System.Object {
            
        }
        
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.InteropServices {
        
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        
        class CultureInfo extends System.Object {
            
        }
        
    }
    namespace UnityEngine.ParticleSystem {
        
        class Particle extends System.ValueType {
            
        }
        
        class PlaybackState extends System.ValueType {
            
        }
        
        class Trails extends System.ValueType {
            
        }
        
        class EmitParams extends System.ValueType {
            
        }
        
        class MainModule extends System.ValueType {
            
        }
        
        class EmissionModule extends System.ValueType {
            
        }
        
        class ShapeModule extends System.ValueType {
            
        }
        
        class VelocityOverLifetimeModule extends System.ValueType {
            
        }
        
        class LimitVelocityOverLifetimeModule extends System.ValueType {
            
        }
        
        class InheritVelocityModule extends System.ValueType {
            
        }
        
        class LifetimeByEmitterSpeedModule extends System.ValueType {
            
        }
        
        class ForceOverLifetimeModule extends System.ValueType {
            
        }
        
        class ColorOverLifetimeModule extends System.ValueType {
            
        }
        
        class ColorBySpeedModule extends System.ValueType {
            
        }
        
        class SizeOverLifetimeModule extends System.ValueType {
            
        }
        
        class SizeBySpeedModule extends System.ValueType {
            
        }
        
        class RotationOverLifetimeModule extends System.ValueType {
            
        }
        
        class RotationBySpeedModule extends System.ValueType {
            
        }
        
        class ExternalForcesModule extends System.ValueType {
            
        }
        
        class NoiseModule extends System.ValueType {
            
        }
        
        class CollisionModule extends System.ValueType {
            
        }
        
        class TriggerModule extends System.ValueType {
            
        }
        
        class SubEmittersModule extends System.ValueType {
            
        }
        
        class TextureSheetAnimationModule extends System.ValueType {
            
        }
        
        class LightsModule extends System.ValueType {
            
        }
        
        class TrailModule extends System.ValueType {
            
        }
        
        class CustomDataModule extends System.ValueType {
            
        }
        
    }
    namespace Unity.Collections {
        
        class NativeArray$1<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Canvas {
        
        type WillRenderCanvases = () => void;
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            
            public IsActive():boolean;
            
            public IsDestroyed():boolean;
            
        }
        
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
            
        }
        
        class AbstractEventData extends System.Object {
            
        }
        
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        
    }
    namespace UnityEngine.UI {
        
        class Selectable extends UnityEngine.EventSystems.UIBehaviour {
            
            public static get allSelectablesArray(): System.Array$1<UnityEngine.UI.Selectable>;
            
            public static get allSelectableCount(): number;
            
            public get navigation(): UnityEngine.UI.Navigation;
            public set navigation(value: UnityEngine.UI.Navigation);
            
            public get transition(): UnityEngine.UI.Selectable.Transition;
            public set transition(value: UnityEngine.UI.Selectable.Transition);
            
            public get colors(): UnityEngine.UI.ColorBlock;
            public set colors(value: UnityEngine.UI.ColorBlock);
            
            public get spriteState(): UnityEngine.UI.SpriteState;
            public set spriteState(value: UnityEngine.UI.SpriteState);
            
            public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
            public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
            
            public get targetGraphic(): UnityEngine.UI.Graphic;
            public set targetGraphic(value: UnityEngine.UI.Graphic);
            
            public get interactable(): boolean;
            public set interactable(value: boolean);
            
            public get image(): UnityEngine.UI.Image;
            public set image(value: UnityEngine.UI.Image);
            
            public get animator(): UnityEngine.Animator;
            
            public static AllSelectablesNoAlloc($selectables: System.Array$1<UnityEngine.UI.Selectable>):number;
            
            public IsInteractable():boolean;
            
            public FindSelectable($dir: UnityEngine.Vector3):UnityEngine.UI.Selectable;
            
            public FindSelectableOnLeft():UnityEngine.UI.Selectable;
            
            public FindSelectableOnRight():UnityEngine.UI.Selectable;
            
            public FindSelectableOnUp():UnityEngine.UI.Selectable;
            
            public FindSelectableOnDown():UnityEngine.UI.Selectable;
            
            public OnMove($eventData: UnityEngine.EventSystems.AxisEventData):void;
            
            public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerUp($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerEnter($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnPointerExit($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnSelect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public OnDeselect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public Select():void;
            
        }
        
        class Navigation extends System.ValueType {
            
        }
        
        class ColorBlock extends System.ValueType {
            
        }
        
        class SpriteState extends System.ValueType {
            
        }
        
        class AnimationTriggers extends System.Object {
            
        }
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
        class Image extends UnityEngine.UI.MaskableGraphic {
            
        }
        
        class MaskableGraphic extends UnityEngine.UI.Graphic {
            
        }
        
        class Button extends UnityEngine.UI.Selectable {
            
            public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
            public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
            
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        
        class InputField extends UnityEngine.UI.Selectable {
            
            public get shouldHideMobileInput(): boolean;
            public set shouldHideMobileInput(value: boolean);
            
            public get shouldActivateOnSelect(): boolean;
            public set shouldActivateOnSelect(value: boolean);
            
            public get text(): string;
            public set text(value: string);
            
            public get isFocused(): boolean;
            
            public get caretBlinkRate(): number;
            public set caretBlinkRate(value: number);
            
            public get caretWidth(): number;
            public set caretWidth(value: number);
            
            public get textComponent(): UnityEngine.UI.Text;
            public set textComponent(value: UnityEngine.UI.Text);
            
            public get placeholder(): UnityEngine.UI.Graphic;
            public set placeholder(value: UnityEngine.UI.Graphic);
            
            public get caretColor(): UnityEngine.Color;
            public set caretColor(value: UnityEngine.Color);
            
            public get customCaretColor(): boolean;
            public set customCaretColor(value: boolean);
            
            public get selectionColor(): UnityEngine.Color;
            public set selectionColor(value: UnityEngine.Color);
            
            public get onEndEdit(): UnityEngine.UI.InputField.SubmitEvent;
            public set onEndEdit(value: UnityEngine.UI.InputField.SubmitEvent);
            
            public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
            public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
            
            public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
            public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
            
            public get characterLimit(): number;
            public set characterLimit(value: number);
            
            public get contentType(): UnityEngine.UI.InputField.ContentType;
            public set contentType(value: UnityEngine.UI.InputField.ContentType);
            
            public get lineType(): UnityEngine.UI.InputField.LineType;
            public set lineType(value: UnityEngine.UI.InputField.LineType);
            
            public get inputType(): UnityEngine.UI.InputField.InputType;
            public set inputType(value: UnityEngine.UI.InputField.InputType);
            
            public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
            
            public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
            public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
            
            public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
            public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
            
            public get readOnly(): boolean;
            public set readOnly(value: boolean);
            
            public get multiLine(): boolean;
            
            public get asteriskChar(): number;
            public set asteriskChar(value: number);
            
            public get wasCanceled(): boolean;
            
            public get caretPosition(): number;
            public set caretPosition(value: number);
            
            public get selectionAnchorPosition(): number;
            public set selectionAnchorPosition(value: number);
            
            public get selectionFocusPosition(): number;
            public set selectionFocusPosition(value: number);
            
            public get minWidth(): number;
            
            public get preferredWidth(): number;
            
            public get flexibleWidth(): number;
            
            public get minHeight(): number;
            
            public get preferredHeight(): number;
            
            public get flexibleHeight(): number;
            
            public get layoutPriority(): number;
            
            public SetTextWithoutNotify($input: string):void;
            
            public MoveTextEnd($shift: boolean):void;
            
            public MoveTextStart($shift: boolean):void;
            
            public OnBeginDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnEndDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public ProcessEvent($e: UnityEngine.Event):void;
            
            public OnUpdateSelected($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public ForceLabelUpdate():void;
            
            public Rebuild($update: UnityEngine.UI.CanvasUpdate):void;
            
            public LayoutComplete():void;
            
            public GraphicUpdateComplete():void;
            
            public ActivateInputField():void;
            
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public DeactivateInputField():void;
            
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
            public CalculateLayoutInputHorizontal():void;
            
            public CalculateLayoutInputVertical():void;
            
        }
        
        class Text extends UnityEngine.UI.MaskableGraphic {
            
        }
        
        enum CanvasUpdate { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        
        class Toggle extends UnityEngine.UI.Selectable {
            
            public toggleTransition: UnityEngine.UI.Toggle.ToggleTransition;
            
            public graphic: UnityEngine.UI.Graphic;
            
            public onValueChanged: UnityEngine.UI.Toggle.ToggleEvent;
            
            public get group(): UnityEngine.UI.ToggleGroup;
            public set group(value: UnityEngine.UI.ToggleGroup);
            
            public get isOn(): boolean;
            public set isOn(value: boolean);
            
            public Rebuild($executing: UnityEngine.UI.CanvasUpdate):void;
            
            public LayoutComplete():void;
            
            public GraphicUpdateComplete():void;
            
            public SetIsOnWithoutNotify($value: boolean):void;
            
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        
        class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
    }
    namespace UnityEngine.UI.Selectable {
        
        enum Transition { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        
    }
    namespace UnityEngine.UI.Button {
        
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
            
            public constructor();
            
        }
        
    }
    namespace UnityEngine.Events {
        /** A zero argument persistent callback that can be saved with the Scene. */
        class UnityEvent extends UnityEngine.Events.UnityEventBase {
            
            public constructor();
            /** Add a non persistent listener to the UnityEvent. * @param call Callback function.
             */
            public AddListener($call: UnityEngine.Events.UnityAction):void;
            /** Remove a non persistent listener from the UnityEvent. * @param call Callback function.
             */
            public RemoveListener($call: UnityEngine.Events.UnityAction):void;
            
            public Invoke():void;
            
        }
        /** Abstract base class for UnityEvents. */
        class UnityEventBase extends System.Object {
            
        }
        /** Zero argument delegate used by UnityEvents. */
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase {
            
            public constructor();
            
            public AddListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            
            public RemoveListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            
            public Invoke($arg0: T0):void;
            
        }
        
        type UnityAction$1<T0> = (arg0: T0) => void;
        
        type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
        
    }
    namespace UnityEngine.UI.InputField {
        
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        
        type OnValidateInput = (text: string, charIndex: number, addedChar: number) => number;
        var OnValidateInput: {new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput;}
        
        enum ContentType { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        
        enum LineType { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        
        enum InputType { Standard = 0, AutoCorrect = 1, Password = 2 }
        
        enum CharacterValidation { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        
    }
    namespace UnityEngine.UI.Toggle {
        
        enum ToggleTransition { None = 0, Fade = 1 }
        
        class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> {
            
            public constructor();
            
        }
        
    }
    namespace UnityEngine.Application {
        
        type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        
        type LowMemoryCallback = () => void;
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        
        type LogCallback = (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
    }
    namespace NiceTS {
        
        class TService extends MonoSingleton$1<NiceTS.TService> {
            
            public MemoryStreamManager: Microsoft.IO.RecyclableMemoryStreamManager;
            
            public needStartSendChannel: System.Collections.Generic.List$1<bigint>;
            
            public constructor();
            
            public GetChannel():NiceTS.TChannel;
            
            public MarkNeedStartSend($id: bigint):void;
            
            public Remove($id: bigint):void;
            
            public Update():void;
            
        }
        
        class ResourceManager extends System.Object {
            
            public static OnFBLoadedHandle: System.Action$2<string, System.Array$1<number>>;
            
            public constructor();
            
            public static init():void;
            
            public static ReleaseFGUIPackage($packageName: string):void;
            
            public static LoadFairyGUIPackage($address: string, $packageName: string):System.Threading.Tasks.Task;
            
            public static PreadloadFB($fbLabel: string):System.Threading.Tasks.Task$1<boolean>;
            
            public static PreloadJS($jsLabel: string):System.Threading.Tasks.Task$1<boolean>;
            
            public static LoadPrefab($address: string):System.Threading.Tasks.Task$1<UnityEngine.GameObject>;
            
            public static LoadTextAsset($address: string):System.Threading.Tasks.Task$1<UnityEngine.TextAsset>;
            
            public static LoadTextBytes($address: string):System.Threading.Tasks.Task$1<ArrayBuffer>;
            
            public static LoadSprite($address: string):System.Threading.Tasks.Task$1<UnityEngine.Sprite>;
            
            public static ReleaseAddressGO($go: UnityEngine.Object):void;
            
            public static GetStatusSummary():string;
            
        }
        
        class TChannel extends System.Object {
            
            public errorCallback: NiceTS.ErrorCallback;
            
            public readCallback: NiceTS.ReadCallback;
            
            public get Service(): NiceTS.TService;
            
            public get Id(): bigint;
            public set Id(value: bigint);
            
            public get IsSending(): boolean;
            
            public get Error(): number;
            public set Error(value: number);
            
            public get RemoteAddress(): string;
            
            public constructor($service: NiceTS.TService);
            
            public Connect($address: string):void;
            
            public Send($ab: ArrayBuffer):void;
            
            public StartSend():void;
            
            public SendAsync($buffer: System.Array$1<number>, $offset: number, $count: number):void;
            
            public StartRecv():void;
            
            public RecvAsync($buffer: System.Array$1<number>, $offset: number, $count: number):void;
            
            public Dispose():void;
            
            public constructor();
            
        }
        
        type ErrorCallback = (channel: NiceTS.TChannel, code: number) => void;
        var ErrorCallback: {new (func: (channel: NiceTS.TChannel, code: number) => void): ErrorCallback;}
        
        type ReadCallback = (arrayBuffer: ArrayBuffer) => void;
        var ReadCallback: {new (func: (arrayBuffer: ArrayBuffer) => void): ReadCallback;}
        
    }
    
        
        class MonoSingleton$1<T> extends UnityEngine.MonoBehaviour {
            
            public static get Instance(): T;
            
            public Startup():void;
            
            public DestroySelf():void;
            
            public Dispose():void;
            
        }
        
        class JsManager extends MonoSingleton$1<JsManager> {
            
            public jscache: System.Collections.Generic.Dictionary$2<string, string>;
            
            public JsOnApplicationQuit: System.Action;
            
            public JsOnDispose: System.Action;
            
            public constructor();
            
            public GetJsEnv():Puerts.JsEnv;
            
            public StartGame():void;
            
            public Restart():void;
            
            public Dispose():void;
            
        }
        
        class GameLaunch extends MonoSingleton$1<GameLaunch> {
            
            public launchPageGO: UnityEngine.GameObject;
            
            public constructor();
            
            public JsLuanchFinish():void;
            
        }
        
    
    namespace System.Threading.Tasks {
        
        class Task extends System.Object {
            
        }
        
        class Task$1<TResult> extends System.Threading.Tasks.Task {
            
        }
        
    }
    namespace Puerts {
        
        class ArrayBuffer extends System.Object {
            
        }
        
        class JsEnv extends System.Object {
            
        }
        
    }
    namespace Microsoft.IO {
        
        class RecyclableMemoryStreamManager extends System.Object {
            
        }
        
    }
    
}