var L = /* @__PURE__ */ ((e) => (e.BottomRight = "bottom-right", e.BottomLeft = "bottom-left", e.TopRight = "top-right", e.TopLeft = "top-left", e))(L || {}), B = /* @__PURE__ */ ((e) => (e.Success = "success", e.Error = "error", e.Warning = "warning", e.Info = "info", e.Default = "default", e))(B || {});
class E {
  constructor(t) {
    this.toastSpacing = 10, this.isPaused = !1, this.text = t.text, this.heading = t.heading, this.position = t.position ?? "bottom-right", this.type = t.type ?? "default", this.duration = t.duration ?? 3e3, this.dissmissable = t.dissmissable ?? !0, this.draggable = t.draggable ?? !0, this.showTimer = t.showTimer ?? !1, this.pauseOnHover = t.pauseOnHover ?? !0, this.positionModifier = this.position === "bottom-right" || this.position === "bottom-left" ? "bottom" : "top";
  }
  createToastElement() {
    const t = document.createElement("div");
    return t.className = "palm-toast", t.setAttribute("toast-type", this.type), t.setAttribute("toast-position", this.position), t.innerHTML = `
      <strong>${this.heading ?? ""}</strong>
      <p class="toast-body">${this.text}</p>
    `, this.dissmissable && this.addCloseButton(t), this.draggable && this.makeDraggable(t), this.showTimer && this.addTimeBar(t), t;
  }
  showToast() {
    try {
      this.toastElement = this.createToastElement(), document.body.insertBefore(this.toastElement, document.body.lastChild), this.repositionToasts(), this.beginTimer();
    } catch (t) {
      console.error(`An error occurred while generating your PalmToast: 
`, t);
    }
  }
  addCloseButton(t) {
    this.closeButton = document.createElement("button"), this.closeButton.className = "toast-close", this.closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="currentColor" /></svg>
    `, this.closeButton.addEventListener("click", () => this.removeToast()), t.appendChild(this.closeButton);
  }
  makeDraggable(t) {
    console.log(t);
  }
  beginTimer() {
    var m, u, d, c;
    let t, s, i = 0, a = 0, o = !1, n = !1;
    const r = (g) => {
      t || (t = g), a = g - t - i;
      const f = Math.max(0, this.duration - a);
      if (this.timeBar) {
        const b = f / this.duration * 100;
        this.timeBar.style.width = `${b}%`;
      }
      f > 0 ? this.requestAnimationID = requestAnimationFrame(r) : this.removeToast();
    }, p = () => {
      this.requestAnimationID && (cancelAnimationFrame(this.requestAnimationID), this.requestAnimationID = void 0, s = performance.now());
    }, v = () => {
      s && (i += performance.now() - s, s = void 0, this.requestAnimationID = requestAnimationFrame(r));
    }, h = () => {
      this.isPaused || (this.isPaused = !0, p());
    }, l = () => {
      !o && !n && this.isPaused && (this.isPaused = !1, v());
    };
    this.pauseOnHover && ((m = this.toastElement) == null || m.addEventListener("mouseenter", () => {
      o = !0, h();
    }), (u = this.toastElement) == null || u.addEventListener("mouseleave", () => {
      o = !1, l();
    }), (d = this.closeButton) == null || d.addEventListener("focus", () => {
      n = !0, h();
    }), (c = this.closeButton) == null || c.addEventListener("blur", () => {
      n = !1, l();
    })), this.requestAnimationID = requestAnimationFrame(r);
  }
  addTimeBar(t) {
    this.timeBar = document.createElement("div"), this.timeBar.className = "toast-time-bar", t.appendChild(this.timeBar);
  }
  removeToast() {
    this.toastElement && (this.toastElement.style.opacity = "0", this.toastElement.ontransitionend = () => {
      var t;
      (t = this.toastElement) == null || t.remove(), this.repositionToasts(), this.requestAnimationID && (cancelAnimationFrame(this.requestAnimationID), this.requestAnimationID = void 0);
    });
  }
  repositionToasts() {
    const t = document.querySelectorAll(
      `.palm-toast[toast-position="${this.position}"]`
    );
    for (let s = t.length - 1; s >= 0; s--) {
      const i = t[s], a = i.clientHeight * (t.length - s - 1), o = this.toastSpacing * (t.length - s - 1);
      i.style[this.positionModifier] = `${a + o}px`;
    }
  }
}
export {
  E as PalmToast,
  L as ToastPosition,
  B as ToastType
};
