webpackJsonp([25], {
  810: function(t, e, i) {
    'use strict'
    function a() {
      this._data = null
    }
    function s(t, e) {
      ;(this._gotoDateResult = e),
        (this._series = t),
        (this._invalidated = !0),
        (this._renderer = new a())
    }
    var n = i(6).Point,
      r = i(69).CompositeRenderer,
      o = i(201).DateFormatter,
      l = i(130).TimeFormatter,
      d = i(81).calcTextHorizontalShift
    ;(a.prototype.setData = function(t) {
      this._data = t
    }),
      (a.prototype.hitTest = function() {
        return null
      }),
      (a.prototype.draw = function(t) {
        var e, i, a, s, n, r, o, l, h, _, u, m, p, f, T, S, c, g, x
        null !== this._data &&
          ((e = 5),
          (i = 12),
          (a = 5),
          (s = 8),
          (n = 13),
          (r = 0),
          t.save(),
          t.setFont(n + 'px Arial'),
          (h = $.t('Last available bar')),
          this._data.eod
            ? (r = t.measureText(h).width)
            : ((o = t.measureText(this._data.dateString || '').width),
              (l = t.measureText(this._data.timeString || '').width),
              (r = Math.max(o, l))),
          (_ = this._data.timeString ? 2 : 1),
          (t.fillStyle = this._data.eod ? '#FF4040' : '#58A3CD'),
          t.translate(this._data.point.x + 0.5, this._data.point.y + 0.5),
          (u = Math.round(-r / 2) - s),
          (m = -(n + e) * _ - e - i - a),
          (p = Math.round(u + r + 2 * s)),
          (f = -i - a),
          t.beginPath(),
          t.moveTo(u, m),
          t.lineTo(p, m),
          t.lineTo(p, f),
          t.lineTo(i, f),
          t.lineTo(0, f + i),
          t.lineTo(-i, f),
          t.lineTo(u, f),
          t.fill(),
          (t.fillStyle = '#FFFFFF'),
          (t.textBaseline = 'middle'),
          this._data.eod
            ? ((T = d(t, r)), t.fillText(h, u + s + T, m + (f - m) / 2))
            : ((S = u + s + (r - o) / 2),
              (c = d(t, o)),
              t.fillText(this._data.dateString, S + c, m + n / 2 + e),
              this._data.timeString &&
                ((g = d(t, l)),
                (x = u + s + (r - l) / 2),
                t.fillText(this._data.timeString, x + g, m + (n + e) * _ - 0.5 * n))),
          t.restore())
      }),
      (s.prototype.update = function() {
        this._invalidated = !0
      }),
      (s.prototype.updateImpl = function() {
        var t, e, i, a, s, r, d
        delete this._point,
          delete this._dateString,
          delete this._timeString,
          delete this._eod,
          (t = this._series
            .model()
            .timeScale()
            .timePointToIndex(this._gotoDateResult.timestamp)),
          (e = this._series.bars()),
          (i = null),
          t < e.firstIndex() && null !== e.first()
            ? ((t = e.firstIndex()), (i = e.first().value))
            : t > e.lastIndex() && null !== e.last()
            ? ((t = e.lastIndex()), (i = e.last().value))
            : (i = e.valueAt(t)),
          null !== i &&
            null != (a = this._series.firstValue()) &&
            ((s = this._series.priceScale().priceToCoordinate(i[TradingView.HIGH_PLOT], a)),
            (r = this._series
              .model()
              .timeScale()
              .indexToCoordinate(t)),
            (this._point = new n(r, s)),
            this._gotoDateResult.eod
              ? (this._eod = !0)
              : ((d = this._series
                  .model()
                  .timeScale()
                  .indexToUserTime(t)),
                (this._dateString = new o().format(d)),
                this._series.isDWM() || (this._timeString = new l().format(d))))
      }),
      (s.prototype.renderer = function() {
        return (
          this._invalidated && (this.updateImpl(), (this._invalidated = !1)),
          this._point
            ? (this._renderer.setData({
                point: this._point,
                dateString: this._dateString,
                timeString: this._timeString,
                eod: this._eod,
              }),
              this._renderer)
            : new r()
        )
      }),
      (t.exports.GotoDateView = s)
  },
})
