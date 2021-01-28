// Функция для оптимизации отображения canvas под устройство
function setupCanvas(canvas) {
  // Узнать пиксельное соотношение устройства пользователя, либо приравнять к 1
  var dpr = window.devicePixelRatio || 1;
  // Узнать размер элемента canvas в пикселях
  var rect = canvas.getBoundingClientRect();
  // Умножить пиксельные параметры элемента canvas на пиксельное соотношение устройства
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  // Взять контекст отображения элемента canvas
  var ctx = canvas.getContext('2d');
  // Масштабировать все элементы canvas
  ctx.scale(dpr, dpr);
  return ctx;
}

const profitCanvas = document.getElementById('profitPlot');
const profitContext = setupCanvas(profitCanvas);

for (let x = 65; x < 270; x += 34) {
  profitContext.moveTo(x, 0);
  profitContext.lineTo(x, 164);
};

for (let y = 41; y < 164; y += 41) {
  profitContext.moveTo(31, y);
  profitContext.lineTo(269, y);
};

profitContext.lineWidth = '1';
profitContext.strokeStyle = '#E6EBF0';
profitContext.stroke();

profitContext.fillStyle = '#878E9C';
profitContext.font = '9px Gotham Pro';

profitContext.fillText('100', 0, 123);
profitContext.fillText('200', 0, 82);
profitContext.fillText('300', 0, 41);
profitContext.fillText('400', 0, 10);