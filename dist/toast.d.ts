import './toast.css';
export type PalmToastOptions = {
    heading?: string;
    text: string;
    position?: ToastPosition;
    type?: ToastType;
    duration?: number;
    dissmissable?: boolean;
    draggable?: boolean;
    showTimer?: boolean;
    pauseOnHover?: boolean;
};
export declare enum ToastPosition {
    BottomRight = "bottom-right",
    BottomLeft = "bottom-left",
    TopRight = "top-right",
    TopLeft = "top-left"
}
export declare enum ToastType {
    Success = "success",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Default = "default"
}
export declare class PalmToast {
    private readonly text;
    private readonly heading?;
    private readonly position;
    private readonly type;
    private readonly duration;
    private readonly dissmissable;
    private readonly draggable;
    private readonly showTimer;
    private readonly pauseOnHover;
    private toastElement?;
    private timeBar?;
    private closeButton?;
    private toastSpacing;
    private positionModifier;
    private requestAnimationID?;
    private isPaused;
    constructor(options: PalmToastOptions);
    private createToastElement;
    showToast(): void;
    private addCloseButton;
    private makeDraggable;
    private beginTimer;
    private addTimeBar;
    private removeToast;
    private repositionToasts;
}
