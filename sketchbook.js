/**
 * Interactive Studio Sketchbook & Desk Canvas
 * Allows visitors to sketch with charcoal, ink, olive wash & lilac glaze
 */

class StudioSketchbook {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.points = [];

    // Medium presets
    this.currentTool = "charcoal"; // charcoal, ink, olive, lilac, eraser
    this.brushSize = 3;

    this.tools = {
      charcoal: { color: "rgba(22, 34, 49, 0.75)", size: 4, cap: "round", blur: 1 },
      ink: { color: "#162231", size: 2, cap: "round", blur: 0 },
      olive: { color: "rgba(85, 99, 69, 0.28)", size: 16, cap: "round", blur: 2 },
      lilac: { color: "rgba(184, 167, 199, 0.32)", size: 18, cap: "round", blur: 2 },
      eraser: { color: "#faf7f0", size: 24, cap: "round", blur: 0 }
    };

    this.prompts = [
      "Draw an olive leaf from memory.",
      "Write three words you only say at twilight.",
      "Draw the shadow of the nearest window.",
      "Sketch the curve of your favorite teacup.",
      "Draw a swallow turning against the wind.",
      "Leave a quiet mark or signature."
    ];

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    this.setupListeners();
    this.setupUI();
    this.setRandomPrompt();
  }

  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = this.canvas.width;
    tempCanvas.height = this.canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    if (this.canvas.width > 0 && this.canvas.height > 0) {
      tempCtx.drawImage(this.canvas, 0, 0);
    }

    const dpr = window.devicePixelRatio || 1;
    const width = Math.min(rect.width - 32, 760);
    const height = Math.min(width * 0.65, 460);

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";

    this.ctx.scale(dpr, dpr);
    this.ctx.fillStyle = "#faf7f0";
    this.ctx.fillRect(0, 0, width, height);

    // Draw faint paper lines or tooth
    this.drawPaperTexture(width, height);

    if (tempCanvas.width > 0 && tempCanvas.height > 0) {
      this.ctx.drawImage(tempCanvas, 0, 0, width, height);
    }
  }

  drawPaperTexture(width, height) {
    this.ctx.save();
    this.ctx.strokeStyle = "rgba(85, 99, 69, 0.08)";
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 12]);
    for (let y = 40; y < height; y += 40) {
      this.ctx.beginPath();
      this.ctx.moveTo(30, y);
      this.ctx.lineTo(width - 30, y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  getCoordinates(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  setupListeners() {
    const start = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const coords = this.getCoordinates(e);
      this.lastX = coords.x;
      this.lastY = coords.y;
      this.points = [coords];
      this.drawDot(coords.x, coords.y);
    };

    const move = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const coords = this.getCoordinates(e);
      this.points.push(coords);

      if (this.points.length > 2) {
        const lastTwoPoints = this.points.slice(-2);
        const controlPoint = lastTwoPoints[0];
        const endPoint = {
          x: (controlPoint.x + coords.x) / 2,
          y: (controlPoint.y + coords.y) / 2
        };

        this.drawCurve(this.lastX, this.lastY, controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
        this.lastX = endPoint.x;
        this.lastY = endPoint.y;
      }
    };

    const stop = () => {
      this.isDrawing = false;
      this.points = [];
    };

    this.canvas.addEventListener("mousedown", start);
    this.canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);

    this.canvas.addEventListener("touchstart", start, { passive: false });
    this.canvas.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", stop);
  }

  drawDot(x, y) {
    const tool = this.tools[this.currentTool];
    this.ctx.save();
    this.ctx.fillStyle = tool.color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, tool.size / 2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  drawCurve(startX, startY, ctrlX, ctrlY, endX, endY) {
    const tool = this.tools[this.currentTool];
    this.ctx.save();
    this.ctx.strokeStyle = tool.color;
    this.ctx.lineWidth = tool.size;
    this.ctx.lineCap = tool.cap;
    this.ctx.lineJoin = "round";

    if (tool.blur > 0) {
      this.ctx.shadowBlur = tool.blur;
      this.ctx.shadowColor = tool.color;
    }

    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
    this.ctx.stroke();
    this.ctx.restore();
  }

  setupUI() {
    const toolButtons = document.querySelectorAll("[data-sketch-tool]");
    toolButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        toolButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentTool = btn.dataset.sketchTool;
      });
    });

    const clearBtn = document.getElementById("sketch-clear-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        const width = parseFloat(this.canvas.style.width);
        const height = parseFloat(this.canvas.style.height);
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = "#faf7f0";
        this.ctx.fillRect(0, 0, width, height);
        this.drawPaperTexture(width, height);
      });
    }

    const saveBtn = document.getElementById("sketch-save-btn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.download = `remi-studio-sketch-${Date.now()}.png`;
        link.href = this.canvas.toDataURL("image/png");
        link.click();
      });
    }

    const promptBtn = document.getElementById("sketch-new-prompt-btn");
    if (promptBtn) {
      promptBtn.addEventListener("click", () => this.setRandomPrompt());
    }
  }

  setRandomPrompt() {
    const promptElem = document.getElementById("sketch-prompt-text");
    if (promptElem) {
      const random = this.prompts[Math.floor(Math.random() * this.prompts.length)];
      promptElem.textContent = `“${random}”`;
    }
  }
}

if (typeof window !== "undefined") {
  window.StudioSketchbook = StudioSketchbook;
}
