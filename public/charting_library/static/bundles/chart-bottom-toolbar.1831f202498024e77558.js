webpackJsonp([12], {
  1041: function(e, t) {
    e.exports = {
      tabs: 'tabs-3f6R4UrH-',
      tab: 'tab-C-so14ap-',
      active: 'active-3_gZ3PzW-',
      slider: 'slider-XCKyHkum-',
    }
  },
  1165: function(e, t) {
    e.exports = { button: 'button-1VVj8kLG-' }
  },
  1166: function(e, t) {
    e.exports = {
      item: 'item-3cgIlGYO-',
      hovered: 'hovered-2g31gdB--',
      isActive: 'isActive-2M6dwA7--',
      isFirst: 'isFirst-2kfAV5tf-',
      isLast: 'isLast-voJ1bqZh-',
    }
  },
  1167: function(e, t) {
    e.exports = { slider: 'slider-1ealLtjI-', inner: 'inner-3lmAEIjy-' }
  },
  1168: function(e, t) {
    e.exports = { sliderRow: 'sliderRow-Tv1W7hM5-' }
  },
  1169: function(e, t) {
    e.exports = { button: 'button-2gir_Bbb-', hovered: 'hovered-C6AkUeyT-' }
  },
  1170: function(e, t) {
    e.exports = {
      button: 'button-88UE6omC-',
      hovered: 'hovered-3xELmoc6-',
      inner: 'inner-2FptJsfC-',
    }
  },
  1171: function(e, t) {
    e.exports = { button: 'button-37qwTsBL-' }
  },
  1172: function(e, t) {
    e.exports = { separator: 'separator-3bp1jCsV-' }
  },
  1173: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="currentColor" d="M9 5.1V4a1 1 0 1 1 2 0v1.1c.638.13 1.233.38 1.757.728l.779-.778a1 1 0 0 1 1.414 1.414l-.778.779c.347.524.598 1.119.728 1.757H16a1 1 0 0 1 0 2h-1.1a4.972 4.972 0 0 1-.728 1.757l.778.779a1 1 0 0 1-1.414 1.414l-.779-.778A4.972 4.972 0 0 1 11 14.9V16a1 1 0 0 1-2 0v-1.1a4.972 4.972 0 0 1-1.757-.728l-.779.778a1 1 0 1 1-1.414-1.414l.778-.779A4.972 4.972 0 0 1 5.1 11H4a1 1 0 1 1 0-2h1.1c.13-.638.38-1.233.728-1.757l-.778-.779A1 1 0 0 1 6.464 5.05l.779.778A4.972 4.972 0 0 1 9 5.1zm1 7.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>'
  },
  1174: function(e, t) {
    e.exports = { icon: 'icon-2Gun4jqH-' }
  },
  1175: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>'
  },
  1176: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 8V6a1 1 0 0 1 1-1h2m10 3V6a1 1 0 0 0-1-1h-2M4 12v2a1 1 0 0 0 1 1h2m10-3v2a1 1 0 0 1-1 1h-2"/></svg>'
  },
  1177: function(e, t) {
    e.exports = {
      toolbar: 'toolbar-2MJefnwP-',
      dateRangeWrapper: 'dateRangeWrapper-yS_7EK1i-',
      seriesControlWrapper: 'seriesControlWrapper-1c7dZFwu-',
      dateRangeExpanded: 'dateRangeExpanded-Eh9SAOEe-',
      dateRangeCollapsed: 'dateRangeCollapsed-1-pFg0M1-',
      item: 'item-2cWFW_ze-',
      first: 'first-1XNI05qr-',
      last: 'last-2VBe7EFW-',
      inline: 'inline-2rwBBIxN-',
      timezone: 'timezone-34WAZb8x-',
      icon: 'icon-3VRthUnU-',
      hidden: 'hidden-3Tq8Bf9V-',
      collapsed: 'collapsed-2lhil-Rc-',
    }
  },
  816: function(e, t, n) {
    'use strict'
    function i(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var i = t.call(this, e, n) || this
            return (
              (i._handleSelectRange = function(e) {
                var t, n, a
                i.setState({ activeRange: e.value }),
                  (t = i.context.chartWidget),
                  (n = t.model()),
                  (a = { val: e.value, res: e.targetResolution }),
                  n.loadRange(a)
              }),
              (i.state = { ranges: [] }),
              i
            )
          }
          return (
            C.c(n, t),
            (n.prototype.componentDidMount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                var n = t.model(),
                  i = n.mainSeries()
                i.onStatusChanged().subscribe(e, e._updateAvailableRanges),
                  R.enabled('update_timeframes_set_on_symbol_resolve') &&
                    i
                      .dataEvents()
                      .symbolResolved()
                      .subscribe(e, e._updateAvailableRanges),
                  i
                    .priceScale()
                    .properties()
                    .lockScale.subscribe(e, e._updateAvailableRanges),
                  i.onIntervalChanged().subscribe(e, e._onRangeChanged),
                  n
                    .model()
                    .onResetScales()
                    .subscribe(e, e._resetActiveInterval),
                  i
                    .dataEvents()
                    .symbolResolved()
                    .subscribe(e, e._resetActiveInterval),
                  i.properties().extendedHours.subscribe(e, e._resetActiveInterval),
                  e._updateAvailableRanges()
              }),
                t.onScroll().subscribe(this, this._resetActiveInterval)
            }),
            (n.prototype.componentWillUnmount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                var n = t.model(),
                  i = n.mainSeries()
                i.onStatusChanged().unsubscribe(e, e._updateAvailableRanges),
                  R.enabled('update_timeframes_set_on_symbol_resolve') &&
                    i
                      .dataEvents()
                      .symbolResolved()
                      .unsubscribe(e, e._updateAvailableRanges),
                  i
                    .priceScale()
                    .properties()
                    .lockScale.unsubscribe(e, e._updateAvailableRanges),
                  i.onIntervalChanged().unsubscribe(e, e._onRangeChanged),
                  n
                    .model()
                    .onResetScales()
                    .unsubscribe(e, e._resetActiveInterval),
                  i
                    .dataEvents()
                    .symbolResolved()
                    .unsubscribe(e, e._resetActiveInterval),
                  i.properties().extendedHours.unsubscribe(e, e._resetActiveInterval)
              }),
                t.onScroll().unsubscribe(this, this._resetActiveInterval)
            }),
            (n.prototype.render = function() {
              return y.createElement(e, {
                goToDateButton: this.props.goToDateButton,
                className: this.props.className,
                ranges: this.state.ranges,
                activeRange: this.state.activeRange,
                onSelectRange: this._handleSelectRange,
              })
            }),
            (n.prototype._onRangeChanged = function(e, t) {
              this.setState({ activeRange: t.timeframe })
            }),
            (n.prototype._resetActiveInterval = function() {
              this.setState({ activeRange: void 0 })
            }),
            (n.prototype._updateAvailableRanges = function() {
              var e,
                t,
                n,
                i = this.context,
                a = i.availableTimeFrames,
                o = i.chartWidget
              o.model() &&
                ((e = o.model().mainSeries()),
                (t = e.status()) !== M.STATUS_LOADING &&
                  t !== M.STATUS_RESOLVING &&
                  ((n = a(e.symbolInfo(), e.status())),
                  0 !== n.length && this.setState({ ranges: n })))
            }),
            n
          )
        })(y.PureComponent)),
        (t.contextTypes = {
          availableTimeFrames: S.func.isRequired,
          chartWidget: S.object.isRequired,
        }),
        t
      )
    }
    function a(e) {
      return y.createElement('div', { className: z.slider, ref: e.reference })
    }
    function o(e) {
      return (function(t) {
        function n() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e._activeTab = null), e
        }
        return (
          C.c(n, t),
          (n.prototype.componentDidUpdate = function() {
            this._componentDidUpdate()
          }),
          (n.prototype.componentDidMount = function() {
            this._componentDidUpdate()
          }),
          (n.prototype.render = function() {
            var t = this,
              n = this.props.className,
              i = this._generateTabs()
            return y.createElement(
              'div',
              { className: E(n, z.tabs) },
              i,
              y.createElement(e, {
                reference: function(e) {
                  t._slider = e
                },
              }),
            )
          }),
          (n.prototype._generateTabs = function() {
            var e = this
            return (
              (this._activeTab = null),
              y.Children.map(this.props.children, function(t) {
                var n = t,
                  i = !!n.props.isActive,
                  a = {
                    reference: function(t) {
                      i && (e._activeTab = t), n.props.reference && n.props.reference(t)
                    },
                  }
                return y.cloneElement(n, a)
              })
            )
          }),
          (n.prototype._componentDidUpdate = function() {
            var e,
              t,
              n = Object(B.ensureNotNull)(this._slider),
              i = n.style
            this._activeTab
              ? ((e = this._activeTab.offsetWidth),
                (t = this._activeTab.offsetLeft),
                (i.transform = 'translateX(' + t + 'px)'),
                (i.width = e + 'px'),
                (i.opacity = '1'))
              : (i.opacity = '0')
          }),
          n
        )
      })(y.PureComponent)
    }
    function s(e) {
      var t,
        n = E(
          I.item,
          ((t = {}),
          (t[I.isActive] = e.isActive),
          (t[I.isFirst] = e.isFirst),
          (t[I.isLast] = e.isLast),
          t),
        )
      return y.createElement(
        'div',
        { className: n, onClick: e.onClick, ref: e.reference },
        e.children,
      )
    }
    function r(e) {
      return y.createElement(
        'div',
        { className: L.slider, ref: e.reference },
        y.createElement('div', { className: L.inner }),
      )
    }
    function l(e) {
      var t = e.className,
        n = e.ranges,
        i = e.activeRange,
        a = e.onSelectRange
      return y.createElement(
        H,
        { className: E($.sliderRow, t) },
        n.map(function(e, t) {
          return y.createElement(
            s,
            {
              key: e.value,
              isFirst: 0 === t,
              isLast: t === n.length - 1,
              isActive: i === e.value,
              onClick: a && a.bind(null, e),
            },
            y.createElement(
              'div',
              { title: e.description || e.text, className: 'apply-common-tooltip' },
              e.text,
            ),
          )
        }),
      )
    }
    function c(e) {
      var t = e.reference,
        n = e.className,
        i = e.children,
        a = C.e(e, ['reference', 'className', 'children'])
      return y.createElement(
        'button',
        C.a({}, a, { className: E(n, X.button), ref: t }),
        y.createElement('span', { className: X.inner }, i),
      )
    }
    function d(e) {
      e.updateActions()
      var t = e.actions()
      return t && t.applyTimeZone && t.applyTimeZone.subActions ? t.applyTimeZone.subActions : []
    }
    function u(e) {
      return y.createElement('span', { className: E(oe.separator, e.className) })
    }
    function p(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var i = t.call(this, e, n) || this
            return (
              (i._priceScale = null),
              (i._handleSelect = function() {
                var e = i.context.chartWidget,
                  t = e.model(),
                  n = Object(B.ensureNotNull)(i.state.series),
                  a = n.priceScale(),
                  o = a.mode()
                n.priceScale().isLockScale() ||
                  t.setPriceScaleMode({ log: !o.log }, a, window.t('Toggle Log Scale'))
              }),
              (i.state = { isActive: !1, series: null }),
              i
            )
          }
          return (
            C.c(n, t),
            (n.prototype.componentDidMount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                var n = t.model().mainSeries(),
                  i = n.priceScale()
                e._handleMainSeriesPriceScaleChanged(i),
                  n.priceScaleChanged().subscribe(e, e._handleMainSeriesPriceScaleChanged),
                  e._handleModeChanged({}, i.mode()),
                  e.setState({ isActive: n.priceScale().isLog(), series: n })
              })
            }),
            (n.prototype.componentWillUnmount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                t.model()
                  .mainSeries()
                  .priceScaleChanged()
                  .unsubscribe(e, e._handleMainSeriesPriceScaleChanged)
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null))
            }),
            (n.prototype.render = function() {
              var t = this.props.className,
                n = this.state,
                i = n.isActive,
                a = n.series
              return y.createElement(e, {
                className: t,
                isLogarithm: i,
                isDisabled: null === a,
                onClick: this._handleSelect,
              })
            }),
            (n.prototype._handleMainSeriesPriceScaleChanged = function(e) {
              var t = {}
              null !== this._priceScale &&
                ((t = this._priceScale.mode()),
                this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged)),
                (this._priceScale = e),
                this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                this._handleModeChanged(t, e.mode())
            }),
            (n.prototype._handleModeChanged = function(e, t) {
              e.log !== t.log && this.setState({ isActive: t.log })
            }),
            n
          )
        })(y.PureComponent)),
        (t.contextTypes = { chartWidget: S.object.isRequired }),
        t
      )
    }
    function h(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var i = t.call(this, e, n) || this
            return (
              (i._priceScale = null),
              (i._handleSelect = function() {
                var e = i.context.chartWidget,
                  t = e.model(),
                  n = Object(B.ensureNotNull)(i.state.series),
                  a = n.priceScale(),
                  o = a.mode()
                t.setPriceScaleMode({ autoScale: !o.autoScale }, a, window.t('Toggle Auto Scale'))
              }),
              (i.state = { isActive: !1, series: null }),
              i
            )
          }
          return (
            C.c(n, t),
            (n.prototype.componentDidMount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                var n = t.model().mainSeries(),
                  i = n.priceScale()
                e._handleMainSeriesPriceScaleChanged(i),
                  n.priceScaleChanged().subscribe(e, e._handleMainSeriesPriceScaleChanged),
                  e._handleModeChanged({}, i.mode()),
                  e.setState({ isActive: n.priceScale().isAutoScale(), series: n })
              })
            }),
            (n.prototype.componentWillUnmount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                t.model()
                  .mainSeries()
                  .priceScaleChanged()
                  .unsubscribe(e, e._handleMainSeriesPriceScaleChanged)
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null))
            }),
            (n.prototype.render = function() {
              var t = this.props.className,
                n = this.state,
                i = n.isActive,
                a = n.series
              return y.createElement(e, {
                className: t,
                isAuto: i,
                isDisabled: null === a,
                onClick: this._handleSelect,
              })
            }),
            (n.prototype._handleMainSeriesPriceScaleChanged = function(e) {
              var t = {}
              null !== this._priceScale &&
                ((t = this._priceScale.mode()),
                this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged)),
                (this._priceScale = e),
                this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                this._handleModeChanged(t, e.mode())
            }),
            (n.prototype._handleModeChanged = function(e, t) {
              e.autoScale !== t.autoScale && this.setState({ isActive: t.autoScale })
            }),
            n
          )
        })(y.PureComponent)),
        (t.contextTypes = { chartWidget: S.object.isRequired }),
        t
      )
    }
    function m(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var i = t.call(this, e, n) || this
            return (
              (i._priceScale = null),
              (i._handleSelect = function() {
                var e = i.context.chartWidget,
                  t = e.model(),
                  n = Object(B.ensureNotNull)(i.state.series),
                  a = n.priceScale(),
                  o = a.mode()
                n.priceScale().isLockScale() ||
                  t.setPriceScaleMode(
                    { percentage: !o.percentage },
                    a,
                    window.t('Toggle Percentage Scale'),
                  )
              }),
              (i.state = { isActive: !1, series: null }),
              i
            )
          }
          return (
            C.c(n, t),
            (n.prototype.componentDidMount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                var n = t.model().mainSeries(),
                  i = n.priceScale()
                e._handleMainSeriesPriceScaleChanged(i),
                  n.priceScaleChanged().subscribe(e, e._handleMainSeriesPriceScaleChanged),
                  e._handleScaleChange({}, i.mode()),
                  e.setState({ isActive: n.priceScale().isPercentage(), series: n })
              })
            }),
            (n.prototype.componentWillUnmount = function() {
              var e = this,
                t = this.context.chartWidget
              t.withModel(null, function() {
                t.model()
                  .mainSeries()
                  .priceScaleChanged()
                  .unsubscribe(e, e._handleMainSeriesPriceScaleChanged)
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null))
            }),
            (n.prototype.render = function() {
              var t = this.props.className,
                n = this.state,
                i = n.isActive,
                a = n.series
              return y.createElement(e, {
                className: t,
                isPercentage: i,
                isDisabled: null === a,
                onClick: this._handleSelect,
              })
            }),
            (n.prototype._handleMainSeriesPriceScaleChanged = function(e) {
              var t = {}
              null !== this._priceScale &&
                ((t = this._priceScale.mode()),
                this._priceScale.modeChanged().unsubscribe(this, this._handleScaleChange)),
                (this._priceScale = e),
                this._priceScale.modeChanged().subscribe(this, this._handleScaleChange),
                this._handleScaleChange(t, e.mode())
            }),
            (n.prototype._handleScaleChange = function(e, t) {
              e.percentage !== t.percentage && this.setState({ isActive: t.percentage })
            }),
            n
          )
        })(y.PureComponent)),
        (t.contextTypes = { chartWidget: S.object.isRequired }),
        t
      )
    }
    function f(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var i,
              a = t.call(this, e, n) || this
            return (
              (a._handleClick = function(e) {
                var t = a.context.resizerDetacher
                e.shiftKey && t.detachable.value()
                  ? t.detach()
                  : a.state.isFullscreen
                  ? t.exitFullscreen()
                  : t.requestFullscreen()
              }),
              (a._handleLayoutChange = function(e) {
                a.setState({ isFullscreen: e })
              }),
              (i = a.context.resizerDetacher),
              (a.state = { isFullscreen: i.fullscreen.value() }),
              a
            )
          }
          return (
            C.c(n, t),
            (n.prototype.componentDidMount = function() {
              this.context.resizerDetacher.fullscreen.subscribe(this._handleLayoutChange)
            }),
            (n.prototype.componentWillUnmount = function() {
              this.context.resizerDetacher.fullscreen.unsubscribe(this._handleLayoutChange)
            }),
            (n.prototype.render = function() {
              var t = this.props.className,
                n = this.state.isFullscreen
              return y.createElement(e, {
                className: t,
                isFullscreen: n,
                onClick: this._handleClick,
              })
            }),
            n
          )
        })(y.PureComponent)),
        (t.contextTypes = {
          chartWidget: S.object.isRequired,
          resizerDetacher: S.object.isRequired,
        }),
        t
      )
    }
    function g(e) {
      if (e.map) {
        return y.Children.toArray(e.children).map(e.map)
      }
      return e.children
    }
    function v(e) {
      return Object.keys(e)
        .map(function(t) {
          return { name: t, width: e[t].offsetWidth }
        })
        .sort(function(e, t) {
          return Te[e.name] - Te[t.name]
        })
    }
    function b(e) {
      var t = {}
      return (
        Object.keys(e).forEach(function(n) {
          var i,
            a = e[n]
          null !== a && null !== (i = x.findDOMNode(a)) && (t[n] = i)
        }),
        t
      )
    }
    function _(e, t) {
      return function(n, i, a) {
        var o, s, r, l
        return y.isValidElement(n) &&
          'string' != typeof n.type &&
          ((o = n.props), 'string' == typeof o.className)
          ? ((s = {
              className: E(o.className, 0 === i && fe.first, i === a.length - 1 && fe.last),
            }),
            (r = e()),
            (l = Object(B.ensureDefined)(Me.get(n.type))),
            y.createElement(
              'div',
              {
                key: null === n.key ? void 0 : n.key,
                className: E(fe.inline, r[l] && fe.collapsed),
                ref: function(e) {
                  return t(e, l)
                },
              },
              y.cloneElement(n, s),
            ))
          : n
      }
    }
    var C,
      y,
      x,
      S,
      E,
      w,
      R,
      N,
      T,
      M,
      W,
      k,
      A,
      D,
      O,
      j,
      B,
      z,
      I,
      F,
      P,
      L,
      $,
      H,
      U,
      q,
      G,
      V,
      Z,
      J,
      K,
      Y,
      X,
      Q,
      ee,
      te,
      ne,
      ie,
      ae,
      oe,
      se,
      re,
      le,
      ce,
      de,
      ue,
      pe,
      he,
      me,
      fe,
      ge,
      ve,
      be,
      _e,
      Ce,
      ye,
      xe,
      Se,
      Ee,
      we,
      Re,
      Ne,
      Te,
      Me,
      We,
      ke,
      Ae,
      De
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (C = n(1)),
      (y = n(20)),
      (x = n(59)),
      n(11),
      (S = n(104)),
      (E = n(102)),
      (w = n(313)),
      (R = n(5)),
      (N = n(880)),
      (T = n(846)),
      (M = n(40)),
      (W = n(849)),
      (k = n(328)),
      (A = n(1165)),
      (D = { title: window.t('Date Range'), goToDate: window.t('Go to...') }),
      (O = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleGoToDateClick = function() {
              var e = t.context.chartWidget
              Object(k.showGoToDateDialog)(e.model())
            }),
            (t._handleRangeSelect = function(e) {
              e && t.props.onSelectRange && t.props.onSelectRange(e)
            }),
            t
          )
        }
        return (
          C.c(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props,
              n = t.ranges,
              i = t.activeRange,
              a = t.goToDateButton
            return y.createElement(
              N.a,
              {
                className: A.button,
                content: D.title,
                arrow: !0,
                verticalAttachEdge: N.b.Top,
                verticalDropDirection: N.c.FromBottomToTop,
                horizontalMargin: 4,
              },
              n.map(function(t) {
                return y.createElement(T.a, {
                  key: t.value,
                  label: t.description || t.text,
                  isActive: i === t.value,
                  onClick: e._handleRangeSelect,
                  onClickArg: t,
                })
              }),
              a && y.createElement(W.a, null),
              a && y.createElement(T.a, { label: D.goToDate, onClick: this._handleGoToDateClick }),
            )
          }),
          (t.contextTypes = { chartWidget: S.object.isRequired }),
          t
        )
      })(y.PureComponent)),
      (j = i(O)),
      (B = n(7)),
      (z = n(1041)),
      o(a),
      (I = n(1166)),
      (F = n(1167)),
      (P = n(882)),
      (L = Object(P.a)(z, F)),
      ($ = n(1168)),
      (H = o(r)),
      (U = i(l)),
      (q = n(306)),
      (G = n(1169)),
      (V = { title: window.t('Go to...') }),
      (Z = Object(q.b)({ keys: ['Alt', 'G'], text: '{0} + {1}' })),
      (J = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleClick = function() {
              var e = t.context.chartWidget
              Object(k.showGoToDateDialog)(e.model())
            }),
            t
          )
        }
        return (
          C.c(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.className
            return (
              e.ranges.length > 0 &&
              y.createElement(
                'div',
                {
                  className: E('apply-common-tooltip', G.button, t),
                  'data-tooltip-hotkey': Z,
                  onClick: this._handleClick,
                },
                V.title,
              )
            )
          }),
          (t.contextTypes = { chartWidget: S.object.isRequired }),
          t
        )
      })(y.PureComponent)),
      (K = i(J)),
      (Y = n(847)),
      (X = n(1170)),
      (Q = n(340)),
      (ee = n(130)),
      (te = n(195)),
      (ne = n(1171)),
      (ie = { hint: window.t('Timezone') }),
      (ae = (function(e) {
        function t(t, n) {
          var i = e.call(this, t, n) || this
          return (
            (i._element = null),
            (i._timeFormatter = new ee.TimeFormatter()),
            (i._handleRef = function(e) {
              i._element = e
            }),
            (i.state = { time: '', timezone: '' }),
            i
          )
        }
        return (
          C.c(t, e),
          (t.prototype.componentDidMount = function() {
            var e,
              t = this,
              n = this.context.chartWidget,
              i = this.props.withMenu
            n.withModel(null, function() {
              var e = n.model()
              e
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .subscribe(t, t.updateTimezonesButton),
                e
                  .model()
                  .properties()
                  .timezone.subscribe(t, t.updateTimezonesButton)
            }),
              i &&
                ((e = Object(B.ensureNotNull)(this._element)),
                Object(Y.bindPopupMenu)(
                  e,
                  function() {
                    return d(n).map(function(e) {
                      return {
                        action: e.enabled ? e.executeCallback.bind(e) : null,
                        addClass: e.enabled ? '' : 'special',
                        disabled: !e.enabled,
                        iconClass:
                          e.checkable && e.checked ? 'icon checked-icon' : 'unchecked-icon',
                        svg: e.checkable && e.checked ? te : '',
                        title: e.text || '',
                      }
                    })
                  },
                  { direction: 'up', addClass: 'context-menu', svg: !0, wrapIcon: !0 },
                ))
          }),
          (t.prototype.componentWillUnmount = function() {
            var e,
              t = this,
              n = this.context.chartWidget
            n.withModel(null, function() {
              var e = n.model()
              e
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .unsubscribe(t, t.updateTimezonesButton),
                e
                  .model()
                  .properties()
                  .timezone.unsubscribe(t, t.updateTimezonesButton)
            }),
              (e = Object(B.ensureNotNull)(this._element)),
              Object(Y.unbindPopupMenu)(e)
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.className,
              n = e.isDisabled,
              i = this.state,
              a = i.time,
              o = i.timezone
            return y.createElement(
              c,
              {
                className: E(t, ne.button, 'apply-common-tooltip'),
                title: ie.hint,
                reference: this._handleRef,
                disabled: n,
              },
              a && o && a + ' (' + o + ')',
            )
          }),
          (t.prototype.updateTimezonesButton = function() {
            var e,
              t,
              n,
              i,
              a = this.context.chartWidget
            a.model() &&
              null !==
                a
                  .model()
                  .mainSeries()
                  .symbolInfo() &&
              ((e = a
                .model()
                .model()
                .timezone()),
              'exchange' === e &&
                ((t = Object(B.ensureNotNull)(
                  a
                    .model()
                    .mainSeries()
                    .symbolInfo(),
                )),
                (n = t.timezone) && (e = n)),
              (i = Object(Q.a)(e)),
              (this._timezoneOffset = i.offset),
              this.setState({ timezone: i.string }),
              this.tickClock())
          }),
          (t.prototype.tickClock = function() {
            var e,
              t,
              n = this.context.chartApiInstance,
              i = this._timezoneOffset
            void 0 !== i &&
              ((e = 1e3 * n.serverTimeOffset()),
              (t = new Date(Date.now() + i + e)),
              this.setState({ time: this._timeFormatter.format(t) }))
          }),
          (t.contextTypes = {
            chartWidget: S.object.isRequired,
            chartApiInstance: S.object.isRequired,
          }),
          t
        )
      })(y.PureComponent)),
      (oe = n(1172)),
      (se = n(848)),
      (re = n(300)),
      (le = n(41)),
      (ce = n(1173)),
      (de = n(1174)),
      (ue = { hint: window.t('Scales Properties') }),
      (pe = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._element = null),
            (t._handleRef = function(e) {
              t._element = e
            }),
            t
          )
        }
        return (
          C.c(t, e),
          (t.prototype.componentDidMount = function() {
            var e = this.context.chartWidget,
              t = Object(B.ensureNotNull)(this._element)
            Object(Y.bindPopupMenu)(
              t,
              function() {
                var t,
                  n,
                  i,
                  a,
                  o,
                  s,
                  r,
                  l = e.paneWidgets()
                for (t = 0; t < l.length; ++t)
                  if (((n = l[t]), n.containsMainSeries())) {
                    if (((i = []), !(a = n.getDefaultPriceAxisWidget()))) return i
                    for (o = a.getContextMenuActions(), s = 0; s < o.length; ++s)
                      (r = o[s]),
                        r instanceof le.ActionSeparator
                          ? i.push({ separator: !0 })
                          : i.push({
                              action: r.enabled ? r.executeCallback.bind(r) : null,
                              addClass: r.enabled ? '' : 'special',
                              disabled: !r.enabled,
                              iconClass:
                                r.checkable && r.checked ? 'icon checked-icon' : 'unchecked-icon',
                              svg: r.checkable && r.checked ? te : '',
                              title: r.text || '',
                            })
                    return i
                  }
                return []
              },
              { direction: 'up', addClass: 'context-menu', reverse: !0, svg: !0, wrapIcon: !0 },
            )
          }),
          (t.prototype.componentWillUnmount = function() {
            var e = Object(B.ensureNotNull)(this._element)
            Object(Y.unbindPopupMenu)(e)
          }),
          (t.prototype.render = function() {
            var e = this.props.className
            return y.createElement(
              c,
              {
                reference: this._handleRef,
                className: E('apply-common-tooltip', e),
                title: ue.hint,
              },
              y.createElement(re.a, { className: de.icon, icon: ce }),
            )
          }),
          (t.contextTypes = { chartWidget: S.object.isRequired }),
          t
        )
      })(y.PureComponent)),
      (he = n(1175)),
      (me = n(1176)),
      (fe = n(1177)),
      (_e = {
        extLabel: window.t('ext'),
        extHint: window.t('Extended Hours is available only for intraday charts'),
        percentageHint: window.t('Toggle Percentage'),
        logLabel: window.t('log', { context: 'scale' }),
        logHint: window.t('Toggle Log Scale'),
        autoLabel: window.t('auto', { context: 'scale' }),
        autoHint: window.t('Toggle Auto Scale'),
        fullscreenHint: window.t('Toggle Maximize Chart'),
        adjLabel: window.t('adj', { context: 'adjustments' }),
        adjHint: window.t('Adjust data for dividends'),
      }),
      (Ce = p(function(e) {
        return y.createElement(se.a, {
          text: _e.logLabel,
          title: _e.logHint,
          className: e.className,
          isActive: e.isLogarithm,
          onClick: e.onClick,
        })
      })),
      (ye = h(function(e) {
        return y.createElement(se.a, {
          text: _e.autoLabel,
          title: _e.autoHint,
          className: e.className,
          isActive: e.isAuto,
          onClick: e.onClick,
        })
      })),
      (xe = m(function(e) {
        return y.createElement(se.a, {
          icon: he,
          title: _e.percentageHint,
          className: e.className,
          isActive: e.isPercentage,
          isDisabled: e.isDisabled,
          onClick: e.onClick,
        })
      })),
      (Re = f(function(e) {
        return y.createElement(se.a, {
          icon: me,
          title: _e.fullscreenHint,
          className: e.className,
          isActive: e.isFullscreen,
          onClick: e.onClick,
        })
      })),
      (ge = {}),
      (ge.properties = !0),
      (ge.fullscreen = !0),
      (Ne = ge),
      (ve = {}),
      (ve.fullscreen = Number.MIN_SAFE_INTEGER),
      (ve.properties = Number.MIN_SAFE_INTEGER),
      (ve.timeZones = -1),
      (ve.auto = 0),
      (ve.logarithm = 1),
      (ve.percentage = 2),
      (ve.ext = 3),
      (ve.adj = 4),
      (Te = ve),
      (Me = (function() {
        var e = new Map()
        return (
          e.set(Ce, 'logarithm'),
          e.set(xe, 'percentage'),
          e.set(ye, 'auto'),
          void 0 !== Se && e.set(Se, 'percentage'),
          void 0 !== we && e.set(we, 'ext'),
          void 0 !== Ee && e.set(Ee, 'adj'),
          e.set(Re, 'fullscreen'),
          e.set(pe, 'properties'),
          e
        )
      })()),
      (be = { dateRangeMode: 'hidden' }),
      (be.timeZones = !0),
      (be.fullscreen = !0),
      (be.properties = !0),
      (be.auto = !0),
      (be.logarithm = !0),
      (be.percentage = !0),
      (be.ext = !0),
      (be.adj = !0),
      (We = be),
      (ke = (function(e) {
        function t(t, n) {
          var i,
            a,
            o,
            s,
            r = e.call(this, t, n) || this
          return (
            (r._timezoneButtonRef = null),
            (r._layout = Object.assign({}, We)),
            (r._raf = null),
            (r._toolbar = null),
            (r._rangeExpanded = null),
            (r._rangeCollapsed = null),
            (r._seriesControls = null),
            (r._seriesComponents = {}),
            (r._injector = _(
              function() {
                return r._layout
              },
              function(e, t) {
                return (r._seriesComponents[t] = e)
              },
            )),
            (r._handleTimezoneButtonRef = function(e) {
              r._timezoneButtonRef = e
            }),
            (r._handleMeasure = function() {
              null !== r._toolbar && r.resizeUI()
            }),
            (r._handleFullscreenableChange = function(e) {
              r._setStateWithResize({ isFullscreenable: e })
            }),
            (r._handleActiveWidgetChange = function() {
              var e = r.context,
                t = e.chartWidgetCollection,
                n = e.chartWidget
              r.setState({ isActive: t.activeChartWidget.value() === n })
            }),
            (r._handleToolbarRef = function(e) {
              return (r._toolbar = e)
            }),
            (r._handleRangeCollapsedRef = function(e) {
              return (r._rangeCollapsed = e)
            }),
            (r._handleRangeExpandedRef = function(e) {
              return (r._rangeExpanded = e)
            }),
            (r._handleSeriesControlsRef = function(e) {
              return (r._seriesControls = e)
            }),
            (r._handleTimeZonesRef = function(e) {
              r._seriesComponents.timeZones = e
            }),
            (i = r.context),
            (a = i.chartWidgetCollection),
            (o = i.chartWidget),
            (s = i.resizerDetacher),
            (r.state = {
              isActive: a.activeChartWidget.value() === o,
              isFullscreenable: s.fullscreenable.value(),
            }),
            r
          )
        }
        return (
          C.c(t, e),
          (t.prototype.componentDidMount = function() {
            var e = this.context,
              t = e.resizerDetacher,
              n = e.chartWidgetCollection
            e.chartWidget
            t.fullscreenable.subscribe(this._handleFullscreenableChange),
              n.activeChartWidget.subscribe(this._handleActiveWidgetChange),
              this.updateTimezonesButton(),
              this.resizeUI()
          }),
          (t.prototype.componentWillUnmount = function() {
            var e = this.context,
              t = e.resizerDetacher,
              n = e.chartWidgetCollection
            e.chartWidget
            t.fullscreenable.unsubscribe(this._handleFullscreenableChange),
              n.activeChartWidget.unsubscribe(this._handleActiveWidgetChange),
              null !== this._raf && (cancelAnimationFrame(this._raf), (this._raf = null))
          }),
          (t.prototype.render = function() {
            var e = this._layout,
              t = this.state.isActive
            return y.createElement(
              'div',
              { className: fe.toolbar, ref: this._handleToolbarRef },
              this.props.timeFramesWidgetEnabled &&
                y.createElement(
                  g,
                  null,
                  y.createElement(
                    'div',
                    {
                      className: E(
                        fe.dateRangeWrapper,
                        'collapsed' !== e.dateRangeMode && fe.collapsed,
                      ),
                      ref: this._handleRangeCollapsedRef,
                    },
                    y.createElement(
                      'div',
                      { className: E(fe.dateRangeCollapsed) },
                      y.createElement(j, { goToDateButton: this.props.goToDateEnabled }),
                    ),
                  ),
                  y.createElement(
                    w,
                    { onMeasure: this._handleMeasure },
                    y.createElement(
                      'div',
                      {
                        className: E(
                          fe.dateRangeWrapper,
                          'expanded' !== e.dateRangeMode && fe.collapsed,
                        ),
                        ref: this._handleRangeExpandedRef,
                      },
                      y.createElement(
                        'div',
                        { className: E(fe.dateRangeExpanded) },
                        y.createElement(U, null),
                        this.props.goToDateEnabled && y.createElement(u, null),
                        this.props.goToDateEnabled && y.createElement(K, null),
                      ),
                    ),
                  ),
                ),
              y.createElement(
                'div',
                { className: fe.seriesControlWrapper, ref: this._handleSeriesControlsRef },
                this.props.timeWidgetEnabled &&
                  y.createElement(
                    w,
                    { onMeasure: this._handleMeasure },
                    y.createElement(
                      'div',
                      {
                        className: E(fe.inline, e.timeZones && fe.collapsed, !t && fe.hidden),
                        ref: this._handleTimeZonesRef,
                      },
                      y.createElement(
                        'div',
                        { className: fe.inline },
                        y.createElement(ae, {
                          className: fe.timezone,
                          withMenu: this.props.timezoneMenuEnabled,
                          ref: this._handleTimezoneButtonRef,
                        }),
                      ),
                      y.createElement('div', { className: fe.inline }, y.createElement(u, null)),
                    ),
                  ),
                y.createElement(
                  g,
                  { map: this._injector },
                  void 0 !== Ee &&
                    this.props.adjustForDividendsButtonEnabled &&
                    this.state.symbolAllowsAdjButton &&
                    y.createElement(Ee, { className: fe.item }),
                  void 0 !== we &&
                    this.props.extendedHoursButtonEnabled &&
                    this.state.symbolAllowsExtButton &&
                    y.createElement(we, { className: fe.item }),
                  this.props.percentageScaleButtonEnabled &&
                    !R.enabled('fundamental_widget') &&
                    y.createElement(xe, { className: fe.icon }),
                  void 0 !== Se &&
                    this.props.percentageScaleButtonEnabled &&
                    R.enabled('fundamental_widget') &&
                    y.createElement(Se, { className: fe.icon }),
                  this.props.logScaleButtonEnabled && y.createElement(Ce, { className: fe.item }),
                  this.props.autoScaleButtonEnabled && y.createElement(ye, { className: fe.item }),
                  this.props.scalePropertiesButtonEnabled &&
                    y.createElement(pe, { className: fe.icon }),
                  this.props.fullscreenButtonEnabled &&
                    this.state.isFullscreenable &&
                    y.createElement(Re, { className: fe.icon }),
                ),
              ),
            )
          }),
          (t.prototype.tickClock = function() {
            this.state.isActive &&
              null !== this._timezoneButtonRef &&
              this._timezoneButtonRef.tickClock()
          }),
          (t.prototype.updateTimezonesButton = function() {
            null !== this._timezoneButtonRef && this._timezoneButtonRef.updateTimezonesButton()
          }),
          (t.prototype.resizeUI = function() {
            this._handleResize()
          }),
          (t.prototype._updateButtonsVisibility = function(e) {}),
          (t.prototype._handleResize = function() {
            var e = this
            null === this._raf &&
              (this._raf = requestAnimationFrame(function() {
                var t,
                  n,
                  i,
                  a,
                  o,
                  s,
                  r,
                  l,
                  c,
                  d,
                  u,
                  p = e._layout,
                  h = Object(B.ensureNotNull)(e._toolbar),
                  m = Object(B.ensureNotNull)(e._rangeExpanded),
                  f = v(b(e._seriesComponents)),
                  g = h.offsetWidth,
                  _ = f.reduce(function(e, t) {
                    return e + t.width
                  }, 0),
                  C = m.offsetWidth,
                  y = !!m.textContent,
                  x = g - _ - C <= 0,
                  S = !y || x ? 'collapsed' : 'expanded'
                if ((Object.assign(p, { dateRangeMode: S }), 'expanded' !== S)) {
                  for (
                    a = Object(B.ensureNotNull)(e._rangeCollapsed),
                      o = a.offsetWidth,
                      s = g - o - 0,
                      r = 0,
                      l = 0,
                      c = 0,
                      d = f;
                    c < d.length;
                    c++
                  )
                    (u = d[c]),
                      (r += u.width),
                      u.name in Ne
                        ? ((l += u.width), Object.assign(p, ((t = {}), (t[u.name] = !1), t)))
                        : Object.assign(p, ((n = {}), (n[u.name] = s <= r), n))
                  s <= l && Object.assign(p, { dateRangeMode: 'hidden' })
                } else Object.assign(p, ((i = {}), (i.timeZones = !1), (i.fullscreen = !1), (i.properties = !1), (i.auto = !1), (i.logarithm = !1), (i.percentage = !1), (i.ext = !1), (i.adj = !1), i))
                e._applyResizing(), (e._raf = null)
              }))
          }),
          (t.prototype._setStateWithResize = function(e) {
            var t = this
            Object.assign(this._layout, We),
              this._applyResizing(),
              this.setState(e, function() {
                return t._handleResize()
              })
          }),
          (t.prototype._applyResizing = function() {
            var e = this,
              t = this._layout,
              n = t.dateRangeMode,
              i = C.e(t, ['dateRangeMode'])
            this._rangeExpanded &&
              this._rangeExpanded.classList.toggle(fe.collapsed, 'expanded' !== n),
              this._rangeCollapsed &&
                this._rangeCollapsed.classList.toggle(fe.collapsed, 'collapsed' !== n),
              Object.keys(i).forEach(function(t) {
                var n = t,
                  a = e._seriesComponents[n]
                a && a.classList.toggle(fe.collapsed, i[n])
              })
          }),
          (t.contextTypes = {
            chartApiInstance: S.object.isRequired,
            chartWidget: S.object.isRequired,
            chartWidgetCollection: S.object.isRequired,
            resizerDetacher: S.object.isRequired,
          }),
          t
        )
      })(y.PureComponent)),
      (Ae = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          C.c(t, e),
          (t.prototype.getChildContext = function() {
            return {
              chartWidget: this.props.chartWidget,
              chartApiInstance: this.props.chartApiInstance,
              chartWidgetCollection: this.props.chartWidgetCollection,
              resizerDetacher: this.props.resizerDetacher,
              availableTimeFrames: this.props.availableTimeFrames,
            }
          }),
          (t.prototype.render = function() {
            return this.props.children
          }),
          (t.childContextTypes = {
            chartWidget: S.object,
            chartApiInstance: S.object,
            chartWidgetCollection: S.object,
            resizerDetacher: S.object,
            availableTimeFrames: S.func,
          }),
          t
        )
      })(y.PureComponent)),
      n.d(t, 'BottomToolbarRenderer', function() {
        return De
      }),
      (De = (function() {
        function e(e, t, n, i, a, o) {
          var s,
            r,
            l,
            c = this
          ;(this._component = null),
            (this._container = e),
            (s = o.timeFramesWidgetEnabled ? o.timeFramesWidget.availableTimeFrames : void 0),
            (r = {
              timeFramesWidgetEnabled: o.timeFramesWidgetEnabled,
              goToDateEnabled: o.timeFramesWidget.goToDateEnabled,
              timeWidgetEnabled: o.timeWidgetEnabled,
              timezoneMenuEnabled: o.timeWidget && o.timeWidget.timezoneMenuEnabled,
              extendedHoursButtonEnabled: o.extendedHoursButtonEnabled,
              adjustForDividendsButtonEnabled: o.adjustForDividendsButtonEnabled,
              logScaleButtonEnabled: o.logScaleButtonEnabled,
              percentageScaleButtonEnabled: o.percentageScaleButtonEnabled,
              autoScaleButtonEnabled: o.autoScaleButtonEnabled,
              scalePropertiesButtonEnabled: o.scalePropertiesButtonEnabled,
              fullscreenButtonEnabled: o.fullscreenButtonEnabled,
            }),
            (l = y.createElement(
              Ae,
              {
                chartWidget: t,
                chartWidgetCollection: n,
                chartApiInstance: i,
                resizerDetacher: a,
                availableTimeFrames: s,
              },
              y.createElement(
                ke,
                C.a(
                  {
                    ref: function(e) {
                      return (c._component = e)
                    },
                  },
                  r,
                ),
              ),
            )),
            x.render(l, e),
            e.setAttribute('data-initialized', 'true')
        }
        return (
          (e.prototype.destroy = function() {
            x.unmountComponentAtNode(this._container),
              this._container.removeAttribute('data-initialized')
          }),
          (e.prototype.tickClock = function() {
            Object(B.ensureNotNull)(this._component).tickClock()
          }),
          (e.prototype.updateUI = function() {
            Object(B.ensureNotNull)(this._component).resizeUI()
          }),
          (e.prototype.resizeUI = function() {
            this._component && this._component.resizeUI()
          }),
          e
        )
      })())
  },
  828: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>'
  },
  836: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
  },
  844: function(e, t, n) {
    'use strict'
    function i() {
      h.fire()
    }
    var a, o, s, r, l, c, d, u, p, h
    n.d(t, 'a', function() {
      return p
    }),
      (t.b = i),
      (a = n(1)),
      (o = n(20)),
      n.n(o),
      (s = n(102)),
      n.n(s),
      (r = n(7)),
      n.n(r),
      (l = n(50)),
      (c = n(871)),
      n.n(c),
      (d = n(8)),
      (u = n.n(d)),
      (p = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._containerRef = null),
            (n._scrollWrapRef = null),
            (n._handleContainerRef = function(e) {
              return (n._containerRef = e)
            }),
            (n._handleScrollWrapRef = function(e) {
              return (n._scrollWrapRef = e)
            }),
            (n._handleMeasure = function() {
              var e, t, i, a, o, s, c, d, u, p, h, m, f, g, v, b, _
              n.state.isMeasureValid ||
                ((e = n.props.position),
                (t = Object(r.ensureNotNull)(n._containerRef)),
                (i = t.getBoundingClientRect()),
                (a = document.documentElement.clientHeight),
                (o = document.documentElement.clientWidth),
                (s = a - 10),
                (c = i.height > s),
                c &&
                  ((d = Object(r.ensureNotNull)(n._scrollWrapRef)),
                  (d.style.overflowY = 'scroll'),
                  (i = t.getBoundingClientRect())),
                (u = i.width),
                (p = i.height),
                (h = 'function' == typeof e ? e(u, p) : e),
                (m = 5),
                (f = o - u - 5),
                (g = Object(l.clamp)(h.x, m, Math.max(m, f))),
                (v = 5),
                (b = a - p - 5),
                (_ = Object(l.clamp)(h.y, v, Math.max(v, b))),
                n.setState({
                  appearingMenuHeight: c ? s : void 0,
                  appearingMenuWidth: h.overrideWidth,
                  appearingPosition: { x: g, y: _ },
                  isMeasureValid: !0,
                }))
            }),
            (n._handleGlobalClose = function() {
              n.props.onClose()
            }),
            (n.state = {}),
            n
          )
        }
        return (
          a.c(t, e),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.props.isOpened && !e.isOpened && this.setState({ isMeasureValid: void 0 })
          }),
          (t.prototype.componentDidMount = function() {
            this._handleMeasure(), h.subscribe(this, this._handleGlobalClose)
          }),
          (t.prototype.componentDidUpdate = function() {
            this._handleMeasure()
          }),
          (t.prototype.componentWillUnmount = function() {
            h.unsubscribe(this, this._handleGlobalClose)
          }),
          (t.prototype.render = function() {
            var e,
              t = this.props,
              n = t.children,
              i = t.minWidth,
              a = t.theme,
              r = void 0 === a ? c : a,
              l = t.className,
              d = this.state,
              u = d.appearingMenuHeight,
              p = d.appearingMenuWidth,
              h = d.appearingPosition,
              m = d.isMeasureValid
            return o.createElement(
              'div',
              {
                className: s(l, r.menuWrap, ((e = {}), (e[r.isMeasuring] = !m), e)),
                style: {
                  height: u,
                  left: h && h.x,
                  minWidth: i,
                  position: 'fixed',
                  top: h && h.y,
                  width: p,
                },
                ref: this._handleContainerRef,
              },
              o.createElement(
                'div',
                {
                  className: r.scrollWrap,
                  style: { overflowY: void 0 !== u ? 'scroll' : 'auto' },
                  ref: this._handleScrollWrapRef,
                },
                o.createElement('div', { className: r.menuBox }, n),
              ),
            )
          }),
          t
        )
      })(o.PureComponent)),
      (h = new u.a())
  },
  846: function(e, t, n) {
    'use strict'
    function i(e) {
      return s.createElement(e.href ? 'a' : 'div', e)
    }
    function a(e) {
      e.stopPropagation()
    }
    var o, s, r, l, c, d
    n.d(t, 'a', function() {
      return d
    }),
      (o = n(1)),
      (s = n(20)),
      n.n(s),
      (r = n(102)),
      n.n(r),
      (l = n(844)),
      (c = n(879)),
      n.n(c),
      (d = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleClick = function(e) {
              var n = t.props,
                i = n.dontClosePopup,
                a = n.isDisabled,
                o = n.onClick,
                s = n.onClickArg
              a || (o && o(s, e), i || Object(l.b)())
            }),
            t
          )
        }
        return (
          o.c(t, e),
          (t.prototype.render = function() {
            var e,
              t,
              n = this.props,
              o = n.className,
              l = n.forceShowHint,
              d = n.hint,
              u = n.icon,
              p = n.isActive,
              h = n.isDisabled,
              m = n.isHovered,
              f = n.appearAsDisabled,
              g = n.label,
              v = n.link,
              b = n.showToolboxOnHover,
              _ = n.target,
              C = n.toolbox,
              y = n.theme,
              x = void 0 === y ? c : y
            return s.createElement(
              i,
              {
                className: r(
                  o,
                  x.item,
                  u && x.withIcon,
                  ((e = {}),
                  (e[x.isActive] = p),
                  (e[x.isDisabled] = h || f),
                  (e[x.hovered] = m),
                  e),
                ),
                href: v,
                target: _,
                onClick: this._handleClick,
              },
              void 0 !== u &&
                s.createElement('div', {
                  className: x.icon,
                  dangerouslySetInnerHTML: { __html: u },
                }),
              s.createElement(
                'div',
                { className: x.labelRow },
                s.createElement('div', { className: x.label }, g),
              ),
              (void 0 !== d || l) && s.createElement('div', { className: x.hint }, d),
              void 0 !== C &&
                s.createElement(
                  'div',
                  { onClick: a, className: r(x.toolbox, ((t = {}), (t[x.showOnHover] = b), t)) },
                  C,
                ),
            )
          }),
          t
        )
      })(s.PureComponent))
  },
  847: function(e, t, n) {
    'use strict'
    var i,
      a = n(192).ESC,
      o = function(e, t, i) {
        var s,
          r,
          l,
          c,
          d,
          u,
          p = '.popup-menu'
        ;(e = $(e)),
          (i = i || {}),
          (i.activeClass = i.activeClass || ''),
          (s = (i.event || 'click') + p),
          i.hideEvent && (r = i.hideEvent + p),
          (l = function() {}),
          (c = l),
          (d = {}),
          (u = function(s, u, h) {
            function m(t) {
              var n = $(t.target)
                .parents()
                .andSelf()
              n.is(_) ||
                n.is(e) ||
                n.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                c()
            }
            function f(e) {
              if (d.preventFirstProcessClick) return void (d.preventFirstProcessClick = !1)
              var t = $(e.target)
                .parents()
                .andSelf()
              t.is('.charts-popup-tab-headers, .charts-popup-itemheader') ||
                (i.notCloseOnButtons && t.is('.icon-delete')) ||
                c()
            }
            function g(e) {
              e.keyCode === a && c()
            }
            function v(t, a, s) {
              var r, l, c, d, u, p, h, m, f, g, b, C, y, x, S, E
              if (t instanceof o.TabGroup) {
                if (!t.tabs || !t.tabs.length) return
                return 1 !== t.tabs.length || t.tabs[0].title
                  ? ((r = $('<div class="charts-popup-tab-group"></div>').appendTo(s)),
                    (l = $('<div class="charts-popup-tab-headers"></div>').appendTo(r)),
                    (c = null),
                    void $.each(t.tabs || [], function(e, n) {
                      var i, a
                      n.items &&
                        n.items.length &&
                        ((i = $('<div class="charts-popup-tab"></div>')
                          .hide()
                          .appendTo(r)),
                        $.each(n.items, function() {
                          v(this, void 0, i)
                        }),
                        (a = $('<span class="charts-popup-tab-header">')
                          .append(
                            $(
                              '<a href="javascript://" class="charts-popup-tab-header-label">',
                            ).text(n.name),
                          )
                          .appendTo(l)),
                        a.on('click', function(e) {
                          a.is('.active') ||
                            (l.find('.charts-popup-tab-header.active').removeClass('active'),
                            a.addClass('active'),
                            r.find('.charts-popup-tab').hide(),
                            i.show(),
                            e && e.preventDefault(),
                            'function' == typeof t.onChange && t.onChange.call(t, n.name))
                        }),
                        (c && !n.active) ||
                          ((c = a),
                          l.find('.charts-popup-tab-header.active').removeClass('active'),
                          a.addClass('active'),
                          r.find('.charts-popup-tab').hide(),
                          i.show()))
                    }))
                  : void $.each(t.tabs[0].items, function() {
                      v(this, void 0, s)
                    })
              }
              return t instanceof o.Group
                ? ((d = $('<div class="charts-popup-group"></div>').appendTo(s)),
                  t.title &&
                    ((u = $('<div class="charts-popup-itemheader"></div>')
                      .text(t.title)
                      .prepend($('<span class="charts-popup-itemheader-icon"></span>'))),
                    t.collapsible &&
                      (d.addClass('charts-popup-group-collapsible'),
                      d.toggleClass('collapsed', t.collapsed),
                      u.on('click', function() {
                        d.toggleClass('collapsed'),
                          'function' == typeof t.onChange && t.onChange(d.hasClass('collapsed')),
                          _.height() === parseInt(_.css('max-height'))
                            ? _.addClass('popup-menu-scroll-y')
                            : _.height() < parseInt(_.css('max-height')) &&
                              _.removeClass('popup-menu-scroll-y')
                      })),
                    d.append(u)),
                  void $.each(t.items, function(e) {
                    v(this, 1, d)
                  }))
                : t instanceof o.Header
                ? void s.append($('<div class="charts-popup-itemheader"></div>').text(t.title))
                : t.separator
                ? ((p = $('<span class="separator"></span>')), void s.append(p))
                : ((p = $('<a class="item">')),
                  t.url && p.attr('href', t.url),
                  t.target && p.attr('target', t.target),
                  a || p.addClass('first'),
                  'function' == typeof t.active
                    ? t.active(t) && p.addClass('active')
                    : t.active && p.addClass('active'),
                  t.addClass && p.addClass(t.addClass),
                  t.addData && p.data(t.addData),
                  t.disabled && p.addClass('disabled'),
                  'function' == typeof t.action &&
                    ((h = t.action),
                    (m = function(e) {
                      $(e.target)
                        .parents()
                        .andSelf()
                        .is(x) ||
                        (h.apply(p, arguments),
                        !t.url && e && 'function' == typeof e.preventDefault && e.preventDefault())
                    }),
                    i.upAction ? p.bind('mouseup', m) : p.bind('click', m)),
                  t.date
                    ? ((f = $('<span class="title"></span>').appendTo(p)),
                      $('<span class="date"></span>')
                        .text(t.date || '')
                        .appendTo(p))
                    : t.icon && !i.svg
                    ? ((g = $('<span class="icon"></span>').appendTo(p)),
                      g.css('background-image', t.icon.image || ''),
                      t.icon.offset &&
                        g.css(
                          'background-position',
                          'string' == typeof t.icon.offset
                            ? t.icon.offset
                            : t.icon.offset.x + 'px ' + t.icon.offset.y + 'px',
                        ),
                      (f = $('<span class="title"></span>').appendTo(p)))
                    : !0 === i.svg && t.svg
                    ? (i.wrapIcon
                        ? p.append(
                            $('<span class="icon-wrap">')
                              .addClass(t.iconClass)
                              .append(t.svg),
                          )
                        : p.append(t.svg),
                      (f = $('<span class="title"></span>').appendTo(p)))
                    : t.iconClass
                    ? (p.append($('<span class="icon"></span>').addClass(t.iconClass)),
                      (f = $('<span class="title"></span>').appendTo(p)))
                    : (f = $('<span class="title-expanded"></span>').appendTo(p)),
                  t.html ? f.html(t.html) : f.text(TradingView.clean(t.title, !0) || ''),
                  (b = $('<span class="shortcut"></span>').appendTo(p)),
                  t.shortcut && b.text(t.shortcut.keys),
                  'function' == typeof t.deleteAction &&
                    ((C = t.deleteAction),
                    (y = t.deleteAction.title || $.t('Delete')),
                    (x = $('<span class="icon-delete">')),
                    x.html(n(828)),
                    x.attr('title', y),
                    x.on('click', function(e) {
                      C.apply(p, arguments), e.preventDefault()
                    }),
                    p.append(x)),
                  t.buttons instanceof Array &&
                    t.buttons.length &&
                    t.buttons.forEach(function(e) {
                      e.el instanceof $ || (e.el = $(e.el)),
                        e.el.appendTo(p),
                        e.handler &&
                          e.el.on('click', function(t) {
                            e.handler.apply(p, arguments)
                          })
                    }),
                  void 0 !== t.counter &&
                    ('function' == typeof t.counter
                      ? ((S = $('<span class="counter"></span>').html(t.counter())), S.appendTo(p))
                      : ((E = t.counterBlue ? 'blue' : ''),
                        $('<span class="counter"></span>')
                          .text(t.counter + '')
                          .addClass(E)
                          .appendTo(p))),
                  s.append(p),
                  void e.data('popup-menu', s))
            }
            var b,
              _,
              C,
              y,
              x,
              S,
              E,
              w,
              R,
              N,
              T,
              M,
              W,
              k,
              A,
              D,
              O,
              j,
              B,
              z,
              I,
              F,
              P,
              L,
              H,
              U,
              q = s.target.ownerDocument,
              G = q.defaultView,
              V = u || t
            if (
              ('function' == typeof V && (V = V()),
              $(this).hasClass('open') || $(this).hasClass('active'))
            )
              return s.preventDefault(), c(), void (b = d.scrollTop)
            switch (
              ((c = function() {
                ;(d.scrollTop = _.scrollTop()),
                  _.remove(),
                  e.removeClass('active open ' + i.activeClass),
                  e.data('popup-menu', null),
                  $(q).off('click', f),
                  $(q).off('mousedown', m),
                  Modernizr.touch && $(q).off('touchstart.chartgui', m),
                  $(q).off('selectstart.' + p),
                  q.removeEventListener('keydown', g, !1),
                  (c = l),
                  i.onRemove && i.onRemove()
              }),
              e.addClass('active open ' + i.activeClass),
              (_ = $('<div class="charts-popup-list">')),
              i.addClass && _.addClass(i.addClass),
              i.zIndex && _.css('z-index', i.zIndex),
              (C = _),
              i.listInner && (C = $('<div class="list-inner">').appendTo(C)),
              i.listTable && (C = $('<div class="list-table">').appendTo(C)),
              $.each(V, function(e) {
                v(this, e, C)
              }),
              r || (d.preventFirstProcessClick = !0),
              $(q).on('click', f),
              $(q).on('mousedown', m),
              q.addEventListener('keydown', g, !1),
              Modernizr.touch && $(q).on('touchstart.chartgui', m),
              i.upAction &&
                $(q).on('selectstart.popup-menu', function() {
                  return !1
                }),
              _.appendTo(q.body),
              (y = $(G).width()),
              (x = Math.min($(G).height(), $('body').height())),
              (S = e.outerWidth()),
              (E = e.outerHeight()),
              (w = e.offset()),
              (b = $(G).scrollTop() || 0),
              (w.top -= b),
              (w.top = Math.round(w.top)),
              (w.left = Math.round(w.left)),
              (R = _.outerWidth()),
              (N = _.outerHeight()),
              (T = void 0 !== i.viewportSpacing ? i.viewportSpacing : 10),
              (M = i.popupSpacing ? ~~i.popupSpacing : 1),
              (W = i.popupDrift ? ~~i.popupDrift : 0),
              (k = N - _.height()),
              (A = 'down'),
              i.direction && (A = 'function' == typeof i.direction ? i.direction() : i.direction),
              (D = !!i.reverse),
              'down' === A
                ? ((O = x - w.top - E - M - T - k),
                  (j = w.top - M - T - k),
                  O < Math.max(N || 0, 100) && j > O && (A = 'up'))
                : 'right' === A &&
                  ((B = y - w.left - S - M - T - k),
                  (z = w.left - M - T - k),
                  B < Math.max(R || 0, 100) && z > B && (A = 'left')),
              A)
            ) {
              case 'down':
              case 'up':
                'down' === A
                  ? _.css('top', w.top + E + M + 'px')
                  : _.css('bottom', x - w.top + M + 'px').css('top', 'auto'),
                  D
                    ? _.css('left', Math.max(w.left + W + S - R, T) + 'px').css('right', 'auto')
                    : _.css('left', w.left + W + 'px').css('right', 'auto')
                break
              case 'right':
              case 'left':
                ;(M = Math.max(M, 4)),
                  'right' === A
                    ? _.css('left', Math.floor(w.left + S + M) + 'px').css('right', 'auto')
                    : _.css('left', Math.floor(Math.max(w.left - R - M, T)) + 'px').css(
                        'right',
                        'auto',
                      ),
                  D
                    ? _.css('top', Math.floor(Math.max(w.top + W + E - N, T)) + 'px')
                    : _.css('top', Math.floor(w.top + W) + 'px')
            }
            for (
              _.show(),
                I = w.top,
                'up' === A || ({ left: 1, right: 1 }[A] && D)
                  ? 'up' !== A
                    ? (I += E)
                    : (I -= E + M + k + T)
                  : (I = x - I - E - 2 * M - k),
                _.height() > I && _.addClass('popup-menu-scroll-y'),
                _.css('max-height', I + 'px'),
                i.careRightBorder &&
                  ((F = y + $(G).scrollLeft()),
                  parseInt(_.css('left')) + _.width() + T > F &&
                    _.css('left', F - _.width() - T + 'px').css('right', 'auto')),
                i.careBottomBorder &&
                  parseInt(_.css('top')) + _.height() + T > x + b &&
                  _.css('top', x - _.height() - T + b + 'px'),
                L = e.parents().andSelf(),
                H = L.size();
              H--;

            )
              if ('fixed' === L.eq(H).css('position')) {
                P = L.eq(H)
                break
              }
            P &&
              ((U = _.offset()),
              _.css({ position: 'fixed', left: U.left - $(q).scrollLeft(), right: 'auto' })),
              _[0].scrollHeight > _.height() && _.addClass('popup-with-scroll'),
              s && s.preventDefault()
          }),
          s && e.bind(s, u),
          r &&
            e.bind(r, function() {
              c()
            }),
          i.runOpened && u()
      }
    ;(o.TabGroup = function e(t) {
      if (!(this instanceof e)) return new e(t)
      ;(t = t || {}),
        (this.tabs = []),
        'function' == typeof t.onChange && (this.onChange = t.onChange)
    }),
      (o.TabGroup.prototype.appendTab = function(e, t, n) {
        if ((null == e ? (e = '') : (e += ''), t || (t = []), n || (n = {}), !Array.isArray(t)))
          throw new TypeError('items must be an array')
        return this.tabs.push({ name: e, items: t, active: !!n.active }), t
      }),
      (o.Header = function e(t) {
        if (!(this instanceof e)) return new e(t)
        this.title = t
      }),
      (o.Group = function e(t) {
        if (!(this instanceof e)) return new e(t)
        ;(t = t || {}),
          (this.items = []),
          (this.title = null == t.title ? '' : t.title + ''),
          (this.collapsible = !!t.collapsible),
          (this.collapsed = !!t.collapsed),
          'function' == typeof t.onChange && (this.onChange = t.onChange)
      }),
      (o.Group.prototype.push = function() {
        this.items.push.apply(this.items, arguments)
      }),
      (t.bindPopupMenu = o),
      (i = function(e) {
        ;(e = $(e)), e.unbind('.popup-menu'), e.removeData('popup-menu')
      }),
      (t.unbindPopupMenu = i)
  },
  848: function(e, t, n) {
    'use strict'
    function i(e) {
      var t,
        n = e.icon,
        i = e.isActive,
        c = e.isOpened,
        d = e.isDisabled,
        u = e.onClick,
        p = e.text,
        h = e.textBeforeIcon,
        m = e.title,
        f = e.theme,
        g = void 0 === f ? l : f,
        v = e.className,
        b = e.forceInteractive,
        _ = a.e(e, [
          'icon',
          'isActive',
          'isOpened',
          'isDisabled',
          'onClick',
          'text',
          'textBeforeIcon',
          'title',
          'theme',
          'className',
          'forceInteractive',
        ]),
        C = s(
          v,
          g.button,
          m && 'apply-common-tooltip',
          ((t = {}),
          (t[g.isActive] = i),
          (t[g.isOpened] = c),
          (t[g.isInteractive] = (b || !!u) && !d),
          (t[g.isDisabled] = d),
          t),
        ),
        y =
          n &&
          ('string' == typeof n
            ? o.createElement(r.a, { className: g.icon, icon: n })
            : o.cloneElement(n, { className: g.icon }))
      return o.createElement(
        'div',
        a.a({}, _, { className: C, onClick: d ? void 0 : u, title: m }),
        h && p && o.createElement('div', { className: s('js-button-text', g.text) }, p),
        y,
        !h && p && o.createElement('div', { className: s('js-button-text', g.text) }, p),
      )
    }
    var a, o, s, r, l
    ;(t.a = i),
      (a = n(1)),
      (o = n(20)),
      n.n(o),
      (s = n(102)),
      n.n(s),
      (r = n(300)),
      (l = n(855)),
      n.n(l)
  },
  849: function(e, t, n) {
    'use strict'
    function i(e) {
      return a.createElement('div', { className: o.separator })
    }
    var a, o
    ;(t.a = i), (a = n(20)), n.n(a), (o = n(881)), n.n(o)
  },
  855: function(e, t) {
    e.exports = {
      button: 'button-2ioYhFEY-',
      isInteractive: 'isInteractive-20uLObIc-',
      hovered: 'hovered-3perbaxJ-',
      isActive: 'isActive-22S-lGpa-',
      isOpened: 'isOpened-p-Ume5l9-',
      isDisabled: 'isDisabled-1_tmrLfP-',
      text: 'text-1sK7vbvh-',
      icon: 'icon-beK_KS0k-',
    }
  },
  871: function(e, t) {
    e.exports = {
      menuWrap: 'menuWrap-1gEtmoET-',
      isMeasuring: 'isMeasuring-FZ0EJCM2-',
      scrollWrap: 'scrollWrap-1B5MfTJt-',
      menuBox: 'menuBox-20sJGjtG-',
      isHidden: 'isHidden-2vLQpR1t-',
    }
  },
  872: function(e, t, n) {
    'use strict'
    function i(e) {
      var t = p(e),
        n = document.getElementById(t)
      return (
        n || ((n = document.createElement('div')), (n.id = t), document.body.appendChild(n)),
        (u[e] = (u[e] || 0) + 1),
        n
      )
    }
    function a(e) {
      var t = p(e),
        n = document.getElementById(t)
      u[e] && (u[e] -= 1), n && 0 === u[e] && document.body.removeChild(n)
    }
    var o,
      s = n(1),
      r = (n(127), n(20)),
      l = n(59),
      c = n(304),
      d = 0,
      u = {},
      p = function(e) {
        return '__outside-render-' + e
      },
      h = (function(e) {
        function t(t) {
          return e.call(this, t) || this
        }
        return (
          s.c(t, e),
          (t.prototype.componentDidMount = function() {
            this._rememberLayer(), this._renderLayer()
          }),
          (t.prototype.componentDidUpdate = function(e) {
            this.props.layerId !== e.layerId && (a(this._layerId), this._rememberLayer()),
              this._renderLayer()
          }),
          (t.prototype.componentWillUnmount = function() {
            l.unmountComponentAtNode(this._layer), a(this._layerId)
          }),
          (t.prototype.render = function() {
            return null
          }),
          (t.prototype._rememberLayer = function() {
            var e = this.props.layerId,
              t = void 0 === e ? d++ + '' : e
            ;(this._layerId = t), (this._layer = i(t))
          }),
          (t.prototype._renderLayer = function() {
            l.render(r.createElement('div', null, this.props.children), this._layer)
          }),
          t
        )
      })(r.Component),
      m = n(844)
    n.d(t, 'a', function() {
      return o
    }),
      (o = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleClose = function() {
              t.props.onClose()
            }),
            (t._handleClickOutside = function(e) {
              var n = t.props,
                i = n.closeOnClickOutside,
                a = n.onClickOutside,
                o = n.doNotCloseOn
              a && a(e),
                !i || (void 0 !== o && l.findDOMNode(o).contains(e.target)) || t._handleClose()
            }),
            t
          )
        }
        return (
          s.c(t, e),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.props.isOpened && !e.isOpened && this.setState({ isMeasureValid: void 0 })
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.isOpened,
              i =
                (e.closeOnClickOutside,
                e.doNotCloseOn,
                e.onClickOutside,
                e.onClose,
                s.e(e, [
                  'children',
                  'isOpened',
                  'closeOnClickOutside',
                  'doNotCloseOn',
                  'onClickOutside',
                  'onClose',
                ]))
            return n
              ? r.createElement(
                  h,
                  null,
                  r.createElement(
                    c.a,
                    {
                      handler: this._handleClickOutside,
                      mouseDown: !0,
                      touchStart: !0,
                      ctor: 'div',
                    },
                    r.createElement(
                      m.a,
                      s.a({}, i, { isOpened: n, onClose: this._handleClose }),
                      t,
                    ),
                  ),
                )
              : null
          }),
          (t.defaultProps = { closeOnClickOutside: !0 }),
          t
        )
      })(r.PureComponent))
  },
  879: function(e, t) {
    e.exports = {
      item: 'item-2xPVYue0-',
      hovered: 'hovered-1uf45E05-',
      isDisabled: 'isDisabled-1wLqKupj-',
      isActive: 'isActive-2j-GhQs_-',
      icon: 'icon-2Qm7YIcz-',
      hint: 'hint-1IhIvLPB-',
      toolbox: 'toolbox-3ulPxfe--',
      withIcon: 'withIcon-1xBjf-oB-',
      labelRow: 'labelRow-3Q0rdE8--',
      label: 'label-3Xqxy756-',
      showOnHover: 'showOnHover-1q6ySzZc-',
    }
  },
  880: function(e, t, n) {
    'use strict'
    var i, a, o, s, r, l, c, d, u, p, h, m
    n.d(t, 'b', function() {
      return d
    }),
      n.d(t, 'c', function() {
        return p
      }),
      n.d(t, 'a', function() {
        return m
      }),
      (i = n(1)),
      (a = n(20)),
      n.n(a),
      (o = n(102)),
      n.n(o),
      (s = n(872)),
      (r = n(975)),
      (l = n(7)),
      n.n(l),
      (c = n(989)),
      n.n(c),
      (function(e) {
        ;(e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom')
      })(d || (d = {})),
      (function(e) {
        ;(e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right')
      })(u || (u = {})),
      (function(e) {
        ;(e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
          (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop')
      })(p || (p = {})),
      (function(e) {
        ;(e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
          (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft')
      })(h || (h = {})),
      (m = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._wrapperRef = null),
            (n._handleWrapperRef = function(e) {
              return (n._wrapperRef = e)
            }),
            (n._handleClick = function() {
              n._handleToggleDropdown()
            }),
            (n._handleToggleDropdown = function(e) {
              var t = n.state.isOpened,
                i = 'boolean' == typeof e ? e : !t
              n.setState({ isOpened: i })
            }),
            (n._handleClose = function() {
              n._handleToggleDropdown(!1)
            }),
            (n._getDropdownPosition = function(e, t) {
              var i = Object(l.ensureNotNull)(n._wrapperRef).getBoundingClientRect(),
                a = n.props,
                o = a.verticalAttachEdge,
                s = a.verticalDropDirection,
                r = a.horizontalAttachEdge,
                c = a.horizontalDropDirection,
                m = a.horizontalMargin,
                f = void 0 === m ? 0 : m,
                g = a.verticalMargin,
                v = void 0 === g ? 2 : g,
                b = o === d.Top ? -1 * v : v,
                _ = r === u.Right ? i.right : i.left,
                C = o === d.Top ? i.top : i.bottom
              return {
                x: _ - (c === h.FromRightToLeft ? e : 0) + f,
                y: C - (s === p.FromBottomToTop ? t : 0) + b,
              }
            }),
            (n.state = { isOpened: !1 }),
            n
          )
        }
        return (
          i.c(t, e),
          (t.prototype.render = function() {
            var e,
              t = this.props,
              n = t.id,
              i = t.arrow,
              l = t.children,
              d = t.content,
              u = t.isDisabled,
              p = t.minWidth,
              h = t.title,
              m = t.className,
              f = t.hotKey,
              g = this.state.isOpened,
              v = o(
                m,
                c.button,
                'apply-common-tooltip',
                ((e = {}), (e[c.isDisabled] = u), (e[c.isOpened] = g), e),
              )
            return a.createElement(
              'div',
              {
                id: n,
                className: v,
                onClick: u ? void 0 : this._handleClick,
                title: h,
                'data-tooltip-hotkey': f,
                ref: this._handleWrapperRef,
              },
              d,
              i &&
                a.createElement(
                  'div',
                  { className: c.arrow },
                  a.createElement(
                    'div',
                    { className: c.arrowWrap },
                    a.createElement(r.a, { dropped: g }),
                  ),
                ),
              a.createElement(
                s.a,
                {
                  closeOnClickOutside: this.props.closeOnClickOutside,
                  doNotCloseOn: this,
                  isOpened: g,
                  minWidth: p,
                  onClose: this._handleClose,
                  position: this._getDropdownPosition,
                },
                l,
              ),
            )
          }),
          (t.defaultProps = {
            arrow: !0,
            closeOnClickOutside: !0,
            verticalAttachEdge: d.Bottom,
            horizontalAttachEdge: u.Left,
            verticalDropDirection: p.FromTopToBottom,
            horizontalDropDirection: h.FromLeftToRight,
          }),
          t
        )
      })(a.PureComponent))
  },
  881: function(e, t) {
    e.exports = { separator: 'separator-25lkUpN--' }
  },
  882: function(e, t, n) {
    'use strict'
    function i(e, t, n) {
      var i, a, o, s, r
      for (
        void 0 === n && (n = {}), i = Object.assign({}, t), a = 0, o = Object.keys(t);
        a < o.length;
        a++
      )
        (s = o[a]), (r = n[s] || s) in e && (i[s] = [e[r], t[s]].join(' '))
      return i
    }
    t.a = i
  },
  975: function(e, t, n) {
    'use strict'
    function i(e) {
      var t,
        n = e.dropped,
        i = e.className
      return a.createElement(s.a, {
        className: o(i, r.icon, ((t = {}), (t[r.dropped] = n), t)),
        icon: l,
      })
    }
    var a, o, s, r, l
    ;(t.a = i),
      (a = n(20)),
      n.n(a),
      (o = n(102)),
      n.n(o),
      (s = n(300)),
      (r = n(988)),
      n.n(r),
      (l = n(836)),
      n.n(l)
  },
  988: function(e, t) {
    e.exports = { icon: 'icon-16JOogW_-', dropped: 'dropped-1WSGLaYJ-' }
  },
  989: function(e, t) {
    e.exports = {
      button: 'button-13wlLwhJ-',
      hovered: 'hovered-FUo4RNOC-',
      arrow: 'arrow-2pXEy7ej-',
      arrowWrap: 'arrowWrap-r5l5nQXU-',
      isOpened: 'isOpened-1939ai3F-',
    }
  },
})
